// Check off specific todos 
// When an li is clicked inside of a ul, run this code.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on trash can icon to delete todo
// When trash can icon is clicked inside of a ul, delete the span
// containing the todo
$("ul").on("click","span",function(event){
	//span  // li faded out
	$(this).parent().fadeOut(500,function(){
		// fade out the li
		$(this).remove();
	});

	// stop bubbling
	event.stopPropagation();
});

// When the user pushes enter, the input from the user will be added 
// to the todo list
$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		// Get input from user
		var todoText = $(this).val();
		// Clear the user input text
		$(this).val("");
		// create a new li and add to ul
		
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>").hide().fadeIn(500);
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});
