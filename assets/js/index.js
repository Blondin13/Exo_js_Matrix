//------------------------------------------NIVEAU I-------------------------------------------------------------------------------------------
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const message = document.querySelector(".message");


function allerAuNiveau(niveau) {
    document.querySelector("#niveau" + niveau).scrollIntoView({
        behavior:"auto",
    });
}

//--------------------------------------------------------------------------------------

    if(btn1.addEventListener("click", () => {
        allerAuNiveau(2);
            niveau_2();
    }));
    
    else if(btn2.addEventListener("click", () => {
        message.innerHTML = "Tu te fait arrété part l'agent smith et te fait </br> éclaté la tête!!!!";

    }));
    

//------------------------------------------NIVEAU II-------------------------------------------------------------------------------------------
const message2 = document.querySelector(".message2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.getElementById("btn-4");

    if(btn3.addEventListener("click", () => {
        allerAuNiveau(3);
            niveau_3();
    }));

    else if(btn4.addEventListener("click", () => {
        message2.innerHTML = "Tu continue a vivre dans la matrice </br> et ta fausse vie reprend !!!!";
        
    }));

//------------------------------------------NIVEAU III-------------------------------------------------------------------------------------------
const message3 = document.querySelector(".message3");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.getElementById("btn-6");

    if(btn5.addEventListener("click", () => {
        allerAuNiveau(4);
            niveau_4();
    }));

    else if(btn6.addEventListener("click", () => {
        message3.innerHTML = "<img src='./assets/img/mort.jpg'></br> Tu est MORT";
        
    }));

//------------------------------------------NIVEAU IV-------------------------------------------------------------------------------------------
const message4 = document.querySelector(".message4");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.getElementById("btn-8");

    if(btn7.addEventListener("click", () => {
        allerAuNiveau(5);
            niveau_5();
    }));

    else if(btn8.addEventListener("click", () => {
        message4.innerHTML = "<img src='./assets/img/retour1.jpg'> </br> Te revoila brancher";
        
    }));

//------------------------------------------NIVEAU V-------------------------------------------------------------------------------------------
const btn9 = document.getElementById("btn-9");

    btn9.addEventListener("click", () => {
        allerAuNiveau(6);
            niveau_6();
    });




