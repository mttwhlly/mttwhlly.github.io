import React, { useEffect, useState } from 'react';
import type { NowData } from '../types/now';

const SHEET_ID = '14TEKZH-hV0djcEMpDcQ18KCiI7IvNapNaAgFb_IuqzU';
const GID = '0';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${GID}&headers=1`;
const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

function parseGvizResponse(text: string): NowData | null {
  const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);?\s*$/);
  if (!match) return null;

  const json = JSON.parse(match[1]);
  const cells = json.table?.rows?.[0]?.c;
  if (!cells) return null;

  const value = (i: number): string => cells[i]?.v ?? '';

  return {
    climbingGrade: value(0),
    climbingRoute: value(1),
    climbingGym: value(2),
    climbingGymLink: value(3),
    readingTitle: value(4),
    readingTitleLink: value(5),
    readingAuthor: value(6),
    readingAuthorLink: value(7),
  };
}

const NowSheet: React.FC = () => {
  const [data, setData] = useState<NowData | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchNow = async (): Promise<void> => {
      try {
        const response = await fetch(SHEET_URL);
        const text = await response.text();
        const parsed = parseGvizResponse(text);
        if (!cancelled && parsed) setData(parsed);
      } catch (err) {
        console.error('Error fetching now data from Google Sheets:', err);
      }
    };

    fetchNow();
    const interval = setInterval(fetchNow, REFRESH_INTERVAL_MS);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (!data) return null;

  return (
    <>
      <p>
        Climbing the{' '}
        <span className="text-gray-900 dark:text-gray-100">{data.climbingGrade}</span>{' '}
        <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">on</i>{' '}
        <span className="text-gray-900 dark:text-gray-100">{data.climbingRoute}</span>{' '}
        <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">at</i>{' '}
        <a
          href={data.climbingGymLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
        >
          {data.climbingGym}
        </a>
      </p>
      <p>
        Reading{' '}
        <a
          href={data.readingTitleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
        >
          {data.readingTitle}
        </a>{' '}
        <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">by</i>{' '}
        <a
          href={data.readingAuthorLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
        >
          {data.readingAuthor}
        </a>
      </p>
    </>
  );
};

export default NowSheet;
