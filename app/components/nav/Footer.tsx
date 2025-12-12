export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 text-sm text-slate-600 flex flex-col bg-brand-footer shadow-footer">
      <p className="font-medium text-slate-700">
        Amanda Lyckenius — Fullstack Developer
      </p>

      <p className="text-slate-500">
        Built with React & Tailwind · Hosted on Vercel
      </p>

      <div className="text-xs text-slate-400 mt-4">
        <p>© {new Date().getFullYear()} Amanda Lyckenius</p>
        <p>Stockholm, Sweden</p>
      </div>
    </footer>
  );
}
