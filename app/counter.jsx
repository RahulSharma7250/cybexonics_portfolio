let interval = 10000;
let display = document.querySelectorAll(".num");

display.forEach((display) => {
	let start = 0;
	let end = parseInt(display.getAttribute("end"));
	let duration = Math.floor(interval/end);
	let counter = setInterval(function () {
		start +=1;
		display.textContent = start;
		if(start == end){
			clearInterval(counter);
		}
	},duration)
})
