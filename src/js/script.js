document.addEventListener('mousemove', event => {
	const globe = document.querySelector('.about__globe-img')
	const rect = globe.getBoundingClientRect()
	const globeX = rect.left + rect.width / 2 // Центр глобуса по X
	const globeY = rect.top + rect.height / 2 // Центр глобуса по Y
	const deltaX = event.clientX - globeX
	const deltaY = event.clientY - globeY
	let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90 // Вычисляем угол

	globe.style.transform = `translateX(-50%) rotate(${angle}deg)`
})
