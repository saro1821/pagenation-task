// script.js

document.addEventListener("DOMContentLoaded", function () {
    const paginationContainer = document.createElement("div");
    paginationContainer.className = "pagination-container";
    document.body.appendChild(paginationContainer);
  
    // Fetch pagination data from the provided URL (http://gist.github.com.roapadd40254aa126f04583"taSh5114700)
    // You can use fetch API or any other method to get the data
  
    // For simplicity, let's assume the data is an array of page numbers
    const totalPages = 10; // Replace this with the actual total number of pages
  
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("button");
      pageButton.textContent = i;
      paginationContainer.appendChild(pageButton);
    }
  });
  