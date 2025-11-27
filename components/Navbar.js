import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-red-600">
          NewsClone
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-slate-700 font-medium">
          {["India", "World", "Sports", "Business", "Entertainment", "Tech"].map((item) => (
            <Link
              key={item}
              href="#"
              className="hover:text-red-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="text-slate-600 hover:text-red-600">
            🔍
          </button>

          <button className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-red-700 transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}