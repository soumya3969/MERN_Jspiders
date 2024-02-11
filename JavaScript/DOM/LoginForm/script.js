let signupForm = document.getElementById("signupForm");
let userData = {};
signupForm.addEventListener("input", (event) => {
  let name = event.target.name;
  let value = event.target.value;
  userData[name] = value;
});
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(userData);
  const { fname, lname, mobile, email, password, dob, conPassword, gender } =
    userData;
  if (!fname || fname.length < 4) {
    document.getElementById("fname-error").innerHTML =
      "*First Name Should be 4 Character";
    document.getElementById("fname-error").style.color = "red";
  } else {
    document.getElementById("fname-error").innerHTML = "";
  }

  if (!lname) {
    document.getElementById("lname-error").innerHTML = "*Last Name Is Required";
    document.getElementById("lname-error").style.color = "red";
  } else {
    document.getElementById("lname-error").innerHTML = "";
  }
  if (!email) {
    document.getElementById("email-error").innerHTML = "*Email is Required";
    document.getElementById("email-error").style.color = "red";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (!mobile || mobile.length !== 10) {
    document.getElementById("mobile-error").innerHTML =
      "*Mobile Number should contain 10 digits";
    document.getElementById("mobile-error").style.color = "red";
  } else {
    document.getElementById("mobile-error").innerHTML = "";
  }
  if (!gender) {
    document.getElementById("gender-error").innerHTML = "*Select a Gender";
    document.getElementById("gender-error").style.color = "red";
  }else{
    document.getElementById('gender-error').innerHTML=''
  }


  if (password!=conPassword) {
    document.getElementById('conPassword-error').innerHTML= '*Password  mismatch'
    document.getElementById('conPassword-error').style.color='red'
  } else {
    document.getElementById('conPassword-error').innerHTML=''

  }
});
