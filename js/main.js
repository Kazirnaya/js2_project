const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (item) => {
    return `<div class="product-item">
                <img src="img/picture.jpg" alt="#" class="product-img">
                <h3 class="product-item-H3">${item.title}</h3>
                <p class="product-item-p">${item.price}</p>
                <button class="buy-btn">Добавить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    productsList.forEach(element => {
        document.querySelector('.products').innerHTML += element;
    });
};

renderPage(products);