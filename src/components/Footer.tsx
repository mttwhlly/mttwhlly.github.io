import SpotifyNowPlaying from './SpotifyNowPlaying';
import NowSheet from './NowSheet';

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1 pb-12">
        <h2 className="sticky top-6 self-start bg-white dark:bg-[#181818] font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Lately</h2>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 leading-relaxed">
          <SpotifyNowPlaying />
          <NowSheet />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1">
        <h2 className="sticky top-6 self-start bg-white dark:bg-[#181818] font-mono text-sm text-gray-500 dark:text-gray-400 pt-0.5">Connect</h2>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
          <a
            href="mailto:&#109;&#97;&#116;&#116;&#64;&#109;&#97;&#116;&#116;&#119;&#104;&#97;&#108;&#108;&#101;&#121;&#46;&#99;&#111;&#109;"
            className="w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Email
          </a>
          <a
            href="https://github.com/mttwhlly"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mttwhlly"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            LinkedIn
          </a>
          <a
            href="/matt-whalley-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit hover:underline underline-offset-2 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Resume
          </a>
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
