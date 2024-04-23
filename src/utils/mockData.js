const faker = require('faker');

function generateProducts(numProducts = 100, page = 1, limit = 10) {
    const products = [];
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    for (let i = startIndex; i < endIndex && i < numProducts; i++) {
        products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: "uploads/placeholder.jpg"
        });
    }
    return products;
}

function generateProductsApi(numProducts = 100) {
    const products = [];
    for (let i = 0; i < numProducts; i++) {
        products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: "uploads/placeholder.jpg"
        });
    }
    return products;
}

module.exports = { generateProducts, generateProductsApi };