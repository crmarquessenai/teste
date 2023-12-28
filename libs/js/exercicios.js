//=====================================================================================================================================================================
// ESCOLHA UNICA
//=====================================================================================================================================================================
var tentativasEx1 = 0,
    tentativasEx2 = 0,
    tentativasEx3 = 0,
    tentativasEx4 = 0,
    tentativasEx5 = 0;
//=======================================================
// Exercicio 1 - ESCOLHA UNICA
//=======================================================
$("input[data-exercicio1]").click(function () {
    switch ($(this).data("exercicio1")) {

        //Exercício 1
        case 1:

            // Resposta correta
            if ($(this).data("alternativa1") == "b") {

                $("#obj1_2").next('label').addClass("circ_certo");
                $("#obj-label1_2").css("background-color", "#67c6b3");

                // $("#obj-label1_2").addClass("correct-shake");
                // $("#obj-text1_2").addClass("correct-shake");

                $("#obj-text1_2").css("color", "#67c6b3");
                $("#obj-label1_2").css("color", "#fff");
                $("#ex-a1-3 input").prop("disabled", true);
                $('#collapse-ex1-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-ex1-1').collapse('show');
                }, 1000);

                $("div").click(function (event) {
                    const el = event.target
                    const id = el.id;
                    var lastChar = id.substr(id.length - 3);
                });

            } else if (tentativasEx1 == 0 && ($(this).data("alternativa1") != "b")) {

                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $('#collapse-ex1-2').collapse('show');

                // setTimeout(function () {
                //     $("#obj-label" + lastChar).removeClass("wrong-shake");
                //     $("#obj-text" + lastChar).removeClass("wrong-shake");
                // }, 1000);

                tentativasEx1++;

            } else if (tentativasEx1 == 1 && ($(this).data("alternativa1") != "b")) {

                // Feedback de resposta incorreta 4
                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                $("#obj-label" + lastChar).css("color", "#fff");
                $("#obj-label_2").css("color", "#fff");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $("#obj-text" + lastChar).css("color", "#dc3545");
                $("#obj-label" + lastChar).css("background-color", "#dc3545");
                tentativasEx1 = 2
                $('#collapse-ex1-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-ex1-2').collapse('hide');
                    $('#collapse-ex1-3').collapse('show');
                }, 1000);

                $("#obj-label1_2").css("background-color", "#67c6b3");
                $("#obj-text1_2").css("color", "#67c6b3");
                $("#ex-a1-3 input").prop("disabled", true);

            }
            break;
    }

});
//=======================================================
// Exercicio 2 - ESCOLHA UNICA
//=======================================================
$("input[data-exercicio2]").click(function () {
    switch ($(this).data("exercicio2")) {

        //Exercício 2
        case 2:

            // Resposta correta
            if ($(this).data("alternativa2") == "c") {

                /**layout da resposta correta */
                $("#obj2_3").next('label').addClass("circ_certo");
                $("#obj-label2_3").css("background-color", "#67c6b3");

                // $("#obj-label2_3").addClass("correct-shake");
                // $("#obj-text2_3").addClass("correct-shake");

                $("#obj-text2_3").css("color", "#67c6b3");
                $("#obj-label2_3").css("color", "#fff");
                $("#ex-a2-1 input").prop("disabled", true);// id para bloquear o imput.
                $('#collapse-ex2-3').collapse('hide');

                // chama o collapsed de resposta correta.
                setTimeout(function () {
                    $('#collapse-ex2-1').collapse('show');
                }, 1000);

                $("div").click(function (event) {
                    const el = event.target
                    const id = el.id;
                    var lastChar = id.substr(id.length - 3);
                });

            } else if (tentativasEx2 == 0 && ($(this).data("alternativa2") != "c")) {
                //feedback de resposta incorreta 1
                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $('#collapse-ex2-2').collapse('show');

                // setTimeout(function () {
                //     $("#obj-label" + lastChar).removeClass("wrong-shake");
                //     $("#obj-text" + lastChar).removeClass("wrong-shake");
                // }, 1000);

                tentativasEx2++;

            } else if (tentativasEx2 == 1 && ($(this).data("alternativa2") != "c")) {

                //feedback de resposta incorreta 2
                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                $("#obj-label" + lastChar).css("color", "#fff");
                $("#obj-label2_2").css("color", "#fff");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $("#obj-text" + lastChar).css("color", "#dc3545");
                $("#obj-label" + lastChar).css("background-color", "#dc3545");
                tentativasEx2 = 2
                $('#collapse-ex2-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-ex2-2').collapse('hide');
                    $('#collapse-ex2-3').collapse('show');
                }, 1000);

                $("#obj-label2_3").css("background-color", "#67c6b3");
                $("#obj-text2_3").css("color", "#67c6b3");
                $("#ex-a2-1 input").prop("disabled", true);

            }
            break;

    }

});
//=======================================================
// Exercicio 3 - ESCOLHA UNICA
//=======================================================
$("input[data-exercicio3]").click(function () {
    switch ($(this).data("exercicio3")) {

        case 3:

            // Resposta correta
            if ($(this).data("alternativa3") == "b") {

                $("#obj3_2").next('label').addClass("circ_certo");
                $("#obj-label3_2").css("background-color", "#67c6b3");

                // $("#obj-label3_2").addClass("correct-shake");
                // $("#obj-text3_2").addClass("correct-shake");

                $("#obj-text3_2").css("color", "#67c6b3");
                $("#obj-label3_2").css("color", "#fff");
                $("#ex-a2-7 input").prop("disabled", true);
                $('#collapse-a2-7-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-a2-7-1').collapse('show');
                    $('#3_4')[0].scrollIntoView();
                }, 1000);

                $("div").click(function (event) {
                    const el = event.target
                    const id = el.id;
                    var lastChar = id.substr(id.length - 3);
                });

            } else if (tentativasEx3 == 0 && ($(this).data("alternativa3") != "b")) {

                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $('#collapse-a2-7-2').collapse('show');

                // setTimeout(function () {
                //     $("#obj-label" + lastChar).removeClass("wrong-shake");
                //     $("#obj-text" + lastChar).removeClass("wrong-shake");
                // }, 1000);

                tentativasEx3++;

            } else if (tentativasEx3 == 1 && ($(this).data("alternativa3") != "b")) {

                // Feedback de resposta incorreta 3
                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                $("#obj-label" + lastChar).css("color", "#fff");
                $("#obj-label3_1").css("color", "#fff");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $("#obj-text" + lastChar).css("color", "#dc3545");
                $("#obj-label" + lastChar).css("background-color", "#dc3545");
                tentativasEx3 = 2
                $('#collapse-a2-7-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-a2-7-2').collapse('hide');
                    $('#collapse-a2-7-3').collapse('show');
                }, 1000);

                $("#obj-label3_2").css("background-color", "#67c6b3");
                $("#obj-text3_2").css("color", "#67c6b3");
                $("#ex-a2-7 input").prop("disabled", true);

            }
            break;

    }

});
//=======================================================
// Exercicio 4 - ESCOLHA UNICA
//=======================================================
$("input[data-exercicio4]").click(function () {
    switch ($(this).data("exercicio4")) {

        //EXERCÍCIO 4
        case 4:

            // RESPOSTA CORRETA
            if ($(this).data("alternativa4") == "a") {

                $("#obj4_1").next('label').addClass("circ_certo");
                $("#obj-label4_1").css("background-color", "#67c6b3");

                // $("#obj-label4_1").addClass("correct-shake");
                // $("#obj-text4_1").addClass("correct-shake");

                $("#obj-text4_1").css("color", "#67c6b3");
                $("#obj-label4_1").css("color", "#fff");
                $("#ex-a3-1 input").prop("disabled", true);
                $('#collapse-ex4-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-ex4-1').collapse('show');
                }, 1000);

                $("div").click(function (event) {
                    const el = event.target
                    const id = el.id;
                    var lastChar = id.substr(id.length - 3);
                });

            } else if (tentativasEx4 == 0 && ($(this).data("alternativa4") != "a")) {

                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $('#collapse-ex4-2').collapse('show');

                // setTimeout(function () {
                //     $("#obj-label" + lastChar).removeClass("wrong-shake");
                //     $("#obj-text" + lastChar).removeClass("wrong-shake");
                // }, 1000);

                tentativasEx4++;

            } else if (tentativasEx4 == 1 && ($(this).data("alternativa4") != "a")) {

                // Feedback de resposta incorreta 1
                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                $("#obj-label" + lastChar).css("color", "#fff");
                $("#obj-label4_1").css("color", "#fff");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $("#obj-text" + lastChar).css("color", "#dc3545");
                $("#obj-label" + lastChar).css("background-color", "#dc3545");
                tentativasEx4 = 2
                $('#collapse-ex4-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-ex4-2').collapse('hide');
                    $('#collapse-ex4-3').collapse('show');
                }, 1000);

                $("#obj-label4_1").css("background-color", "#67c6b3");
                $("#obj-text4_1").css("color", "#67c6b3");
                $("#ex-a3-1 input").prop("disabled", true);

            }
            break;

    }

});
//=======================================================
// Exercicio 5 - ESCOLHA UNICA
//=======================================================
$("input[data-exercicio5]").click(function () {
    switch ($(this).data("exercicio5")) {

        //EXERCÍCIO 5
        case 5:

            // RESPOSTA CORRETA
            if ($(this).data("alternativa5") == "b") {

                $("#obj5_2").next('label').addClass("circ_certo");
                $("#obj-label5_2").css("background-color", "#67c6b3");

                // $("#obj-label5_2").addClass("correct-shake");
                // $("#obj-text5_2").addClass("correct-shake");

                $("#obj-text5_2").css("color", "#67c6b3");
                $("#obj-label5_2").css("color", "#fff");
                $("#ex-a3-6 input").prop("disabled", true);
                $('#collapse-ex5-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-ex5-1').collapse('show');
                }, 1000);

                $("div").click(function (event) {
                    const el = event.target
                    const id = el.id;
                    var lastChar = id.substr(id.length - 3);
                });

            } else if (tentativasEx5 == 0 && ($(this).data("alternativa5") != "b")) {

                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $('#collapse-ex5-2').collapse('show');

                // setTimeout(function () {
                //     $("#obj-label" + lastChar).removeClass("wrong-shake");
                //     $("#obj-text" + lastChar).removeClass("wrong-shake");
                // }, 1000);

                tentativasEx5++;

            } else if (tentativasEx5 == 1 && ($(this).data("alternativa5") != "b")) {

                // Feedback de resposta incorreta 2
                const el = event.target
                const id = el.id;
                var lastChar = id.substr(id.length - 3);

                // $("#obj-label" + lastChar).addClass("wrong-shake");
                $("#obj-label" + lastChar).css("color", "#fff");
                $("#obj-label5_2").css("color", "#fff");
                // $("#obj-text" + lastChar).addClass("wrong-shake");
                $("#obj-text" + lastChar).css("color", "#dc3545");
                $("#obj-label" + lastChar).css("background-color", "#dc3545");
                tentativasEx5 = 2
                $('#collapse-ex5-2').collapse('hide');

                setTimeout(function () {
                    $('#collapse-ex5-2').collapse('hide');
                    $('#collapse-ex5-3').collapse('show');
                }, 1000);

                $("#obj-label5_2").css("background-color", "#67c6b3");
                $("#obj-text5_2").css("color", "#67c6b3");
                $("#ex-a3-6 input").prop("disabled", true);

            }
            break;

    }

});
//=====================================================================================================================================================================
// MULTIPLA ESCOLHA
//=====================================================================================================================================================================
var tentativas1 = 0,
    tentativas2 = 0,
    tentativas3 = 0,
    tentativas4 = 0,
    tentativas5 = 0;
