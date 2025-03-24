// Возвращаемся вверх.

document.getElementById('back-to-top').addEventListener('click', function () {
	window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Мини модальное окною

document.addEventListener('DOMContentLoaded', function () {
	const openModal = document.getElementById('openModal')
	const form = document.getElementById('feedback')

	// Открываем окно
	openModal.addEventListener('click', function () {
		form.classList.add('open')
	})

	document.addEventListener('click', function (e) {
		if (!form.contains(e.target) && !openModal.contains(e.target)) {
			form.classList.remove('open')
		}
	})

	form.addEventListener('submit', function () {
		setTimeout(() => {
			form.classList.remove('open')
		}, 500)
	})
})

// Модльное окно большое.

document.querySelectorAll('.open-modal').forEach(button => {
	button.addEventListener('click', function () {
		const modal = document.getElementById('modal')
		const body = document.body
		modal.style.display = 'block'
		body.classList.add('no-scroll')
	})
})

document.getElementById('modal').addEventListener('click', function (event) {
	const modalContent = document.querySelector('.collab')

	if (!modalContent.contains(event.target)) {
		const modal = document.getElementById('modal')
		const body = document.body
		modal.style.display = 'none'
		body.classList.remove('no-scroll')
	}
})

document.getElementById('modal__close').addEventListener('click', function () {
	const modal = document.getElementById('modal')
	const body = document.body
	modal.style.display = 'none'
	body.classList.remove('no-scroll')
})

/* // Вызываем функцию при загрузке и изменении размера экрана
window.onload = scalePage
window.onresize = () => requestAnimationFrame(scalePage)

function updateMenuPosition() {
	const nav = document.querySelector('.header__nav')
	const menu = document.querySelector('.menu')

	if (nav && menu) {
		const navLeft = nav.getBoundingClientRect().left // Берем текущее смещение nav
		menu.style.left = `${navLeft}px` // Применяем такое же смещение к меню
	}
}

// Вызываем при изменении размера экрана
window.addEventListener('resize', updateMenuPosition)
window.addEventListener('scroll', updateMenuPosition)
updateMenuPosition() */
