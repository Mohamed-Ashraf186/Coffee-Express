const receiptBtns = [...document.querySelectorAll('.receipt-btn')]
const receiptEl = document.querySelector('.receipt')
const viewReceiptEl=[...document.querySelectorAll('.view-receipt')]

const overLay = document.querySelector('.overlay')
function viewReceipt(){
    if(overLay.classList.contains('hidden')){
        overLay.classList.remove('hidden')
    }
    if(receiptEl.classList.contains('hidden')){
        receiptEl.classList.remove('hidden')
    }
}

function hideReceipt(){
    if(!overLay.classList.contains('hidden')){
        receiptEl.classList.add('hidden')
        overLay.classList.add('hidden')
    }
}

receiptBtns.map(btn =>{
    btn.addEventListener('click',viewReceipt)
})

document.addEventListener('click',(e)=>{
   const targetBtn = viewReceiptEl.filter(el=>{
        return el.contains(e.target)
    })[0]
    if(!targetBtn && !receiptEl.contains(e.target)){
        hideReceipt()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideReceipt();
    }
  });


// receiptEl.addEventListener('click', (e) => {
//     e.stopPropagation();
// });