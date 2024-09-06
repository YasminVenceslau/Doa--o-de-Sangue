const imagem = document.getElementById('super') // Seleciona a imagem que será removida ao carregar um novo conteúdo
const divResposta = document.getElementById('resposta')
const divResultado = document.getElementById('resultado')

function remover(){
    imagem.classList.add('remover')// Remove a imagem existente
    divResposta.classList.add('remover')
}



function sobreSangue(){

    remover()
    divResultado.classList.remove('remover')

    let tSangue = document.getElementById('resultado');  // Seleciona o elemento onde o conteúdo sobre tipos sanguíneos 

    let sangue = "" // Inicializa uma string vazia

    for (let tipo of sangueTipos ) { // Itera sobre os tipos de sangue e cria HTML para cada tipo
        sangue += `
            <article class="tipos-sangue"  id=${tipo.ids} >
                <h2>${tipo.Tipo}</h2>
                <img src=${tipo.imagem}>
                <p>${tipo.descricao}</p>
                <a target="_blank" href="https://bvsms.saude.gov.br/bvs/publicacoes/imuno_hematologia_laboratorial.pdf">Saiba Mais</a>
            </article>
            
            
        `

    }
        // Adiciona informações sobre o fator Rh
        sangue += fatorRh


        tSangue.innerHTML = sangue

}
// Funções estoque(), comoDoar() e ondeDoar() possuem semantica semelhantes

function estoque(){
    remover() //Remove a imagem existente
    divResultado.classList.remove('remover')

    let sobreEstoque = document.getElementById('resultado'); // Insere o HTML gerado no elemento 'resultado'

    conteudoEstoque = '';


    conteudoEstoque += `<section class="estoqueSangue">
                            <img src="imagens/status.png" alt="">
                            <a target="_blank" href="https://www.prosangue.sp.gov.br/home/">Saiba Mais</a>
                        </section>
    `;

    sobreEstoque.innerHTML = conteudoEstoque;
}

function comoDoar(){
    remover()
    divResultado.classList.remove('remover')

    let como = document.getElementById('resultado')

    conteudoComo = ""

    conteudoComo += comoDoarContent

    como.innerHTML = conteudoComo
}

function ondeDoar(){
    remover() //Remove a imagem existente
    divResultado.classList.remove('remover')
    
    let localOndeDoar = document.getElementById('resultado')

    let escolhaLocal = ''

    escolhaLocal += `
    <div id="comoDoar" class="comoDoar">
                    <h2 id="hemocentro" >Hemocentros  </h2>
                    <a target="_blank" href="https://www.prosangue.sp.gov.br/uploads/arquivos/MapaA3.pdf"> >> Procure no seu estado << </a>
                    <h5 ><a  target="_blank" href="https://www.prosangue.sp.gov.br/hemocentros/Default.html">Fundação Pró-Sangue Hemocentro de São Paulo</a></h5>

    `

    for (let local of localDeDoar ){


        escolhaLocal += `

                    
                        <ul>       
                            <li id=${local.ids}> 
                                    <span>${local.Tipo}</span>
                                    <p>${local.descricao}</p>
                            </li>
                            
                        </ul>`
                    


    }

    escolhaLocal += `</div>`

    

    localOndeDoar.innerHTML = escolhaLocal
}

function pesquisar(){
    let campoPesquisa =document.getElementById('procurar').value
    let  respostaDaPesquisa = document.getElementById('resposta')

    divResposta.classList.remove('remover')
    divResultado.classList.add('remover')


    console.log(campoPesquisa)

    if (!campoPesquisa){
        respostaDaPesquisa.innerHTML = '<h2>Digite alguma coisa!</h2>'
        return
    } 
    
    campoPesquisa = campoPesquisa.toLowerCase()

    let resposta = '';
    let tipo = '';
    let endereco = '';
    let tag = '';

    for (let objeto of sangueTipos){

        tipo = objeto.Tipo.toLowerCase()
        endereco = objeto.descricao.toLowerCase()
        tag = objeto.tags.toLowerCase()

        if (tipo.includes(campoPesquisa)|| endereco.includes(campoPesquisa)||tag.includes(campoPesquisa)){

            

            resposta += `
            <article class="tipos-sangue"  id=${objeto.ids} >
                <h2>${objeto.Tipo}</h2>
                <img src=${objeto.imagem}>
                <p>${objeto.descricao}</p>
                <a target="_blank" href="https://bvsms.saude.gov.br/bvs/publicacoes/imuno_hematologia_laboratorial.pdf">Saiba Mais</a>
            </article>
            
            
        `
            
        }

       

    }

    for (let item of localDeDoar){

        tipo = item.Tipo.toLowerCase()
        endereco = item.descricao.toLowerCase()
        tag = item.tags.toLowerCase()

        if ( tipo.includes(campoPesquisa) || endereco.includes(campoPesquisa)||tag.includes(campoPesquisa)){
        
            resposta += `
            <div id="comoDoar" class="comoDoar">
                            <h2 id="hemocentro" >Hemocentros  </h2>
                            <a target="_blank" href="https://www.prosangue.sp.gov.br/uploads/arquivos/MapaA3.pdf"> >> Procure no seu estado << </a>
                            <h5 ><a  target="_blank" href="https://www.prosangue.sp.gov.br/hemocentros/Default.html">Fundação Pró-Sangue Hemocentro de São Paulo</a></h5>
        
            `
            
            resposta += `
                        <ul>       
                            <li id=${item.ids}> 
                                    <span>${item.Tipo}</span>
                                    <p>${item.descricao}</p>
                            </li>
                            
                        </ul>`

            
            resposta += `</div>`            
        }

    }

    for (let importante of oQuePrecisa){

        precisa = importante.tags.toLowerCase()

        if(precisa.includes(campoPesquisa)){
            resposta += comoDoarContent
        }
    }

    if (!resposta) {
        resposta = "<h2>Nada foi encontrado!</h2>"
    }

    respostaDaPesquisa.innerHTML = resposta

}


