function Node({
  label,
  detail,
  highlight = false,
}: {
  label: string;
  detail?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-xl px-3 py-2.5 border text-center flex-1 min-w-0"
      style={
        highlight
          ? { borderColor: '#d4fc52', backgroundColor: '#ffffeb' }
          : { borderColor: '#e5e7eb', backgroundColor: '#fff' }
      }
    >
      <div className="text-xs font-semibold text-gray-800 leading-snug">{label}</div>
      {detail && <div className="text-[10px] font-mono text-gray-400 mt-0.5 leading-snug">{detail}</div>}
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center shrink-0 px-0.5">
      {label && (
        <span className="text-[9px] font-mono text-gray-400 mb-0.5 whitespace-nowrap">{label}</span>
      )}
      <span className="text-gray-300 text-base leading-none">→</span>
    </div>
  );
}

export default function SystemFlowDiagram() {
  const buckets = [
    { cls: 'mapped', note: 'Code Connect exists', highlight: true },
    { cls: 'backlog', note: 'real mapping demand', highlight: false },
    { cls: 'external', note: 'fork / foreign', highlight: false },
    { cls: 'renderpart', note: 'excluded, reason-tagged', highlight: false },
    { cls: 'icon', note: 'external library mapping', highlight: false },
  ];

  return (
    <figure className="my-8">
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
            System flow
          </span>
        </div>
        <div className="p-5">
          {/* Main pipeline — scrolls horizontally on narrow screens */}
          <div className="flex items-stretch gap-1 overflow-x-auto pb-1">
            <Node label="35 Figma product files" detail="input" />
            <Arrow />
            <Node label="Scanner" detail="retry + page guard" />
            <Arrow />
            <Node label="Classifier" detail="5-bucket taxonomy" />
            <Arrow label="mapped" />
            <Node label="@org/design-system" detail="npm package + manifest" highlight />
            <Arrow />
            <div className="flex flex-col gap-1.5 flex-1 min-w-[80px]">
              <div className="rounded-xl px-3 py-2 border border-gray-200 bg-white text-center flex-1 flex items-center justify-center">
                <div className="text-xs font-semibold text-gray-800">Engineers</div>
              </div>
              <div className="rounded-xl px-3 py-2 border border-gray-200 bg-white text-center flex-1 flex items-center justify-center">
                <div className="text-xs font-semibold text-gray-800">AI agents</div>
              </div>
            </div>
          </div>

          {/* Classifier bucket breakdown */}
          <div className="mt-3 border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
            <div className="px-4 py-1.5 bg-gray-50">
              <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400">
                Classifier outputs
              </span>
            </div>
            <div className="grid grid-cols-5 divide-x divide-gray-100">
              {buckets.map(({ cls, note, highlight }) => (
                <div
                  key={cls}
                  className="px-2 py-2 text-center"
                  style={highlight ? { backgroundColor: '#ffffeb' } : {}}
                >
                  <div
                    className="text-[10px] font-mono font-semibold"
                    style={{ color: highlight ? '#3a4a00' : '#6b7280' }}
                  >
                    {cls}
                  </div>
                  <div className="text-[9px] font-mono text-gray-400 mt-0.5 leading-snug">{note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Fork-relink loop */}
          <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-gray-400">
            <span className="border border-gray-200 rounded-lg px-2 py-1 text-gray-500 bg-gray-50">
              forks
            </span>
            <span>→</span>
            <span className="border border-gray-200 rounded-lg px-2 py-1 text-gray-600 bg-white">
              fork-relink plugin
            </span>
            <span>→</span>
            <span className="border border-gray-200 rounded-lg px-2 py-1 text-gray-500 bg-gray-50">
              Figma files
            </span>
          </div>
        </div>
      </div>
      <figcaption className="text-xs text-gray-400 text-center mt-3 font-mono italic">
        The work was less about one mapping and more about creating a trustworthy design-to-code system of record.
      </figcaption>
    </figure>
  );
}
