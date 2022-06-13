const cardButtons = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleCardButtonClick(e) {
    console.log(e.currentTarget);
    const button = e.currentTarget;
    const card = button.closest(".card");

    const imgSrc = card.querySelector("img").src;
    const desc = card.querySelector("h2").innerText;

    modalInner.innerHTML = `
    <img src = "${imgSrc}">
    <p>"${desc}"</p>
    `
modalOuter.classList.add("open");

}
cardButtons.forEach((button)=> {
    button.addEventListener("click", handleCardButtonClick);
    
})

function closeModal(e) {
    modalOuter.classList.remove("open");
};

modalOuter.addEventListener("click", (e)=> {
    const isOutSide = !e.target.closest(".modal-inner");
    console.log(isOutSide);
    if(isOutSide) {
        closeModal();
    }
});
window.addEventListener("keydown", (e)=> {
    if(e.key === "Escape") {
        closeModal();
}
});