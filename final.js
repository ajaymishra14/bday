


const replayButton =
    document.getElementById(
        "replayButton"
    );


/* ==========================================
   RESTART EXPERIENCE
========================================== */

replayButton.addEventListener(
    "click",
    function() {

        document.body.style.transition =
            "opacity .8s ease";

        document.body.style.opacity =
            "0";


        setTimeout(
            function() {

                window.location.href =
                    "index.html";

            },
            800
        );

    }
);

