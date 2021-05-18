// Intersection Observer Implementation

window.addEventListener('DOMContentLoaded', () => {

	let options ={
		root: null,
		rootMargin: "-50% 0px ",
		threshold: 0
	};

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio>0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} 
			else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	},options);

	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
		console.log('watching')
	});
	
});


// Side Panel Functionality

function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    }

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    }