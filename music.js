const music = document.getElementById("birthdayMusic");
const button = document.getElementById("musicButton");

button.onclick = () => {
    if (music.paused) {
        music.play();
        button.textContent = "Ⅱ";
    } else {
        music.pause();
        button.textContent = "♪";
    }
};