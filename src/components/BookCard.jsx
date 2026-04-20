import { Pencil, Trash2, BookOpen } from 'lucide-react';

export default function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="book-card group">
      {/* Cover */}
      <div className="flex-shrink-0 w-16 h-24 rounded-lg overflow-hidden bg-white shadow-md">
        {book.cover ? (
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '';
              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-purple-400/40"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>`;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-purple-400/40">
            <BookOpen size={24} strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-semibold text-sm text-purple-100 leading-tight line-clamp-2 mb-1">
          {book.title}
        </h3>
        <p className="text-purple-300/60 text-xs mb-1">{book.author}</p>
        <p className="text-purple-400/40 text-xs mb-3">{book.year} · {book.category}</p>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button onClick={() => onEdit(book)} className="btn-primary">
            <Pencil size={12} />
            Editar
          </button>
          <button onClick={() => onDelete(book.id)} className="btn-danger">
            <Trash2 size={12} />
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
