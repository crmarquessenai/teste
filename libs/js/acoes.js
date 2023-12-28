loadPage();
//
var aula = 1;
var totalAulas = 0;
var idAtual = 1;
var totalPaginasAcessadas = 0;
var limite = 0;
var idUltimoAcesso = 0;
var firefox = /Firefox/i.test(navigator.userAgent);
var ie = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
var zoom = 0;
var contraste = 0;
var fonte = 0;
var bloquearRolagem = false;

var suspendData = doLMSGetValue("cmi.suspend_data");

// ATUALIZAR ÍCONES DAS PÁGINAS ACESSADAS
function atualizarIconesPaginasVisitadas() {
	idVisitados = suspendData.split(';');
	idVisitados = idVisitados[aula - 1].split(',');
	for (i = 0; i < idVisitados.length - 1; i++) {
		$("#menu-paginas [data-aula=" + aula + "] #icoVisitado" + idVisitados[i]).removeClass("bi bi-circle").addClass("bi bi-check2-circle");
		$("#menu-paginas [data-aula=" + aula + "] [data-pagina=" + idVisitados[i] + "]").addClass("visited-menu");
	}
}

// FUNÇÃO CARREGAR PÁGINAS E ATUALIZAR
function go(aulaId, id) {

	if (aula != aulaId) {
		window.location.href = "aula-" + aulaId + ".html#" + aulaId + "#" + id;

	} else {

		alturaBarraFixaTopo = $(".fixed").height();

		var offTop = $("[data-section-id=" + id + "]").offset().top;

		$("html,body").scrollTop(parseInt(offTop) - alturaBarraFixaTopo);

		idAtual = id;

		aula = aulaId;

		atualizaSuspendData(id);

		atualizarEstiloMenu(id);

		atualizarProgresso();

		atualizarClasseAtivaItemMenu(id);

		closeNav();

	}

}


function atualizarEstiloMenu(id) {

	totalPaginasAcessadas = 0;

	idAulas = suspendData.split(';');

	for (a = 0; a < totalAulas; a++) {

		idPaginas = idAulas[a].split(',');
		for (b = 0; b < idPaginas.length - 1; b++) {
			menuAula = a + 1;

			$("#menu-paginas [data-aula=" + menuAula + "] #icoVisitado" + idPaginas[b] + "").removeClass("bi bi-circle").addClass("bi bi-check2-circle");
			$("#menu-paginas [data-aula=" + menuAula + "] [data-pagina=" + idPaginas[b] + "]").addClass("visited-menu");

			totalPaginasAcessadas += 1;

		}

	}

}

function atualizarProgresso() {

	//CONTAGEM PROGRESSO
	totalProgresso = (totalPaginasAcessadas / limite);
	valorProgresso = totalProgresso * 100;
	$("#status-progresso").css("width", valorProgresso + "%");

	//STATUS "COMPLETED" SCORM
	var status = doLMSGetValue("cmi.core.lesson_status");
	// alert(valorProgresso)

	if (status != "completed" && valorProgresso >= 100) {
		doLMSSetValue("cmi.core.lesson_status", "completed");
		doLMSCommit();
	}

}


function atualizarClasseAtivaItemMenu(id) {

	if (aula != "" && aula != "index") {

		$("#menu-paginas ul li ul li a").removeClass("atvmenu");

		$("#menu-paginas [data-aula=" + aula + "] a").eq(id).addClass("atvmenu");

		$("ul.submenu").hide();

		$("#menu-paginas [data-aula=" + aula + "] [data-pagina=" + id + "]").parents().eq(2).find("ul.submenu").show();

		$(".menu").removeClass("atvmenu");

		$("#menu-paginas [data-aula=" + aula + "] [data-pagina=" + id + "]").parents().eq(2).find(".menu").addClass("atvmenu");

		$("#menu-paginas [data-aula=" + aula + "] [data-pagina=" + id + "]").parents().find(".menu i").removeClass("bi bi-dash-circle").addClass("bi bi-plus-circle");

		$("#menu-paginas [data-aula=" + aula + "] [data-pagina=" + id + "]").parents().eq(2).find(".menu i").removeClass("bi bi-plus-circle").addClass("bi bi-dash-circle");

	}

}

function atualizaSuspendData(id) {

	var novo = suspendData.split(';');
	var novoSuspendData = "";

	for (i = 0; i < novo.length - 1; i++) {
		if (i == aula - 1) {

			if (novo[aula - 1].indexOf(id) == -1) {
				novoSuspendData += novo[aula - 1] + id + ",;";
			} else {
				novoSuspendData += novo[i] + ";";
			}

		} else {
			novoSuspendData += novo[i] + ";";
		}
	}

	suspendData = novoSuspendData;
	doLMSSetValue("cmi.suspend_data", suspendData);
	doLMSCommit();

}

