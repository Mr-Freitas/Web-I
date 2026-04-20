import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { CATEGORIES } from "../data/books";

const emptyBook = {
  title: "",
  author: "",
  year: "",
  category: "Literatura",
  cover: "",
};

export default function BookModal({ book, onSave, onClose }) {
  const [form, setForm] = useState(emptyBook);

  useEffect(() => {
    if (book) {
      setForm({ ...book, year: String(book.year) });
    } else {
      setForm(emptyBook);
    }
  }, [book]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return;
    onSave({ ...form, year: parseInt(form.year) || new Date().getFullYear() });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-bg-secondary rounded-2xl border border-white/10 shadow-2xl shadow-black/40 animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <h2 className="font-display font-semibold text-purple-100">
            {book ? "Editar Livro" : "Adicionar Livro"}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-purple-400 hover:text-purple-200 hover:bg-white/5 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <Field label="Título *">
            <input
              required
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Ex: O Senhor dos Anéis"
              className="form-input"
            />
          </Field>

          <Field label="Autor *">
            <input
              required
              value={form.author}
              onChange={(e) => handleChange("author", e.target.value)}
              placeholder="Ex: J.R.R. Tolkien"
              className="form-input"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Ano">
              <input
                type="number"
                value={form.year}
                onChange={(e) => handleChange("year", e.target.value)}
                placeholder="Ex: 1954"
                className="form-input"
              />
            </Field>

            <Field label="Categoria">
              <select
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
                className="form-input"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field label="URL da Capa (opcional)">
            <input
              value={form.cover}
              onChange={(e) => handleChange("cover", e.target.value)}
              placeholder="https://..."
              className="form-input"
            />
          </Field>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm text-purple-300/70 hover:text-purple-200 hover:bg-white/5 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-sm font-semibold bg-accent-purple hover:bg-accent-purple-light text-white transition-all duration-200"
            >
              {book ? "Salvar" : "Adicionar"}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: #1a1625;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 14px;
          color: #e8e0f5;
          outline: none;
          transition: border-color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .form-input:focus {
          border-color: rgba(124, 92, 191, 0.6);
          box-shadow: 0 0 0 3px rgba(124, 92, 191, 0.1);
        }
        .form-input option {
          background: #1a1625;
        }
        .form-input::placeholder {
          color: rgba(167,139,250,0.3);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-purple-300/60 uppercase tracking-wider">
        {label}
      </label>
      {children}
    </div>
  );
}
