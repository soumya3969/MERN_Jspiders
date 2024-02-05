let employee = [
  {
    id: 101,
    name: "Rashmi",
    gender: "Female",
    degn: "jnr developer",
    age: 28,
    salary: 22000,
    company: "Aloha",
    city: "Bangalore",
    state: "Karnataka"
  },
  {
    id: 102,
    name: "Soumya",
    gender: "Male",
    degn: "Intern",
    age: 24,
    salary: 16000,
    company: "Jspiders",
    city: "Bhubaneswar",
    state: "Odisha"
  },
  {
    id: 103,
    name: "Sandhya",
    gender: "Female",
    degn: "Intern",
    age: 24,
    salary: 16000,
    company: "Jspiders",
    city: "Raipur",
    state: "Chhatisgarh"
  },
  {
    id: 104,
    name: "Goutam",
    gender: "Male",
    degn: "Manager",
    age: 31,
    salary: 45000,
    company: "Orient",
    city: "Bangalore",
    state: "Karnataka"
  },
  {
    id: 105,
    name: "Sumit",
    gender: "Male",
    degn: "Senior developer",
    age: 23,
    salary: 30000,
    company: "Flipkart",
    city: "Bangalore",
    state: "Karnataka"
  }
];
// * TO DISPLAY ALL EMPLOYEE DETAILS
function displayAllEmp(emps) {
  if (emps.length > 0) {
    let detailsHTML = "";
    for (const emp of emps) {
      detailsHTML += `
        <div class="col-12" style='background: #e0ffcd75 !important;'>
          <div class="card" >
            <div class="card-body d-flex justify-content-evenly" >
              <h5>${emp.id}</h5>
              <h5>${emp.name}</h5>
              <h5>${emp.gender}</h5>
              <h5>${emp.degn}</h5>
              <h5>${emp.age}</h5>
              <h5>${emp.salary}</h5>
              <h5>${emp.company}</h5>
              <h5>${emp.city}</h5>
              <h5>${emp.state}</h5>
            </div>
          </div>
        </div>`;
    }

    document.getElementById("details").innerHTML = detailsHTML;
  }
}
// displayAllEmp(employee);
// * TO DISPLAY ONLY MALE EMPLOYEES
function displayMaleEmp(emps) {
  if (emps.length > 0) {
    let detailsHTML = "";
    for (const emp of emps) {
      if (emp.gender == "Male") {
        detailsHTML += `
          <div class="col-12">
            <div class="card">
              <div class="card-body d-flex justify-content-evenly bg-gradient ">
                <h5>${emp.id}</h5>
                <h5>${emp.name}</h5>
                <h5>${emp.gender}</h5>
                <h5>${emp.degn}</h5>
                <h5>${emp.age}</h5>
                <h5>${emp.salary}</h5>
                <h5>${emp.company}</h5>
                <h5>${emp.city}</h5>
                <h5>${emp.state}</h5>
              </div>
            </div>
          </div>`;
      }
    }
    document.getElementById("details").innerHTML = detailsHTML;
  }
}

// * TO DISPLAY ONLY FEMALE EMPLOYEES
function displayFemaleEmp(emps) {
  if (emps.length > 0) {
    let detailsHTML = "";
    for (const emp of emps) {
      if (emp.gender == "Female") {
        detailsHTML += `
            <div class="col-12">
              <div class="card">
                <div class="card-body d-flex justify-content-evenly bg-gradient ">
                  <h5>${emp.id}</h5>
                  <h5>${emp.name}</h5>
                  <h5>${emp.gender}</h5>
                  <h5>${emp.degn}</h5>
                  <h5>${emp.age}</h5>
                  <h5>${emp.salary}</h5>
                  <h5>${emp.company}</h5>
                  <h5>${emp.city}</h5>
                  <h5>${emp.state}</h5>
                </div>
              </div>
            </div>`;
      }
    }
    document.getElementById("details").innerHTML = detailsHTML;
  }
}
