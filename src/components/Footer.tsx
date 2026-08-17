import { ArrowUpRight, ArrowDown } from '@phosphor-icons/react';
import SpotifyNowPlaying from './SpotifyNowPlaying';
import NowDb from './NowDb';

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1 pb-12">
        <h2 className="self-start font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Connect</h2>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
          <a
            href="mailto:&#109;&#97;&#116;&#116;&#64;&#109;&#97;&#116;&#116;&#119;&#104;&#97;&#108;&#108;&#101;&#121;&#46;&#99;&#111;&#109;"
            className="inline-flex items-baseline gap-1.5 w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Email
            <ArrowUpRight size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
          </a>
          <a
            href="https://linkedin.com/in/mttwhlly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1.5 w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            LinkedIn
            <ArrowUpRight size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
          </a>
          <a
            href="https://github.com/mttwhlly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1.5 w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            GitHub
            <ArrowUpRight size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1 pb-12">
        <h2 className="self-start font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Download</h2>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
          <a
            href="/matt-whalley-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1.5 w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Resume
            <ArrowDown size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
          </a>
          <a
            href="/matt-whalley-user-manual.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1.5 w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            User Manual
            <ArrowDown size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
          </a>
          <div className="flex items-baseline gap-2 flex-wrap">
            <a
              href="https://github.com/mttwhlly/sui-sans/raw/refs/heads/main/Sui-Regular.otf"
              download
              className="inline-flex items-baseline gap-1.5 w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
            >
              Sui Sans Typeface
              <ArrowDown size={12} weight="bold" className="text-gray-400 dark:text-gray-500" />
            </a>
            <a
              href="https://github.com/mttwhlly/sui-sans"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-gray-400 dark:text-gray-500 hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
            >
              (Source)
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1">
        <h2 className="self-start font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Activity</h2>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 leading-relaxed min-w-0">
          <NowDb />
          <SpotifyNowPlaying />
        </div>
      </div>

      <p className="mt-16 text-sm text-gray-400 dark:text-gray-500">
        © Matt Whalley, {new Date().getFullYear()}
        {' — '}
        <a
          href="https://github.com/mttwhlly/mttwhlly.github.io"
          className="hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
        >
          View source
        </a>
      </p>
    </footer>
  );
}
