const avanca = document.querySelectorALL('.btn-proximo');

avanca.forEach(button => {
  button.addEventListener('click',function(){
    const atual= document.querySelector('.ativo');
    const proximoPasso = 'passo-' + tthis.getAttribute('data-proximo');
    
    actual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
  })
})