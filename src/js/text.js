document.querySelectorAll('.features-button').forEach(button => {
	button.addEventListener('click', () => {
		const parentBlock = button.closest('.features-block')
		const allBlocks = document.querySelectorAll('.features-block')
		const techSection = document.querySelector('.tech')
		techSection.style.transition = 'min-height 0.3s ease'

		let currentMinHeight =
			parseInt(window.getComputedStyle(techSection).minHeight) || 0

		if (parentBlock.classList.contains('open')) {
			parentBlock.classList.remove('open')
			techSection.style.minHeight = `${currentMinHeight - 150}px`
		} else {
			allBlocks.forEach(block => {
				if (block !== parentBlock && block.classList.contains('open')) {
					block.classList.remove('open')
					currentMinHeight -= 150
				}
			})
			parentBlock.classList.add('open')
			techSection.style.minHeight = `${currentMinHeight + 150}px`
		}
	})
})
