const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listElement = document.querySelector('.gallery');

const itemsMarkup = images
    .map(({ url, alt }) => {
        return `<li><img width="200" height="150"src=${url} alt=${alt}></li>`;
    })
    .join('');
listElement.setAttribute(
    "style",
    "list-style:none; display: flex; gap: 15px; padding-top: 30px; justify-content:center;"
  );
listElement.insertAdjacentHTML('beforeend', itemsMarkup);
