$('.show-filters').on('click', function () {
	if ($('.filters-list').is(':visible')) {
		$('.filters-list').slideUp()
		$('.show-filters').text('Show filters')
	} else {
		$('.filters-list').slideDown()
		$('.show-filters').text('Hide filters')
	}

	// This will block the default behavior of the # href jumping to the top of the page
	return false
})

$('.filters-list a').on('click', function() {
	var filter = $(this).attr('data-filter')
	

	// 1. Hide all the products
	// 2. Show the products with a particular filter

	$('.product').hide()
	$(filter).show()


	// first we remove all the selected classes from our filters
	$('.filters-list a').removeClass('selected')


	// This will add a class name of the selected to the current filter link that we just clicked on
	$(this).addClass('selected')


	// This blocks the link from following the href
	return false
})