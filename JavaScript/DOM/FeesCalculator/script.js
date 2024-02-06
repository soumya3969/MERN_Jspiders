document.addEventListener("DOMContentLoaded", function () {
  // * GETTING UI FROM UI FORM ===================
  const courseDropdown = document.getElementById("courses");
  const courseFeeInput = document.getElementById("courseFee");
  const casteRadios = document.getElementsByName("caste");
  const concessionInput = document.getElementById("concession");
  const paidInput = document.getElementById("paid");
  const dueInput = document.getElementById("due");
  const calculateButton = document.getElementById("calculate");

  // * Defining Object for course=========
  const courseFees = {
    java: 35000,
    mern: 30000,
    python: 25000
  };

  // * Defining object for caste concessions======
  const casteConcessions = {
    GENERAL: 0,
    OBC: 1000,
    SC: 2000,
    ST: 3000
  };

  // * Event listener for course dropdown change
  courseDropdown.addEventListener("change", function () {
    // const selectedCourse = courseDropdown.value;
    courseFeeInput.value = courseFees[courseDropdown.value];
  });

  // * Event listener for caste radio change
  casteRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      // const selectedCaste = document.querySelector('input[name="caste"]:checked').value;
      concessionInput.value = casteConcessions[document.querySelector('input[name="caste"]:checked').value];
    });
  });


  // * Event listener for calculate button click
  calculateButton.addEventListener("click", function (event) {
    event.preventDefault();

    const selectedCourse = courseDropdown.value;
    const selectedCaste = document.querySelector(
      'input[name="caste"]:checked'
    ).value;
    const courseFee = courseFees[selectedCourse];
    const casteConcession = casteConcessions[selectedCaste];
    const paidAmount = Number(paidInput.value);

    if (!selectedCourse) {
      alert("Please select a course");
      return;
    }
    if (!selectedCaste) {
      alert("Please select a caste");
      return;
    }
    if (isNaN(paidAmount)) { 
      alert("Enter The Paid Amount");
      return;
    }
    if (paidAmount > courseFee) {
      alert("Paid amount cannot be greater than the course fee.");
      return;
    }

    const totalDue = courseFee - (casteConcession + paidAmount);
    dueInput.value = totalDue;
  });
});
