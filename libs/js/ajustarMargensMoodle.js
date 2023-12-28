// SCRIPT ABAIXO PARA REAJUSTAR O CURSO NA JANELA DO SCORM. COMENTAR ESTE SCRIPT CASO NÃO SEJA NECESSÁRIO PARA A APLICAÇÃO.
validar=$('html', window.parent.document).hasClass("yui3-js-enabled");

$('body', window.parent.document).css("width","100%");
$('body', window.parent.document).css("height","100%");

$('html', window.parent.document).css("height","100%");
$('html', window.parent.document).removeClass("yui3-js-enabled");
$('html', window.parent.document).removeClass("uk-notouch");
$('html', window.parent.document).removeClass("js");
$('html', window.parent.document).removeClass("textshadow");
$('html', window.parent.document).removeClass("cssanimations");
$('html', window.parent.document).removeClass("csstransitions");

var endIframe = $("iframe", window.parent.document).attr("src");

if(validar==true){
	$('html', window.parent.document).css("overflow","hidden"); 
	$('html', window.parent.document).html('<iframe frameborder=0 width=100% height=100% src=' + endIframe + ' style="margin-left: -8px; margin-top: -8px;"></iframe>');
}