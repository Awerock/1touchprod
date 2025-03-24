/* window.addEventListener('scroll', function () {
	const targetSection = document.getElementById('degree')
	const movingBlock = document.getElementById('glasses')
	const movingPole = document.getElementById('pole')
	const rect = targetSection.getBoundingClientRect()
	const windowHeight = window.innerHeight

	if (rect.top <= windowHeight && rect.bottom >= 0) {
		const scrollPercentage =
			(windowHeight - rect.top) / (windowHeight + rect.height)
		const newTopPositionForGlass = 435 + 300 * scrollPercentage
		movingBlock.style.top = `${newTopPositionForGlass}px`
		const newTopPositionForPole = 330 - 280 * scrollPercentage
		movingPole.style.top = `${newTopPositionForPole}px`
	}
}) */

// Сохраняем изначальные позиции элементов
const movingBlock = document.getElementById('glasses')
const movingPole = document.getElementById('pole')
const initialTopPositionForGlass = parseFloat(
	window.getComputedStyle(movingBlock).top
)
const initialTopPositionForPole = parseFloat(
	window.getComputedStyle(movingPole).top
)
const targetSection = document.getElementById('degree')

// Функция для обновления позиций элементов при прокрутке
function updatePositions() {
	const rect = targetSection.getBoundingClientRect()
	const windowHeight = window.innerHeight
	const windowWidth = window.innerWidth

	if (rect.top <= windowHeight && rect.bottom >= 0) {
		const scrollPercentage =
			(windowHeight - rect.top) / (windowHeight + rect.height)
		let glassOffset = 300
		let poleOffset = 280

		// Изменяем значения смещения для экранов 1336px и ниже
		if (windowWidth <= 1336) {
			glassOffset = 500
			poleOffset = 480
		}

		const newTopPositionForGlass =
			initialTopPositionForGlass + glassOffset * scrollPercentage
		movingBlock.style.top = `${newTopPositionForGlass}px`
		const newTopPositionForPole =
			initialTopPositionForPole - poleOffset * scrollPercentage
		movingPole.style.top = `${newTopPositionForPole}px`
	}
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', updatePositions)
