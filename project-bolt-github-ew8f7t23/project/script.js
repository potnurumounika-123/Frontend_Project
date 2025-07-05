// Global variables
let currentUser = null;
let cart = [];
let currentSlide = 0;
let products = [];
let filteredProducts = [];
let isSignUp = false;

// Expanded product data with 60 products
const sampleProducts = [
    // Electronics (15 products)
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 1234,
        category: "electronics"
    },
    {
        id: 2,
        title: "Smart Fitness Watch",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 856,
        category: "electronics"
    },
    {
        id: 3,
        title: "Professional Camera Lens",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.8,
        reviews: 234,
        category: "electronics"
    },
    {
        id: 4,
        title: "Wireless Gaming Mouse",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 678,
        category: "electronics"
    },
    {
        id: 5,
        title: "Bluetooth Speaker Portable",
        price: 45.99,
        originalPrice: 59.99,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 567,
        category: "electronics"
    },
    {
        id: 6,
        title: "Smartphone with 5G",
        price: 699.99,
        originalPrice: 799.99,
        image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 2341,
        category: "electronics"
    },
    {
        id: 7,
        title: "Laptop Computer 15 inch",
        price: 899.99,
        originalPrice: 1099.99,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 1123,
        category: "electronics"
    },
    {
        id: 8,
        title: "Wireless Earbuds Pro",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.7,
        reviews: 892,
        category: "electronics"
    },
    {
        id: 9,
        title: "4K Smart TV 55 inch",
        price: 549.99,
        originalPrice: 699.99,
        image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 1567,
        category: "electronics"
    },
    {
        id: 10,
        title: "Gaming Keyboard RGB",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 445,
        category: "electronics"
    },
    {
        id: 11,
        title: "Tablet 10 inch Android",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.2,
        reviews: 789,
        category: "electronics"
    },
    {
        id: 12,
        title: "Webcam HD 1080p",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 234,
        category: "electronics"
    },
    {
        id: 13,
        title: "Power Bank 20000mAh",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 567,
        category: "electronics"
    },
    {
        id: 14,
        title: "USB-C Hub Multiport",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 345,
        category: "electronics"
    },
    {
        id: 15,
        title: "Drone with 4K Camera",
        price: 399.99,
        originalPrice: 499.99,
        image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.7,
        reviews: 678,
        category: "electronics"
    },

    // Home & Garden (10 products)
    {
        id: 16,
        title: "Premium Coffee Maker",
        price: 149.99,
        originalPrice: 179.99,
        image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.7,
        reviews: 432,
        category: "home"
    },
    {
        id: 17,
        title: "Home Decor Plant Pot",
        price: 19.99,
        originalPrice: 29.99,
        image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.1,
        reviews: 234,
        category: "home"
    },
    {
        id: 18,
        title: "Kitchen Knife Set",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 445,
        category: "home"
    },
    {
        id: 19,
        title: "Dining Table Set",
        price: 399.99,
        originalPrice: 499.99,
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 156,
        category: "home"
    },
    {
        id: 20,
        title: "Vacuum Cleaner Robot",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 789,
        category: "home"
    },
    {
        id: 21,
        title: "Air Purifier HEPA Filter",
        price: 179.99,
        originalPrice: 229.99,
        image: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 567,
        category: "home"
    },
    {
        id: 22,
        title: "Bed Sheets Cotton Set",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 890,
        category: "home"
    },
    {
        id: 23,
        title: "Garden Tool Set",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 234,
        category: "home"
    },
    {
        id: 24,
        title: "LED Desk Lamp",
        price: 34.99,
        originalPrice: 49.99,
        image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 345,
        category: "home"
    },
    {
        id: 25,
        title: "Throw Pillows Decorative",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.2,
        reviews: 456,
        category: "home"
    },

    // Books (8 products)
    {
        id: 26,
        title: "Bestselling Novel Collection",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 2341,
        category: "books"
    },
    {
        id: 27,
        title: "Programming Guide Book",
        price: 39.99,
        originalPrice: 49.99,
        image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.7,
        reviews: 567,
        category: "books"
    },
    {
        id: 28,
        title: "Cookbook for Beginners",
        price: 19.99,
        originalPrice: 24.99,
        image: "https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 234,
        category: "books"
    },
    {
        id: 29,
        title: "Self-Help Motivation Book",
        price: 16.99,
        originalPrice: 21.99,
        image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 1123,
        category: "books"
    },
    {
        id: 30,
        title: "Science Fiction Anthology",
        price: 22.99,
        originalPrice: 29.99,
        image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 678,
        category: "books"
    },
    {
        id: 31,
        title: "History of World Wars",
        price: 27.99,
        originalPrice: 34.99,
        image: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 345,
        category: "books"
    },
    {
        id: 32,
        title: "Children's Picture Book",
        price: 12.99,
        originalPrice: 16.99,
        image: "https://images.pexels.com/photos/1741230/pexels-photo-1741230.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.8,
        reviews: 890,
        category: "books"
    },
    {
        id: 33,
        title: "Business Strategy Guide",
        price: 32.99,
        originalPrice: 42.99,
        image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 456,
        category: "books"
    },

    // Clothing (8 products)
    {
        id: 34,
        title: "Designer Casual Shirt",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.2,
        reviews: 567,
        category: "clothing"
    },
    {
        id: 35,
        title: "Women's Summer Dress",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 789,
        category: "clothing"
    },
    {
        id: 36,
        title: "Men's Denim Jeans",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 445,
        category: "clothing"
    },
    {
        id: 37,
        title: "Winter Jacket Coat",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 234,
        category: "clothing"
    },
    {
        id: 38,
        title: "Athletic Running Shorts",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 567,
        category: "clothing"
    },
    {
        id: 39,
        title: "Formal Business Suit",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.7,
        reviews: 123,
        category: "clothing"
    },
    {
        id: 40,
        title: "Comfortable Hoodie",
        price: 34.99,
        originalPrice: 49.99,
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 678,
        category: "clothing"
    },
    {
        id: 41,
        title: "Designer Handbag",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 345,
        category: "clothing"
    },

    // Sports (7 products)
    {
        id: 42,
        title: "Yoga Mat Premium Quality",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 789,
        category: "sports"
    },
    {
        id: 43,
        title: "Comfortable Running Shoes",
        price: 119.99,
        originalPrice: 149.99,
        image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.7,
        reviews: 1567,
        category: "sports"
    },
    {
        id: 44,
        title: "Basketball Official Size",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 345,
        category: "sports"
    },
    {
        id: 45,
        title: "Fitness Dumbbells Set",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 567,
        category: "sports"
    },
    {
        id: 46,
        title: "Tennis Racket Professional",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 234,
        category: "sports"
    },
    {
        id: 47,
        title: "Swimming Goggles",
        price: 19.99,
        originalPrice: 29.99,
        image: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 456,
        category: "sports"
    },
    {
        id: 48,
        title: "Resistance Bands Set",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 678,
        category: "sports"
    },

    // Toys & Games (5 products)
    {
        id: 49,
        title: "Kids Educational Toy Set",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 1123,
        category: "toys"
    },
    {
        id: 50,
        title: "Board Game Family Fun",
        price: 34.99,
        originalPrice: 44.99,
        image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 234,
        category: "toys"
    },
    {
        id: 51,
        title: "Remote Control Car",
        price: 69.99,
        originalPrice: 89.99,
        image: "https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 445,
        category: "toys"
    },
    {
        id: 52,
        title: "Building Blocks Set",
        price: 39.99,
        originalPrice: 54.99,
        image: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 567,
        category: "toys"
    },
    {
        id: 53,
        title: "Puzzle 1000 Pieces",
        price: 19.99,
        originalPrice: 24.99,
        image: "https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.2,
        reviews: 345,
        category: "toys"
    },

    // Beauty (4 products)
    {
        id: 54,
        title: "Organic Skincare Set",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.6,
        reviews: 445,
        category: "beauty"
    },
    {
        id: 55,
        title: "Professional Makeup Kit",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 678,
        category: "beauty"
    },
    {
        id: 56,
        title: "Hair Styling Tools",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.4,
        reviews: 234,
        category: "beauty"
    },
    {
        id: 57,
        title: "Perfume Collection",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.3,
        reviews: 567,
        category: "beauty"
    },

    // Automotive (2 products)
    {
        id: 58,
        title: "Car Phone Mount Holder",
        price: 19.99,
        originalPrice: 29.99,
        image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.2,
        reviews: 234,
        category: "automotive"
    },
    {
        id: 59,
        title: "Car Dash Camera",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.5,
        reviews: 345,
        category: "automotive"
    },

    // Food & Grocery (1 product)
    {
        id: 60,
        title: "Organic Green Tea",
        price: 15.99,
        originalPrice: 19.99,
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
        rating: 4.2,
        reviews: 234,
        category: "food"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    products = [...sampleProducts];
    filteredProducts = [...products];
    loadProducts();
    startSlider();
    setupScrollAnimations();
    loadUserData();
    updateCartDisplay();
}

