// Open Love Letter
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

openBtn.addEventListener("click", () => {
    letter.classList.remove("hidden");
    letter.scrollIntoView({
        behavior: "smooth"
    });

    createHearts(40);
});

// Relationship Timer
const startDate = new Date("2026-05-01T00:00:00");

function updateTimer() {

    const now = new Date();

    let diff = now - startDate;

    if (diff < 0) {
        document.getElementById("countdown").innerHTML =
        "Our journey begins on May 1, 2026 ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
    `${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes ❤️ ${seconds} Seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();


// Final Surprise
const giftBtn = document.getElementById("giftBtn");
const finalMessage = document.getElementById("finalMessage");

giftBtn.addEventListener("click", () => {

    finalMessage.classList.remove("hidden");

    finalMessage.scrollIntoView({
        behavior: "smooth"
    });

    createHearts(120);

});


// Floating Hearts
function createHearts(amount){

    for(let i=0;i<amount;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left=Math.random()*window.innerWidth+"px";
        heart.style.top=window.innerHeight+50+"px";

        heart.style.fontSize=(18+Math.random()*30)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        heart.style.transition="all 4s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.style.top="-100px";

            heart.style.left=
            parseFloat(heart.style.left)+
            (Math.random()*200-100)+"px";

            heart.style.opacity="0";

        },50);

        setTimeout(()=>{
            heart.remove();
        },4000);

    }

}


// Hearts on Every Click
document.addEventListener("click",function(e){

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=e.clientX+"px";
    heart.style.top=e.clientY+"px";
    heart.style.fontSize="24px";
    heart.style.pointerEvents="none";
    heart.style.transition="all 2s ease";
    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform="translateY(-120px) scale(2)";
        heart.style.opacity="0";
    },20);

    setTimeout(()=>{
        heart.remove();
    },2000);

});


// Small Welcome Animation
window.onload=()=>{

    createHearts(30);

    setTimeout(()=>{
        alert("❤️ Happy Girlfriend's Day, Wifeyyy ❤️\n\nI made this little surprise just for you. 🌸");
    },800);

};