const colors=['#eec2fcff','#c6eef2ff','#c3f9c6ff','#f0baafff'];

async function fetchProduct() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    displayProducts(data.products); // reuse helper function
  } catch (error) {
    console.log("error happened:", error);
  }
}

document.getElementById("searchInput").addEventListener("input", async (e) => {
  const query = e.target.value.toLowerCase();
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await res.json();
  displayProducts(data.products);  // now it works ✅
});

fetchProduct();


function displayProducts(products) {
  const container = document.getElementById('category');
  container.innerHTML = ""; // clear old results

  products.forEach((e, i) => {
    const card = document.createElement('div');
    card.className = 'user-card';

    card.style.backgroundColor = colors[i % colors.length];

    card.innerHTML = `
      <h3>${e.id}</h3>
      <h2>${e.title}</h2>
      <p>${e.description}</p>
      <h1>${e.category}</h1>
    `;

    container.appendChild(card);
  });
}
