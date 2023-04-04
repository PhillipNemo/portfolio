
let role = document.querySelector('.role')
let toTop = document.querySelector(".to-top");
let year = document.querySelector("#year");

year.innerHTML = new Date().getFullYear();

window.addEventListener("scroll", function () {
    if (window.scrollY > 300){
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

