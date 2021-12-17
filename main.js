
let selectBox = document.querySelectorAll('.iteddm');

selectBox[0].style.background = "green";
selectBox[1].style.background = "yellow";
selectBox[2].style.background = "pink";
selectBox[3].style.background = "hotpink";
selectBox[4].style.background = "red";
selectBox[5].style.background = "black";
selectBox[6].style.background = "orange";
selectBox[7].style.background = "blue";
selectBox[8].style.background = "navyblue";
selectBox[9].style.background = "green";
selectBox[10].style.background = "green";

function scrollAnimFunc() {
    let selectBoxx = document.querySelector('.newclass');
    let position = selectBoxx.getBoundingClientRect().top;
    console.log(position)
    let screenposition = window.innerHeight / 2;

    if (position < screenposition) {
        selectBoxx.classList.add('fadein');
    }
}
window.addEventListener('scroll', scrollAnimFunc);
