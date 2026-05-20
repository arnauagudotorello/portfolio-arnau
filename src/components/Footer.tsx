export default function Footer() {
  return (
    <footer className="border-t border-[#333] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Arnau Agudo Torelló. Todos los derechos reservados.
        </p>
        <p className="text-zinc-500 text-sm flex items-center gap-1">
          Desarrollado con <span className="text-[var(--color-brand-500)]">♥</span> en React
        </p>
      </div>
    </footer>
  );
}
