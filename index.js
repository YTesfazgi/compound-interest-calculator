// this function listens for a click on the "Submit" button

function compoundInterest(yrs, initialAmount, apr, additionalMonthly) {
  return (Math.round(((initialAmount * ((1+(apr/12))**(yrs*12))) +
      ((additionalMonthly*(((1+(apr/12))**(yrs*12))-1))/(apr/12)))*100)/100).toFixed(2);
}

window.addEventListener('DOMContentLoaded', (event) => {
  var submitButton = document.getElementById("form_submit");

  function whenSubmitIsClicked() {
    var initialAmount = document.getElementsByName("initial_amount")[0].value;
    var apr = document.getElementsByName("apr")[0].value;
    var additionalMonthly = document.getElementsByName("additional_added_monthly")[0].value;
    
    initialAmount = Number(initialAmount);
    apr = Number(apr)/100;
    additionalMonthly = Number(additionalMonthly);

    document.getElementById("1y_result").innerHTML = "$" + compoundInterest(1, initialAmount, apr, additionalMonthly)
    document.getElementById("5y_result").innerHTML = "$" + compoundInterest(5, initialAmount, apr, additionalMonthly)
    document.getElementById("10y_result").innerHTML = "$" + compoundInterest(10, initialAmount, apr, additionalMonthly)
    document.getElementById("20y_result").innerHTML = "$" + compoundInterest(20, initialAmount, apr, additionalMonthly)
  }
  
  submitButton.addEventListener("click", whenSubmitIsClicked);
}); 

//Message @zephlit
