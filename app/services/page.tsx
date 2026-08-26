export const dynamic = "force-dynamic";

export default function ServicesPage() {
  return (
    <main className="container">
      <h1>Services</h1>

      <p className="muted">
        Browse available MockMarket services.
      </p>

      <div className="grid">
        <div className="card">
          <p className="muted">Marketing</p>

          <h2>Telegram Channel Promotion</h2>

          <p>
            Professional Telegram promotion service.
          </p>

          <div className="price">$25</div>
        </div>

        <div className="card">
          <p className="muted">Social Media</p>

          <h2>Social Media Marketing</h2>

          <p>
            Social media marketing service.
          </p>

          <div className="price">$30</div>
        </div>
      </div>
    </main>
  );
}