// User Authentication
function loadUserData() {
    const userData = localStorage.getItem('currentUser');
    const cartData = localStorage.getItem('cart');
    
    if (userData) {
        currentUser = JSON.parse(userData);
        document.getElementById('userName').textContent = currentUser.name || currentUser.email;
    }
    
    if (cartData) {
        cart = JSON.parse(cartData);
        updateCartDisplay();
    }
}

function saveUserData() {
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Updated authentication functions to open in new tab
function openAuthModal() {
    // Open authentication page in new tab
    window.open('auth.html', '_blank', 'width=500,height=700,scrollbars=yes,resizable=yes');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('show');
    resetAuthForm();
}

function switchAuthMode() {
    isSignUp = !isSignUp;
    const modalTitle = document.getElementById('modalTitle');
    const authSubmit = document.getElementById('authSubmit');
    const nameGroup = document.getElementById('nameGroup');
    const authSwitchText = document.getElementById('authSwitchText');
    
    if (isSignUp) {
        modalTitle.textContent = 'Sign Up';
        authSubmit.textContent = 'Sign Up';
        nameGroup.style.display = 'block';
        authSwitchText.innerHTML = 'Already have an account? <a href="#" onclick="switchAuthMode()">Sign in</a>';
    } else {
        modalTitle.textContent = 'Sign In';
        authSubmit.textContent = 'Sign In';
        nameGroup.style.display = 'none';
        authSwitchText.innerHTML = 'Don\'t have an account? <a href="#" onclick="switchAuthMode()">Sign up</a>';
    }
}

function resetAuthForm() {
    document.getElementById('authForm').reset();
    isSignUp = false;
    switchAuthMode();
}

// Handle form submission (keeping the modal version for fallback)
document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    
    if (isSignUp) {
        // Sign up logic
        if (name && email && password) {
            currentUser = { name, email, password };
            saveUserData();
            document.getElementById('userName').textContent = name;
            closeAuthModal();
            showNotification('Account created successfully!', 'success');
        }
    } else {
        // Sign in logic
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            const user = JSON.parse(savedUser);
            if (user.email === email && user.password === password) {
                currentUser = user;
                document.getElementById('userName').textContent = user.name || user.email;
                closeAuthModal();
                showNotification('Welcome back!', 'success');
            } else {
                showNotification('Invalid credentials!', 'error');
            }
        } else {
            showNotification('No account found. Please sign up first.', 'error');
        }
    }
});

