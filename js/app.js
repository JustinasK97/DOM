const button = document.querySelector('button');
const container = document.querySelector('.container');

const p = document.querySelectorAll('p');
const h3   = document.querySelectorAll('h3');

const colorBg = document.querySelector('.back')
const colorPst = document.querySelector('.pst')
const colorText = document.querySelector('.text')

button.addEventListener('click',changeColor)

function changeColor() {
    colorBg.style.backgroundColor = color.value;
    for (item of p){
        item.style.color = color.value;
    }
    for  (item2 of h3){
        item2.style.color = color.value;
    }
    .colorPst.style.backgroundColor = color.value;
}