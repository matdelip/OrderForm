function calculateTotal() {
  const productSelect = document.getElementById('product');
  const selectedOption = productSelect.options[productSelect.selectedIndex];
  const price = parseFloat(selectedOption.getAttribute("data-price"));
  
  const quantity = parseInt(document.getElementById('quantity').value, 10);

  if (isNaN(quantity) || quantity <= 0) {
    alert("Please enter a valid quantity.");
    document.getElementById('quantity').value = 1;
    return;
  }

  const totalCost = price * quantity;
  document.getElementById('cost').textContent = totalCost.toFixed(2);
}
  document.getElementById('calculateButton').addEventListener('click', calculateTotal);
 document.getElementById(`quantity`).addEventListener('input', calculateTotal);
document.getElementById(`product`).addEventListener('change', calculateTotal);

