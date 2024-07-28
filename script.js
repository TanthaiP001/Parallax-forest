let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY

    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
})

// window.addEventListener("scroll", function () {
//     let value = window.scrollY;
//     document.getElementById("hill1").style.top = value * 0.5 + "px";
//     document.getElementById("hill2").style.top = value * 0.4 + "px";
//     document.getElementById("hill3").style.top = value * 0.3 + "px";
//     document.getElementById("hill4").style.top = value * 0.2 + "px";
//     document.getElementById("hill5").style.top = value * 0.1 + "px";
//     document.getElementById("tree").style.top = value * 0 + "px";
//     document.getElementById("text").style.marginTop = value * 1.5 + "px";
//     document.getElementById("leaf").style.left = value * 1.5 + "px";
//     document.getElementById("plant").style.left = value * -1.5 + "px";
//   });
  