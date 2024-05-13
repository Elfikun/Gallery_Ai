window.onload = function () {
	setTimeout(function () {

		document.body.classList.add('loaded')

		if (window.matchMedia('(max-width: 991px)').matches) {

			Draggable.create('.gallery', {
				bounds: 'body',
				inertia: true
			})
		}
	}, 200)
}