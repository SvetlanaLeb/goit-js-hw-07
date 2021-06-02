// const itemsElOne=document.querySelectorAll('.item');
// console.log(`В списке ${itemsElOne.length} категории`);
// itemsElOne.forEach(elem => {
//      console.log(`Категория: ${elem.querySelector('h2').textContent}`)
//      console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`);
//     });


/Второй вариант/

const itemsElTwo=document.querySelectorAll('.item');
console.log(`В списке ${itemsElTwo.length} категории`);
itemsElTwo.forEach(elem => {
     console.log(`Категория: ${elem.firstElementChild.textContent}`)
     console.log(`Количество элементов: ${elem.lastElementChild.children.length}`);
     });
    