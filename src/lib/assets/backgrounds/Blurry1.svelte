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
      <feGaussianBlur stdDeviation="23" result="effect1_foregroundBlur" />
    </filter>
  </defs>
  <g filter="url(#blur1)">
    <circle cx="0" cy="450" fill="hsl(var(--p))" r="100">
      <animate
        attributeName="cx"
        values="250;270;250"
        dur="20s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="cy"
        values="160;180;160"
        dur="20s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="r"
        values="100;120;100"
        dur="24s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="891" cy="145" fill="hsl(var(--s))" r="180">
      <animate
        attributeName="cx"
        values="841;891;841"
        dur="20s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="r"
        values="180;160;180"
        dur="30s"
        repeatCount="indefinite"
      />
    </circle>
  </g>
</svg>
