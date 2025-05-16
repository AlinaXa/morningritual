document.getElementById("salutBtn").addEventListener("click", function() {
    alert("Salut! Ai apăsat butonul.");
  });
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
    