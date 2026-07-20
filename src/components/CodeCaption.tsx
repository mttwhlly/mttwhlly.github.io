export default function CodeCaption({
  filename,
  description,
}: {
  filename: string;
  description?: string;
}) {
  return (
    <div className="code-caption mt-8 rounded-t-xl bg-gray-900 border border-b-0 border-gray-800 px-4 py-2 flex items-center gap-3">
      <span className="text-xs font-mono text-gray-300">{filename}</span>
      {description && (
        <span className="text-xs font-mono text-gray-600 truncate">{description}</span>
      )}
    </div>
  );
}
