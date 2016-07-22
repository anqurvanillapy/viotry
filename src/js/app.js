(function () {
  'use strict'

  var app = {
    hasVisibleSidebar: false,
    header: document.querySelector('.header'),
    main: document.querySelector('.main'),
    menuButton: document.getElementById('menuButton'),
    sidebarOverlay: document.querySelector('.sidebar-overlay'),
    sidebar: document.querySelector('.sidebar')
  }

  /**
   *  ==========================================================================
   *  Event Listeners for UI Elements
   *  ==========================================================================
   */

  app.header.addEventListener('click', function () {
    app.backToTop()
  })

  app.menuButton.addEventListener('click', function () {
    if (app.hasVisibleSidebar) {
      app.toggleSideBar(false)
    } else {
      app.toggleSideBar(true)
    }
  })

  app.sidebarOverlay.addEventListener('click', function (e) {
    if (e.target === app.sidebarOverlay) {
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
      app.menuButton.classList.add('active')
      app.sidebarOverlay.classList.add('active')
      app.sidebar.classList.add('active')
      app.hasVisibleSidebar = true
    } else {
      app.menuButton.classList.remove('active')
      app.sidebarOverlay.classList.remove('active')
      app.sidebar.classList.remove('active')
      app.hasVisibleSidebar = false
    }
  }
})()
