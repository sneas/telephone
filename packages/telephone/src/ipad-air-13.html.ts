export const html = `
<div class="container">
  <div class="screenshot">
    <slot />
  </div>
  <div class="frame">
    <svg width="100%" viewBox="0 0 866 1128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Top button (Touch ID) -->
    <rect x="700" y="0" width="72" height="8" rx="2.5" fill="url(#ipad_button_h)"/>
    <rect x="701" y="0.6" width="70" height="1" rx="0.5" fill="white" fill-opacity="0.45"/>
    <!-- Volume buttons -->
    <rect x="858" y="150" width="8" height="54" rx="2.5" fill="url(#ipad_button_v)"/>
    <rect x="858" y="214" width="8" height="54" rx="2.5" fill="url(#ipad_button_v)"/>
    <rect x="864.4" y="151" width="1" height="52" rx="0.5" fill="white" fill-opacity="0.35"/>
    <rect x="864.4" y="215" width="1" height="52" rx="0.5" fill="white" fill-opacity="0.35"/>
    <!-- Aluminium enclosure -->
    <path fill-rule="evenodd" clip-rule="evenodd" d="M53 3C25.3858 3 3 25.3858 3 53V1075C3 1102.61 25.3858 1125 53 1125H813C840.614 1125 863 1102.61 863 1075V53C863 25.3858 840.614 3 813 3H53ZM53 38C45.268 38 39 44.268 39 52V1076C39 1083.73 45.268 1090 53 1090H813C820.732 1090 827 1083.73 827 1076V52C827 44.268 820.732 38 813 38H53Z" fill="url(#ipad_body)"/>
    <g filter="url(#ipad_blur1)">
      <rect x="4" y="4" width="858" height="1120" rx="49" stroke="#2A2A2C" stroke-width="1.2"/>
    </g>
    <g filter="url(#ipad_blur05)">
      <rect x="5.2" y="5.2" width="855.6" height="1117.6" rx="47.8" stroke="white" stroke-opacity="0.55" stroke-width="1"/>
    </g>
    <!-- Front glass with display cut-out -->
    <path fill-rule="evenodd" clip-rule="evenodd" d="M53 7C27.5949 7 7 27.5949 7 53V1075C7 1100.41 27.5949 1121 53 1121H813C838.405 1121 859 1100.41 859 1075V53C859 27.5949 838.405 7 813 7H53ZM53 38C45.268 38 39 44.268 39 52V1076C39 1083.73 45.268 1090 53 1090H813C820.732 1090 827 1083.73 827 1076V52C827 44.268 820.732 38 813 38H53Z" fill="#060607"/>
    <rect x="7.5" y="7.5" width="851" height="1113" rx="45.5" stroke="#1F1F22" stroke-width="1"/>
    <rect x="8.4" y="8.4" width="849.2" height="1111.2" rx="44.6" stroke="white" stroke-opacity="0.07" stroke-width="0.8"/>
    <rect x="38.5" y="37.5" width="789" height="1053" rx="14.5" stroke="#000000" stroke-width="1"/>
    <!-- Front camera (landscape edge) -->
    <circle cx="845" cy="564" r="5.6" fill="#0E0B0F"/>
    <circle cx="845" cy="564" r="3.4" fill="#161424"/>
    <circle cx="845" cy="564" r="2" fill="#0F0F2A"/>
    <circle cx="845" cy="563.3" r="0.7" fill="#393752"/>
    <circle cx="845" cy="590" r="1.6" fill="#0B0B0D"/>
    <!-- Status bar -->
    <text x="54" y="51" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="10" font-weight="600" fill="#0D0D0E">9:41<tspan dx="5" font-weight="500">Tue Jan 9</tspan></text>
    <g transform="translate(521.3 16.2) scale(0.8)">
    <path opacity="0.35" d="M340 33.5275H357C358.918 33.5275 360.472 35.0822 360.472 37V42C360.472 43.9178 358.918 45.4725 357 45.4725H340C338.082 45.4725 336.528 43.9178 336.528 42V37C336.528 35.0822 338.082 33.5275 340 33.5275Z" stroke="#0D0D0E" stroke-width="1.05509"/>
    <path opacity="0.4" d="M362 38V42.2203C362.849 41.8629 363.401 41.0314 363.401 40.1102C363.401 39.1889 362.849 38.3574 362 38" fill="#0D0D0E"/>
    <path d="M338 37C338 35.8954 338.895 35 340 35H357C358.105 35 359 35.8954 359 37V42C359 43.1046 358.105 44 357 44H340C338.895 44 338 43.1046 338 42V37Z" fill="#0D0D0E"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M321.5 35.5875C323.967 35.5876 326.339 36.5551 328.127 38.2898C328.261 38.4237 328.477 38.4221 328.609 38.286L329.896 36.9605C329.963 36.8915 330.001 36.798 330 36.7008C329.999 36.6035 329.961 36.5105 329.893 36.4423C325.201 31.8526 317.799 31.8526 313.107 36.4423C313.039 36.5105 313.001 36.6034 313 36.7007C312.999 36.7979 313.037 36.8914 313.104 36.9605L314.391 38.286C314.523 38.4223 314.739 38.424 314.873 38.2898C316.661 36.5549 319.034 35.5875 321.5 35.5875ZM321.536 39.6724C322.891 39.6723 324.198 40.1864 325.203 41.115C325.338 41.2467 325.552 41.2439 325.685 41.1085L326.97 39.7829C327.038 39.7134 327.075 39.6191 327.074 39.5211C327.073 39.4231 327.034 39.3295 326.965 39.2614C323.906 36.3568 319.169 36.3568 316.109 39.2614C316.04 39.3295 316.001 39.4231 316 39.5212C315.999 39.6192 316.037 39.7135 316.105 39.7829L317.39 41.1085C317.522 41.2439 317.736 41.2467 317.872 41.115C318.876 40.1871 320.182 39.6729 321.536 39.6724ZM324.15 42.3427C324.152 42.441 324.114 42.5357 324.045 42.6046L321.822 44.8948C321.756 44.9621 321.668 45 321.575 45C321.482 45 321.393 44.9621 321.328 44.8948L319.105 42.6046C319.036 42.5357 318.998 42.4409 319 42.3426C319.002 42.2443 319.044 42.1512 319.115 42.0853C320.535 40.8595 322.615 40.8595 324.035 42.0853C324.106 42.1513 324.148 42.2444 324.15 42.3427Z" fill="#0D0D0E"/>
    </g>
    <defs>
    <linearGradient id="ipad_body" x1="3" y1="3" x2="863" y2="1125" gradientUnits="userSpaceOnUse">
    <stop stop-color="#9A9B9F"/>
    <stop offset="0.35" stop-color="#6E6F73"/>
    <stop offset="0.65" stop-color="#7C7D81"/>
    <stop offset="1" stop-color="#58595C"/>
    </linearGradient>
    <linearGradient id="ipad_button_h" x1="736" y1="0" x2="736" y2="8" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A9AAAE"/>
    <stop offset="0.5" stop-color="#6A6B6F"/>
    <stop offset="1" stop-color="#3E3F42"/>
    </linearGradient>
    <linearGradient id="ipad_button_v" x1="866" y1="0" x2="858" y2="0" gradientUnits="userSpaceOnUse">
    <stop stop-color="#A9AAAE"/>
    <stop offset="0.5" stop-color="#6A6B6F"/>
    <stop offset="1" stop-color="#3E3F42"/>
    </linearGradient>
    <filter id="ipad_blur1" x="0" y="0" width="866" height="1128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feGaussianBlur stdDeviation="1"/>
    </filter>
    <filter id="ipad_blur05" x="0" y="0" width="866" height="1128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feGaussianBlur stdDeviation="0.5"/>
    </filter>
    </defs>
    </svg>
  </div>
</div>
`;