//=======================================================
// Exercicio 1 - MULTIPLA ESCOLHA
//=======================================================
function respostaMultiplaescolha1() {
    if ($("#ex1-multi-1").is(':checked') == false &&
        $("#ex1-multi-2").is(':checked') == false &&
        $("#ex1-multi-3").is(':checked') == false &&
        $("#ex1-multi-4").is(':checked') == false &&
        $("#ex1-multi-5").is(':checked') == false) {
        setTimeout(function () {
            $('#collapse-multi-ex1-seleciona').collapse('show');
        }, 10);
    } else if (
        $("#ex1-multi-1").is(':checked') == true &&
        $("#ex1-multi-2").is(':checked') == false &&
        $("#ex1-multi-3").is(':checked') == true &&
        $("#ex1-multi-4").is(':checked') == false &&
        $("#ex1-multi-5").is(':checked') == false) {
        $("#ex1_multi").prop("disabled");
        // $("#ex1_multi_obj_1").addClass("correct-shake");
        // $("#ex1_multi_obj_2").addClass("correct-shake");
        // $("#ex1_multi_obj_3").addClass("correct-shake");
        // $("#ex1_multi_obj_4").addClass("correct-shake");
        // $("#ex1_multi_obj_5").addClass("correct-shake");
        $(".certo1").css("background-color", "#67c6b3");

        setTimeout(function () {
            $('#vr-button1multi').hide();
            $('#collapse-multi-ex1-seleciona').collapse('hide');
            $('#collapse-multi-ex1-tentativa1').collapse('hide');
            $('#collapse-multi-ex1-certo').collapse('show');
        }, 10);

    } else {
        if (tentativas1 == 0) {
            setTimeout(function () {
                $('#collapse-multi-ex1-seleciona').collapse('hide');
                $('#collapse-multi-ex1-tentativa1').collapse('show');
            }, 10);
            // setTimeout(function () {
            //     $("#ex1_multi_obj_1").addClass("wrong-shake1");
            //     $("#ex1_multi_obj_2").addClass("wrong-shake1");
            //     $("#ex1_multi_obj_3").addClass("wrong-shake1");
            //     $("#ex1_multi_obj_4").addClass("wrong-shake1");
            //     $("#ex1_multi_obj_5").addClass("wrong-shake1");
            // }, 10);
            // setTimeout(function () {
            //     $("#ex1_multi_obj_1").removeClass("wrong-shake1");
            //     $("#ex1_multi_obj_2").removeClass("wrong-shake1");
            //     $("#ex1_multi_obj_3").removeClass("wrong-shake1");
            //     $("#ex1_multi_obj_4").removeClass("wrong-shake1");
            //     $("#ex1_multi_obj_5").removeClass("wrong-shake1");
            // }, 1000);
            tentativas1++;
        } else {
            // setTimeout(function () {
            //     $("#ex1_multi_obj_1").removeClass("wrong-shake1");
            //     $("#ex1_multi_obj_2").removeClass("wrong-shake1");
            //     $("#ex1_multi_obj_3").removeClass("wrong-shake1");
            //     $("#ex1_multi_obj_4").removeClass("wrong-shake1");
            //     $("#ex1_multi_obj_5").removeClass("wrong-shake1");
            // }, 10);
            // setTimeout(function () {
            //     $("#ex1_multi_obj_1").addClass("wrong-shake1");
            //     $("#ex1_multi_obj_2").addClass("wrong-shake1");
            //     $("#ex1_multi_obj_3").addClass("wrong-shake1");
            //     $("#ex1_multi_obj_4").addClass("wrong-shake1");
            //     $("#ex1_multi_obj_5").addClass("wrong-shake1");
            // }, 10);
            setTimeout(function () {
                $('#vr-button1multi').hide();
                $('#collapse-multi-ex1-tentativa1').collapse('hide');
                $('#collapse-multi-ex1-seleciona').collapse('hide');
                $('#collapse-multi-ex1-errada').collapse('show');
            }, 10);

            $(".checkvf").prop("disabled", true,);
            $(".certo1").css("background-color", "#67c6b3");//fundo da box da escolha.
            
            $("#ex1-multi-1").prop("disabled", true);
            $("#ex1-multi-2").prop("disabled", true);
            $("#ex1-multi-3").prop("disabled", true);
            $("#ex1-multi-4").prop("disabled", true);
            $("#ex1-multi-5").prop("disabled", true);
            // $("#ex1-multi-1").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            // $("#ex1-multi-3").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.

        }
    }

}
//=======================================================
// Exercicio 2 - MULTIPLA ESCOLHA
//=======================================================
function respostaMultiplaescolha2() {
    if ($("#ex2-multi-1").is(':checked') == false &&
        $("#ex2-multi-2").is(':checked') == false &&
        $("#ex2-multi-3").is(':checked') == false &&
        $("#ex2-multi-4").is(':checked') == false &&
        $("#ex2-multi-5").is(':checked') == false) {
        setTimeout(function () {
            $('#collapse-multi-ex2-seleciona').collapse('show');
        }, 10);
    } else if (
        $("#ex2-multi-1").is(':checked') == true &&
        $("#ex2-multi-2").is(':checked') == true &&
        $("#ex2-multi-3").is(':checked') == true &&
        $("#ex2-multi-4").is(':checked') == false &&
        $("#ex2-multi-5").is(':checked') == false) {
        $("#ex2_multi").prop("disabled");
        // $("#ex2_multi_obj_1").addClass("correct-shake");
        // $("#ex2_multi_obj_2").addClass("correct-shake");
        // $("#ex2_multi_obj_3").addClass("correct-shake");
        // $("#ex2_multi_obj_4").addClass("correct-shake");
        // $("#ex2_multi_obj_5").addClass("correct-shake");
        $(".certo2").css("background-color", "#67c6b3");

        setTimeout(function () {
            $('#vr-button2multi').hide();
            $('#collapse-multi-ex2-seleciona').collapse('hide');
            $('#collapse-multi-ex2-tentativa1').collapse('hide');
            $('#collapse-multi-ex2-certo').collapse('show');
        }, 10);

    } else {
        if (tentativas2 == 0) {
            setTimeout(function () {
                $('#collapse-multi-ex2-seleciona').collapse('hide');
                $('#collapse-multi-ex2-tentativa1').collapse('show');
            }, 10);
            // setTimeout(function () {
            //     $("#ex2_multi_obj_1").addClass("wrong-shake1");
            //     $("#ex2_multi_obj_2").addClass("wrong-shake1");
            //     $("#ex2_multi_obj_3").addClass("wrong-shake1");
            //     $("#ex2_multi_obj_4").addClass("wrong-shake1");
            //     $("#ex2_multi_obj_5").addClass("wrong-shake1");
            // }, 10);
            // setTimeout(function () {
            //     $("#ex2_multi_obj_1").removeClass("wrong-shake1");
            //     $("#ex2_multi_obj_2").removeClass("wrong-shake1");
            //     $("#ex2_multi_obj_3").removeClass("wrong-shake1");
            //     $("#ex2_multi_obj_4").removeClass("wrong-shake1");
            //     $("#ex2_multi_obj_5").removeClass("wrong-shake1");
            // }, 1000);
            tentativas2++;
        } else {
            // setTimeout(function () {
            //     $("#ex2_multi_obj_1").removeClass("wrong-shake1");
            //     $("#ex2_multi_obj_2").removeClass("wrong-shake1");
            //     $("#ex2_multi_obj_3").removeClass("wrong-shake1");
            //     $("#ex2_multi_obj_4").removeClass("wrong-shake1");
            //     $("#ex2_multi_obj_5").removeClass("wrong-shake1");

            // }, 10);

            // setTimeout(function () {
            //     $("#ex2_multi_obj_1").addClass("wrong-shake1");
            //     $("#ex2_multi_obj_2").addClass("wrong-shake1");
            //     $("#ex2_multi_obj_3").addClass("wrong-shake1");
            //     $("#ex2_multi_obj_4").addClass("wrong-shake1");
            //     $("#ex2_multi_obj_5").addClass("wrong-shake1");
            // }, 10);

            setTimeout(function () {
                $('#vr-button2multi').hide();
                $('#collapse-multi-ex2-tentativa1').collapse('hide');
                $('#collapse-multi-ex2-seleciona').collapse('hide');
                $('#collapse-multi-ex2-errada').collapse('show');
            }, 10);

            $(".checkvf").prop("disabled", true,);
            $(".certo2").css("background-color", "#67c6b3"); //fundo da box da escolha.

            $("#ex2-multi-1").prop("disabled", true);
            $("#ex2-multi-2").prop("disabled", true);
            $("#ex2-multi-3").prop("disabled", true);
            $("#ex2-multi-4").prop("disabled", true);
            $("#ex2-multi-5").prop("disabled", true);

        }
    }

}
//=======================================================

