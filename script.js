// Get the button element
var btn = document.getElementById("resumehome");

// Attach an event listener to the button
btn.addEventListener("click", function() {
  // Display a pop-up message
  alert("Thank you for your visiting my portfolio");
});

const table = document.querySelector('table');

// Loop through the HTML tags and create rows for the table
htmlTags.forEach(tag => {
  // Create a new row for the table
  const row = document.createElement('tr');

  // Create cells for the tag and description columns
  const tagCell = document.createElement('td');
  tagCell.textContent = tag.tag;
  const descCell = document.createElement('td');
  descCell.textContent = tag.description;

  // Add the cells to the row
  row.appendChild(tagCell);
  row.appendChild(descCell);

  // Add the row to the table
  table.appendChild(row);
});

const ul = document.querySelector('ul');
const lis = table.querySelectorAll('li');
lis.forEach((li, index) => {
  if (index % 2 === 0) {
    li.style.backgroundColor = '#f2f2f2';
  }
});