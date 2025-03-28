let ourSkillsSection = document.getElementById("ourSkills");
let statsSection = document.getElementById("stats");
let spansProgress = document.querySelectorAll(".skills .progress span");
let spansNumber = document.querySelectorAll("#stats .number");
let flag = false;

window.onscroll = () => {
    if (window.scrollY >= ourSkillsSection.offsetTop - 100) {
        spansProgress.forEach((span) => {
            span.style.width = span.dataset.prog;
        });
    }
    if (window.scrollY >= statsSection.offsetTop - 100) {
        spansNumber.forEach((span) => {
            let counter = setInterval(() => {
                if (+span.textContent < span.dataset.num) {
                    span.textContent = +span.textContent + 1;
                } else {
                    clearInterval(counter);
                }
            }, 50);
        });
    }
};