// Listen for user login from auth page
window.addEventListener('storage', function(e) {
    if (e.key === 'currentUser' && e.newValue) {
        const user = JSON.parse(e.newValue);
        currentUser = user;
        document.getElementById('userName').textContent = user.name || user.email;
        showNotification(`Welcome back, ${user.name || user.email}!`, 'success');
    }
});

// Hero Slider
function startSlider() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    slides[currentSlide].classList.add('active');
}

// Product Management
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Add scroll animations to new products
    setupScrollAnimations();
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <h3 class="product-title">${product.title}</h3>
        <div class="product-rating">
            <span class="stars">${stars}</span>
            <span class="rating-count">(${product.reviews})</span>
        </div>
        <div class="product-price">
            $${product.price}
            ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
        </div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    
    return card;
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.querySelector('.category-select').value;
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    loadProducts();
    scrollToProducts();
    
    if (filteredProducts.length === 0) {
        document.getElementById('productsGrid').innerHTML = '<p style="text-align: center; grid-column: 1/-1; font-size: 18px; color: #666;">No products found matching your search.</p>';
    }
    
    updateProductsTitle(searchTerm || category);
}

function filterProducts(category) {
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    loadProducts();
    updateProductsTitle(category);
}

// FIXED: Function to filter and scroll to products
function filterAndScrollToProducts(category) {
    console.log('Filtering by category:', category); // Debug log
    filterProducts(category);
    scrollToProducts();
    
    // Update category filter dropdown
    document.getElementById('categoryFilter').value = category;
}

