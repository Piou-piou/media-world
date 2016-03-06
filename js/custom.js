$(document).ready(function() {
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

	//on cache les cercles
	if (!is_chrome) {
		$('#perso1').fadeOut(0);
		$('#video_cercle').fadeOut(0);
		$('#son2_cercle').fadeOut(0);
		$('#prog_cercle').fadeOut(0);
		$('#graphisme2_cercle').fadeOut(0);
		$('#com_cercle').fadeOut(0);
	}	
	
	
	
	
	//pour le changement des couleurs en fonction des couleurs 
	$('#nav').on("click","a", function(event) {
		event.preventDefault();
		var pos = $(this).attr("href");
		//chagement classe suivant la pos de a
		if (pos == "#accueil") {
			var classe = $("");
			changesnav(classe);
		}
		else if (pos == "#son") {
			var classe = $(".lson");
			changesnav(classe);
		}
		else if (pos == "#programmation") {
			var classe = $(".lprogrammation");
			changesnav(classe);
		}
		else if (pos == "#communication") {
			var classe = $(".lcommunication");
			changesnav(classe);
		}
		else if (pos == "#graphisme") {
			var classe = $(".lgraphisme");
			changesnav(classe);
		}
		else if (pos == "#video") {
			var classe = $(".lvideo");
			changesnav(classe);
		}
		else {
			var classe = $("");
			changesnav(classe);
		}
	});
	
	//modifier icone avec scroll
	$(document).scroll(function(){
		if (!autoScroll) {
			if (!is_chrome) {
				var scroll = $('html').scrollTop()+590;
				var scrollIndex = $('#accueil2').offset().top;
				var scrollVideo = $('#video2').offset().top+590;
				var scrollSon = $('#son2').offset().top;
				var scrollProg = $('#prog').offset().top;
				var scrollGraphisme = $('#graphisme2').offset().top;
				var scrollCom = $('#com').offset().top;
				var scrollQuest = $('#questionnaire').offset().top;
				
				if (scroll > scrollQuest) {
					$('#graphisme2_cercle').fadeOut(0);
					$('#com_cercle').fadeOut(0);
					var classe = $("");
					changesnav(classe);
				}
				else if (scroll > scrollCom) {
					$('#graphisme2_cercle').fadeOut(0);
					$('#com_cercle').fadeIn(1000);
					var classe = $(".lcommunication");
					changesnav(classe);
				}
				else if (scroll > scrollGraphisme) {
					$('#prog_cercle').fadeOut(0);
					$('#com_cercle').fadeOut(0);
					$('#graphisme2_cercle').fadeIn(1000);
					var classe = $(".lgraphisme");
					changesnav(classe);
				}	
				else if (scroll > scrollProg) {
					$('#son2_cercle').fadeOut(0);
					$('#graphisme2_cercle').fadeOut(0);
					$('#prog_cercle').fadeIn(1000);
					var classe = $(".lprogrammation");
					changesnav(classe);
					
				}
				 else if (scroll > scrollSon) {
					$('#video_cercle').fadeOut(0);
					$('#prog_cercle').fadeOut(0);
					$('#son2_cercle').fadeIn(1000);
					var classe = $(".lson");
					changesnav(classe);
					
				}
				else if (scroll > scrollVideo) {
					$('#son2_cercle').fadeOut(0);
					$('#video_cercle').fadeIn(1000);
					var classe = $(".lvideo");
					changesnav(classe);
				}
				else if (scroll > scrollIndex) {
					var classe = $("");
					changesnav(classe);
				}
				if (scroll > 6058) {
					console.log(scroll);
					$('#perso1').fadeIn(0);
				}
				else {
					$('#perso1').fadeOut(0);
				}
			}
		}
	});
	
	//fonction pour la nav pour qu'au click on reste sur l'img
	function changesnav(classe) {
		$("#nav a").removeClass("color");
		classe.addClass("color");
	}
});