/**
   * Navbar function
   */
function checkRefresh() {

	if (document.refreshForm.visited.value == "") {
		document.refreshForm.visited.value = "1";

	} else
		if ($(window).scrollTop() + $(window).height() - $(window).height() != 0) {
			$('header').removeClass('show-nav').addClass('hide-nav');
			$(".openswipe").css({ 'display': 'none' });
		}
};

// FUNÇÃO PARA EXIBIR O TOASTER
// function showToast(id, toastIcon, toastHeader, toastBody, color) {

// 	var delay = 3000;

// 	var html =
// 		`<div id=${id} class="toast align-items-center text-white bg-${color} border-0" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
// 			<div class="row gx-0">
// 				<div class="toast-header ps-3 text-grey" style="background: gainsboro"><i class="material-icons">${toastIcon} </i>
// 					${toastHeader}
// 					<button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
// 				</div>
// 				<div class="toast-body p-3">
// 					${toastBody}
// 				</div>
// 			</div>
// 		</div>`;
// 	var toastElement = htmlToElement(html);
// 	var toastConainerElement = document.getElementById("toast-container");
// 	toastConainerElement.appendChild(toastElement);
// 	var toast = new bootstrap.Toast(toastElement, { delay: delay, animation: true });
// 	toast.show();

// 	setTimeout(() => toastElement.remove(), delay + 3000000);
// }

// function htmlToElement(html) {
// 	var template = document.createElement('template');
// 	html = html.trim();
// 	template.innerHTML = html;
// 	return template.content.firstChild;
// }




// FUNÇÃO PARA ALTERAR O TAMANHO DA FONTE
function aplicarFonte() {
	if (fonte == 0) {
		fonte = 1;
		$("#fonte").attr("href", "");
		$("#fonte").attr("href", "libs/css/fonte1.css");
	} else if (fonte == 1) {
		fonte = 2;
		$("#fonte").attr("href", "");
		$("#fonte").attr("href", "libs/css/fonte2.css");
	} else {
		fonte = 0;
		$("#fonte").attr("href", "");
	}
}

// FUNÇÃO PARA APLICAR CONTRASTE
function aplicarContraste() {

	if (contraste == 0) {
		contraste = 1;
		$("#contraste").attr("href", "");
		$("#contraste").attr("href", "libs/css/contraste1.css");
	} else if (contraste == 1) {
		contraste = 2;
		$("#contraste").attr("href", "");
		$("#contraste").attr("href", "libs/css/contraste2.css");
	} else {
		contraste = 0;
		$("#contraste").attr("href", "");
	}

}

// FUNÇÃO PARA ALTERAR O TAMANHO DA FONTE
function aplicarZoomCodigo() {

	if (fonte == 0) {
		fonte = 1;
		$("#fonte").attr("href", "");
		$("#fonte").attr("href", "libs/css/fontecodigo1.css");
	} else if (fonte == 1) {
		fonte = 2;
		$("#fonte").attr("href", "");
		$("#fonte").attr("href", "libs/css/fontecodigo2.css");
	} else {
		fonte = 0;
		$("#fonte").attr("href", "");
	}

}

// FUNÇÕES ABRIR E FECHAR MENU DE PÁGINAS
function openNav() {

	if (document.getElementById("NavPaginas").style.width == "50%") {
		document.getElementById("NavPaginas").style.display = "none";
		closeNav();
	} else {
		document.getElementById("NavPaginas").style.width = "50%";
		document.getElementById("NavPaginas").style.display = "block";
		$("body").css("overflow-y", "hidden");

		//BLOQUEAR ROLAGEM DA PÁGINA
		var current = $(window).scrollTop();
		bloquearRolagem = true;
		$(window).scroll(function (event) {
			if (bloquearRolagem == true) {
				$(window).scrollTop(current);
			}
		});

	}
}

function closeNav() {
	document.getElementById("NavPaginas").style.width = "0";
	document.getElementById("NavPaginas").style.display = "none";
	$("body").css("overflow-y", "auto");

	//RETORNAR ROLAGEM DA PÁGINA
	bloquearRolagem = false;
}

// IR PARA A ÚLTIMA PÁGINA ACESSADA
function irUltimoAcesso() {
	for (i = totalAulas - 1; i >= 0; i--) {
		if (suspendData.split(';')[i] != "") {
			idVisitados = suspendData.split(';')[i].split(',');
			idUltimoAcesso = idVisitados[idVisitados.length - 2];

			//RETORNAR ROLAGEM DA PÁGINA
			bloquearRolagem = false;

			go(i + 1, idUltimoAcesso);
			break;
		}
	}
	fecharAvisos();
}

