const taka = document.getElementById('taka');
const dollar = document.getElementById('dollar');
const euro = document.getElementById('euro');


euro.addEventListener('input' , function(){
    const eur = parseInt(euro.value);
    dollar.value = 1.19*eur;
    taka.value = 101.03*eur;
    
})

taka.addEventListener('input' , function(){
    const tk = parseInt(taka.value);
    dollar.value = 0.012*tk;
    euro.value = 0.0099*tk;
    
})

dollar.addEventListener('input' , function(){
    const dol = parseInt(dollar.value);
    taka.value = 84.80*dol;
    euro.value = 0.84*dol;
})

