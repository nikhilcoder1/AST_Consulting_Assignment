import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import articles from "../../data/news";

export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Article not found</h1>
          <p className="mt-3 text-slate-600">
            The requested article does not exist or may have been removed.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} - NewsClone</title>
        <meta name="description" content={article.summary} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: article.title,
              image: article.image && article.image.trim() !== ""
              ? article.image
              : "/default-cover-image.png" ,

              datePublished: article.publishedAt,
              author: {
                "@type": "Person",
                name: article.author,
              },
            }),
          }}
        />
      </Head>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-slate-900">
          {article.title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {article.author} •{" "}
          {article.publishedAt}
        </p>

        <div className="mt-6 relative h-80 w-full rounded-xl overflow-hidden bg-slate-200">
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


        <article className="prose prose-sm sm:prose mt-6 max-w-none">
          <p>{article.content}</p>
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = articles.map((a) => ({
    params: { slug: a.slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.slug === params.slug) || null;
  return {
    props: { article },
    revalidate: 60,
  };
}
