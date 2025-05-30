<h1 className="text-blue-600 text-3xl font-bold">Tailwind is working!</h1>



import WeeklyGrid from "@/components/WeeklyGrid";
import MaintenancePage from "./maintenance/page";

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>; pageProps: Record<string, unknown> }) {
  const isMaintenance = true;
  if (isMaintenance) return <MaintenancePage />;
  return <Component {...pageProps} />;
}

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-white py-12 shadow">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">🛍️ Top Picks Weekly</h1>
          <p className="text-lg text-gray-600 mt-2">
            Curated Amazon best-sellers — updated every week.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          This Week’s Top 10 Picks
        </h2>
        <WeeklyGrid />
      </section>
    </main>
  );
}
