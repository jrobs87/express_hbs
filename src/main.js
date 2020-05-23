document.addEventListener("DOMContentLoaded", function(){
    // Handler when the DOM is fully loaded
    console.log('App started - hot reload enabled.');

    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav, {preventScrolling: true});
  });
  