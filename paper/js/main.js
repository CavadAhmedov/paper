$(function(){

	$("#nav-first-slide").click(function(){
		$(".first-slide-item").addClass("nav-show");
		$(".first-slide-item").siblings().removeClass("nav-show");
		$("#nav-first-slide").addClass("nav-border");
		$("#nav-first-slide").siblings().removeClass("nav-border");
	})

	$("#nav-second-slide").click(function(){
		$(".second-slide-item").addClass("nav-show");
		$(".second-slide-item").siblings().removeClass("nav-show");
		$("#nav-second-slide").addClass("nav-border");
		$("#nav-second-slide").siblings().removeClass("nav-border");
		

	})

	$("#nav-third-slide").click(function(){
		$(".third-slide-item").addClass("nav-show");
		$(".third-slide-item").siblings().removeClass("nav-show");
		$("#nav-third-slide").addClass("nav-border");
		$("#nav-third-slide").siblings().removeClass("nav-border");
	})




















});