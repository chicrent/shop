const products = [
    { name: "camiciaarmani", image: "camiciaarmani.jpg" },

];

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});

function displayProducts(productArray) {
    const productList = document.getElementById('productList');
    productList.innerHTML = "";
    productArray.forEach(product => {
        const li = document.createElement('li');
        
        const link = document.createElement('a');
        link.href = `url_del_prodotto`;
        link.target = "_blank";

        const img = document.createElement('img');
        img.src = `images/${product.image}`;
        img.alt = product.name;

        link.appendChild(img);
        li.appendChild(link);
        productList.appendChild(li);
    });
}
function searchProducts() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}
