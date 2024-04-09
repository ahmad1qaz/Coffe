document.addEventListener("DOMContentLoaded", function() {
    const catalog = document.getElementById('catalog');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
  
    let coffees = [
      { name: 'Espresso', type: 'Strong' },
      { name: 'Latte', type: 'Mild' },
      { name: 'Cappuccino', type: 'Medium' },
      { name: 'Americano', type: 'Medium' },
      { name: 'Mocha', type: 'Sweet' },
      { name: 'Macchiato', type: 'Strong' }
    ];
  
    function displayCatalog(items) {
      catalog.innerHTML = '';
      items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${item.name}</h2>
          <p>Type: ${item.type}</p>
        `;
        catalog.appendChild(card);
      });
    }
  
    function search() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredCoffees = coffees.filter(coffee => coffee.name.toLowerCase().includes(searchTerm) || coffee.type.toLowerCase().includes(searchTerm));
      displayCatalog(filteredCoffees);
    }
  
    searchButton.addEventListener('click', search);
    displayCatalog(coffees);
  });

  