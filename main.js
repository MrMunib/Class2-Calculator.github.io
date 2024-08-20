function appendValue(element) {

  let inputField = document.querySelector(".result");
  
    if (element.textContent == "AC") {
      inputField.value = "";
    } else if (element.textContent == "DEL") {
      inputField.value = inputField.value.slice(0, -1);
    } else if (element.textContent == "=") {
      try {
        inputField.value = eval(inputField.value);
      } catch (error) {
        inputField.value = "ERROR";
      }
    } else {
      inputField.value += element.textContent;
    }
  }
