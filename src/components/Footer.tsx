import SpotifyNowPlaying from './SpotifyNowPlaying';
import Marquee from './Marquee';
import {
  BookmarkSimple,
  Mountains,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from '@phosphor-icons/react';

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
              <span className="text-gray-400 text-sm md:text-md flex-shrink-0">
                <BookmarkSimple size={16} />
              </span>
              <Marquee className="text-sm md:text-md">
                Anxious Generation <i className="font-serif tracking-wider text-gray-400">by</i>{' '}
                Jonathan Haidt
              </Marquee>
            </li>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <span className="text-gray-400 text-sm md:text-md flex-shrink-0">
                <Mountains size={16} />
              </span>
              <Marquee className="text-sm md:text-md">
                Route 18 <i className="font-serif tracking-wider text-gray-400">on</i> Prow Wall{' '}
                <i className="font-serif tracking-wider text-gray-400">at</i>{' '}
                <a href="https://stoneclimbing.com/" target="_blank" className="hover:underline">
                  Stone Climbing Co.
                </a>
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
        © Matt Whalley, 2025 –{' '}
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
