document.querySelectorAll('.price').forEach(node=>{
    node.textContent=new Intl.NumberFormat('en-EN',{
        currency:'EUR',
        style:'currency'
    }).format(number)
})