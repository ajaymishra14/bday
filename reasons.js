


const cards =
    document.querySelectorAll(
        ".reason-card"
    );


const modal =
    document.getElementById(
        "reasonModal"
    );


const modalNumber =
    document.getElementById(
        "modalNumber"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalMessage =
    document.getElementById(
        "modalMessage"
    );


const closeButton =
    document.getElementById(
        "closeButton"
    );


const backdrop =
    document.getElementById(
        "modalBackdrop"
    );


const continueButton =
    document.getElementById(
        "continueButton"
    );



/* ==========================================
   OPEN REASON
========================================== */

cards.forEach(function(card) {

    card.addEventListener(
        "click",
        function() {

            const number =
                card.dataset.number;

            const title =
                card.dataset.title;

            const message =
                card.dataset.message;


            modalNumber.textContent =
                number;

            modalTitle.textContent =
                title;

            modalMessage.textContent =
                message;


            modal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});



/* ==========================================
   CLOSE MODAL
========================================== */

function closeModal() {

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


closeButton.addEventListener(
    "click",
    closeModal
);


backdrop.addEventListener(
    "click",
    closeModal
);



/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);



/* ==========================================
   CONTINUE
========================================== */

continueButton.addEventListener(
    "click",
    function() {

        document.body.style.transition =
            "opacity .8s ease";

        document.body.style.opacity =
            "0";


        setTimeout(
            function() {

                window.location.href =
                    "surprise.html";

            },
            800
        );

    }
);

