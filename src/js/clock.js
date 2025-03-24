function updateTime() {
	const timeZones = {
		Dubai: 'Asia/Dubai',
		Tokyo: 'Asia/Tokyo',
		Milan: 'Europe/Rome',
		'New York': 'America/New_York',
		London: 'Europe/London',
	}

	document.querySelectorAll('.footer__block').forEach(block => {
		const captionElement = block.querySelector('.footer__time-caption')
		const timeElement = block.querySelector('.footer__time')

		// Если в этом блоке нет нужных элементов, просто пропускаем его
		if (!captionElement || !timeElement) {
			return
		}

		const caption = captionElement.textContent.trim()

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
document.addEventListener('DOMContentLoaded', updateTime)
