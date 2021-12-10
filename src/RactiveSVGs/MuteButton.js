export default function MuteButton({isPageMuted, setIsPageMuted}) {
  return (
  <svg width="181" height="161" viewBox="0 0 181 161" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuteButton">
    <g onClick={() => setIsPageMuted(!isPageMuted)}>
    <g visibility={isPageMuted ? 'visible' : 'hidden'}>
<path d="M52.1434 47.3007L104.135 19.0445C108.133 16.8716 113 19.7659 113 24.3162V140.096C113 144.791 107.851 147.667 103.853 145.205L52.5096 113.58C50.302 112.22 47.7602 111.5 45.1674 111.5H27.5C24.1863 111.5 21.5 108.814 21.5 105.5V55C21.5 51.6863 24.1863 49 27.5 49H45.4582C47.7934 49 50.0916 48.4159 52.1434 47.3007Z" fill="#C4C4C4" stroke="black" stroke-width="8"/>
<path d="M5 13.9633C5 10.1176 8.11757 7 11.9633 7H13.5L69.0747 60.3517C72.9443 64.0665 79.0557 64.0665 82.9253 60.3517L138.5 7H140.009C143.87 7 147 10.1299 147 13.9908V13.9908C147 13.9967 146.998 14.0024 146.994 14.0067L93.4627 71.1065C89.8357 74.9752 89.8594 81.0024 93.5166 84.8425L146.993 140.992C146.997 140.997 147 141.004 147 141.011V141.011C147 145.423 143.423 149 139.011 149H138.5L82.9253 95.6483C79.0557 91.9335 72.9443 91.9335 69.0747 95.6483L13.5 149H12.8844C8.52995 149 5 145.47 5 141.116V141.116C5 141.041 5.02856 140.97 5.07975 140.916L58.4834 84.8425C62.1406 81.0024 62.1643 74.9752 58.5374 71.1065L5.02511 14.0268C5.00898 14.0096 5 13.9869 5 13.9633V13.9633Z" fill="#C4C4C4" stroke="black" stroke-width="8"/>
</g>
<g visibility={isPageMuted ? 'hidden' : 'visible'}>
<path d="M52.1434 47.3007L104.135 19.0445C108.133 16.8716 113 19.7659 113 24.3162V140.096C113 144.791 107.851 147.667 103.853 145.205L52.5096 113.58C50.302 112.22 47.7602 111.5 45.1674 111.5H27.5C24.1863 111.5 21.5 108.814 21.5 105.5V55C21.5 51.6863 24.1863 49 27.5 49H45.4582C47.7934 49 50.0916 48.4159 52.1434 47.3007Z" fill="#C4C4C4" stroke="black" stroke-width="8"/>
<path d="M126.417 33H133.874C134.809 33 135.657 33.5488 136.039 34.4016C149.861 65.2129 150.634 100.305 138.182 131.695L136.644 135.57C135.823 137.641 133.821 139 131.594 139H130.142C126.463 139 123.882 135.372 125.088 131.896L126.02 129.211C136.503 99.0122 135.844 66.0607 124.164 36.3044C123.541 34.7168 124.712 33 126.417 33Z" fill="#C4C4C4" stroke="black" stroke-width="8"/>
<path d="M154.841 17H159.339C161.035 17 162.547 18.0699 163.111 19.6696L167.33 31.632C178.663 63.7647 179.305 98.6999 169.16 131.227L163.43 149.598C162.614 152.217 160.189 154 157.446 154C153.313 154 150.311 150.069 151.399 146.081L156.462 127.528C164.759 97.125 164.23 64.9882 154.937 34.8747L151.019 22.1795C150.225 19.6066 152.149 17 154.841 17Z" fill="#C4C4C4" stroke="black" stroke-width="8"/>
</g>
</g>
</svg>
  )
}