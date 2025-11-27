export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-slate-600 flex justify-between flex-col sm:flex-row gap-2">
        <span>© {new Date().getFullYear()} NewsClone. Built with Next.js.</span>
        <span>Assignment: LiveHindustan front page clone (simplified).</span>
      </div>
    </footer>
  );
}