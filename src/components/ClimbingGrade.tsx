import React, { useEffect, useState } from 'react';
import { supabaseSelectSingle } from '../lib/supabase';

interface ClimbingRow {
  climbing_grade: string | null;
  climbing_style: string | null;
}

// Renders " and in my free time I'm projecting a crimpy V6 boulder problem" from the same
// now_status row NowDb reads. Sits after SurfStatus at the end of the location line.
// climbing_style is optional. Renders nothing until the row loads, so the surrounding sentence
// stands on its own.
const ClimbingGrade: React.FC = () => {
  const [phrase, setPhrase] = useState<string | null>(null);

  useEffect(() => {
    supabaseSelectSingle<ClimbingRow>('now_status', 'climbing_grade, climbing_style', {
      column: 'id',
      value: 1,
    })
      .then((row) => {
        // Gym grades carry a hold color ("Pink V6"); keep just the V-grade when there is one.
        const raw = row?.climbing_grade?.trim();
        if (!raw) return;
        const grade = raw.match(/V\d+\+?/i)?.[0] ?? raw;
        const description = [row.climbing_style?.trim(), grade].filter(Boolean).join(' ');
        const article = /^[aeiou]/i.test(description) ? 'an' : 'a';
        setPhrase(`${article} ${description}`);
      })
      .catch((error) => console.error('Error fetching climbing grade from Supabase:', error));
  }, []);

  if (!phrase) return null;

  return <span> and in my free time I'm projecting {phrase} boulder problem</span>;
};

export default ClimbingGrade;
