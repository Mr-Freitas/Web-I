import { BookOpen, PlusCircle } from 'lucide-react';

export default function Sidebar({ onAddBook }) {
  return (
    <aside className="w-56 flex-shrink-0 bg-bg-secondary border-r border-white/5 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/5">
        <div className="flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-accent-purple"
              style={{ height: `${16 + i * 4}px` }}
            />
          ))}
        </div>
        <span className="font-display font-semibold text-purple-100 text-sm">ACERVO BIBLIOGRÁFICO</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        <button className="sidebar-item sidebar-item-active w-full text-left">
          <BookOpen size={16} />
          Todos os livros
        </button>
      </nav>

      {/* Adicionar Botão */}
      <div className="px-3 pb-5">
        <button
          onClick={onAddBook}
          className="sidebar-item w-full text-left text-accent-purple-light hover:text-accent-purple-light hover:bg-accent-purple/10 border border-dashed border-accent-purple/30"
        >
          <PlusCircle size={16} />
          Adicionar Livro
        </button>
      </div>
    </aside>
  );
}
