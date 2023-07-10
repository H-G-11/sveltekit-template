<svg
  id="visual"
  viewBox="0 0 900 600"
  class="h-full w-full"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
>
  <defs>
    <filter id="blur1" x="-100%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="141" result="effect1_foregroundBlur" />
    </filter>
  </defs>
  <g filter="url(#blur1)">
    <circle cx="891" cy="145" fill="hsl(var(--s))" r="180">
      <animate
        attributeName="cx"
        values="841;891;841"
        dur="10s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="cy"
        values="145;172;145"
        dur="4s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="r"
        values="180;160;180"
        dur="4s"
        repeatCount="indefinite"
      />
      u</circle
    >
  </g>
</svg>