function fecharAvisos() {

	atualizarEstiloMenu(idAtual);

	atualizarProgresso();

	atualizarClasseAtivaItemMenu(idAtual);

	//RETORNAR ROLAGEM DA PÁGINA
	//bloquearRolagem=false;

	$("#ultimoAcesso").hide();

}

// FullOverlay

function on() {
	document.getElementById("fulloverlay").style.display = "block";
}

function off() {
	document.getElementById("fulloverlay").style.display = "none";
}

// Overlay

function overlayn() {
	document.getElementById("fulloverlay").style.display = "block";
}

function overlay(id) {

	//BLOQUEAR ROLAGEM DA PÁGINA
	var current = $(window).scrollTop();
	bloquearRolagem = true;
	$(window).scroll(function (event) {
		if (bloquearRolagem == true) {
			$(window).scrollTop(current);
		}
	});

	$("#overlay-" + id).css('display', 'block');

}

function closeoverlay(id) {

	//RETORNAR ROLAGEM DA PÁGINA
	bloquearRolagem = false;

	$("#overlay-" + id).css('display', '');
}

// POPUP EXTERNO

function popup(url, params) {
	if (typeof params == 'undefined') params = {};
	if (typeof params['win_name'] == 'undefined') params['win_name'] = 'jan_pop';
	if (typeof params['w'] == 'undefined') params['w'] = 810;
	if (typeof params['h'] == 'undefined') params['h'] = screen.height - 55;
	if (typeof params['scroll'] == 'undefined') params['scroll'] = 'yes';
	if (typeof params['resizable'] == 'undefined') params['resizable'] = 'yes';
	params['win'] = window.open(url, params['win_name'], 'scrollbars=' + params['scroll']
		+ ',resizable=' + params['resizable'] + ',toolbar=no,location=no,directories=no,'
		+ 'menubar=no,status=yes,top=0,left='
		+ ((screen.width - params['w']) / 2) + ',width=' + params['w'] + ',height=' + params['h']);
	params['win'].focus();
}

// Anterior e Próxima Aula

function voltarAula() {
	if (parseInt(aula) - 1 != 0) {
		go(parseInt(aula) - 1, 1);
	}
}

function avancarAula() {
	if (parseInt(aula) + 1 <= totalAulas) {
		go(parseInt(aula) + 1, 1);
	}
}


// Acessibilidade mobile
function openCon() {
	document.getElementById("config").classList.toggle("showconfig");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('showconfig')) {
				openDropdown.classList.remove('showconfig');
			}
		}
	}
}

