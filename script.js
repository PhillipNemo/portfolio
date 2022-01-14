
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



let form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("status");
      let data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.add("success")
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.classList.add("error")
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit);
