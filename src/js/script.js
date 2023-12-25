
// the javascript to for my portfolio navigation
function activateLink(link) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(navLink => {
    navLink.classList.remove('active');
  });
  link.classList.add('active');
}

function toggleMenu() {
  const navbarNav = document.querySelector('#navbarNav');
  navbarNav.classList.toggle('show');
}



//Send message to me from contact form
function redirectToEmail(event) {
    event.preventDefault(); 
  
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    var subject = encodeURIComponent("Contact Me");
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    var mailtoURL = "mailto:fenutigist@gmail.com?subject=" + subject + "&body=" + body;
  
    
    window.location.href = mailtoURL;
  }


  