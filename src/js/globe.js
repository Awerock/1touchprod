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
setInterval(shakeBubbles, 200)
