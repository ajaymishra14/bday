
/* =====================================================
   AKANKSHA — LETTER PAGE
   ===================================================== */

const nextButton =
    document.getElementById("nextButton");


nextButton.addEventListener("click", function () {

    document.body.style.transition =
        "opacity 0.8s ease";

    document.body.style.opacity = "0";

    setTimeout(function () {

        window.location.href =
            "memories.html";

    }, 800);

});

