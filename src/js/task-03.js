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

const galleryRef = document.querySelector('#gallery');

galleryRef.insertAdjacentHTML('afterbegin', '<style>li {list-style: none; display: inline-block;}</style>');



const pictureListCreator = () => {
    const pictures = images.map((atr) => {
    const imgRef = galleryRef.insertAdjacentHTML('afterbegin', '<li><img></li>');

    const imgTeg = document.querySelector('img');

    imgTeg.style.height = '265px';
    imgTeg.style.marginLeft = '20px';
    

    const imgUrl = atr.url;
    const imgAlt = atr.alt;
    
    imgTeg.setAttribute('src', imgUrl);
    imgTeg.setAttribute('alt', imgAlt);
    imgTeg.setAttribute('width', 400);

    return imgRef;
})
}
 
pictureListCreator();


