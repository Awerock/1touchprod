// Открываем меню.

document.addEventListener('DOMContentLoaded', function () {
	const menuButton = document.getElementById('menuButton')
	const menu = document.querySelector('.menu')

	menuButton.addEventListener('click', function (event) {
		event.stopPropagation()
		menu.classList.toggle('menu__open')
		menuButton.classList.toggle('open')
	})

	document.addEventListener('click', function (event) {
		if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
			menu.classList.remove('menu__open')
			menuButton.classList.remove('open')
		}
	})
})
