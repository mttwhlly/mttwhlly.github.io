const tiers = [
  {
    name: 'Exact match',
    threshold: 'score ≥ 4.5',
    action: 'Top 1–2 results',
    example: '"cardiology" → Cardiology',
    intensity: 'high',
  },
  {
    name: 'Related match',
    threshold: 'score ≥ 2.0',
    action: 'Top 3 results',
    example: '"foot doctor" → Podiatrist, Foot & Ankle Surgery, Ortho Foot & Ankle',
    intensity: 'mid',
  },
  {
    name: 'Too generic',
    threshold: '≥ 5 results clear the bar',
    action: 'specialty = null, fall back to location',
    example: '"doctor" → specialty skipped',
    intensity: 'low',
  },
] as const;

const intensityStyles: Record<(typeof tiers)[number]['intensity'], string> = {
  high: 'border-sky-300 bg-[#f0f9ff] dark:bg-white/[0.06]',
  mid: 'border-sky-200 dark:border-sky-900 bg-[#f8fcff] dark:bg-white/[0.03]',
  low: 'border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900',
};

const textStyles: Record<(typeof tiers)[number]['intensity'], string> = {
  high: 'text-[#0369a1] dark:text-sky-300',
  mid: 'text-[#0369a1]/70 dark:text-sky-300/70',
  low: 'text-gray-500 dark:text-neutral-400',
};

export default function SpecialtyTierDiagram() {
  return (
    <figure className="my-8">
      <div className="border border-gray-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 dark:bg-neutral-900/60 border-b border-gray-200 dark:border-neutral-800 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 dark:text-neutral-400">
            Specialty confidence tiers
          </span>
        </div>
        <div className="p-5 space-y-2">
          {tiers.map(({ name, threshold, action, example, intensity }) => (
            <div key={name} className={`rounded-xl border px-4 py-3 ${intensityStyles[intensity]}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <span className={`text-xs font-semibold ${textStyles[intensity]}`}>{name}</span>
                <span className="text-[10px] font-mono text-gray-400 dark:text-neutral-500">
                  {threshold}
                </span>
              </div>
              <div className="text-[10px] font-mono text-gray-500 dark:text-neutral-400 mt-1">
                {action}
              </div>
              <div className="text-[10px] font-mono text-gray-400 dark:text-neutral-500 mt-1 italic">
                {example}
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 dark:text-neutral-500 text-center mt-3 font-mono italic">
        A confident term narrows hard. A meaningless one narrows nothing — rather than pretending
        to.
      </figcaption>
    </figure>
  );
}
