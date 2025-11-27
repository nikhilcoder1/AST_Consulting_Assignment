import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero({ articles }) {
  if (!articles || articles.length === 0) return null;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [articles]);

  const main = articles[index];
  const side = articles.slice(1, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* HERO SLIDER */}
      <div className="lg:col-span-2">
        <Link href={`/news/${main.slug}`} className="block group">
          <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden">

            <Image
              src={
                main.image && main.image.trim() !== ""
                  ? main.image
                  : "/default-cover-image.png"
              }
              alt={main.title}
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Text Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-red-600 text-xs font-bold px-2 py-1 rounded">
                BREAKING
              </span>

              <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight">
                {main.title}
              </h1>

              <p className="mt-2 text-sm text-gray-200 hidden sm:block">
                {main.summary}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* SIDE TRENDING LIST */}
      <div className="space-y-4">
        {side.map(item => (
          <Link 
            key={item.id}
            href={`/news/${item.slug}`}
            className="flex gap-3 items-start group"
          >
            <div className="relative w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-200">
              <Image
                src={
                  item.image && item.image.trim() !== ""
                    ? item.image
                    : "/default-cover-image.png"
                }
                alt={item.title}
                fill
                className="object-cover"
              />

            </div>

            <div>
              <h3 className="font-semibold text-slate-900 group-hover:underline">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {item.category} • {item.publishedAt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
