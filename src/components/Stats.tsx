export default function Stats() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="card p-6">
          <h2 className="font-display text-2xl">El sector hoy: datos y dolores reales</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-white/10 p-5">
              <div className="text-sm text-brand-gray500">Empleos formales</div>
              <div className="mt-2 text-3xl font-bold">390,000</div>
              <div className="text-xs text-brand-gray500 mt-1">Fuente: Supervigilancia (2024)</div>
            </div>
            <div className="rounded-lg border border-white/10 p-5">
              <div className="text-sm text-brand-gray500">PIB anual (2023)</div>
              <div className="mt-2 text-3xl font-bold">1,2% del PIB</div>
              <div className="text-xs text-brand-gray500 mt-1">Fuente: CCS & Supervigilancia</div>
            </div>
            <div className="rounded-lg border border-white/10 p-5">
              <div className="text-sm text-brand-gray500">Empresas de seguridad</div>
              <div className="mt-2 text-3xl font-bold">901–1,474</div>
              <div className="text-xs text-brand-gray500 mt-1">Fuente: Supervigilancia / CIIU 8010</div>
            </div>
            <div className="rounded-lg border border-white/10 p-5">
              <div className="text-sm text-brand-gray500">Dolores clave</div>
              <ul className="mt-2 text-sm list-disc list-inside text-brand-gray300">
                <li>Alta rotación de personal</li>
                <li>Flujos administrativos en papel</li>
                <li>Baja trazabilidad / auditorías lentas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
