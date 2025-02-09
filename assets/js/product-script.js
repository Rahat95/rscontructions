// Get the modal, button, and close elements
const modal = document.getElementById("productModal");
const viewMoreBtn = document.getElementById("viewMoreBtn");
const closeBtn = document.querySelector(".close");

// Product data (can be fetched from an API or hardcoded)
const products = [
  { name: "1. Rubble Stone", description: "Durable and rough-hewn stones used for construction and foundation work." },
  { name: "2. Grit Powder", description: "Fine crushed stone used for concrete mixing and surface finishing." },
  { name: "3. Gujrat Sand Loose", description: "High-quality loose sand ideal for plastering and masonry" },
  { name: "4. Gujrat Sand Bags", description: "Pre-packaged fine sand for convenient transport and use in construction." },
  { name: "5. Washable Plaster Sand", description: "Clean and refined sand for smooth plastering and finishing." },
  { name: "6. AAC Block - ULTRATECH", description: "Lightweight, energy-efficient aerated concrete blocks for modern construction." },
  // { name: "Product 7", description: "Description of Product 7" },
  // { name: "Product 8", description: "Description of Product 8" },
  // { name: "Product 9", description: "Description of Product 9" },
  // { name: "Product 10", description: "Description of Product 10" },
];

// Function to populate the product list
// Function to populate the product list
function populateProductList() {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear existing content

  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${product.name}</strong>: ${product.description}`; // Normal text for description
    productList.appendChild(li);
  });
}
// Show the modal when the "View More" button is clicked
viewMoreBtn.addEventListener("click", () => {
  populateProductList(); // Populate the list before showing the modal
  modal.style.display = "block";
});

// Hide the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});