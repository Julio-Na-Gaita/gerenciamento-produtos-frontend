const form = document.getElementById('produtoForm');
const listaProdutos = document.getElementById('listaProdutos');

// Adicionar produto
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nomeProduto = document.getElementById('nome').value;

  fetch('https://dded765e-0d8a-4484-87a2-57df14bbbdbe-00-6k918oi95kcp.janeway.replit.dev/produtos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome: nomeProduto }),
  }).then(() => {
    listarProdutos();
  });
});

// Listar produtos
function listarProdutos() {
  fetch('https://dded765e-0d8a-4484-87a2-57df14bbbdbe-00-6k918oi95kcp.janeway.replit.dev/produtos')
    .then(response => response.json())
    .then(produtos => {
      listaProdutos.innerHTML = '';
      produtos.forEach((produto, index) => {
        const li = document.createElement('li');
        li.innerText = produto.nome;
        listaProdutos.appendChild(li);
      });
    });
}

listarProdutos();
