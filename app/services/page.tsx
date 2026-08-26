import { prisma } from "@/lib/prisma";

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    include: {
      seller: true
    }
  });

  return (
    <main className="container">
      <h1>All Services</h1>

      <p className="muted">
        Browse all marketplace services.
      </p>

      <div className="grid">
        {services.map((service) => (
          <div className="card" key={service.id}>
            <p className="muted">
              {service.category}
            </p>

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            <strong>${service.price}</strong>

            <p>
              Seller: {service.seller.name}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
