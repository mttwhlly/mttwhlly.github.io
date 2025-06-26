import SpotifyNowPlaying from './SpotifyNowPlaying';
import Marquee from './Marquee';
import {
  BookBookmark,
  Mountains,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="shrink bg-black text-white py-12 md:flex-row flex-col">
      <div className="flex md:flex-row flex-col mx-auto px-4 md:px-16 justify-between">
        <div className="flex flex-col gap-4 my-8 md:my-0">
          <p className="text-sm text-gray-400 font-mono uppercase py-4">_Offline</p>
          <ul>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <SpotifyNowPlaying />
            </li>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <span className="text-gray-400 text-sm md:text-md flex-shrink-0">
                <BookBookmark size={16} />
              </span>
              <Marquee className="text-sm md:text-md">
                "Anxious Generation" – Jonathan Haidt
              </Marquee>
            </li>
            <li className="h-[42px] text-sm md:text-md flex items-center space-x-2">
              <span className="text-gray-400 text-sm md:text-md flex-shrink-0">
                <Mountains size={16} />
              </span>
              <Marquee className="text-sm md:text-md">
                Red V5 on Prow Wall –{' '}
                <a href="https://stoneclimbing.com/" target="_blank" className="hover:underline">
                  Stone Climbing Co.
                </a>
              </Marquee>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 font-mono uppercase py-4">_Online</p>
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
    </footer>
  );
}
