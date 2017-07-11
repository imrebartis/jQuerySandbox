// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){ //we use 'on' because it adds listeners also to all potential future elements
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){ //we use 'on' because it adds listeners also to all potential future elements
	$(this).parent().fadeOut(500,function(){ //the parent here is the li, so that's what will be removed
		$(this).remove();
	});
	event.stopPropagation(); //this will stop the event from bubbling up to its parent elements (here: li, ul, the container div, body)
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});