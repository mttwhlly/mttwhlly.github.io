import SpotifyNowPlaying from './SpotifyNowPlaying';

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1 pb-12">
        <h2 className="font-mono text-sm text-gray-900 dark:text-gray-100 pt-0.5">Lately</h2>
        <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 leading-relaxed">
          <SpotifyNowPlaying />
          <p>
            Projecting the{' '}
            <span className="text-gray-900 dark:text-gray-100">Blue V5</span>{' '}
            <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">on</i>{' '}
            <span className="text-gray-900 dark:text-gray-100">The Prow</span>{' '}
            <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">at</i>{' '}
            <a
              href="https://stoneclimbing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
            >
              Stone Climbing Co.
            </a>
          </p>
          <p>
            Reading{' '}
            <a
              href="https://bookshop.org/p/books/the-technological-society-jacques-ellul/b7e9987895bfa0cf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
            >
              The Technological Society
            </a>{' '}
            <i className="font-serif italic text-[1.1em] text-gray-400 dark:text-gray-500">by</i>{' '}
            <a
              href="https://en.wikipedia.org/wiki/Jacques_Ellul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-100 hover:underline underline-offset-2"
            >
              Jacques Ellul
            </a>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-x-6 gap-y-2 sm:gap-y-1">
        <h2 className="font-mono text-sm text-gray-900 dark:text-gray-100 pt-0.5">Connect</h2>
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
