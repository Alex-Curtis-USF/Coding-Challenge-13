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

