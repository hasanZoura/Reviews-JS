const reviews = [
  {
    id: 1,
    img: 'assets/image01.jpg',
    auther: 'Person 1',
    job: 'web developer',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nam sunt laboriosam cupiditate quis cum porro nesciunt quaerat rerum eum? Minus beatae aspernatur qui atque fugiat, magni a optio quos!'
  },
  {
    id: 2,
    img: 'assets/image02.jpg',
    auther: 'Person 2',
    job: 'Frontend Developer',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nam sunt laboriosam cupiditate quis cum porro nesciunt quaerat rerum eum? Minus beatae aspernatur qui atque fugiat, magni a optio quos!'
  },
  {
    id: 3,
    img: 'assets/image03.png',
    auther: 'Person 3',
    job: 'Backend Developer',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nam sunt laboriosam cupiditate quis cum porro nesciunt quaerat rerum eum? Minus beatae aspernatur qui atque fugiat, magni a optio quos!'
  },
  {
    id: 4,
    img: 'assets/image04.png',
    auther: 'Person 4',
    job: 'Web Developer',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nam sunt laboriosam cupiditate quis cum porro nesciunt quaerat rerum eum? Minus beatae aspernatur qui atque fugiat, magni a optio quos!'
  }
];

const img = document.getElementById("person-image");
const auther = document.getElementById("auther");
const job = document.getElementById("job");
const info = document.getElementById("info");

const pervBtn = document.querySelector(".prevButton");
const nextBtn = document.querySelector(".nextButton");
const randomBtn = document.querySelector(".randomButton");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  auther.textContent = item.auther;
  job.textContent = item.job;
  info.textContent = item.info;

};

pervBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  };
  showPerson(currentItem);
});
nextBtn.addEventListener('click', () => {
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  };
  showPerson(currentItem);
});

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

document.addEventListener('keyup', () => {
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem = 0;
  };
  showPerson(currentItem);
});