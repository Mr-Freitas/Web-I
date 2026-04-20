import { Trash2 } from 'lucide-react';

export default function ConfirmDialog({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-sm bg-bg-secondary rounded-2xl border border-white/10 shadow-2xl p-6 animate-scale-in text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <Trash2 size={20} className="text-red-400" />
          </div>
        </div>
        <h3 className="font-display font-semibold text-purple-100 mb-2">Excluir livro</h3>
        <p className="text-sm text-purple-300/60 mb-6">Tem certeza que deseja remover este livro do acervo?</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-xl text-sm text-purple-300/70 hover:text-purple-200 hover:bg-white/5 border border-white/5 transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-red-500/80 hover:bg-red-500 text-white transition-all"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
