const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    //console.log(desc);
   // modalInner.innerHTML

    const name = card.querySelector('h2').textContent;
    modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace('200','600')}" alt="${name}"/>
    <p>${desc}</p>
    `;
    modalOuter.classList.add('open');

}
cardButtons.forEach(button => 
    button.addEventListener('click',
    handleCardButtonClick)
);

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click',function(event){
  
    const isOutSide = !event.target.closest('.modal-inner');
    console.log(isOutSide);
    if(isOutSide){
    modalOuter.classList.remove('open');
 }
});

 window.addEventListener('keydown',event => {
     console.log(event);
     if(event.key === 'Escape'){
         closeModal();
     }
 });
    // console.log(event.target);
    // console.log(event.currentTarget);
