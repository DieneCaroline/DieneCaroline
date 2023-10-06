const form = document.getElementById('formulario');
const site = document.getElementById('site');
const card = document.getElementById('cardapio');
const linkform = document.getElementById('linkform');
const linksite = document.getElementById('linksite');
const linkcard = document.getElementById('linkcard');

form.addEventListener("click",() => {
    form.classList.toggle('active');
    linkform.classList.toggle('active');
});
site.addEventListener("click",() => {
    site.classList.toggle('active');
    linksite.classList.toggle('active');
});

card.addEventListener("click",() => {
    card.classList.toggle('active');
    linkcard.classList.toggle('active');
});




