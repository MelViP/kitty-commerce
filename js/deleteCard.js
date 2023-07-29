/*
<li class="galeria__productos_items">
<span 
    class="material-symbols-outlined delete_products">
     delete
</span> */

const deleteIcon = () => {
    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined', 'delete_products');
    span.querySelector(".material-symbols-outlined", ".delete_products").innerHTML = "delete";
    span.addEventListener('click', deleteCard);
    return span;
}
const deleteCard = (event) =>{
    const parent = event.target.parentElement;
    console.log(parent);
    parent.remove;
}