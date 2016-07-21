(function () {
  var menuButton = document.getElementById('menuButton')
  var sidebarContainer = document.querySelector('.sidebar-container')

  menuButton.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active')
      sidebarContainer.classList.remove('sidebar-container--visible')
    } else {
      this.classList.add('active')
      sidebarContainer.classList.add('sidebar-container--visible')
    }
  })
})()
