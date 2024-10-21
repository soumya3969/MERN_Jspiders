let allEmp = [
  {
    id: 101,
    userName: "sou",
    psw: "soumya",
    name: "Soumya",
    desg: "Developer",
    sal: 45000,
    gender: "Male",
    role: "admin"
  },
  {
    id: 102,
    userName: "sandhya@2001",
    psw: "sandhya",
    name: "Sandhya",
    desg: "Developer",
    sal: 40000,
    gender: "Female",
    role: "Employee"
  },
  {
    id: 103,
    userName: "sameer@16",
    psw: "sameer",
    name: "Sameer",
    desg: "Tester",
    sal: "35000",
    gender: "Male",
    role: "Employee"
  },
  {
    id: 104,
    userName: "Supriyo@6852",
    psw: "supriyo",
    name: "Supriyo",
    desg: "Developer",
    sal: "41000",
    gender: "Male",
    role: "Employee"
  },
  {
    id: 105,
    userName: "rashmi@94",
    psw: "rashmi",
    name: "Rashmi",
    desg: "Tester",
    sal: "35000",
    gender: "Female",
    role: "Employee"
  }
];

let loginSec = document.getElementById("logInSec");
let empDetails = document.getElementById("empDetails");
let filterSec = document.getElementById("filter");
console.log(loginSec)
// *Initially hide non-login sections
empDetails.classList.add("hide");
filterSec.classList.add("hide");

let user = document.getElementById("userName");
let psw = document.getElementById("password");
let loggedUser = {};

user.addEventListener("input", (event) => {
  event.preventDefault();
  let id = event.target.id;
  let value = event.target.value;

  loggedUser[id] = value;
});
psw.addEventListener("input", (event) => {
  event.preventDefault();
  let id = event.target.id;
  let value = event.target.value;

  loggedUser[id] = value;
});
console.log(loggedUser);

// *Login functionality
let login = document.getElementById("login");
login.addEventListener("click", (event) => {
  event.preventDefault();

  // *Login validation
  let currentUser = allEmp.find(
    (emp) =>
      emp.userName === loggedUser.userName && emp.psw === loggedUser.password
  );

  if (currentUser) {
    empDetails.classList.remove("hide");

    
    document.getElementById("empName").textContent = currentUser.name;
    document.getElementById("empDesg").textContent = currentUser.desg;
    document.getElementById("empSalary").textContent = currentUser.sal;
    document.getElementById("empGender").textContent = currentUser.gender;
    document.getElementById("empRole").textContent = currentUser.role;

    if (currentUser.role === "admin") {
      filterSec.classList.remove("hide");
    }
  } else {
    console.log("Invalid credentials. Please try again.");
    alert("Invalid username or password. Please try again.");
  }
  if (currentUser.role!=='admin') {
    filterSec.classList.add("hide");}
});

// *Filtering functionality
let filterButton = document.getElementById("filterBtn");
filterButton.addEventListener("click", () => {
    let filterCriteria = document.getElementById("city").value;
    let filteredEmployees = allEmp.filter(employee => {
        if (filterCriteria === "developer") {
            return employee.desg === "Developer";
        } else if (filterCriteria === "tester") {
            return employee.desg === "Tester";
        } else if (filterCriteria === "male") {
            return employee.gender === "Male";
        } else if (filterCriteria === "female") {
            return employee.gender === "Female";
        } else {
            return true;
        }
    });

    displayFilteredEmployees(filteredEmployees);
});

// !Function to display filtered employees
function displayFilteredEmployees(filteredEmployees) {
    let empFilteredDetails = document.querySelector(".empFilteredDetails");
    empFilteredDetails.innerHTML = "";

    filteredEmployees.forEach(employee => {
        let row = document.createElement("div");
        row.className = "row";

        let idCol = document.createElement("div");
        idCol.className = "col-2 border border-1 border-white";
        idCol.textContent = employee.id;

        let nameCol = document.createElement("div");
        nameCol.className = "col-2 border border-1 border-white";
        nameCol.textContent = employee.name;

        let desgCol = document.createElement("div");
        desgCol.className = "col-2 border border-1 border-white";
        desgCol.textContent = employee.desg;

        let salCol = document.createElement("div");
        salCol.className = "col-2 border border-1 border-white";
        salCol.textContent = employee.sal;

        let genderCol = document.createElement("div");
        genderCol.className = "col-2 border border-1 border-white";
        genderCol.textContent = employee.gender;

        let roleCol = document.createElement("div");
        roleCol.className = "col-2 border border-1 border-white";
        roleCol.textContent = employee.role;

        row.appendChild(idCol);
        row.appendChild(nameCol);
        row.appendChild(desgCol);
        row.appendChild(salCol);
        row.appendChild(genderCol);
        row.appendChild(roleCol);

        empFilteredDetails.appendChild(row);
    });
}

