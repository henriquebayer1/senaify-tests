describe('Teste para a tela de pesquisa', () => {
before(() => {cy.visit('/')})

  it('verificar se o header e visivel', () => {
    //capturar o elemento title e verifica se esta visivel

    cy.get("[aria-label='title-head']").should('be.visible')

    cy.get("[aria-label='title-head']").should('contain', "Good morning")

   
  })

  it('verificar se exixte itens na listagem de playlists', () => {
  
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should('have.length.greaterThan', 0)
  })

  it('Roteiro 1', () => {
  
    // Scenario: Visualizar playlists e executar uma música
    // Then eu vejo o header "Good morning"
    // And eu vejo uma lista de playlists
    // When eu clico na primeira playlist
    // Then eu vejo uma lista de músicas
    // And eu clico na primeira música
    // Then a música começa a tocar

    //clica no primeiro item da lista 
    cy.get("[aria-label='playlist-item']").first().click()
    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0)
  })


  it('Roteiro 2', () => {
  
    // Scenario: Navegar entre playlists e executar outra música
    // When eu volto para a listagem de playlists
    // And eu clico na segunda playlist
    // Then eu vejo uma lista de músicas
    // And eu clico na primeira música
    // Then a música começa a tocar



    //clica no primeiro item da lista 
    cy.get("[data-testid='homeNav']").click()
    cy.get("[aria-label='playlist-item']").eq(2).click()
    cy.get("[aria-label='music-item']").first().click()
    
  })

  it('Roteiro 3', () => {
  
    // Scenario: Procurar e favoritar uma música
    // Given que eu estou na tela de Pesquisa
    // When eu procuro por uma música "Nome da Música"
    // Then eu vejo uma lista de resultados de músicas
    // When eu clico na primeira música dos resultados
    // Then a música começa a tocar
    // And eu clico para favoritar a música
    // Then a música é adicionada à lista de favoritos



    //clica no primeiro item da lista 
    cy.get("[href='/Search']").click()
    cy.get("[data-testid='campoBusca']").type("Samba de Malandro")
    cy.wait(3000)
    cy.get("[aria-label='music-item']").first().click()

  })





  // it('Clicar na musica desejada e executar o audio', () => {
  
  //   //clica no item da lista com o nome especifico que no caso aqui e Lua
  //   cy.get("[aria-label='music-item']").contains("Lua").click()
  // })


  // it('Redirecionar minha tela para a tela de busca', () => {
  
  //   //clica no item da lista com o nome especifico que no caso aqui e Lua
  //   cy.get("[href='/Search']").click()
  // })

  // it('Procurar por musica desejada', () => {
  
  //   //clica no item da lista com o nome especifico que no caso aqui e Lua
  //   cy.get("[data-testid='campoBusca']").type("Samba de Malandro")

    
  // })



  // it("Clicou no botao de curtir", async () => {
  //   cy.wait(1500)

  //   cy.get("[aria-label='music-item']").filter(":contains('Samba de Malandro')").then( async (item) => {
  //     cy.wrap(item).find("[data-testid='icon-button']").click()
  //   });
  
  
  // it('Procurar por musica desejada filtro', () => {
  
  //   //clica no item da lista com o nome especifico que no caso aqui e Lua
  //   cy.get("[aria-label='music-item']").filter(":contains('Samba de Malandro')").click()

    

  })

  
