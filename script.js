const input = document.getElementById("input");
const output = document.getElementById("output");

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.id) {
      case "add":
        input.value += "+";
        break;
      case "subtract":
        input.value += "-";
        break;
      case "multiply":
        input.value += "*";
        break;
      case "divide":
        input.value += "/";
        break;
      case "exponent":
        input.value += "^";
        break;
      case "log":
        input.value = `log(${input.value})`;
        break;
      case "sin":
        input.value = `sin(${input.value})`;
        break;
      case "cos":
        input.value = `cos(${input.value})`;
        break;
      case "tan":
        input.value = `tan(${input.value})`;
        break;
      case "clear":
        input.value = "";
        output.value = "";
        break;
      case "equals":
        try {
          output.value = eval(input.value);
        } catch (error) {
          output.value = "Error";
        }
        break;
    }
  });
});

