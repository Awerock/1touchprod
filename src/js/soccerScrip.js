// Функция для изменения видео и заголовка
function changeVideoAndTitle(camera, videoSrc, titleText) {
	const videoFrame = document.querySelector('.soccer__yt')
	const videoTitle = document.querySelector('.caption--soccer')

	// Меняем src видео и заголовок
	videoFrame.src = videoSrc
	videoTitle.textContent = titleText

	// Убираем предыдущие классы visibility
	const allCams = document.querySelectorAll('.soccer__camImg')
	allCams.forEach(cam => cam.classList.remove('soccer__camImg-vision'))

	// Добавляем новый класс для выделенной камеры
	camera.classList.add('soccer__camImg-vision')
}

// Обработчики для каждой камеры
document.getElementById('cam-left').addEventListener('click', function () {
	changeVideoAndTitle(
		this,
		'https://www.youtube.com/embed/nP0a1ED1CYI?si=SNhZ0uxlMjq8xLV3',
		'Left'
	)
})

document.getElementById('cam-right').addEventListener('click', function () {
	changeVideoAndTitle(
		this,
		'https://www.youtube.com/embed/PDgBEzrkBQ4?si=TmInE4fV8UUZMI1j',
		'Right'
	)
})

document.getElementById('cam-niz').addEventListener('click', function () {
	changeVideoAndTitle(
		this,
		'https://www.youtube.com/embed/NPQps4lIpuk?si=Z6jtLtTifeZrRnk6',
		'Coach view'
	)
})

document.getElementById('cam-center').addEventListener('click', function () {
	changeVideoAndTitle(
		this,
		'https://www.youtube.com/embed/b86HxkaRYwo?si=fvF9DyHUnnbSJ1x0',
		'Center'
	)
})
