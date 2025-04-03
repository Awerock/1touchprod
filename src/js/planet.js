// Планеты следят за мышкой.

document.addEventListener('mousemove', event => {
	const planet = document.querySelector('.planet-two')
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

document.addEventListener('mousemove', event => {
	const planet = document.querySelector('.glasses__logo-planet')
	const orbit = document.querySelector('.glasses__logo')

	const orbitSize = orbit.getBoundingClientRect()
	const orbitCenterX = orbitSize.left + orbitSize.width / 2
	const orbitCenterY = orbitSize.top + orbitSize.height / 2

	const mouseX = event.clientX
	const mouseY = event.clientY

	const angle = Math.atan2(mouseY - orbitCenterY, mouseX - orbitCenterX)
	const angleDeg = angle * (180 / Math.PI)

	planet.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(114px) rotate(-171deg)`
})

document.addEventListener('mousemove', event => {
	const planet = document.querySelector('.remote__circle-planet-one')
	const orbit = document.querySelector('.remote__circle-bg')

	const orbitSize = orbit.getBoundingClientRect()
	const orbitCenterX = orbitSize.left + orbitSize.width / 2
	const orbitCenterY = orbitSize.top + orbitSize.height / 2

	const mouseX = event.clientX
	const mouseY = event.clientY

	const angle = Math.atan2(mouseY - orbitCenterY, mouseX - orbitCenterX)
	const angleDeg = angle * (180 / Math.PI)

	planet.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(746px) rotate(-171deg)`
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
	if (window.innerWidth >= 978) {
		updateLine()
		requestAnimationFrame(animate)
	} else {
		line.style.width = '0px'
	}
}

animate()