//Para adicionar mais exercicios será necessario mudar o id de resposta, o número após (ex) e o número após as tentativas e o html voce tem que alterar o console html como referenciado

//=====================================================================================================================================================================
// VERDADEIRO OU FALSO - UNICA ESCOLHA
//=====================================================================================================================================================================
//=======================================================
// Exercicio 1 - VERDADEIRO OU FALSO - UNICA ESCOLHA
//=======================================================
function verdadeiro() {
    $("#verdadeiro").addClass("btn-success");
    $("#falso").addClass("btn-danger");
    // $("#ex1-tf-1").addClass("correct-shake");
    $("#verdadeiro").addClass("disabled");
    $("#falso").addClass("disabled");
}
function falso() {
    $("#falso").addClass("btn-danger");
    $("#verdadeiro").addClass("btn-success");
    // $("#ex1-tf-1").addClass("wrong-shake");
    $("#falso").addClass("disabled");
    $("#verdadeiro").addClass("disabled");
}
//=======================================================
// Exercicio 2 - VERDADEIRO OU FALSO - UNICA ESCOLHA
//=======================================================
function verdadeiroP2() {
    $("#falsoP2").addClass("btn-danger");
    $("#verdadeiroP2").addClass("btn-success");
    // $("#ex2-tf-2").addClass("wrong-shake");
    $("#falsoP2").addClass("disabled");
    $("#verdadeiroP2").addClass("disabled");
}
function falsoP2() {
    $("#verdadeiroP2").addClass("btn-success");
    $("#falsoP2").addClass("btn-danger");
    // $("#ex2-tf-2").addClass("correct-shake");
    $("#verdadeiroP2").addClass("disabled");
    $("#falsoP2").addClass("disabled");
}
//=====================================================================================================================================================================
// VERDADEIRO OU FALSO - MULTIPLA ESCOLHA
//=====================================================================================================================================================================
var vftentativas1 = 0,
    vftentativas2 = 0,
    vftentativas3 = 0,
    vftentativas4 = 0,
    vftentativas5 = 0;
