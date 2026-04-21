📚 Acervo de Livros
Aplicação web para gerenciar sua biblioteca pessoal — adicione, edite, organize e remova livros com persistência de dados no navegador.<br>

<img width="1882" height="898" alt="Captura de tela 2026-04-21 114734" src="https://github.com/user-attachments/assets/c66d9fae-e0ee-41f3-8855-7c7741fe6648" />

✨ Funcionalidades

➕ Adicionar livros com título, autor, ano, categoria e capa<br>
✏️ Editar informações de qualquer livro<br>
🗑️ Excluir com confirmação para evitar exclusões acidentais<br>
💾 Dados salvos automaticamente no localStorage — nada se perde ao fechar o navegador<br>
📂 9 categorias disponíveis: Fantasia, Ficção Científica, Literatura, Mistério, Romance, Biografia, História, Filosofia e Outros<br>
📱 Layout responsivo para diferentes tamanhos de tela<br>

📁 Estrutura do projeto<br>

src/<br>
├── components/<br>
│   ├── BookCard.jsx       # Card de exibição de cada livro<br>
│   ├── BookModal.jsx      # Modal de adicionar/editar livro<br>
│   ├── ConfirmDialog.jsx  # Diálogo de confirmação de exclusão<br>
│   └── Sidebar.jsx        # Barra lateral de navegação<br>
├── data/<br>
│   └── books.js           # Categorias disponíveis<br>
├── App.jsx                # Componente raiz + lógica principal<br>
├── main.jsx               # Ponto de entrada<br>
└── index.css              # Estilos globais<br>
