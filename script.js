// Simple JS form validation
document.querySelector(".search-form").addEventListener("submit", function (e) {
  const search = document.querySelector('input[name="q"]').value.trim();
  if (!search) {
    alert("Please enter a search term.");
    e.preventDefault();
  }
});
