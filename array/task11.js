//task 11
const products = [
    {
        title: 'prod1',
        price: 5.2

    },
    {
        title: 'prod2',
        price: 0.18
    },
    {
        title: 'prod3',
        price: 15

    },
    {
        title: 'prod4',
        price: 25

    },
    {
        title: 'prod5',
        price: 18.9
    },
    {
        title: 'prod6',
        price: 8
    },
    {
        title: 'prod7',
        price: 19
    },
    {
        title: 'prod8',
        price: 63
    }
];

function compareProducts(first, second) {
    if (first.price > second.price) return 1;
    if (first.price < second.price) return -1;
}

function filterCollection(products, lowPrice, topPrice) {
    let resutlProducts = [];
    let counter = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].price >= lowPrice && products[i].price <= topPrice) {
            resutlProducts[counter] = products[i];
            counter++;
        }
    }
    resutlProducts.sort(compareProducts);
    console.log(resutlProducts);
}

filterCollection(products, 8, 20);