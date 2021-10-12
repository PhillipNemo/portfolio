
let role = document.querySelector('.role')
let toTop = document.querySelector(".to-top");


window.addEventListener("scroll", function () {
    if (window.scrollY > 200){
          toTop.style.opacity='1';
        }
        else{
            toTop.style.opacity='0';
    }
})  


let occupation = [
    'A Front-end Developer',
     'A Graphic Designer'
];
let time = 3000;
let i = 0;

function imageChange(){
	role.innerHTML = occupation[i];
	if (i < occupation.length-1){
		i++
	}else{
		i = 0;
	}
}
setInterval(imageChange,time)


const scrollOffset = 100;
const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
  el.style.opacity = 0
})

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }else{
      hideScrollElement(el);
    }
  })
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
}

const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
}

window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

