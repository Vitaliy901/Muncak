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

window.addEventListener('mousemove', function (e) {

	if (e.clientX > 0) {
		
	}
	
})
