import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Favicon icon generator based on the new brand
export default function Icon() {
  const trianglePath = "M 0,-6.06 L 7,6.06 L -7,6.06 Z";

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="135 -5 40 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue Triangle (Left) */}
          <path
            d={trianglePath}
            fill="#00B4FF"
            transform="translate(140, 22) rotate(30)"
          />
          {/* Green Triangle (Bottom Right) */}
          <path
            d={trianglePath}
            fill="#84D136"
            transform="translate(158, 28) rotate(-30) scale(1.1)"
          />
          {/* Orange Triangle (Top Right) */}
          <path
            d={trianglePath}
            fill="#FF7600"
            transform="translate(156, 8) rotate(150) scale(1.2)"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
