window.onload = function(){
    let x = document.querySelector("#myTopnav");
    document.querySelector("#menu").onclick = function(){
         x.classList.toggle('responsive');
    }
}
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector(''+ blockID).scrollIntoView({
          behavior:"smooth",
          block:"start"
        })
    })
}
document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


document.getElementById("open-modal1-btn").addEventListener("click", function() {
    document.getElementById("my-modal1").classList.add("open")
})
document.getElementById("close-my-modal1-btn").addEventListener("click", function() {
    document.getElementById("my-modal1").classList.remove("open")
})
document.querySelector("#my-modal1 .modal1__box").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal1").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


document.getElementById("open-modal2-btn").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.add("open")
})
document.getElementById("close-my-modal2-btn").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.remove("open")
})
document.querySelector("#my-modal2 .modal2__box").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


document.getElementById("open-modal3-btn").addEventListener("click", function() {
    document.getElementById("my-modal3").classList.add("open")
})
document.getElementById("close-my-modal3-btn").addEventListener("click", function() {
    document.getElementById("my-modal3").classList.remove("open")
})
document.querySelector("#my-modal3 .modal3__box").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal3").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
