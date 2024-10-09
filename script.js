const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const products = {
    phones: Array.from({length: 25}, (_, i) => ({
        name: `Smartphone ${i+1}`,
        price: Math.floor(Math.random() * (1000 - 300) + 300) + 0.99,
        ram: `${Math.pow(2, Math.floor(Math.random() * 4) + 2)}GB`,
        storage: `${Math.pow(2, Math.floor(Math.random() * 5) + 6)}GB`,
        camera: `${Math.floor(Math.random() * (108 - 12) + 12)}MP`
    })),
    computers: Array.from({length: 10}, (_, i) => ({
        name: `Computadora ${i+1}`,
        price: Math.floor(Math.random() * (2000 - 500) + 500) + 0.99,
        processor: `Intel Core i${Math.floor(Math.random() * 5) + 3}`,
        ram: `${Math.pow(2, Math.floor(Math.random() * 4) + 3)}GB`,
        storage: `${Math.pow(2, Math.floor(Math.random() * 4) + 8)}GB SSD`
    })),
    tablets: Array.from({length: 10}, (_, i) => ({
        name: `Tablet ${i+1}`,
        price: Math.floor(Math.random() * (800 - 200) + 200) + 0.99,
        screen: `${Math.floor(Math.random() * (13 - 7) + 7)}"`,
        storage: `${Math.pow(2, Math.floor(Math.random() * 4) + 5)}GB`,
        battery: `${Math.floor(Math.random() * (10000 - 3000) + 3000)}mAh`
    }))
};

function createProductElement(product, type) {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        <img src="/api/placeholder/150/150" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button>Agregar al carrito</button>
        <button class="show-details">Características</button>
        <div class="product-details">
            ${Object.entries(product)
                .filter(([key]) => key !== 'name' && key !== 'price')
                .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                .join('')}
        </div>
    `;
    
    const detailsButton = productElement.querySelector('.show-details');
    const details = productElement.querySelector('.product-details');
    
    detailsButton.addEventListener('click', () => {
        details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
    
    return productElement;
}

function populateGrid(gridId, products, type) {
    const grid = document.getElementById(gridId);
    products.forEach(product => {
        grid.appendChild(createProductElement(product, type));
    });
}

populateGrid('phoneGrid', products.phones, 'phone');
populateGrid('computerGrid', products.computers, 'computer');
populateGrid('tabletGrid', products.tablets, 'tablet');