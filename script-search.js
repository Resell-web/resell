const searchInput = document.querySelector(".search-input");
const listItems = document.querySelectorAll("li");
const listElements = [...listItems];
const search = function(event) {
  const searchValue = this.value.toLowerCase();
  listElements.forEach(listElement => {
    const stringFound = listElement.innerText.toLowerCase().indexOf(searchValue) !== -1;
    if (stringFound) {
      listElement.style.display = "block";
    } else {
      listElement.style.display = "none";
    }
  });
};
searchInput.addEventListener("input", search);
