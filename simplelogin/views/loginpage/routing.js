function loginpage() {
  try {
    document.getElementById("page1id").style.display = "block";
    document.getElementById("page2id").style.display = "none";
    checkuser();
  } catch (error) {
    setTimeout(loginpage, 100);
  }
}

function registerpage() {
  document.getElementById("page1id").style.display = "none";
  document.getElementById("page2id").style.display = "block";
}

loginpage();
