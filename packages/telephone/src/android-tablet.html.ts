export const html = `
<div class="container">
  <div class="screenshot">
    <slot />
  </div>
  <div class="frame">
    <svg width="100%" viewBox="0 0 864 1342" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Power & volume buttons -->
    <rect x="857" y="160" width="6" height="56" rx="2" fill="url(#atab_button)"/>
    <rect x="857" y="250" width="6" height="110" rx="2" fill="url(#atab_button)"/>
    <rect x="861.6" y="162" width="0.8" height="52" rx="0.4" fill="white" fill-opacity="0.25"/>
    <rect x="861.6" y="252" width="0.8" height="106" rx="0.4" fill="white" fill-opacity="0.25"/>
    <!-- Enclosure -->
    <path fill-rule="evenodd" clip-rule="evenodd" d="M43 3C20.9086 3 3 20.9086 3 43V1299C3 1321.09 20.9086 1339 43 1339H819C841.091 1339 859 1321.09 859 1299V43C859 20.9086 841.091 3 819 3H43ZM43 31C36.3726 31 31 36.3726 31 43V1299C31 1305.63 36.3726 1311 43 1311H819C825.627 1311 831 1305.63 831 1299V43C831 36.3726 825.627 31 819 31H43Z" fill="url(#atab_body)"/>
    <g filter="url(#atab_blur05)">
      <rect x="3.6" y="3.6" width="854.8" height="1334.8" rx="39.4" stroke="white" stroke-opacity="0.18" stroke-width="1"/>
    </g>
    <!-- Front glass with display cut-out -->
    <path fill-rule="evenodd" clip-rule="evenodd" d="M43 7C23.1178 7 7 23.1178 7 43V1299C7 1318.88 23.1178 1335 43 1335H819C838.882 1335 855 1318.88 855 1299V43C855 23.1178 838.882 7 819 7H43ZM43 31C36.3726 31 31 36.3726 31 43V1299C31 1305.63 36.3726 1311 43 1311H819C825.627 1311 831 1305.63 831 1299V43C831 36.3726 825.627 31 819 31H43Z" fill="#070708"/>
    <rect x="7.5" y="7.5" width="847" height="1327" rx="35.5" stroke="#1A1A1D" stroke-width="1"/>
    <rect x="30.5" y="30.5" width="801" height="1281" rx="12.5" stroke="#000000" stroke-width="1"/>
    <!-- Front camera -->
    <circle cx="432" cy="19" r="4.6" fill="#0E0B0F"/>
    <circle cx="432" cy="19" r="2.8" fill="#161424"/>
    <circle cx="432" cy="19" r="1.6" fill="#0F0F2A"/>
    <circle cx="432.6" cy="18.4" r="0.6" fill="#393752"/>
    <!-- Status bar -->
    <text x="51" y="50" font-family="Roboto, 'Google Sans', system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="13" font-weight="500" fill="#1C1B1F">9:41<tspan dx="6" font-weight="400">Tue, Jan 9</tspan></text>
    <g transform="translate(776 37) scale(0.65)">
    <path d="M12.01 21.49L23.64 7C23.19 6.66 18.71 3 12 3C5.28 3 0.81 6.66 0.36 7L11.99 21.49L12 21.5L12.01 21.49Z" fill="#1C1B1F"/>
    </g>
    <g transform="translate(800 37) scale(0.65)">
    <path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4Z" fill="#1C1B1F"/>
    </g>
    <defs>
    <linearGradient id="atab_body" x1="3" y1="3" x2="859" y2="1339" gradientUnits="userSpaceOnUse">
    <stop stop-color="#4A4B4F"/>
    <stop offset="0.35" stop-color="#2E2F32"/>
    <stop offset="0.65" stop-color="#38393C"/>
    <stop offset="1" stop-color="#232326"/>
    </linearGradient>
    <linearGradient id="atab_button" x1="863" y1="0" x2="857" y2="0" gradientUnits="userSpaceOnUse">
    <stop stop-color="#5A5B5F"/>
    <stop offset="0.5" stop-color="#36373A"/>
    <stop offset="1" stop-color="#1E1E20"/>
    </linearGradient>
    <filter id="atab_blur05" x="0" y="0" width="864" height="1342" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feGaussianBlur stdDeviation="0.5"/>
    </filter>
    </defs>
    </svg>
  </div>
</div>
`;
