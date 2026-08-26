import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="nav">
        <Link href="/" className="brand">
          MockMarket
        </Link>

        <Link href="/dashboard" className="btn">
          Dashboard
        </Link>
      </nav>

      <main className="container">
        <section className="hero">
          <h1>
            Find Services. Buy. Sell. Manage Orders.
          </h1>

          <p>
            MockMarket is a development marketplace
            built with Next.js, PostgreSQL and Telegram.
          </p>

          <Link href="/services" className="btn">
            Browse Services
          </Link>
        </section>
      </main>
    </>
  );
}
