const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const makeImagesGalleryMarkup = (options) => {return options.map(({url, alt})=>{
       return 
       `<li>
         <img src="${url}" alt="${alt}"/>
        </li>` }
  ).join('')
};
console.log(makeImagesGalleryMarkup(images));

  const listGallery=document.querySelector('#gallery');
  listGallery.insertAdjacentHTML('beforeend', makeImagesGalleryMarkup(images))


    /* const imagesGallery=makeImagesGallery(images);
    const listGallery=document.querySelector('#gallery');
    listGallery.append(...imagesGallery); */


/* 
    data.map(({url, alt})=>{
      const itemEl=document.createElement('li');
      itemEl.classList.add('gallery-list');
      const imgEl=document.createElement('img');
      imgEl.src=url;
      imgEl.alt=alt;
      imgEl.classList.add('gallery-image');
      itemEl.appendChild(imgEl); 
      console.log(itemEl);
      return itemEl  }) */
    