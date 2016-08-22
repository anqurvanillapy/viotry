(function () {
  'use strict'

  var app = {
    hasVisibleSidebar: false,
    headerTitle: document.querySelector('.header__title'),
    main: document.querySelector('.main'),
    sidebar: {
      menuButton: document.getElementById('menuButton'),
      sidebarContainer: document.querySelector('.sidebar-container')
    }
  }

  /**
   *  ==========================================================================
   *  Event Listeners for UI Elements
   *  ==========================================================================
   */

  app.headerTitle.addEventListener('click', function () {
    app.backToTop()
  })

  app.sidebar.menuButton.addEventListener('click', function () {
    if (app.hasVisibleSidebar) {
      app.toggleSideBar(false)
    } else {
      app.toggleSideBar(true)
    }
  })

  app.sidebar.sidebarContainer.addEventListener('click', function (e) {
    if (e.target === app.sidebar.sidebarContainer) {
      app.toggleSideBar(false)
    }
  })

  /**
   *  ==========================================================================
   *  Methods to Update/Refresh UI
   *  ==========================================================================
   */

  app.backToTop = function () {
    app.main.scrollTop = 0
  }

  app.toggleSideBar = function (visible) {
    if (visible) {
      Object.keys(app.sidebar).forEach(function (widget) {
        app.sidebar[widget].classList.add('active')
      })
      app.hasVisibleSidebar = true
    } else {
      Object.keys(app.sidebar).forEach(function (widget) {
        app.sidebar[widget].classList.remove('active')
      })
      app.hasVisibleSidebar = false
    }
  }
})()
