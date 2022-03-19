const stars = document.querySelectorAll('.star');
const starsArray = ['star-1', 'star-2', 'star-3', 'star-4', 'star-5'];

const onHover = (star) => {
    star.addEventListener("mouseenter", (event) => {
        const targetId = event.target.id;
        console.log("target id 1", targetId);
        for (let i = 0; i <= starsArray.indexOf(targetId); i++) {
            [...document.getElementById(starsArray[i]).children][0].style.borderBottomColor = "#FFE99D";
            [...document.getElementById(starsArray[i]).children][1].style.borderTopColor = "#FFE99D";
        }
    })
    star.addEventListener("mouseleave", (event) => {
        const targetId = event.target.id;
        [...document.getElementById(targetId).children][0].style.borderBottomColor = "#f1f1f1";
        [...document.getElementById(targetId).children][1].style.borderTopColor = "#f1f1f1";

    })

};

const onClick = (star) => {
    star.addEventListener("click", (event) => {
        const targetId = event.target.id;
        console.log("target id 2", targetId);
        for (let i = 0; i <= starsArray.indexOf(targetId); i++) {
            [...document.getElementById(starsArray[i]).children][0].style.borderBottomColor = "#FED41D";
            [...document.getElementById(starsArray[i]).children][1].style.borderTopColor = "#FED41D";
        }
    })

};


stars.forEach((star) => onHover(star));
stars.forEach((star) => onClick(star));


