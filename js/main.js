let toTop = document.querySelector('#toTop')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
let nums = document.querySelectorAll('.count')
let support = document.querySelector('.support-wrapper')
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
let arr = []
let quantityStart = 0;
let startFirst = 0;
let startSecond = 111;
let startThird = 10;

window.addEventListener('scroll', function count(e) {
	let size = support.offsetTop + header.offsetHeight  - this.innerHeight;
	console.log(size)
	console.log(this.scrollY + "!")
	if (this.scrollY > size) {
		for (let i = 0; i < nums.length; i++) {
			arr.push(nums[i].innerHTML)
			counts(nums[i], arr[i])
		}
		this.removeEventListener('scroll', count);
	} 
	
})

function counts(a, b) {
	console.log("!")
	let	id = setInterval(function (element, finish) {

		if (element.innerHTML.length > 6) {
			element.innerHTML = startSecond++ + ',' + startSecond++;
		} 
		if (element.innerHTML.length > 3 && element.innerHTML.length <= 6 ) {
			element.innerHTML = startThird++ + ',' + startSecond++;
		}
		if (element.innerHTML.length  <= 3) {
			element.innerHTML = startFirst++;
		}
		if (quantityStart++ > 108) {
			element.innerHTML = finish
			clearInterval(id)
		}
	}, 50, a,b)
}