function salvar() { 
    var txt = document.querySelector('input#txt')
    var salvar = document.querySelector('input#salvar')
    var txtn = arq
    var arq = window.prompt('Qual nome do arquivo')
    var comfirmacao = window.confirm('Voce que mostrar seu novo arquivo')
    if (comfirmacao === true){
        var show = document.querySelector('div.arquivos')
        show.innerHTML = txt.value
    var adicionar = documento.push(arq)
    } 
    function mostrar() {//nao esta funcionando
        var esc = window.prompt('Qual arquivo voce quer ver')
        var area = document.querySelector('div.arquivos')
        area.innerHTML = esc.value
    }
    
}