//=======================================================
// Exercicio 1 - VERDADEIRO OU FALSO - MULTIPLA ESCOLHA
//=======================================================
function RespostaTrueOrFalse1() {

    //Checagem campos selecionados
    if
        // Campo 1
        (
        $("#ex1-multi-tf-1").is(':checked') == false && //Verdadeiro
        $("#ex1-multi-tf-2").is(':checked') == false && //Falso
        // Campo 2
        $("#ex1-multi-tf-3").is(':checked') == false && //Verdadeiro
        $("#ex1-multi-tf-4").is(':checked') == false && //Falso
        // Campo 3
        $("#ex1-multi-tf-5").is(':checked') == false && // Verdadeiro
        $("#ex1-multi-tf-6").is(':checked') == false) { // Falso
        setTimeout(function () {
            $('#collapse-multi-tf-ex1-seleciona').collapse('show');
        }, 10);
    } else if (

        //Checagem da resposta
        // Campo 1
        $("#ex1-multi-tf-1").is(':checked') == true && //Verdadeiro
        $("#ex1-multi-tf-2").is(':checked') == false && //falso

        // Campo 2
        $("#ex1-multi-tf-3").is(':checked') == false && //verdadeiro
        $("#ex1-multi-tf-4").is(':checked') == true && //falso

        // Campo 3
        $("#ex1-multi-tf-5").is(':checked') == true && //verdadeiro
        $("#ex1-multi-tf-6").is(':checked') == false) { //falso
        $("#vf input").prop("disabled", true);
        // $("#ex1_multi-tf_obj_1").addClass("correct-shake");
        // $("#ex1_multi-tf_obj_2").addClass("correct-shake");
        // $("#ex1_multi-tf_obj_3").addClass("correct-shake");
        // $("#ex1_multi-tf_obj_4").addClass("correct-shake");
        $(".verdadeira1").css("background-color", "#67c6b3");

        setTimeout(function () {
            $('#vr-button1multi-tf').hide();
            $('#collapse-multi-tf-ex1-seleciona').collapse('hide');
            $('#collapse-multi-tf-ex1-tentativa1').collapse('hide');
            $('#collapse-multi-tf-ex1-certo').collapse('show');
        }, 10);

    } else {
        if (vftentativas1 == 0) {
            setTimeout(function () {
                $('#collapse-multi-tf-ex1-seleciona').collapse('hide');
                $('#collapse-multi-tf-ex1-tentativa1').collapse('show');
            }, 10);
            // setTimeout(function () {
            //     $("#ex1_multi-tf_obj_1").addClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_2").addClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_3").addClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_4").addClass("wrong-shake1");
            // }, 10);
            // setTimeout(function () {
            //     $("#ex1_multi-tf_obj_1").removeClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_2").removeClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_3").removeClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_4").removeClass("wrong-shake1");
            // }, 1000);
            vftentativas1++;
        } else {
            // setTimeout(function () {
            //     $("#ex1_multi-tf_obj_1").removeClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_2").removeClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_3").removeClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_4").removeClass("wrong-shake1");
            // }, 10);

            // setTimeout(function () {
            //     $("#ex1_multi-tf_obj_1").addClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_2").addClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_3").addClass("wrong-shake1");
            //     $("#ex1_multi-tf_obj_4").addClass("wrong-shake1");
            // }, 10);

            setTimeout(function () {
                $('#vr-button1multi-tf').hide();
                $('#collapse-multi-tf-ex1-tentativa1').collapse('hide');
                $('#collapse-multi-tf-ex1-errada').collapse('show');
            }, 10);

            $("#vf input").prop("disabled", true,);
            $(".verdadeira1").css("background-color", "#67c6b3");//fundo da box da escolha.

            $("#vf input").prop("disabled", true);
            
            $("#ex1-multi-tf-1").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex1-multi-tf-3").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex1-multi-tf-5").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.

            $("#ex1-multi-tf-1").prop("disabled", true);
            $("#ex1-multi-tf-2").prop("disabled", true);
            $("#ex1-multi-tf-3").prop("disabled", true);
            $("#ex1-multi-tf-4").prop("disabled", true);
            $("#ex1-multi-tf-5").prop("disabled", true);
            $("#ex1-multi-tf-6").prop("disabled", true);
        }
    }

}

