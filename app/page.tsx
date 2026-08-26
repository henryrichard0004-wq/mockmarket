import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const services = await prisma.service.findMany({
    include: {
      seller: true
    },
    take: 6,
    orderBy: {
      createdAt: "desc"
    }
  });

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
            built with Next.js, PostgreSQL and a
            Telegram bot.
          </p>

          <Link href="/services" className="btn">
            Browse Services
          </Link>
        </section>

        <h2>Featured Services</h2>

        <div className="grid">
          {services.map((service) => (
            <div className="card" key={service.id}>
              <p className="muted">
                {service.category}
              </p>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <p className="muted">
                Seller: {service.seller.name}
              </p>

              <div className="price">
                ${service.price}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
