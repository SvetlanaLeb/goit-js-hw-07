const images = [
    {
      url:
        "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
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
    {
      url:
        'https://www.1zoom.ru/big2/625/283144-alexfas01.jpg',
      alt: "White and Black Long Fur Cat 1",
    },
    {
      url:
        'https://c.wallhere.com/photos/de/5b/rabbit_grass_animal-621414.jpg!d',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://i.artfile.ru/1920x1200_861630_[www.ArtFile.ru].jpg',
      alt: 'Group of Horses Running',
    },

];

  const makeImagesGalleryMarkup = ({url, alt}) => {
       return `
       <li>
         <img src="${url}" alt="${alt}" />
        </li>
        ` ;
      };

  const listGallery=document.querySelector('#gallery');

  const makeImagesGallery = images.map(makeImagesGalleryMarkup).join('');

  listGallery.insertAdjacentHTML('beforeend', makeImagesGallery);

  const makeDesignedGallery =( listGallery) => {

    const listEl=document.querySelectorAll('#gallery li');
    listEl.forEach((elem) => {elem.classList.add('gallery-list')});
    
    const img=document.querySelectorAll('#gallery img');
    img.forEach((el) => {el.classList.add('gallery-image')})
  };
  makeDesignedGallery()

 


    
    