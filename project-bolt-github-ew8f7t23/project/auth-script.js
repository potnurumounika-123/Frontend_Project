// Global variables
let isSignUpMode = false;
let isLoading = false;

// Initialize the authentication page
document.addEventListener('DOMContentLoaded', function() {
    initializeAuthPage();
    setupFormValidation();
    setupEventListeners();
});

function initializeAuthPage() {
    // Check if user is already logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const user = JSON.parse(currentUser);
        showSuccessModal('Welcome back!', `Hello ${user.name || user.email}! You're already signed in.`);
    }
    
    // Check URL parameters for mode
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    if (mode === 'signup') {
        switchToSignUp();
    }
}

function setupEventListeners() {
    const authForm = document.getElementById('authForm');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
    
    // Form submission
    authForm.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    
    // Show password help on focus
    passwordInput.addEventListener('focus', function() {
        if (isSignUpMode) {
            document.getElementById('passwordHelp').style.display = 'block';
        }
    });
    
    // Confirm password validation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
}

function setupFormValidation() {
    const inputs = document.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateField(field) {
    const formGroup = field.closest('.form-group');
    const value = field.value.trim();
    
    // Remove existing error states
    clearFieldError(field);
    
    // Validate based on field type
    switch (field.type) {
        case 'email':
            if (!isValidEmail(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
            break;
        case 'password':
            if (value.length < 6) {
                showFieldError(field, 'Password must be at least 6 characters');
                return false;
            }
            break;
        case 'text':
            if (field.name === 'name' && value.length < 2) {
                showFieldError(field, 'Name must be at least 2 characters');
                return false;
            }
            break;
    }
    
    // Show success state
    formGroup.classList.add('success');
    return true;
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    
    if (email && !isValidEmail(email)) {
        showFieldError(emailInput, 'Please enter a valid email address');
        return false;
    }
    
    clearFieldError(emailInput);
    return true;
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    
    if (isSignUpMode && password && password.length < 6) {
        showFieldError(passwordInput, 'Password must be at least 6 characters');
        return false;
    }
    
    clearFieldError(passwordInput);
    
    // Validate confirm password if it exists and has value
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPasswordInput.value) {
        validateConfirmPassword();
    }
    
    return true;
}

function validateConfirmPassword() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (confirmPassword && password !== confirmPassword) {
        showFieldError(confirmPasswordInput, 'Passwords do not match');
        return false;
    }
    
    clearFieldError(confirmPasswordInput);
    return true;
}

function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    
    // Remove existing error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    formGroup.appendChild(errorDiv);
}

function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    formGroup.classList.remove('error', 'success');
    
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function switchToSignUp() {
    isSignUpMode = true;
    
    // Update UI elements
    document.getElementById('authTitle').textContent = 'Create account';
    document.getElementById('authSubmit').textContent = 'Create your Amazon account';
    document.getElementById('createAccountBtn').textContent = 'Already have an account? Sign in';
    document.getElementById('createAccountBtn').onclick = switchToSignIn;
    
    // Show additional fields
    document.getElementById('nameGroup').style.display = 'block';
    document.getElementById('confirmPasswordGroup').style.display = 'block';
    document.getElementById('passwordHelp').style.display = 'block';
    
    // Update required attributes
    document.getElementById('name').required = true;
    document.getElementById('confirmPassword').required = true;
    
    // Add animation
    const authBox = document.getElementById('authBox');
    authBox.style.animation = 'slideInUp 0.6s ease-out';
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('mode', 'signup');
    window.history.pushState({}, '', url);
}

