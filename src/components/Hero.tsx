export default function Hero() {
  return (
    <section id="inicio" className="hero-bg pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tight">
            La nueva era de la <span className="text-brand-blue600">seguridad privada</span> en Colombia
          </h1>
          <p className="mt-6 text-lg text-brand-gray300 max-w-2xl">
            Diseñamos soluciones que digitalizan y automatizan la operación de vigilancia con IA, trazabilidad y cumplimiento.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#solucion" className="btn btn-primary">Conoce la solución</a>
            <a href="#roles"  className="btn btn-ghost">Ver perfiles</a>
          </div>
        </div>
      </div>
    </section>
  );
}
