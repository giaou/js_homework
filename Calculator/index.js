let calculation = localStorage.getItem("calculation") || "";

      displayOperation();

      function addButton(btn) {
        calculation += btn;
        displayOperation();
      }

      function equalBtn() {
        const result = eval(calculation);
        calculation = result;
        localStorage.setItem("calculation", calculation);
        displayOperation();
      }

      function clearBtn() {
        console.log("Clear");
        calculation = "";
        displayOperation();
        localStorage.setItem("calculation", calculation);
      }

      function displayOperation() {
        const displayOperationElm = document.querySelector(
          ".js-display-operation"
        );
        displayOperationElm.innerHTML = calculation;
      }