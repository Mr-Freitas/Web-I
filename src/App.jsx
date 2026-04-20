import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import BookCard from './components/BookCard';
import BookModal from './components/BookModal';
import ConfirmDialog from './components/ConfirmDialog';

const STORAGE_KEY = 'acervo-livros';

function loadBooks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveBooks(books) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

export default function App() {
  const [books, setBooks] = useState(loadBooks);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    saveBooks(books);
  }, [books]);

  const handleAddBook = () => {
    setEditingBook(null);
    setModalOpen(true);
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setModalOpen(true);
  };

  const handleSave = (data) => {
    if (editingBook) {
      setBooks((prev) => prev.map((b) => (b.id === editingBook.id ? { ...data, id: b.id } : b)));
    } else {
      const newId = Date.now();
      setBooks((prev) => [...prev, { ...data, id: newId }]);
    }
    setModalOpen(false);
    setEditingBook(null);
  };

  const handleDeleteRequest = (id) => setDeletingId(id);

  const handleDeleteConfirm = () => {
    setBooks((prev) => prev.filter((b) => b.id !== deletingId));
    setDeletingId(null);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onAddBook={handleAddBook} />

      <main className="flex-1 flex flex-col overflow-hidden bg-bg-primary">
        <header className="flex items-center justify-between px-8 py-5 border-b border-white/5">
          <h1 className="font-display font-bold text-xl text-purple-100">Acervo de Livros</h1>
          <span className="text-purple-400/50 text-sm">{books.length} {books.length === 1 ? 'livro' : 'livros'}</span>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {books.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-purple-400/40">
              <p className="font-display text-lg mb-1">Nenhum livro no acervo</p>
              <p className="text-sm">Clique em "Adicionar Livro" para começar.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {books.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onEdit={handleEdit}
                  onDelete={handleDeleteRequest}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {modalOpen && (
        <BookModal
          book={editingBook}
          onSave={handleSave}
          onClose={() => { setModalOpen(false); setEditingBook(null); }}
        />
      )}

      {deletingId !== null && (
        <ConfirmDialog
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingId(null)}
        />
      )}
    </div>
  );
}
