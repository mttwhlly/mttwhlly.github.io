import SpotifyNowPlaying from './SpotifyNowPlaying';
import Marquee from './Marquee';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="shrink bg-black text-white md:flex-row flex-col">
      <div className="flex md:flex-row flex-col mx-auto px-6 justify-between py-12">
        <div className="flex flex-col gap-4 my-8 md:my-0">
          <p className="text-sm text-gray-400 font-mono uppercase py-4">Offline</p>
          <ul>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <SpotifyNowPlaying />
            </li>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 text-white text-[9px] font-mono font-bold flex-shrink-0">
                V5
              </span>
              <Marquee className="text-sm md:text-md">
                Blue V5 <i className="font-serif tracking-wider text-gray-400">on</i> The Prow{' '}
                <i className="font-serif tracking-wider text-gray-400">at</i>{' '}
                <a href="https://stoneclimbing.com/" target="_blank" className="hover:underline">
                  Stone Climbing Co.
                </a>
              </Marquee>
            </li>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <img
                src="/images/book-technological-society.jpg"
                alt=""
                className="w-4 h-6 object-cover rounded-xs flex-shrink-0"
              />
              <Marquee className="text-sm md:text-md">
                <a
                  href="https://bookshop.org/p/books/the-technological-society-jacques-ellul/b7e9987895bfa0cf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  The Technological Society
                </a>{' '}
                <i className="font-serif tracking-wider text-gray-400">by</i> Jacques Ellul
              </Marquee>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 font-mono uppercase py-4">Online</p>
          <ul>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <a href="https://github.com/mttwhlly" target="_blank">
                <GithubLogo
                  className="text-gray-400 text-sm md:text-md inline-block mr-1"
                  size={16}
                />
                Github
              </a>
            </li>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <a href="https://linkedin.com/in/mttwhlly" target="_blank">
                <LinkedinLogo
                  className="text-gray-400 text-sm md:text-md inline-block mr-1"
                  size={16}
                />
                Linkedin
              </a>
            </li>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <PaperPlaneTilt
                className="text-gray-400 text-sm md:text-md inline-block mr-1"
                size={16}
              />{' '}
              <a href="mailto:&#109;&#97;&#116;&#116;&#64;&#109;&#97;&#116;&#116;&#119;&#104;&#97;&#108;&#108;&#101;&#121;&#46;&#99;&#111;&#109;">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-[42] text-center text-xs pb-2 text-gray-400">
        © Matt Whalley, {new Date().getFullYear()}
        {' - '}
        <a
          href="https://github.com/mttwhlly/mttwhlly.github.io"
          className="hover:underline font-mono"
        >
          View Source
        </a>
      </div>
    </footer>
  );
}