//=======================================================
// Exercicio 2 - VERDADEIRO OU FALSO - MULTIPLA ESCOLHA
//=======================================================
function RespostaTrueOrFalse2() {

    //Checagem campos selecionados
    if
        // Campo 1
        (
        $("#ex2-multi-tf-1").is(':checked') == false && // verdadeiro 
        $("#ex2-multi-tf-2").is(':checked') == false && //Falso
        // Campo 2
        $("#ex2-multi-tf-3").is(':checked') == false && //Verdadeiro
        $("#ex2-multi-tf-4").is(':checked') == false && //Falso
        // Campo 3
        $("#ex2-multi-tf-5").is(':checked') == false && // Verdadeiro
        $("#ex2-multi-tf-6").is(':checked') == false && // Falso
        // Campo 4
        $("#ex2-multi-tf-7").is(':checked') == false && //Verdadeiro
        $("#ex2-multi-tf-8").is(':checked') == false && //Falso
        // Campo 5
        $("#ex2-multi-tf-9").is(':checked') == false && // Verdadeiro
        $("#ex2-multi-tf-10").is(':checked') == false) { // Falso
        setTimeout(function () {
            $('#collapse-multi-tf-ex2-seleciona').collapse('show');
        }, 10);
    } else if (

        //Checagem da resposta
        // Campo 1
        $("#ex2-multi-tf-1").is(':checked') == true && //Verdadeiro -
        $("#ex2-multi-tf-2").is(':checked') == false && //falso

        // Campo 2
        $("#ex2-multi-tf-3").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-4").is(':checked') == true && //falso -

        // Campo 3
        $("#ex2-multi-tf-5").is(':checked') == true && //Verdadeiro -
        $("#ex2-multi-tf-6").is(':checked') == false && //falso

        // Campo 4
        $("#ex2-multi-tf-7").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-8").is(':checked') == true && //falso -

        // Campo 5
        $("#ex2-multi-tf-9").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-10").is(':checked') == true) { //falso - 
        //Verificação    
        $("#vf input").prop("disabled", true);
        // $("#ex2_multi-tf_obj_1").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_2").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_3").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_4").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_5").addClass("correct-shake");
        $(".verdadeira2").css("background-color", "#67c6b3");

        setTimeout(function () {
            $('#vr-button2multi-tf').hide();
            $('#collapse-multi-tf-ex2-seleciona').collapse('hide');
            $('#collapse-multi-tf-ex2-tentativa1').collapse('hide');
            $('#collapse-multi-tf-ex2-certo').collapse('show');
        }, 10);

    } else {
        if (vftentativas2 == 0) {
            setTimeout(function () {
                $('#collapse-multi-tf-ex2-seleciona').collapse('hide');
                $('#collapse-multi-tf-ex2-tentativa1').collapse('show');
            }, 10);
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").addClass("wrong-shake1");
            // }, 10);
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").removeClass("wrong-shake1");
            // }, 1000);
            vftentativas2++;
        } else {
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").removeClass("wrong-shake1");
            // }, 10);

            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").addClass("wrong-shake1");

            // }, 10);

            setTimeout(function () {
                $('#vr-button2multi-tf').hide();
                $('#collapse-multi-tf-ex2-tentativa1').collapse('hide');
                $('#collapse-multi-tf-ex2-errada').collapse('show');
            }, 10);

            $("#vf input").prop("disabled", true,);
            $(".verdadeira2").css("background-color", "#67c6b3");//fundo da box da escolha.

            $("#vf input").prop("disabled", true);
            $("#ex2-multi-tf-1").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex2-multi-tf-4").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex2-multi-tf-5").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex2-multi-tf-8").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex2-multi-tf-10").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            
        }
    }

}

