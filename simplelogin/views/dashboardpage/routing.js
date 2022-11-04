function dashboardpage() {
  try {
    document.getElementById("dashboardid").style.display = "block";
    dashboard();
  } catch (error) {
    setTimeout(dashboardpage, 100);
  }
}

dashboardpage();
