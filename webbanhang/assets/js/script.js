let MenuItems = document.getElementById('MenuItems')

MenuItems.style.maxHeight = '0px'

function menutoggle() {
    if(MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px'
    } else {
        MenuItems.style.maxHeight = '0px'
    }
}

// ------------------------------------


let productImg = document.getElementById('productImg')
let smallImg = document.getElementsByClassName('small-img')

for(let i = 0; i < 4; i++) {
    smallImg[i].onclick = function() {
        productImg.src = smallImg[i].src;
    }
}

// smallImg[0].onclick = function() {
//     productImg.src = smallImg[0].src;
// }

// smallImg[1].onclick = function() {
//     productImg.src = smallImg[1].src;
// }

// smallImg[2].onclick = function() {
//     productImg.src = smallImg[2].src;
// }

// smallImg[3].onclick = function() {
//     productImg.src = smallImg[3].src;
// }