//=======================================================
// Exercicio 3 - VERDADEIRO OU FALSO - MULTIPLA ESCOLHA
//=======================================================
function RespostaTrueOrFalse2() {

    //Checagem campos selecionados
    if
        // Campo 1
        (
        $("#ex2-multi-tf-1").is(':checked') == false && // verdadeiro 
        $("#ex2-multi-tf-2").is(':checked') == false && //Falso
        // Campo 2
        $("#ex2-multi-tf-3").is(':checked') == false && //Verdadeiro
        $("#ex2-multi-tf-4").is(':checked') == false && //Falso
        // Campo 3
        $("#ex2-multi-tf-5").is(':checked') == false && // Verdadeiro
        $("#ex2-multi-tf-6").is(':checked') == false && // Falso
        // Campo 4
        $("#ex2-multi-tf-7").is(':checked') == false && //Verdadeiro
        $("#ex2-multi-tf-8").is(':checked') == false && //Falso
        // Campo 5
        $("#ex2-multi-tf-9").is(':checked') == false && // Verdadeiro
        $("#ex2-multi-tf-10").is(':checked') == false) { // Falso
        setTimeout(function () {
            $('#collapse-multi-tf-ex2-seleciona').collapse('show');
        }, 10);
    } else if (

        //Checagem da resposta
        // Campo 1
        $("#ex2-multi-tf-1").is(':checked') == true && //Verdadeiro -
        $("#ex2-multi-tf-2").is(':checked') == false && //falso

        // Campo 2
        $("#ex2-multi-tf-3").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-4").is(':checked') == true && //falso -

        // Campo 3
        $("#ex2-multi-tf-5").is(':checked') == true && //Verdadeiro -
        $("#ex2-multi-tf-6").is(':checked') == false && //falso

        // Campo 4
        $("#ex2-multi-tf-7").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-8").is(':checked') == true && //falso -

        // Campo 5
        $("#ex2-multi-tf-9").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-10").is(':checked') == true) { //falso - 
        //Verificação    
        $("#vf input").prop("disabled", true);
        // $("#ex2_multi-tf_obj_1").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_2").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_3").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_4").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_5").addClass("correct-shake");
        $(".verdadeira2").css("background-color", "#67c6b3");

        setTimeout(function () {
            $('#vr-button2multi-tf').hide();
            $('#collapse-multi-tf-ex2-seleciona').collapse('hide');
            $('#collapse-multi-tf-ex2-tentativa1').collapse('hide');
            $('#collapse-multi-tf-ex2-certo').collapse('show');
        }, 10);

    } else {
        if (vftentativas2 == 0) {
            setTimeout(function () {
                $('#collapse-multi-tf-ex2-seleciona').collapse('hide');
                $('#collapse-multi-tf-ex2-tentativa1').collapse('show');
            }, 10);
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").addClass("wrong-shake1");
            // }, 10);
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").removeClass("wrong-shake1");
            // }, 1000);
            vftentativas2++;
        } else {
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").removeClass("wrong-shake1");
            // }, 10);

            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").addClass("wrong-shake1");

            // }, 10);

            setTimeout(function () {
                $('#vr-button2multi-tf').hide();
                $('#collapse-multi-tf-ex2-tentativa1').collapse('hide');
                $('#collapse-multi-tf-ex2-errada').collapse('show');
            }, 10);

            $("#vf input").prop("disabled", true,);
            $(".verdadeira2").css("background-color", "#67c6b3");//fundo da box da escolha.

            $("#vf input").prop("disabled", true);
            $("#ex2-multi-tf-1").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex2-multi-tf-4").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex2-multi-tf-5").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex2-multi-tf-8").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.
            $("#ex2-multi-tf-10").prop('checked', true);// opção verdadeira o check = a bolinha da resposta.

        }
    }

}
//=======================================================
// Exercicio 4 - VERDADEIRO OU FALSO - MULTIPLA ESCOLHA
//=======================================================
function RespostaTrueOrFalse2() {

    //Checagem campos selecionados
    if
        // Campo 1
        (
        $("#ex2-multi-tf-1").is(':checked') == false && // verdadeiro 
        $("#ex2-multi-tf-2").is(':checked') == false && //Falso
        // Campo 2
        $("#ex2-multi-tf-3").is(':checked') == false && //Verdadeiro
        $("#ex2-multi-tf-4").is(':checked') == false && //Falso
        // Campo 3
        $("#ex2-multi-tf-5").is(':checked') == false && // Verdadeiro
        $("#ex2-multi-tf-6").is(':checked') == false && // Falso
        // Campo 4
        $("#ex2-multi-tf-7").is(':checked') == false && //Verdadeiro
        $("#ex2-multi-tf-8").is(':checked') == false && //Falso
        // Campo 5
        $("#ex2-multi-tf-9").is(':checked') == false && // Verdadeiro
        $("#ex2-multi-tf-10").is(':checked') == false) { // Falso
        setTimeout(function () {
            $('#collapse-multi-tf-ex2-seleciona').collapse('show');
        }, 10);
    } else if (

        //Checagem da resposta
        // Campo 1
        $("#ex2-multi-tf-1").is(':checked') == true && //Verdadeiro -
        $("#ex2-multi-tf-2").is(':checked') == false && //falso

        // Campo 2
        $("#ex2-multi-tf-3").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-4").is(':checked') == true && //falso -

        // Campo 3
        $("#ex2-multi-tf-5").is(':checked') == true && //Verdadeiro -
        $("#ex2-multi-tf-6").is(':checked') == false && //falso

        // Campo 4
        $("#ex2-multi-tf-7").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-8").is(':checked') == true && //falso -

        // Campo 5
        $("#ex2-multi-tf-9").is(':checked') == false && //verdadeiro
        $("#ex2-multi-tf-10").is(':checked') == true) { //falso - 
        //Verificação    
        $("#vf input").prop("disabled", true);
        // $("#ex2_multi-tf_obj_1").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_2").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_3").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_4").addClass("correct-shake");
        // $("#ex2_multi-tf_obj_5").addClass("correct-shake");
        $(".verdadeira2").css("background-color", "#67c6b3");

        setTimeout(function () {
            $('#vr-button2multi-tf').hide();
            $('#collapse-multi-tf-ex2-seleciona').collapse('hide');
            $('#collapse-multi-tf-ex2-tentativa1').collapse('hide');
            $('#collapse-multi-tf-ex2-certo').collapse('show');
        }, 10);

    } else {
        if (vftentativas2 == 0) {
            setTimeout(function () {
                $('#collapse-multi-tf-ex2-seleciona').collapse('hide');
                $('#collapse-multi-tf-ex2-tentativa1').collapse('show');
            }, 10);
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").addClass("wrong-shake1");
            // }, 10);
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").removeClass("wrong-shake1");
            // }, 1000);
            vftentativas2++;
        } else {
            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").removeClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").removeClass("wrong-shake1");
            // }, 10);

            // setTimeout(function () {
            //     $("#ex2_multi-tf_obj_1").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_2").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_3").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_4").addClass("wrong-shake1");
            //     $("#ex2_multi-tf_obj_5").addClass("wrong-shake1");

            // }, 10);

            setTimeout(function () {
                $('#vr-button2multi-tf').hide();
                $('#collapse-multi-tf-ex2-tentativa1').collapse('hide');
                $('#collapse-multi-tf-ex2-errada').collapse('show');
            }, 10);

            $("#vf input").prop("disabled", true,);
            $(".verdadeira2").css("background-color", "#67c6b3");//fundo da box da escolha.

            $("#vf input").prop("disabled", true);

            $("#ex2-multi-tf-1").prop("disabled", true);
            $("#ex2-multi-tf-2").prop("disabled", true);
            $("#ex2-multi-tf-3").prop("disabled", true);
            $("#ex2-multi-tf-4").prop("disabled", true);
            $("#ex2-multi-tf-5").prop("disabled", true);
            $("#ex2-multi-tf-6").prop("disabled", true);
            $("#ex2-multi-tf-7").prop("disabled", true);
            $("#ex2-multi-tf-8").prop("disabled", true);
            $("#ex2-multi-tf-9").prop("disabled", true);
            $("#ex2-multi-tf-10").prop("disabled", true);

        }
    }

}

