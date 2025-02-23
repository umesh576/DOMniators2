const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  const username = document.getElementById("Fullname");
  const email = document.getElementById("email");
  const phoneNo = document.getElementById("phonenumber");
  const faculty = document.getElementById("Faculty");
  const submit = document.getElementById("submitFile");
  let username1 = username.value.trim();
  let email1 = email.value.trim();
  let phoneNo1 = phoneNo.value.trim();
  let faculty1 = faculty.value.trim();
  let submit1 = submit.value.trim();
  if (
    username1 === "" ||
    email1 === "" ||
    phoneNo1 === "" ||
    faculty1 === "" ||
    submit1 === ""
  ) {
    alert("Please enter the all required feild.");
  } else {
    let msg = document.getElementById("msg");
    let loader = document.querySelector("loader");
    msg.style.display = "none";
    // loader.style.display = "block";
    setTimeout(() => {
      alert("thankyou for join in our team.");
    }, 2000);
  }
});
