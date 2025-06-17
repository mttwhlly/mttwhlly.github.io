import SpotifyNowPlaying from './SpotifyNowPlaying';

export default function Footer() {
  return (
    <footer className="shrink bg-black text-white py-12">
      <div className="flex max-w-6xl mx-auto px-4 justify-between">
        <div className="flex flex-col gap-4">
          <ul>
            <li className="h-[42px]">
              <SpotifyNowPlaying />
            </li>
            <li className="h-[42px]">
              <i className="ph-fill ph-book-bookmark"></i> "Anxious Generation" <i>by</i> Jonathan
              Haidt
            </li>
            <li className="h-[42px]">
              <i className="ph-fill ph-mountains"></i> Red V5 on Prow Wall <i>at</i>{' '}
              <a href="https://stoneclimbing.com/" target="_blank">
                Stone Climbing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <ul>
            <li className="h-[42px]">
              <a href="https://github.com/mttwhlly" target="_blank">
                <i className="ph-fill ph-github-logo"></i> Github
              </a>
            </li>
            <li className="h-[42px]">
              <a href="https://linkedin.com/in/mttwhlly" target="_blank">
                <i className="ph-fill ph-linkedin-logo"></i> Linkedin
              </a>
            </li>
            <li className="h-[42px]">
              <i className="ph-fill ph-envelope"></i>{' '}
              <a href="mailto:&#109;&#97;&#116;&#116;&#64;&#109;&#97;&#116;&#116;&#119;&#104;&#97;&#108;&#108;&#101;&#121;&#46;&#99;&#111;&#109;">
                &#109;&#97;&#116;&#116;&#64;&#109;&#97;&#116;&#116;&#119;&#104;&#97;&#108;&#108;&#101;&#121;&#46;&#99;&#111;&#109;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
