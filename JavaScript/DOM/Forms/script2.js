// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let login = document.getElementById("login");

// login.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log(username.value);
//   console.log(password.value);
// });






// ! Using Object Delegation


let loginForm = document.getElementById("loginForm");

// console.log(loginForm)
let userData = {};
loginForm.addEventListener("input", (event) => {
  let id = event.target.id;
  let value = event.target.value;

  userData[id] = value;
//  ! console.log(userData)
});
login.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(userData);
    });
