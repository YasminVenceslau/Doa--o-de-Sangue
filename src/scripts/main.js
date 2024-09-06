const imagem = document.getElementById('super') // Seleciona a imagem que será removida ao carregar um novo conteúdo

function sobreSangue(){

    imagem.remove()// Remove a imagem existente
    
    let tSangue = document.getElementById('resultado');  // Seleciona o elemento onde o conteúdo sobre tipos sanguíneos 

    let sangue = "" // Inicializa uma string vazia

    for (let tipo of sangueTipos ) { // Itera sobre os tipos de sangue e cria HTML para cada tipo
        sangue += `
            <article class="tipos-sangue"  id=${tipo.ids} >
                <h2>${tipo.Tipo}</h2>
                <img src=${tipo.imagem}>
                <p>${tipo.descrição}</p>
                <a target="_blank" href="https://bvsms.saude.gov.br/bvs/publicacoes/imuno_hematologia_laboratorial.pdf">Saiba Mais</a>
            </article>
            
            
        `

    }
        // Adiciona informações sobre o fator Rh
        sangue += `<section class="tipos-sangue"  id="tipos-rh"> 
                <h2>Fator Rh</h2>
                <p>
                    Antígeno também presente nas hemácias e é considerado para a transfusão.
                    
                </p>
                <h3>Rh+</h3>
                <img src="imagens/rh+.png" alt="">
                <p>Que possuem esse fator e só podem doar para eles mesmos.</p>
                <h3>Rh-</h3>
                <img src="imagens/rh-.png" alt="">
                <p>Não possui esse fator e  pode doar para os que possuem ou não, mas só podem recber deles mesmo.</p>

                <a target="_blank" href="https://bvsms.saude.gov.br/bvs/publicacoes/imuno_hematologia_laboratorial.pdf">Saiba Mais</a>
            </section>
            `


        tSangue.innerHTML = sangue

}
// Funções estoque(), comoDoar() e ondeDoar() possuem semantica semelhantes

function estoque(){
    imagem.remove()

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
    imagem.remove()
    let como = document.getElementById('resultado')

    conteudoComo = ""

    conteudoComo +=`  <div class="comoDoar">
            
                <ul class="">
                    <h2>Requisitos básicos - <a target="_blank" href="https://www.prosangue.sp.gov.br/artigos/requisitos_basicos_para_doacao.html">Saiba mais</a></h2>
                    <li> Estar em boas condições de saúde.</li>
    
                    <li> Ter entre 16 e 69 anos, desde que a primeira doação tenha sido feita até 60 anos .</li>
    
                    <li> Pesar no mínimo 50kg.</li>
    
                    <li> Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas).</li>
    
                    <li> Estar alimentado (evitar alimentação gordurosa nas 4 horas que antecedem a doação).</li>
    
                    <li> Apresentar documento original com foto recente, que permita a identificação do candidato.</li>
                </ul>
                <ul>
                    <h2>Impedimentos temporários</h2>
                    <li>Resfriado: aguardar 7 dias após desaparecimento dos sintomas.</li>
    
                    <li>Gravidez.</li>
    
                    <li>90 dias após parto normal e 180 dias após cesariana.</li>
    
                    <li>Ingestão de bebida alcoólica nas 12 horas que antecedem a doação.</li>
                </ul>
    
                <ul>
                    <h2>Impedimentos definitivos - <a  target="_blank" href=" https://www.prosangue.sp.gov.br/artigos/quem_nao_pode_doar.html">Saiba mais</a></h2></h2>
   
                    <li>Hepatite após os 11 anos de idade.</li> 
                    <li>Uso de drogas ilícitas injetáveis.</li>
                    <li>Doença de Parkinson.</li>
                    
                        <ul><h3>Evidência clínica ou laboratorial das seguintes doenças infecciosas transmissíveis pelo sangue:</h3>
                            <li>Hepatites B e C.</li>
                            <li>AIDS (vírus HIV).</li>
                            <li>doenças associadas aos vírus HTLV I e II.</li>
                            <li>Uso de drogas ilícitas injetáveis.</li>
                            <li>Doença de Chagas.</li>
                        </ul> 
                    
                </ul>
            </div>`

    como.innerHTML = conteudoComo
}

function ondeDoar(){
    imagem.remove()
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
                            <li id=${local.localID}> 
                                    <span>${local.localNome}</span>
                                    <p>${local.endereco}</p>
                            </li>
                            
                        </ul>`
                    


    }

    escolhaLocal += `</div>`

    

    localOndeDoar.innerHTML = escolhaLocal
}