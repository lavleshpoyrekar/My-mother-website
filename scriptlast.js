document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      showPopup();
    }, 5000);
  });
  function redirectToProfile() {
    window.location.href = "profile_k.html";
  }
  function showPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }