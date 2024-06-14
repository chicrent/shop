const products = [
    { name: "camiciaarmaniblueazzurrobianco", image: "camiciaarmani48blueazzurrobianco.png", url:"https://docs.google.com/forms/d/e/1FAIpQLSewqKPygH-UgjNeXo0ZuAOOBOpM0aHqh92o2F9jue206yWdSw/viewform" },
    { name: "philippepleinmaglieyttaMneroneragrigiagrigio", image: "philippeplein.png", url:""},

];

document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});

function displayProducts(productArray) {
    const productList = document.getElementById('productList');
    productList.innerHTML = "";
    productArray.forEach(product => {
        const li = document.createElement('li');
        
        const link = document.createElement('a'); // Crea il tag <a>
        link.href = product.url; // Utilizza l'URL specificato per il prodotto
        link.target = "_blank"; // Apre il collegamento in una nuova scheda

        const img = document.createElement('img');
        img.src = `images/${product.image}`;
        img.alt = product.name;

        link.appendChild(img); // Aggiungi l'immagine al collegamento
        li.appendChild(link); // Aggiungi il collegamento al list item
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
