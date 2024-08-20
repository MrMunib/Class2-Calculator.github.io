function appendValue(element) {

  let inputField = document.querySelector(".result");
  
  if (element.textContent == "AC") {
    inputField.value = "";
  } else if (element.textContent == "DEL") {
    inputField.value = inputField.value.slice(0, -1);
  } else if (element.textContent == "=") {
    inputField.value = eval(inputField.value);
  } else {
    inputField.value += element.textContent;
  }
}
