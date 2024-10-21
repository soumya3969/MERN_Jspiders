document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('psw');
    const toggleIcon = document.getElementById('toggleIcon');
    

    toggleIcon.addEventListener('click', () => {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            // Icon.classList.remove('fa-eye');
            // Icon.classList.add('fa-eye-slash');
        } else {
            passwordField.type = "password";
            // Icon.classList.remove('fa-eye-slash');
            // Icon.classList.add('fa-eye');
        }
        toggleIcon.classList.toggle('fa-eye');
        toggleIcon.classList.toggle('fa-eye-slash');
        console.log("clicked")
    });
    // function toggle() {
    //     if (passwordField.type === "password") {
    //         passwordField.type = "text";
    //         // Icon.classList.remove('fa-eye');
    //         // Icon.classList.add('fa-eye-slash');
    //     } else {
    //         passwordField.type = "password";
    //         // Icon.classList.remove('fa-eye-slash');
    //         // Icon.classList.add('fa-eye');
    //     }
    //     toggleIcon.classList.toggle('fa-eye');
    //     toggleIcon.classList.toggle('fa-eye-slash');
    //     console.log("clicked")
    // }
});
