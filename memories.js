
/* =====================================================
   AKANKSHA — MEMORIES PAGE
   ===================================================== */


/* =====================================================
   SCROLL REVEAL
   ===================================================== */

const memoryCards =
    document.querySelectorAll(".memory-card");


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


memoryCards.forEach(function(card) {

    observer.observe(card);

});


/* =====================================================
   CONTINUE BUTTON
   ===================================================== */

const continueButton =
    document.getElementById(
        "continueButton"
    );


continueButton.addEventListener(
    "click",
    function() {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity =
            "0";

        setTimeout(function() {

            window.location.href =
                "reasons.html";

        }, 800);

    }
);

