const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export async function supabaseSelectSingle<T>(
  table: string,
  columns: string,
  match: { column: string; value: string | number }
): Promise<T> {
  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  url.searchParams.set('select', columns);
  url.searchParams.set(match.column, `eq.${match.value}`);
  url.searchParams.set('limit', '1');

  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Accept: 'application/vnd.pgrst.object+json',
    },
  });

  if (!res.ok) {
    throw new Error(`Supabase request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
