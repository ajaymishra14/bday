


const giftButton =
    document.getElementById(
        "giftButton"
    );


const introSection =
    document.getElementById(
        "introSection"
    );


const revealSection =
    document.getElementById(
        "revealSection"
    );


const finalButton =
    document.getElementById(
        "finalButton"
    );


const confettiContainer =
    document.getElementById(
        "confettiContainer"
    );



/* ==========================================
   OPEN GIFT
========================================== */

giftButton.addEventListener(
    "click",
    function() {

        const lid =
            document.querySelector(
                ".gift-lid"
            );


        lid.style.transform =
            "translateY(-55px) rotate(-8deg)";


        setTimeout(
            function() {

                introSection.classList.add(
                    "hide"
                );

            },
            400
        );


        setTimeout(
            function() {

                revealSection.classList.add(
                    "active"
                );

                createConfetti();

            },
            1000
        );

    }
);



/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    const amount = 100;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.classList.add(
            "confetti"
        );


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDuration =
            (Math.random() * 3 + 3) + "s";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        piece.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";


        confettiContainer.appendChild(
            piece
        );

    }


    setTimeout(
        function() {

            confettiContainer.innerHTML =
                "";

        },
        7000
    );

}



/* ==========================================
   FINAL PAGE
========================================== */

finalButton.addEventListener(
    "click",
    function() {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity =
            "0";


        setTimeout(
            function() {

                window.location.href =
                    "final.html";

            },
            1000
        );

    }
);

