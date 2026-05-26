import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#333] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Arnau Agudo Torello. {t.footer.rights}
        </p>
        <p className="text-zinc-500 text-sm flex items-center gap-1">
          {t.footer.builtWith} <span className="text-[var(--color-brand-500)]">♥</span> React
        </p>
      </div>
    </footer>
  );
}
