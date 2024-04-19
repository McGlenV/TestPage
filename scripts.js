document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
  var navLinks = document.querySelectorAll('.sidenav a, .nav-wrapper a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // Check if sidenav instance is visible
      var sidenavInstance = M.Sidenav.getInstance(
        document.querySelector('.sidenav')
      );
      if (sidenavInstance.isOpen) {
        sidenavInstance.close(); // Close the sidenav
      }
      const targetId = this.getAttribute('href').substr(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      event.preventDefault();
    });
  });
});