//Para adicionar mais exercicios será necessario mudar o id de resposta, o número após (ex) e o número após as tentativas e o html voce tem que alterar o console html como referenciado
//=====================================================================================================================================================================
// COMBOBOX
//=====================================================================================================================================================================
var tentativaspergunta1 = 0,
    tentativaspergunta2 = 0,
    tentativaspergunta3 = 0,
    tentativaspergunta4 = 0,
    tentativaspergunta5 = 0,
    tentativaspergunta6 = 0,
    tentativaspergunta7 = 0,
    tentativaspergunta8 = 0,
    tentativaspergunta9 = 0,
    tentativaspergunta10 = 0;
//=======================================================
// Exercicio 1 - COMBOBOX
//=======================================================
$("#resposta-combobox1").click(function () {
    if (
        document.getElementById("combobox-1").value == "Selecione" || /* elemento do combobox que aparece ao iniciar */
        document.getElementById("combobox-2").value == "Selecione" ||
        document.getElementById("combobox-3").value == "Selecione") {
        setTimeout(function () {
            $('#collapse-combobox1-0').collapse('show'); /* Apresenta o texto de selecione as seleções da alternativa*/
        }, 10);
    }
    else if (
        document.getElementById("combobox-1").value == 1 && /* Esse if verifica qual é a alternativa correta*/
        document.getElementById("combobox-2").value == 3 &&
        document.getElementById("combobox-3").value == 1) { /* Todas as alternativas precisam estar corretas para validar. */

        setTimeout(function () {
            $('#vr-button-combobox1').removeClass('pt-5');
            $('#collapse-combobox1-0').collapse('hide'); /** Oculta os pop-us que não devem aparecer */
            $('#collapse-combobox1-2').collapse('hide');/** Oculta os pop-us que não devem aparecer */
            $('#collapse-combobox1-1').collapse('show');  /* Apresenta o texto de seleção correta */
        }, 1000);
        $(this).hide();

        document.getElementById("combobox-1").disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-1").style.fontWeight = "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-1").style.color = "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */
        // $("#combobox2-1").addClass("correct-shake");

        document.getElementById("combobox-2").disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-2").style.fontWeight = "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-2").style.color = "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */
        // $("#combobox-2").addClass("correct-shake");/** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById("combobox-3").disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-3").style.fontWeight = "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox-3").style.color = "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */
        // $("#combobox-3").addClass("correct-shake");

        document.getElementById("resposta-combobox1").style.display = "none"; /** Oculta o botão verificar resposta */


    } else {
        if (tentativaspergunta1 == 0) {
            setTimeout(function () {
                $('#collapse-combobox1-0').collapse('hide');
                $('#collapse-combobox1-2').collapse('show'); /* Apresenta o texto de seleção errada (primeira tentativa) */
            }, 1000);

            tentativaspergunta1++;
            // if (document.getElementById("combobox-3").value == 1) {
            //     $("#combobox-3").addClass("correct-shake");
            // } else {
            //     $("#combobox-3").addClass("wrong-shake");
            // }

            // if (document.getElementById("combobox-2").value == 3) {

            //     $("#combobox-2").addClass("correct-shake");
            // } else {

            //     $("#combobox-2").addClass("wrong-shake");
            // }

            // if (document.getElementById("combobox-1").value == 1) {

            //     $("#combobox-1").addClass("correct-shake");
            // } else {

            //     $("#combobox-1").addClass("wrong-shake");
            // }

            // setTimeout(function () {
            //     $("#combobox-1").removeClass("wrong-shake");
            //     $("#combobox-2").removeClass("wrong-shake");
            //     $("#combobox-3").removeClass("wrong-shake");


            //     $("#combobox-1").removeClass("correct-shake");
            //     $("#combobox-2").removeClass("correct-shake");
            //     $("#combobox-3").removeClass("correct-shake");

            // }, 1000);

        } else {
            if (tentativaspergunta1 == 1) {

                tentativaspergunta1++;
                if (document.getElementById("combobox-1").value == 1) {
                    document.getElementById("combobox-1").style.color = "#6ea778";
                    // $("#combobox-1").addClass("correct-shake");
                } else {
                    document.getElementById("combobox-1").style.color = "#d94242";
                    // $("#combobox-1").addClass("wrong-shake");
                }

                if (document.getElementById("combobox-2").value == 3) {
                    document.getElementById("combobox-2").style.color = "#6ea778";
                    // $("#combobox-2").addClass("correct-shake");
                } else {
                    document.getElementById("combobox-2").style.color = "#d94242";
                    // $("#combobox-2").addClass("wrong-shake");
                }

                if (document.getElementById("combobox-3").value == 1) {
                    document.getElementById("combobox-3").style.color = "#6ea778";
                    // $("#combobox-3").addClass("correct-shake");
                } else {
                    document.getElementById("combobox-3").style.color = "#d94242";
                    // $("#combobox-3").addClass("wrong-shake");
                }

                setTimeout(function () {
                    $('#vr-button-combobox1').removeClass('pt-5');
                    $('#collapse-combobox1-2').collapse('hide');
                    $('#collapse-combobox1-3').collapse('show'); /** Apresenta o pop-up de resposta errada final (segunda tentativa). */
                }, 1000);

                document.getElementById("combobox-1").disabled = true;
                document.getElementById("combobox-2").disabled = true;
                document.getElementById("combobox-3").disabled = true;

                $("#resposta-combobox1").hide();
                $(this).hide();
            }
        }
    }
});
//=======================================================
// Exercicio 2 - COMBOBOX
//=======================================================
$("#resposta-combobox2").click(function () {
    if (
        document.getElementById("combobox2-1").value == "Selecione" || /* elemento do combobox que aparece ao iniciar */
        document.getElementById("combobox2-2").value == "Selecione" ||
        document.getElementById("combobox2-3").value == "Selecione") {
        setTimeout(function () {
            $('#collapse-combobox2-0').collapse('show'); /* Apresenta o texto de selecione as seleções da alternativa*/
        }, 10);
    }
    else if (
        document.getElementById("combobox2-1").value == 1 && /* Esse if verifica qual é a alternativa correta*/
        document.getElementById("combobox2-2").value == 1 &&
        document.getElementById("combobox2-3").value == 1) { /* Todas as alternativas precisam estar corretas para validar. */

        setTimeout(function () {
            $('#vr-button-combobox2').removeClass('pt-5');
            $('#collapse-combobox2-0').collapse('hide'); /** Oculta os pop-us que não devem aparecer */
            $('#collapse-combobox2-2').collapse('hide');/** Oculta os pop-us que não devem aparecer */
            $('#collapse-combobox2-1').collapse('show');  /* Apresenta o texto de seleção correta */
        }, 1000);
        $(this).hide();

        document.getElementById("combobox2-1").disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-1").style.fontWeight = "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-1").style.color = "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */
        // $("#combobox2-1").addClass("correct-shake");

        document.getElementById("combobox2-2").disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-2").style.fontWeight = "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-2").style.color = "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */
        // $("#combobox2-2").addClass("correct-shake");/** Muda a formatação para a alternativa caso esteja correta. */

        document.getElementById("combobox2-3").disabled = true; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-3").style.fontWeight = "bold"; /** Muda a formatação para a alternativa caso esteja correta. */
        document.getElementById("combobox2-3").style.color = "#6ea778"; /** Muda a formatação para a alternativa caso esteja correta. */
        // $("#combobox2-3").addClass("correct-shake");

        document.getElementById("resposta-combobox2").style.display = "none"; /** Oculta o botão verificar resposta */


    } else {
        if (tentativaspergunta2 == 0) {
            setTimeout(function () {
                $('#collapse-combobox2-0').collapse('hide');
                $('#collapse-combobox2-2').collapse('show'); /* Apresenta o texto de seleção errada (primeira tentativa) */
            }, 1000);

            tentativaspergunta2++;
            // if (document.getElementById("combobox2-3").value == 1) {
            //     $("#combobox2-3").addClass("correct-shake");
            // } else {
            //     $("#combobox2-3").addClass("wrong-shake");
            // }

            // if (document.getElementById("combobox2-2").value == 1) {

            //     $("#combobox2-2").addClass("correct-shake");
            // } else {

            //     $("#combobox2-2").addClass("wrong-shake");
            // }

            // if (document.getElementById("combobox2-1").value == 1) {

            //     $("#combobox2-1").addClass("correct-shake");
            // } else {

            //     $("#combobox2-1").addClass("wrong-shake");
            // }

            // setTimeout(function () {
            //     $("#combobox2-1").removeClass("wrong-shake");
            //     $("#combobox2-2").removeClass("wrong-shake");
            //     $("#combobox2-3").removeClass("wrong-shake");


            //     $("#combobox2-1").removeClass("correct-shake");
            //     $("#combobox2-2").removeClass("correct-shake");
            //     $("#combobox2-3").removeClass("correct-shake");

            // }, 1000);

        } else {
            if (tentativaspergunta2 == 1) {

                tentativaspergunta2++;
                if (document.getElementById("combobox2-1").value == 1) {
                    document.getElementById("combobox2-1").style.color = "#6ea778";
                    // $("#combobox2-1").addClass("correct-shake");
                } else {
                    document.getElementById("combobox2-1").style.color = "#d94242";
                    // $("#combobox2-1").addClass("wrong-shake");
                }

                if (document.getElementById("combobox2-2").value == 1) {
                    document.getElementById("combobox2-2").style.color = "#6ea778";
                    // $("#combobox2-2").addClass("correct-shake");
                } else {
                    document.getElementById("combobox2-2").style.color = "#d94242";
                    // $("#combobox2-2").addClass("wrong-shake");
                }

                if (document.getElementById("combobox2-3").value == 1) {
                    document.getElementById("combobox2-3").style.color = "#6ea778";
                    // $("#combobox2-3").addClass("correct-shake");
                } else {
                    document.getElementById("combobox2-3").style.color = "#d94242";
                    // $("#combobox2-3").addClass("wrong-shake");
                }

                setTimeout(function () {
                    $('#vr-button-combobox2').removeClass('pt-5');
                    $('#collapse-combobox2-2').collapse('hide');
                    $('#collapse-combobox2-3').collapse('show'); /** Apresenta o pop-up de resposta errada final (segunda tentativa). */
                }, 1000);

                document.getElementById("combobox2-1").disabled = true;
                document.getElementById("combobox2-2").disabled = true;
                document.getElementById("combobox2-3").disabled = true;

                $("#resposta-combobox2").hide();
                $(this).hide();
            }
        }
    }
});
//=======================================================
// Exercicio 3 - COMBOBOX
//=======================================================

//=======================================================
// Exercicio 4 - COMBOBOX
//=======================================================

//=======================================================
// Exercicio 5 - COMBOBOX
//=======================================================
