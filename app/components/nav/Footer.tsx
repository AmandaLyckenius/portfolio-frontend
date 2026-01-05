export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 text-sm flex flex-col bg-brand-footer shadow-footer">
      <p className="font-medium text-brand-text-muted/90">
        Amanda Lyckenius — Fullstack Developer
      </p>

      <p className="text-brand-text-muted/80">
        Built with React & Tailwind · Hosted on Vercel
      </p>

      <div className="text-xs text-brand-text-muted/80 mt-4">
        <p>© {new Date().getFullYear()} Amanda Lyckenius</p>
        <address className="not-italic">
            Stockholm, Sweden
        </address>
      </div>
    </footer>
  );
}
