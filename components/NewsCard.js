import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ article }) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link href={`/news/${article.slug}`} className="flex flex-col h-full">
        <div className="relative h-44 w-full bg-slate-200">
          <Image
            src={
              article.image && article.image.trim() !== ""
                ? article.image
                : "/default-cover-image.png"
            }
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4 flex flex-col flex-1">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            {article.category.toUpperCase()}
          </span>
          <h2 className="mt-1 text-lg font-bold text-slate-900 line-clamp-2">
            {article.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 line-clamp-3 flex-1">
            {article.summary}
          </p>
          <p className="mt-3 text-xs text-slate-500">
            {article.publishedAt}

          </p>
        </div>
      </Link>
    </article>
  );
}
