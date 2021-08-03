var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight

// Open Close menu mobile
mobileMenu.onclick = function() {
var isClose = header.clientHeight === headerHeight
    if(isClose) {
        header.style.height = 'auto'
    } else {
        header.style.height = '46px'
    }
}

// An hien subnav
// var isOpenSubNav = false

// function collapseSubNav() {
//     isOpenSubNav = !isOpenSubNav
//     if(isOpenSubNav) {
//         document.querySelector('.subnav').style.position = 'initial'
//     } else {
//         document.querySelector('.subnav').style.position = 'absolute'
//     }
// }

// Chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i=0; i < menuItems.length; i++) {
    var menuItem = menuItems[i]
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isParentMenu) {
            // collapseSubNav()
            event.preventDefault()
        } else {
            header.style.height = '46px'
        }
    }
}
