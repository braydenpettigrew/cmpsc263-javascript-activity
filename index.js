document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById("my-button");
  const myInput = document.getElementById("my-input");
  const myList = document.getElementById("my-list");

  myButton.addEventListener("click", () => {
    const inputValue = myInput.value;
    if (inputValue === "") {
      return;
    }

    const listItem = document.createElement("li");

    listItem.innerHTML = `<input type="checkbox" />${inputValue}`;
    listItem.classList.add("list-item");

    myList.appendChild(listItem);
    myInput.value = "";
  });
});
