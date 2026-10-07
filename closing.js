/* =====================================================
   CLOSING PAGE
   ===================================================== */

const restartButton =
    document.getElementById(
        "restartButton"
    );


/* =====================================================
   BEGIN AGAIN
   ===================================================== */

restartButton.addEventListener(
    "click",
    function () {

        document.body.style.transition =
            "opacity .8s ease";

        document.body.style.opacity =
            "0";


        setTimeout(
            function () {

                window.location.href =
                    "index.html";

            },
            800
        );

    }
);