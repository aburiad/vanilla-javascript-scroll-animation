
let selectBox = document.querySelectorAll('.item');

function scrollAnimFunc() {
    let selectBoxx = document.querySelectorAll('.newclass');
    selectBoxx.forEach((item)=>{
        let position = item.getBoundingClientRect().top;
        console.log(item)
        let screenposition = window.innerHeight / 1;
    
        if (position < screenposition) {
            item.classList.add('fadein');
        }
    })

}
window.addEventListener('scroll', scrollAnimFunc);
