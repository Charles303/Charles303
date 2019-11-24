var mot;
$("#mot").keyup(function () {
    mot=$("#mot").val();
    var longueur=mot.length;
    if (longueur<3){
        $("#faible").show();
        $("#moyen").hide();
        $("#fort").hide();
    }
    else if (longueur>=3 && longueur<=12){
        $("#moyen").show();
        $("#faible").hide();
        $("#fort").hide();
    }
    else if (longueur>12){
        $("#moyen").hide();
        $("#fort").show();
        $("#faible").hide();
    }
});
var no=1;
$("#slide1").click(function () {
    no=1;
});
$("#slide2").click(function () {
    no=2;
});
$("#slide3").click(function () {
    no=3;
});
$("#slide4").click(function () {
    no=4;
});
$("#slide5").click(function () {
    no=5;
});
var cpt1=0;
var numero=0;
var nv;
function bla(){

}
var tmp=bla();
var enter;
$("#button").click(function () {
    enter=$("#mot").val();
    var longueur=enter.length;
    if (longueur===3){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").hide();
        $("#img5").hide();
        $("#img6").hide();
        $("#img7").hide();
        $("#img8").hide();
        $("#img9").hide();
        $("#img10").hide();
        $("#img11").hide();
        $("#img12").hide();
        $("#classe1").attr('class','col-4');
        $("#classe2").attr('class','col-4');
        $("#classe3").attr('class','col-4');


    }
    else if (longueur===4){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").hide();
        $("#img6").hide();
        $("#img7").hide();
        $("#img8").hide();
        $("#img9").hide();
        $("#img10").hide();
        $("#img11").hide();
        $("#img12").hide();
        $("#classe1").attr('class','col-3');
        $("#classe2").attr('class','col-3');
        $("#classe3").attr('class','col-3');
        $("#classe4").attr('class','col-3');
    }
    else if (longueur===5){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").show();
        $("#img6").hide();
        $("#img7").hide();
        $("#img8").hide();
        $("#img9").hide();
        $("#img10").hide();
        $("#img11").hide();
        $("#img12").hide();
        $("#classe1").attr('class','col-2');
        $("#classe2").attr('class','col-2');
        $("#classe3").attr('class','col-2');
        $("#classe4").attr('class','col-2');
        $("#classe5").attr('class','col-2');
    }
    else if (longueur===6){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").show();
        $("#img6").show();
        $("#img7").hide();
        $("#img8").hide();
        $("#img9").hide();
        $("#img10").hide();
        $("#img11").hide();
        $("#img12").hide();
        $("#classe1").attr('class','col-2');
        $("#classe2").attr('class','col-2');
        $("#classe3").attr('class','col-2');
        $("#classe4").attr('class','col-2');
        $("#classe5").attr('class','col-2');
        $("#classe6").attr('class','col-2');
    }
    else if (longueur===7){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").show();
        $("#img6").show();
        $("#img7").show();
        $("#img8").hide();
        $("#img9").hide();
        $("#img10").hide();
        $("#img11").hide();
        $("#img12").hide();
        $("#classe1").attr('class','col-1');
        $("#classe2").attr('class','col-1');
        $("#classe3").attr('class','col-1');
        $("#classe4").attr('class','col-1');
        $("#classe5").attr('class','col-1');
        $("#classe6").attr('class','col-1');
        $("#classe7").attr('class','col-1');
    }
    else if (longueur===8){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").show();
        $("#img6").show();
        $("#img7").show();
        $("#img8").show();
        $("#img9").hide();
        $("#img10").hide();
        $("#img11").hide();
        $("#img12").hide();
        $("#classe1").attr('class','col-1');
        $("#classe2").attr('class','col-1');
        $("#classe3").attr('class','col-1');
        $("#classe4").attr('class','col-1');
        $("#classe5").attr('class','col-1');
        $("#classe6").attr('class','col-1');
        $("#classe7").attr('class','col-1');
        $("#classe8").attr('class','col-1');
    }
    else if (longueur===9){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").show();
        $("#img6").show();
        $("#img7").show();
        $("#img8").show();
        $("#img9").show();
        $("#img10").hide();
        $("#img11").hide();
        $("#img12").hide();
        $("#classe1").attr('class','col-1');
        $("#classe2").attr('class','col-1');
        $("#classe3").attr('class','col-1');
        $("#classe4").attr('class','col-1');
        $("#classe5").attr('class','col-1');
        $("#classe6").attr('class','col-1');
        $("#classe7").attr('class','col-1');
        $("#classe8").attr('class','col-1');
        $("#classe9").attr('class','col-1');
    }
    else if (longueur===10){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").show();
        $("#img6").show();
        $("#img7").show();
        $("#img8").show();
        $("#img9").show();
        $("#img10").show();
        $("#img11").hide();
        $("#img12").hide();
        $("#classe1").attr('class','col-1');
        $("#classe2").attr('class','col-1');
        $("#classe3").attr('class','col-1');
        $("#classe4").attr('class','col-1');
        $("#classe5").attr('class','col-1');
        $("#classe6").attr('class','col-1');
        $("#classe7").attr('class','col-1');
        $("#classe8").attr('class','col-1');
        $("#classe9").attr('class','col-1');
        $("#classe10").attr('class','col-1');
    }
    else if (longueur===11){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").show();
        $("#img6").show();
        $("#img7").show();
        $("#img8").show();
        $("#img9").show();
        $("#img10").show();
        $("#img11").show();
        $("#img12").hide();
        $("#classe1").attr('class','col-1');
        $("#classe2").attr('class','col-1');
        $("#classe3").attr('class','col-1');
        $("#classe4").attr('class','col-1');
        $("#classe5").attr('class','col-1');
        $("#classe6").attr('class','col-1');
        $("#classe7").attr('class','col-1');
        $("#classe8").attr('class','col-1');
        $("#classe9").attr('class','col-1');
        $("#classe10").attr('class','col-1');
        $("#classe11").attr('class','col-1');
    }
    else if (longueur===12){
        $("#img1").show();
        $("#img2").show();
        $("#img3").show();
        $("#img4").show();
        $("#img5").show();
        $("#img6").show();
        $("#img7").show();
        $("#img8").show();
        $("#img9").show();
        $("#img10").show();
        $("#img11").show();
        $("#img12").show();
        $("#classe1").attr('class','col-1');
        $("#classe2").attr('class','col-1');
        $("#classe3").attr('class','col-1');
        $("#classe4").attr('class','col-1');
        $("#classe5").attr('class','col-1');
        $("#classe6").attr('class','col-1');
        $("#classe7").attr('class','col-1');
        $("#classe8").attr('class','col-1');
        $("#classe9").attr('class','col-1');
        $("#classe10").attr('class','col-1');
        $("#classe11").attr('class','col-1');
        $("#classe12").attr('class','col-1');
    }
    console.log(nv);

    var maj=enter.toUpperCase();
    for (var i=1;i<(longueur+1);i++){       //Change les valeurs de l'image en fonction du i
        $("#img"+i).attr("src","Letters/" + maj[i-1] + "/" + maj[i-1] + no + ".jpg");     //Montre la lettre à une position donnée

        //premier


        $("#img1").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=0;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");

        });
        $("#img2").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=1;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img3").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=2;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img4").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=3;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img5").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=4;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img6").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=5;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img7").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=6;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img8").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=7;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img9").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=8;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img10").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=9;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img11").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=10;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
        $("#img12").click(function () {      //Compteur pour toggle le carousel
            if (cpt1===0){
                $("#myCarousel1").show();
                cpt1=1;
            }
            else if (cpt1===1){
                $("#myCarousel1").hide();
                cpt1=0;
            }
            numero=11;
            $("#slide1").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "1.jpg");      //change les valeur des sldies selon la lettre
            $("#slide2").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "2.jpg");
            $("#slide3").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "3.jpg");
            $("#slide4").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "4.jpg");
            $("#slide5").attr("src","Letters/" + maj[numero] + "/" + maj[numero] + "5.jpg");
        });
    }
    var chiffre;
    $("#slide1").click(function () {
        chiffre=1;
        $("#img"+(numero+1)).attr("src","Letters/" + maj[numero] + "/" + maj[numero] + chiffre + ".jpg");
    });
    $("#slide2").click(function () {
        chiffre=2;
        $("#img"+(numero+1)).attr("src","Letters/" + maj[numero] + "/" + maj[numero] + chiffre + ".jpg");
    });
    $("#slide3").click(function () {
        chiffre=3;
        $("#img"+(numero+1)).attr("src","Letters/" + maj[numero] + "/" + maj[numero] + chiffre + ".jpg");
    });
    $("#slide4").click(function () {
        chiffre=4;
        $("#img"+(numero+1)).attr("src","Letters/" + maj[numero] + "/" + maj[numero] + chiffre + ".jpg");
    });
    $("#slide5").click(function () {
        chiffre=5;
        $("#img"+(numero+1)).attr("src","Letters/" + maj[numero] + "/" + maj[numero] + chiffre + ".jpg");
    });
});
$("#blanc").click(function () {
    $(".fond").css("background-color", "white");
});
$("#bleu").click(function () {
    $(".fond").css("background-color", "blue");
});
$("#bleufonce").click(function () {
    $(".fond").css("background-color", "darkblue");
});
$("#gris").click(function () {
    $(".fond").css("background-color", "grey");
});
$("#noir").click(function () {
    $(".fond").css("background-color", "black");
});
$("#rose").click(function () {
    $(".fond").css("background-color", "pink");
});
$("#rouge").click(function () {
    $(".fond").css("background-color", "red");
});