//login
const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    const modal = document.querySelector("#login");
    $("#login").modal("hide");
    loginForm.reset();
  });
});
let signup = document.getElementById("register");
signup.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("register-email").value;
  let password = document.getElementById("register-password").value;
  console.log(email, password);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred);
    
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;

      // Catch this errorCode to know if user exists
      if (errorCode === "auth/email-already-in-use") {
        // Call function X to sign user in instead
        signInMail(email, password);
        return;
      }

      // Weak password?
      else if (errorCode == "auth/weak-password") {
        // console.log("The password is too weak.");
        signup.querySelector('.error').innerHTML = error.message;
      } else {
        console.log(errorMessage);
      }
      console.log(error);
    });

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    const modal = document.querySelector("#login");
    $("#login").modal("hide");
    loginForm.reset();
    signup.querySelector('.error').innerHTML = '';

  });
});
