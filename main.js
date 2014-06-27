$(document).on('ready', function() {

	$(".editable").one("click", function(){
  		$(this).html("<input type='text' value='" + $(this).text() + "'>")
	})

	$(document).on("blur", ".editable input", function(){
		newText = $(this).val()
		console.log(newText)
		console.log(newText)
		$(this).parent().html(newText)
	})


})

