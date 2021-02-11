// JavaScript source code

function navEvent() {
    const navbutton = document.getElementById("navbutton");
    const cList = navbutton.parentElement.classList;
    navbutton.addEventListener("click", () => {
        if (!cList.contains("open")) {
            cList.add("open");
        }
        else {
            cList.remove("open");
        }
    });
}

function loadBG() {
    const element = document.getElementById("bg");
    var text = "Minh Nguyen ";
    var i = 0;
    function loop() {
        setTimeout(() => {
            if (i < 100) {
                i++;
                text += "Minh Nguyen ";
                element.innerText = text;
                loop();
            }
        }, 20);
    }
    loop();
}

function init() {
    navEvent();
    loadBG();
}

window.onload = init;