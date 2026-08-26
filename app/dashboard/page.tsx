import { prisma } from "@/lib/prisma";

export default async function Dashboard() {
  const users = await prisma.user.count();
  const services = await prisma.service.count();
  const orders = await prisma.order.count();

  return (
    <main className="container">
      <h1>Dashboard</h1>

      <p className="muted">
        Platform overview
      </p>

      <div className="grid">
        <div className="card">
          <h2>{users}</h2>
          <p>Users</p>
        </div>

        <div className="card">
          <h2>{services}</h2>
          <p>Services</p>
        </div>

        <div className="card">
          <h2>{orders}</h2>
          <p>Orders</p>
        </div>
      </div>
    </main>
  );
}
