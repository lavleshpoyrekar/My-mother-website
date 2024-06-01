var loader;

function fadeOutLoader(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        document.querySelector('.overlay').style.opacity = opacity;
        window.setTimeout(function () {
            fadeOutLoader(opacity - 0.055);
        }, 316);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loader');
    fadeOutLoader(1);
});
function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loader');
    fadeOutLoader(10);
});
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const href = item.querySelector('a').getAttribute('href');
            window.location.href = href;
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      showPopup();
    }, 3000);
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



