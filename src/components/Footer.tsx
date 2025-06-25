import SpotifyNowPlaying from './SpotifyNowPlaying';

export default function Footer() {
  return (
    <footer className="shrink bg-black text-white py-12">
      <div className="flex mx-auto px-16 justify-between">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 font-mono uppercase py-4">_Offline</p>
          <ul>
            <li className="h-[42px]">
              <SpotifyNowPlaying />
            </li>
            <li className="h-[42px]">
              <span className="text-gray-400 font-extralight">Reading</span> "Anxious Generation"{' '}
              <i>by</i> Jonathan Haidt
            </li>
            <li className="h-[42px] ">
              <span className="text-gray-400">Climbing</span> Red V5 on Prow Wall <i>at</i>{' '}
              <a href="https://stoneclimbing.com/" target="_blank">
                Stone Climbing Co.
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 font-mono uppercase py-4">_Online</p>
          <ul>
            <li className="h-[42px]">
              <a href="https://github.com/mttwhlly" target="_blank">
                <i className="ph-fill ph-github-logo text-gray-400"></i> Github
              </a>
            </li>
            <li className="h-[42px]">
              <a href="https://linkedin.com/in/mttwhlly" target="_blank">
                <i className="ph-fill ph-linkedin-logo text-gray-400"></i> Linkedin
              </a>
            </li>
            <li className="h-[42px]">
              <i className="ph-fill ph-envelope text-gray-400"></i>{' '}
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
