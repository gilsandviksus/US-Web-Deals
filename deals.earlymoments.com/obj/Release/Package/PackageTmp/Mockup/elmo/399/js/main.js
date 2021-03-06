// JavaScript Document

//date picker
$(window).load(function(){
	$(".date-picker").datepicker();
	$(".date-picker").on("change", function () {
	    var id = $(this).attr("id");
	    var val = $("label[for='" + id + "']").text();
	    $("#msg").text(val + " changed");
	});
});

//scroll
function goToByScroll(id){
	id = id.replace("link", "");
	$('html,body').animate({
		scrollTop: $("#"+id).offset().top},
		'slow');
}
$("#aboutlink").click(function(e) { 
	e.preventDefault(); 
	goToByScroll($(this).attr("id"));           
});