// BARRA DE PROGRESSO 
$(function () {

	// CARREGAR MENU DE PÁGINAS
	$.ajax({
		type: "GET",
		url: "libs/config/menus/menu_paginas.xml",
		dataType: "xml",
		success: function (xml) {
			var idPaginas = 1;
			var totalPaginas = 0;
			var aulaMenu = 0;

			// DISCIPLINA
			$(xml).find("Disciplina").each(function () {
				$("#disciplina").html($(this).attr("text"));
			});

			$(xml).find("Titulo").each(function () {
				$(".titulo").html($(this).attr("text"));
			});

			var ul_main = $("<ul />");

			// PÁGINAS
			$(xml).find("Menu").each(function () {

				subItens = $(this).children().length;

				var ulSub = $("<ul class='submenu' style='list-style: none;'/>");

				aulaMenu = $(this).attr("aula");

				$(this).children().each(function () {

					// SOMENTE 1 ITEM DO MENU
					if (this.tagName == "Item") {

						if ($(this).attr("numPage") != undefined) {
							idPaginas = $(this).attr("numPage");
						}

						var li = $("<li data-aula=" + aulaMenu + "><a data-pagina=" + idPaginas + " href='javascript: go(" + aulaMenu + "," + idPaginas + ")'><i id=icoVisitado" + idPaginas + " class='bi bi-circle' style='padding-right:10px;'></i>" + $(this).attr("text") + "</a></li>");
						ul_main.append(li);

						idPaginas++;
						totalPaginas++;

					} else {

						ulSub.append("<li><a data-pagina=" + idPaginas + " href='javascript: go(" + aulaMenu + "," + idPaginas + ")'><i id=icoVisitado" + idPaginas + " class='bi bi-circle' style='padding-right:10px'></i>" + $(this).attr("text") + "</a></li>");

						idPaginas++;
						totalPaginas++;

						//1º SUBNÍVEL	
						$(this).children().each(function () {

							ulSub.append("<li><a data-pagina=" + idPaginas + " href='javascript: go(" + aulaMenu + "," + idPaginas + ")'><i id=icoVisitado" + idPaginas + " class='bi bi-circle' style='padding-right:10px; margin-left:20px'></i>" + $(this).attr("text") + "</a></li>");

							idPaginas++;
							totalPaginas++;

							//2º SUBNÍVEL
							$(this).children().each(function () {

								ulSub.append("<li><a data-pagina=" + idPaginas + " href='javascript: go(" + aulaMenu + "," + idPaginas + ")'><i id=icoVisitado" + idPaginas + " class='bi bi-circle' style='padding-right:10px; margin-left:40px'></i>" + $(this).attr("text") + "</a></li>");

								idPaginas++;
								totalPaginas++;

							});

						});

					}

				});

				if ($(this).attr("text") != undefined) {
					var li = $("<li data-aula=" + aulaMenu + "><a href=# class='menu'><i style='padding-right:5px;' class='bi bi-plus-lg'></i>" + $(this).attr("text") + "</a></li>");
					ul_main.append(li.append(ulSub))
					idPaginas = 1;
				}

			});

			totalAulas = aulaMenu;

			$("#menu-paginas").append(ul_main);

			$("ul.submenu").hide();

			$("a.menu").click(function (e) {

				e.preventDefault();

				if ($(this).parent().find("ul.submenu").css("display") != "block") {
					$("ul.submenu").slideUp('fast');
					$(this).parent().find("ul.submenu").slideDown('fast');


					$("#menu-paginas").find(".bi bi-dash-circle").addClass("bi bi-plus-circle").removeClass("bi bi-dash-circle");
					$(this).find(".bi bi-plus-circle").addClass("bi bi-dash-circle").removeClass("bi bi-plus-circle");


				} else {

					$(this).find(".bi bi-dash-circle").addClass("bi bi-plus-circle").removeClass("bi bi-dash-circle");
					$("ul.submenu").hide();

				}

			});

			// TOTAL DE PÁGINAS
			limite = totalPaginas;

		}, complete: function (xml) {

			//$(window).scrollTop(1);

			if (suspendData != "" && $(location).attr('hash') == "") {

				/*$("#ultimoAcesso").show();

				//BLOQUEAR ROLAGEM DA PÁGINA
				var current = $(window).scrollTop();
				bloquearRolagem = true;
				$(window).scroll(function(event) {
					if(bloquearRolagem == true){
						$(window).scrollTop(current);
					}
				});*/

			}

			if (suspendData == "") {
				aulaId = aula;
				for (i = 0; i < totalAulas; i++) {
					suspendData = suspendData + ";";
				}
				// go(aula,idAtual); 

				if ($(location).attr('hash') != "") {
					aula = $(location).attr('hash').split('#')[1];
					idAtual = $(location).attr('hash').split('#')[2];
					go(aula, idAtual);
				}

				//CARREGAR HELPTOUR
				// $(document).ready(function () {
				// 	helpTour()
				// 	$('#tour').trigger("click")
				// });
				window.scrollTo(0, 0);
				$("#tourGuide").css("visibility", "visible");
				// scrollLock = true;
				if ($(document).height() > $(window).height()) {
					var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
					$('html').addClass('noscroll').css('top', -scrollTop);
				}

			} else {

				if ($(location).attr('hash') != "") {
					aula = $(location).attr('hash').split('#')[1];
					idAtual = $(location).attr('hash').split('#')[2];
					go(aula, idAtual);
				} else {
					numeroAula = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
					numeroAula = numeroAula.replace("aula-", "").replace(".html", "");
					aula = numeroAula;
					atualizarEstiloMenu(idAtual);
					atualizarProgresso();
					atualizarClasseAtivaItemMenu(idAtual);
				}

			}

		}

	});

});

$.fn.isInViewport = function () {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop() + ($(".fixed").height() + 1);
	var viewportBottom = viewportTop + $(window).height() - ($(".fixed").height() * 2);

	return elementBottom > viewportTop && elementTop < viewportBottom;

};

$(window).on('resize scroll', function () {

	$("[data-section-id]").each(function () {

		if ($(this).isInViewport()) {

			if (suspendData.split(';')[aula - 1].indexOf($(this).data("section-id")) == -1) {
				atualizaSuspendData($(this).data("section-id"));
				atualizarEstiloMenu($(this).data("section-id"));
				$(".nav__item").removeClass("nav__item--current");
				$("[data-dots-id=" + $(this).data("section-id") + "]").addClass("nav__item--current");
			}

			atualizarProgresso();

		}

	});

});

//NAVEGAR NA PÁGINA PELOS "DOTS"
$("[data-dots-id]").click(function () {
	go(aula, $(this).data("dots-id"));
});




window.onscroll = () => {
	toggleTopButton();
  }
  function scrollToTop(){
	window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  function toggleTopButton() {
	if (document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20) {
	  document.getElementById('back-to-up').classList.remove('d-none');
	} else {
	  document.getElementById('back-to-up').classList.add('d-none');
	}
  }