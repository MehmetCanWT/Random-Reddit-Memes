const memeBtn=document.getElementById('memeBtn')

const bg=["#ff0004","#93f","#f56","#00FFE9"]
const fg=["#111","#fff","#111","#fff"]

function colorchange() {
    let limit=bg.length
    let index= Math.floor(Math.random() * limit);
    memeBtn.style.background=bg[index]
    memeBtn.style.color=fg[index]
}