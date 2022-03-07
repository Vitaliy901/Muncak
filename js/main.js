let toTop = document.querySelector('#toTop')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
// =======scroll toTop
window.addEventListener('scroll', function (e) {
	let size = footer.offsetTop - window.innerHeight

	if (window.scrollY >= size) {
		toTop.classList.add('_active-element')
	 } else {
		 toTop.classList.remove('_active-element')
	 }
})
toTop.addEventListener('click', function (e) {
	header.scrollIntoView({block: 'start', behavior: 'smooth'})
})

// =========move background
const speed = 20;
window.addEventListener('mousemove', function (e) {
	header.style.backgroundPosition = `bottom ${e.clientY / speed / 100 + 15}% right ${e.clientX / speed / 100 + 5}%, 
	left ${e.clientX / speed / 100 + 44}% top ${e.clientY / speed / 100 + 52}%, right  top, 
	left -13% bottom, left ${e.clientX / speed / 100 + 1}% top ${e.clientY / speed / 100 + 40}%`;
	
})

// ========count
