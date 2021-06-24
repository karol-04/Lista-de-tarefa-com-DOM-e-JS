//bloqueando o js para que não consigam mexer pela página
( () => {
    const novaTarefa = document.querySelector('[data-form-button]')

    //criando o "x" como botao para deletar a tarefa
    function criarBotaoDelete(){
        const botaoDelete = document.createElement('span')
        botaoDelete.innerText = "x"
        botaoDelete.classList = "close"

        botaoDelete.addEventListener('click', deletarTarefa)
        
        console.log(botaoDelete);

        return botaoDelete
    }

    //criando uma caixinha do lado para confirmar quando realizar uma tarefa
    function criarBotaoConcluir(){
        const botaoConcluir= document.createElement("input")
        botaoConcluir.setAttribute("type", "checkbox")
        botaoConcluir.classList="form-check-input"
        botaoConcluir.addEventListener('click', concluirTarefa)

        return botaoConcluir
    }

    //criando uma função para que o botao de deletar realmente exclua a linha da tarefa
    function deletarTarefa(evento){
        const botaoDeleteClicado = evento.target
        const itemDaLista = botaoDeleteClicado.parentElement
        itemDaLista.remove()
    }

    //criando uma função para que a caixa de concluir realmente funcione quando clicada
    function concluirTarefa(evento){
        const botaoConcluirClicado=evento.target
        const itemDaListaConcluido= botaoConcluirClicado.parentElement
        itemDaListaConcluido.classList.toggle('tarefa_concluida')
    }

    //função mãe que chama todas as outras funções e executa ela em todas as linhas da tarefa
    function criarTarefa(evento){
        evento.preventDefault()

        const inputTarefa = document.querySelector('[data-form-input]')
        const valorTarefa = inputTarefa.value
        const listaDeTarefas = document.querySelector('[data-task]')

        novaLabel = document.createElement('label')
        novaLabel.innerText = `- ${valorTarefa}`;
        novaLabel.className = "form-check-label"

        novoItem = document.createElement('li')
        
        novoItem.appendChild(criarBotaoConcluir())
        novoItem.appendChild(novaLabel)
        novoItem.appendChild(criarBotaoDelete())
        
        listaDeTarefas.appendChild(novoItem)

        inputTarefa.value = ""

    }

    //adicionando outra tarefa quando for clicado no botão "+"
    novaTarefa.addEventListener('click', criarTarefa)
})()