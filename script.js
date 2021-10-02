
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
     'A Graphic Designer',
      'A UI/UX Designer'
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


