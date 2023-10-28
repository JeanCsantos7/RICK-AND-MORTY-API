
const nav_bar = document.querySelector('.nav_bar')
const menu = document.querySelector('.menu_mobile')
const alterar_image = document.querySelector('.cardImage')
const nomePersonagem = document.querySelector('.nomePersonagem')
const Situacao = document.querySelector('.Situacao')
const Specie = document.querySelector('.specie')
const circuloStatus = document.querySelector('#circulo')
const LocalPersonagem = document.querySelector('.LocalPersonagem')
const btnProx = document.querySelector('.btnProx')
const btnAnt = document.querySelector('.btnAnt')
const InputValue = document.querySelector('.InputValue')
const btnInput = document.querySelector('.buttonInput')
const resultadoFiltro = document.querySelector('.resultadoFiltro')
const personagensVivos = document.querySelector('#PersonagensVivos')
const personagensMortos = document.querySelector('#PersonagensMortos')
const personagensDesconhecidos = document.querySelector('#PersonagensDesconhecidos')
const main = document.querySelector('main')
const label = document.querySelector('label')

























function menuMobile() {


    nav_bar.classList.toggle('open')




}




let incrementoPáginas = 1



const CharacterAPI = async (personagem) => {

    const API = await fetch(`https://rickandmortyapi.com/api/character/${personagem}`)
    const dados = await API.json()
    return dados

}






const filtrarPersonagens = async (status) => {
    const API = await fetch(`https://rickandmortyapi.com/api/character/?status=${status}`)
    const dados = await API.json()
    resultadoFiltro.innerHTML = ''

    if (dados.error) {
        resultadoFiltro.innerHTML = 'Não conseguimos filtrar'
        return resultadoFiltro

    }

    dados.results.forEach(status => {
        const novaDiv = document.createElement('div')
        novaDiv.classList.add('container')
        novaDiv.classList.add('main')
        novaDiv.innerHTML = `<main>
         
      
    
            
        <div class="container">
          <img class="cardImage" src="${status.image}" alt="">
          <h1 class="nomePersonagem">${status.name}</h1>
          
          <span class="status">
            
              <p class="Situacao">${status.status}</p>-
              <h2 class="specie">${status.species}</h2>
              
      
              
          </span>
          
          
          <h2 class="Localizacao">Localização</h2> 
          <p class="LocalPersonagem">${status.location.name}</p>
          
        
    
      
    
    
        </div>
    
       
        
        
          
      </main>
      
    
          
    
     `

        resultadoFiltro.appendChild(novaDiv)



    })






}













const renderPersonage = async (personagem) => {
    try {

        const aguardarAPI = await CharacterAPI(personagem)
        nomePersonagem.innerHTML = aguardarAPI.name
        Situacao.innerHTML = aguardarAPI.status
        Specie.innerHTML = aguardarAPI.species
        LocalPersonagem.innerHTML = aguardarAPI.location.name
        alterar_image.src = aguardarAPI.image



        if (aguardarAPI.status === 'Dead') {

            circuloStatus.src = './Assets/circulo vermelho.png'

        }


        else if (aguardarAPI.status === 'unknown') {

            circuloStatus.src = './Assets/circulo cinza.png'
        }

        else {

            circuloStatus.src = './Assets/circulo.png'

        }

    }

    catch {

        nomePersonagem.innerHTML = 'ERRO NA API'
        Situacao.innerHTML = 'ERRO NA API'
        Specie.innerHTML = 'ERRO NA API'
        alterar_image.src = 'ERRO NA API'
        LocalPersonagem.innerHTML = 'ERRO NA API'

    }





}


btnInput.addEventListener('click', (e) => {


    renderPersonage(InputValue.value)

})

btnAnt.addEventListener('click', () => {

    if (incrementoPáginas > 1) {
        incrementoPáginas -= 1
        renderPersonage(incrementoPáginas)
    }

})

btnProx.addEventListener('click', () => {

    incrementoPáginas += 1
    renderPersonage(incrementoPáginas)

})



menu.addEventListener('click', () => {

    menuMobile()

})


personagensVivos.addEventListener('click', (e) => {
    e.preventDefault()
    e.preventDefault()
    InputValue.remove()
    btnInput.remove()
    alterar_image.remove()
    circuloStatus.remove()
    nomePersonagem.remove()
    Situacao.remove()
    Specie.remove()
    btnAnt.remove()
    btnProx.remove()
    main.remove()
    label.remove()
    filtrarPersonagens('Alive')


})

personagensMortos.addEventListener('click', (e) => {

    e.preventDefault
    e.preventDefault()
    InputValue.remove()
    btnInput.remove()
    alterar_image.remove()
    circuloStatus.remove()
    nomePersonagem.remove()
    Situacao.remove()
    Specie.remove()
    btnAnt.remove()
    btnProx.remove()
    main.remove()
    label.remove()
    filtrarPersonagens('Dead')


})

personagensDesconhecidos.addEventListener('click', (e) => {

    e.preventDefault
    e.preventDefault()
    InputValue.remove()
    btnInput.remove()
    alterar_image.remove()
    circuloStatus.remove()
    nomePersonagem.remove()
    Situacao.remove()
    Specie.remove()
    btnAnt.remove()
    btnProx.remove()
    main.remove()
    label.remove()
    filtrarPersonagens('unknown')


})


renderPersonage(incrementoPáginas)




