
/* =====================================================
   AKANKSHA — 20TH BIRTHDAY
   MAIN JAVASCRIPT
   ===================================================== */

const beginButton = document.getElementById("beginButton");


/* =====================================================
   BEGIN BUTTON
   ===================================================== */

beginButton.addEventListener("click", function () {

    /*
       Page 2 will be connected here.

       For now, this creates a smooth transition.
    */

    document.body.style.transition =
        "opacity 0.8s ease";

    document.body.style.opacity = "0";

    setTimeout(function () {

        window.location.href = "letter.html";

    }, 800);

});
