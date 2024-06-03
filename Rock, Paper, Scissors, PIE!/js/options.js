const bodyOptions__website = document.querySelector('.options-body');
const optionsRow = document.querySelector('.options__row');
const continueButton = document.querySelector('.continue');
const mainContent = document.querySelector('.content__main');
const battle = document.querySelector('.battle');
//const battleItems = document.querySelectorAll('.battle-item');
function loadOptionsWebsite(event){
    bodyOptions__website.classList.add('load-options-website');
}
window.addEventListener("load", loadOptionsWebsite);
optionsRow.addEventListener("click",(e)=>{
    let tragetElem = e.target.closest('.options__option');
    if(tragetElem){
        continueButton.classList.add('show-continue');
    }
})
continueButton.addEventListener("click", function(event){
    mainContent.style.display = `none`;
    battle.style.display = `block`;
    /*battleItems.forEach(item =>{
        item.classList.add('fighting-animation')
    }) commented temporary */
})