// FIXED: Function to show all products
function showAllProducts() {
    console.log('Showing all products'); // Debug log
    filteredProducts = [...products];
    loadProducts();
    scrollToProducts();
    updateProductsTitle('all');
    
    // Reset category filter dropdown
    document.getElementById('categoryFilter').value = 'all';
}

// FIXED: Function to scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('productsSection');
    productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// FIXED: Function to update products title
function updateProductsTitle(category) {
    const title = document.getElementById('productsTitle');
    const categoryNames = {
        'all': 'All Products',
        'electronics': 'Electronics',
        'books': 'Books',
        'clothing': 'Fashion & Clothing',
        'home': 'Home & Garden',
        'sports': 'Sports & Outdoors',
        'toys': 'Toys & Games',
        'beauty': 'Beauty & Personal Care',
        'automotive': 'Automotive',
        'food': 'Food & Grocery'
    };
    
    title.textContent = categoryNames[category] || `Search Results for "${category}"`;
}

function sortProducts() {
    const sortBy = document.getElementById('sortSelect').value;
    
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            filteredProducts = [...products];
    }
    
    loadProducts();
}

function filterByPrice() {
    const maxPrice = document.getElementById('priceRange').value;
    document.getElementById('priceValue').textContent = `$0 - $${maxPrice}`;
    
    filteredProducts = products.filter(product => product.price <= maxPrice);
    loadProducts();
}

function filterByRating() {
    const minRating = document.getElementById('ratingFilter').value;
    
    if (minRating === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.rating >= parseFloat(minRating));
    }
    
    loadProducts();
}

// Function to filter by category
function filterByCategory() {
    const category = document.getElementById('categoryFilter').value;
    filterProducts(category);
}

function loadMoreProducts() {
    showNotification('All products are already loaded!', 'info');
}

// Cart Management
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
    saveUserData();
    showNotification('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveUserData();
    showNotification('Product removed from cart!', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartDisplay();
        saveUserData();
    }
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('Please sign in to checkout!', 'error');
        openAuthModal();
        return;
    }
    
    // Simulate checkout process
    showNotification('Order placed successfully! Thank you for shopping with us.', 'success');
    cart = [];
    updateCartDisplay();
    saveUserData();
    toggleCart();
}

// Contact Form Functions
function submitContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simulate form submission
    showNotification(`Thank you ${firstName}! Your message has been sent successfully.`, 'success');
    
    // Reset form
    event.target.reset();
}

function startLiveChat() {
    showNotification('Live chat feature coming soon! Please use our contact form for now.', 'info');
}

// Utility Functions
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
        z-index: 4000;
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
    }, 3000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for notifications
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

// Handle search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// Close cart when clicking outside
document.addEventListener('click', function(e) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartButton = document.querySelector('.cart');
    
    if (!cartSidebar.contains(e.target) && !cartButton.contains(e.target) && cartSidebar.classList.contains('open')) {
        toggleCart();
    }
});

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.querySelector('.modal');
    const modalOverlay = document.getElementById('authModal');
    
    if (modalOverlay.classList.contains('show') && !modal.contains(e.target)) {
        closeAuthModal();
    }
});