const stars = document.querySelectorAll('.star');
const starsArray = ['star-1', 'star-2', 'star-3', 'star-4', 'star-5'];

const onHover = (star) => {
    star.addEventListener("mouseenter", (event) => {
        const targetId = event.target.id;
        for (let i = 0; i <= starsArray.indexOf(targetId); i++) {
            document.getElementById(starsArray[i]).style.color = "#FFE99D";
        }
    })
    star.addEventListener("mouseleave", (event) => {
        for (let i = 0; i < starsArray.length; i++) {
            document.getElementById(starsArray[i]).style.color = "#f1f1f1";
        }

    })

};

const onClick = (star) => {
    star.addEventListener("click", (event) => {
        const targetId = event.target.id;
        for (let i = 0; i <= starsArray.indexOf(targetId); i++) {
            document.getElementById(starsArray[i]).style.color = "#FED41D";
        }
    })

};


stars.forEach((star) => onHover(star));
stars.forEach((star) => onClick(star));


