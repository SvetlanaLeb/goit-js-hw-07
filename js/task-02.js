const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const makeIncomingDataList = (data) => {return data.map(elem=>{
    const itemEl=document.createElement('li');
    itemEl.textContent=elem;
    return itemEl  })};


const list = makeIncomingDataList(ingredients);
const listEl=document.querySelector('#ingredients');
listEl.append(...list);