function switchToSignIn() {
    isSignUpMode = false;
    
    // Update UI elements
    document.getElementById('authTitle').textContent = 'Sign in';
    document.getElementById('authSubmit').textContent = 'Continue';
    document.getElementById('createAccountBtn').textContent = 'Create your Amazon account';
    document.getElementById('createAccountBtn').onclick = switchToSignUp;
    
    // Hide additional fields
    document.getElementById('nameGroup').style.display = 'none';
    document.getElementById('confirmPasswordGroup').style.display = 'none';
    document.getElementById('passwordHelp').style.display = 'none';
    
    // Update required attributes
    document.getElementById('name').required = false;
    document.getElementById('confirmPassword').required = false;
    
    // Clear form
    document.getElementById('authForm').reset();
    clearAllErrors();
    
    // Add animation
    const authBox = document.getElementById('authBox');
    authBox.style.animation = 'slideInUp 0.6s ease-out';
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.delete('mode');
    window.history.pushState({}, '', url);
}

function clearAllErrors() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error', 'success');
        const errorMessage = group.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (isLoading) return;
    
    const formData = new FormData(e.target);
    const email = formData.get('email').trim();
    const password = formData.get('password');
    const name = formData.get('name')?.trim();
    const confirmPassword = formData.get('confirmPassword');
    
    // Validate all fields
    let isValid = true;
    
    if (!isValidEmail(email)) {
        showFieldError(document.getElementById('email'), 'Please enter a valid email address');
        isValid = false;
    }
    
    if (password.length < 6) {
        showFieldError(document.getElementById('password'), 'Password must be at least 6 characters');
        isValid = false;
    }
    
    if (isSignUpMode) {
        if (!name || name.length < 2) {
            showFieldError(document.getElementById('name'), 'Name must be at least 2 characters');
            isValid = false;
        }
        
        if (password !== confirmPassword) {
            showFieldError(document.getElementById('confirmPassword'), 'Passwords do not match');
            isValid = false;
        }
    }
    
    if (!isValid) {
        return;
    }
    
    // Show loading state
    setLoadingState(true);
    
    try {
        if (isSignUpMode) {
            await handleSignUp(email, password, name);
        } else {
            await handleSignIn(email, password);
        }
    } catch (error) {
        showNotification(error.message, 'error');
    } finally {
        setLoadingState(false);
    }
}

async function handleSignUp(email, password, name) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.find(user => user.email === email);
    
    if (userExists) {
        throw new Error('An account with this email already exists. Please sign in instead.');
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password, // In a real app, this would be hashed
        createdAt: new Date().toISOString(),
        isVerified: true // Simulate email verification
    };
    
    // Save user
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    // Show success
    showSuccessModal('Account Created Successfully!', `Welcome to Amazon, ${name}! Your account has been created and you're now signed in.`);
}

async function handleSignIn(email, password) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check credentials
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = existingUsers.find(user => user.email === email && user.password === password);
    
    if (!user) {
        throw new Error('We cannot find an account with that email address and password. Please try again or create a new account.');
    }
    
    // Save current user
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Show success
    showSuccessModal('Welcome Back!', `Hello ${user.name}! You have successfully signed in to your Amazon account.`);
}

function setLoadingState(loading) {
    isLoading = loading;
    const submitBtn = document.getElementById('authSubmit');
    const createBtn = document.getElementById('createAccountBtn');
    
    if (loading) {
        submitBtn.innerHTML = '<span class="loading"></span>Processing...';
        submitBtn.disabled = true;
        createBtn.disabled = true;
    } else {
        submitBtn.innerHTML = isSignUpMode ? 'Create your Amazon account' : 'Continue';
        submitBtn.disabled = false;
        createBtn.disabled = false;
    }
}

function showSuccessModal(title, message) {
    document.getElementById('successTitle').textContent = title;
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successModal').classList.add('show');
}

function redirectToMain() {
    // Close the modal first
    document.getElementById('successModal').classList.remove('show');
    
    // Redirect after a short delay for better UX
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-weight: bold;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(notificationStyles);

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    if (mode === 'signup' && !isSignUpMode) {
        switchToSignUp();
    } else if (!mode && isSignUpMode) {
        switchToSignIn();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to go back to main site
    if (e.key === 'Escape') {
        window.location.href = 'index.html';
    }
    
    // Enter key to submit form when focused on any input
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = document.getElementById('authForm');
        form.dispatchEvent(new Event('submit'));
    }
});