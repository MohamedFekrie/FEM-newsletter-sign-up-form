const container = document.querySelector('.container');
const mainImg = document.querySelector('.img img');
const emailInp = document.getElementById('input');
const submit = document.getElementById('submit');
const worringLabel = document.querySelector('label:last-of-type');
const finalBox = document.querySelector('.box');
const finalBtn = document.querySelector('.box #dismiss-msg');
const emailSpan = document.querySelector('.box p span');


// Change the main img on resize the page
window.onresize = () => {
    if (innerWidth > 767) {
        mainImg.src = "/assets/images/illustration-sign-up-desktop.svg"
    } else {
        mainImg.src = "/assets/images/illustration-sign-up-mobile.svg"
    }
}
// to save the img on dismiss btn in diffrent devices
if (innerWidth > 767) {
    mainImg.src = "/assets/images/illustration-sign-up-desktop.svg"
} else {
    mainImg.src = "/assets/images/illustration-sign-up-mobile.svg"
}

submit.addEventListener('click', (e) => {
    e.preventDefault(e)
    let emailRegx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([\.a-z]{2,8})?$/ig;
    if (emailRegx.test(emailInp.value)) {
        worringLabel.classList.remove('on');
        container.classList.add('d-none');
        finalBox.classList.add('on');
        emailSpan.innerHTML = emailInp.value;
    } else {
        worringLabel.classList.add('on');
    }
})

finalBtn.addEventListener('click', () => {
    location.reload()
})
