window.addEventListener("load", function (event) {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	const modalTriger = document.querySelectorAll('[data-target]')
	const modalWindow = document.querySelectorAll('.custom-modal')
	const btnsCloseModal = document.querySelectorAll('.custom-modal__close')

	modalTriger.forEach(triger => {
		triger.addEventListener('click', (event) => {

			event.preventDefault()
			const modalId = triger.getAttribute('data-target')

			document.querySelector('#' + modalId).classList.add('show')
		})
	})

	const removeShowClass =()=> {
		modalWindow.forEach(modal => {
			modal.classList.remove('show')
		})
	}

	btnsCloseModal.forEach(btn => {
		btn.addEventListener('click', ()=> {
			removeShowClass()
		})
	})

	modalWindow.forEach(modal => {
		modal.addEventListener('click', (e) => {
	    	if (e.target === modal) {
				modal.classList.remove('show');
			}
		});
	});
 	// Закрытие модального окна по нажатию клавиши Escape
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') { // Проверяем, была ли нажата клавиша Escape
	   	removeShowClass(); // Закрываем модальное окно
		}
	});
})
