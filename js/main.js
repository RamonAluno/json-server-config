document.addEventListener('DOMContentLoaded', () => {
  const dataContainer =
            document.getElementById('data-container');

            //funão para tratar erro 404
            const handleErros = (response) => {
                if(!response.ok){
                  throw Error (response.statusText);
                }
                return response;
            }

         //função para buscar e exibir dados API
         const fetchData = async () =>{
        try {
            // fazendo a solicitção get para obter produtos da API
            const response = await fetch('http://localhost:3000/produtos');
            //lidando com erros na resposta

            handleErros(response)
            // convertendo a resposta para json
            const data = await response.json();

            // Exibindo dados na página
            data.forEach(produto => {
                const produtoElemento = 
                    document.createElement('div');
                    produtoElemento.innerHTML = 
        `<strong>${produto.nome}</strong><p>${produto.preco}</p>`

        dataContainer.appendChild(produtoElemento);
            });






        } catch (error) {
            console.log('erro ao buscar dados:'. error);
        }
         };
        fetchData() ;

});