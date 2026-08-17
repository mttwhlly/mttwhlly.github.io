import React, { useEffect, useState } from 'react';
import type { NowData } from '../types/now';
import { supabase } from '../lib/supabase';
import CircularProgress from './CircularProgress';
import MarqueeText from './MarqueeText';

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

interface NowStatusRow {
  climbing_grade: string;
  climbing_route: string;
  climbing_gym: string;
  climbing_gym_link: string;
  reading_title: string;
  reading_title_link: string;
  reading_author: string;
  reading_author_link: string;
  climbing_percent: number;
  reading_percent: number;
}

function toNowData(row: NowStatusRow): NowData {
  return {
    climbingGrade: row.climbing_grade,
    climbingRoute: row.climbing_route,
    climbingGym: row.climbing_gym,
    climbingGymLink: row.climbing_gym_link,
    readingTitle: row.reading_title,
    readingTitleLink: row.reading_title_link,
    readingAuthor: row.reading_author,
    readingAuthorLink: row.reading_author_link,
    climbingPercent: row.climbing_percent,
    readingPercent: row.reading_percent,
  };
}

const NowDb: React.FC = () => {
  const [data, setData] = useState<NowData | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchNow = async (): Promise<void> => {
      const { data: row, error } = await supabase
        .from('now_status')
        .select(
          'climbing_grade, climbing_route, climbing_gym, climbing_gym_link, reading_title, reading_title_link, reading_author, reading_author_link, climbing_percent, reading_percent'
        )
        .eq('id', 1)
        .single();

      if (error) {
        console.error('Error fetching now data from Supabase:', error);
        return;
      }

      if (!cancelled && row) setData(toNowData(row));
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
      <div className="flex items-center gap-2">
        <CircularProgress percent={data.readingPercent} />
        <MarqueeText className="min-w-0 flex-1">
          <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">Reading</i>{' '}
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
        </MarqueeText>
      </div>
      <div className="flex items-center gap-2">
        <CircularProgress percent={data.climbingPercent} />
        <MarqueeText className="min-w-0 flex-1">
          <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">
            Climbing the
          </i>{' '}
          <span className="text-gray-900 dark:text-gray-100">{data.climbingGrade}</span>{' '}
          <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">
            on the
          </i>{' '}
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
        </MarqueeText>
      </div>
    </>
  );
};

export default NowDb;
