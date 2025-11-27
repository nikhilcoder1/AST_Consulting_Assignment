import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";
import articlesData from "../data/news";
import BreakingTicker from "@/components/BreakingTicker";

export default function Home({ articlesBySection }) {
  const latest = articlesBySection.latest;
  if (!latest || latest.length === 0) {
    return (
      <>
        <Head>
          <title>NewsClone - Front Page</title>
          <meta
            name="description"
            content="A modern news front page built with Next.js for assignment."
          />
        </Head>

        <BreakingTicker
          headlines={articlesBySection.latest.map(a => a.title)}
        />

        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-20 text-center">
          <p className="text-red-500 font-semibold text-lg">
            No news available at the moment.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const [main, ...rest] = latest;
  const side = rest.slice(0, 3);

  return (
    <>
      <Head>
        <title>NewsClone - Front Page</title>
        <meta
          name="description"
          content="A modern news front page built with Next.js for a LiveHindustan-style assignment."
        />
      </Head>
      <Navbar />
      <main>
        <Hero articles={latest.slice(0, 5)} />


        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-red-600"></span>
            <h2 className="text-xl font-bold">Latest</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.slice(0, 6).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-red-600"></span>
            <h2 className="text-xl font-bold">Trending</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesBySection.trending.slice(0, 6).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-red-600"></span>
            <h2 className="text-xl font-bold">Sports</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesBySection.sports.slice(0, 6).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = articlesData;

  const latest = [...data].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  const trending = [...data].reverse();
  const sports = data.filter((d) => d.category === "Sports");

  return {
    props: {
      articlesBySection: {
        latest,
        trending,
        sports,
      },
    },
    revalidate: 60,
  };
}
