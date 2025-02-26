// Глобус следит за мышкой.

document.addEventListener('mousemove', event => {
	const globus = document.querySelector('.about__globe-img')
	const globusSize = globus.getBoundingClientRect()
	const globusX = globusSize.left + globusSize.width / 2 // Центр глобуса по X
	const globusY = globusSize.top + globusSize.height / 2 // Центр глобуса по Y
	const deltaX = event.clientX - globusX
	const deltaY = event.clientY - globusY
	let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90 // Вычисляем угол

	globus.style.transform = `translateX(-50%) rotate(${angle}deg)`
})

// Анимация шариков.

function randomPosition() {
	return Math.random() * 10 - 2
}

function shakeBubbles() {
	const bubbles = document.querySelectorAll('.bubble')

	bubbles.forEach(bubble => {
		const offsetX = randomPosition()
		const offsetY = randomPosition()

		bubble.style.transition = 'transform 0.5s'
		bubble.style.transform = `translate(${offsetX}px, ${offsetY}px)`
	})
}
setInterval(shakeBubbles, 100)

// Планета следит за мышкой.

document.addEventListener('mousemove', event => {
	const planet = document.querySelector('.planet-two') // Меняем на planet-two
	const orbit = document.querySelector('.orbit-two')

	const orbitSize = orbit.getBoundingClientRect()
	const orbitCenterX = orbitSize.left + orbitSize.width / 2
	const orbitCenterY = orbitSize.top + orbitSize.height / 2

	const mouseX = event.clientX
	const mouseY = event.clientY

	const angle = Math.atan2(mouseY - orbitCenterY, mouseX - orbitCenterX)
	const angleDeg = angle * (180 / Math.PI)

	planet.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(110px) rotate(-171deg)`
})

// Планета соединена с точкой.

const planetThreeThree = document.querySelector('.planet-three-three')
const liveCaptionBubble = document.querySelector('.live__caption-bubble')
const line = document.querySelector('.line')
const orbitThree = document.querySelector('.orbit-three')

function updateLine() {
	const x1 = liveCaptionBubble.offsetLeft + liveCaptionBubble.offsetWidth / 2
	const y1 = liveCaptionBubble.offsetTop + liveCaptionBubble.offsetHeight / 2 // Центр красного шарика

	const rect = planetThreeThree.getBoundingClientRect()
	const parentRect = orbitThree.getBoundingClientRect()
	const x2 = rect.left + planetThreeThree.offsetWidth / 2 - parentRect.left
	const y2 = rect.top + planetThreeThree.offsetHeight / 2 - parentRect.top // Центр синего шарика

	const dx = x2 - x1
	const dy = y2 - y1
	const distance = Math.sqrt(dx * dx + dy * dy)
	const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI

	line.style.width = `${distance}px`
	line.style.transform = `rotate(${angleDeg}deg)`
	line.style.left = `${x1}px`
	line.style.top = `${y1}px`
}

function animate() {
	updateLine()
	requestAnimationFrame(animate)
}

animate()

window.addEventListener('scroll', function () {
	const targetSection = document.getElementById('degree')
	const movingBlock = document.getElementById('glasses')
	const movingPole = document.getElementById('pole')
	const rect = targetSection.getBoundingClientRect()
	const windowHeight = window.innerHeight

	// Check if the target section is in the viewport
	if (rect.top <= windowHeight && rect.bottom >= 0) {
		const scrollPercentage =
			(windowHeight - rect.top) / (windowHeight + rect.height)
		const newTopPositionForGlass = 435 + 300 * scrollPercentage
		movingBlock.style.top = `${newTopPositionForGlass}px`
		const newTopPositionForPole = 330 - 280 * scrollPercentage
		movingPole.style.top = `${newTopPositionForPole}px`
	}
})

function randomFloat(min, max) {
	return Math.random() * (max - min) + min
}

function animateHex(hex) {
	const deltaX = randomFloat(0, 7)
	const deltaY = randomFloat(0, 7)

	hex.style.transform = `translate(${deltaX}px, ${deltaY}px)`

	setTimeout(() => animateHex(hex), randomFloat(200, 400)) // Меняет позицию каждые 2-4 секунды
}

document.addEventListener('DOMContentLoaded', () => {
	const hexes = document.querySelectorAll('.hex')
	hexes.forEach(hex => animateHex(hex))
})

document.querySelectorAll('.features-button').forEach(button => {
	button.addEventListener('click', () => {
		const parentBlock = button.closest('.features-block') // находим родительский блок
		parentBlock.classList.toggle('open') // Добавляем или удаляем класс 'open'
	})
})

function updateTime() {
	const timeZones = {
		Dubai: 'Asia/Dubai',
		Tokyo: 'Asia/Tokyo',
		Milan: 'Europe/Rome',
		'New York': 'America/New_York',
		London: 'Europe/London',
	}

	document.querySelectorAll('.footer__block').forEach(block => {
		const caption = block
			.querySelector('.footer__time-caption')
			.textContent.trim()
		const timeElement = block.querySelector('.footer__time')

		if (timeZones[caption]) {
			const now = new Date()
			const options = {
				timeZone: timeZones[caption],
				hour: '2-digit',
				minute: '2-digit',
			}
			timeElement.textContent = new Intl.DateTimeFormat(
				'en-GB',
				options
			).format(now)
		}
	})
}

// Обновляем время каждую секунду
setInterval(updateTime, 1000)
updateTime()
