// Task 2 Fetch Products from the API Using Fetch and Promises
const productsContainer = document.getElementById('products-container');
const loadingMessage = document.getElementById('loading');
const errorMessage = document.getElementById('error');

fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(products => {
        console.log('Products received:', products);
        loadingMessage.style.display = 'none';
    })
    .catch(error => {
        console.log('Error:', error);
        loadingMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    });

// Task 3 Display Product Details Dynamically

    function formatPrice(cents) {
        const dollars = cents / 100;
        return '$' + dollars;
    }
    
    function createProductCard(product) {
        const { name, price, company } = product.fields;
        const imageUrl = product.fields.image[0].url;
    
        return `
            <div style="
                background: white;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            ">
                <img src="${imageUrl}" alt="${name}" 
                    style="width: 100%; height: 200px; object-fit: cover;">
                <h3>${name}</h3>
                <p>${company}</p>
                <p style="color: green; font-weight: bold;">${formatPrice(price)}</p>
            </div>
        `;
    }
    
    