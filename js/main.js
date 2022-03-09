let toTop = document.querySelector('#toTop')
let body = document.querySelector('body')
let footer = document.querySelector('footer')
let header = document.querySelector('header')
let nums = document.querySelectorAll('.count')
let support = document.querySelector('.support-wrapper')
// =======scroll toTop
window.addEventListener('scroll', function (e) {
	let size = footer.offsetTop - window.innerHeight

	if (window.scrollY >= size && footer.offsetWidth > 640) {
		toTop.classList.add('_active-element')
	 } else {
		 toTop.classList.remove('_active-element')
		 toTop.style.opacity = 1;
		 toTop.style.bottom = '10rem';
		 toTop.style.right = '3rem';
	 }
})
toTop.addEventListener('click', function (e) {
	scroll({top: 0, behavior: 'smooth'})
})

// =========move background
const speed = 20;
window.addEventListener('mousemove', function (e) {
	if (header.offsetWidth > 1400) {
		header.style.backgroundPosition = `bottom ${e.clientY / speed / 100 + 15}% right ${e.clientX / speed / 100 + 5}%, 
		left ${e.clientX / speed / 100 + 44}% top ${e.clientY / speed / 100 + 52}%, right  top, 
		left -15% bottom, left ${e.clientX / speed / 100 + 1}% top ${e.clientY / speed / 100 + 40}%`;
	} else {
		header.style.backgroundPosition = `bottom ${e.clientY / speed / 100 + 15}% right ${e.clientX / speed / 100 + 5}%, 
		left ${e.clientX / speed / 100 + 44}% top ${e.clientY / speed / 100 + 52}%, right  top,left ${e.clientX / speed / 100 + 1}% top ${e.clientY / speed / 100 + 40}%`;
	}
	
	if (header.offsetWidth > 1400) {
		body.style.backgroundPosition = `${e.clientX / speed / 100 + 48}% ${e.clientY / speed / 100 + 29.5}%, right -45% bottom 65%, right -45% bottom 65% , 
		left ${e.clientX / speed / 100 + 10}%  bottom ${e.clientY / speed / 100 + 50}%, bottom -30% right 360%, left 225% bottom -15%,bottom -32% left 50%, 
		right ${e.clientX / speed / 100 + -2}% top ${e.clientY / speed / 100 + 22}%, left -54%  bottom 34%, right -8% bottom 37%`;
	} else {
		body.style.backgroundPosition = `${e.clientX / speed / 100 + 48}% ${e.clientY / speed / 100 + 29.5}%, right 110% bottom 68%, right -45% bottom 65% , 
		left ${e.clientX / speed / 100 + 10}%  bottom ${e.clientY / speed / 100 + 50}%, bottom -30% right 360%, left 225% bottom -15%,bottom -7% left 50%, 
		right ${e.clientX / speed / 100 + -2}% top ${e.clientY / speed / 100 + 22}%, left -54%  bottom 34%, right -8% bottom 37%`;
	}
	
})


// ========count
let arr = []
let quantityStart = 0;
let startFirst = 0;
let startSecond = 111;
let startThird = 10;

window.addEventListener('scroll', function count(e) {
	let size = support.offsetTop + header.offsetHeight  - this.innerHeight;
	if (this.scrollY > size) {
		for (let i = 0; i < nums.length; i++) {
			arr.push(nums[i].innerHTML)
			counts(nums[i], arr[i])
		}
		this.removeEventListener('scroll', count);
	} 
	
})

function counts(a, b) {
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