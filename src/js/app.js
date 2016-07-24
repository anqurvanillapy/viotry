(function () {
  'use strict'

  var app = {
    hasVisibleSidebar: false,
    headerTitle: document.querySelector('.header__title'),
    main: document.querySelector('.main'),
    sidebarView: {
      menuButton: document.getElementById('menuButton'),
      sidebarOverlay: document.querySelector('.sidebar-overlay'),
      sidebar: document.querySelector('.sidebar')
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

  app.sidebarView.menuButton.addEventListener('click', function () {
    if (app.hasVisibleSidebar) {
      app.toggleSideBar(false)
    } else {
      app.toggleSideBar(true)
    }
  })

  app.sidebarView.sidebarOverlay.addEventListener('click', function () {
    app.toggleSideBar(false)
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
      Object.keys(app.sidebarView).forEach(function (widget) {
        app.sidebarView[widget].classList.add('active')
      })
      app.hasVisibleSidebar = true
    } else {
      Object.keys(app.sidebarView).forEach(function (widget) {
        app.sidebarView[widget].classList.remove('active')
      })
      app.hasVisibleSidebar = false
    }
  }
})()
