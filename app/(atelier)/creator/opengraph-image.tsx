import { ImageResponse } from 'next/og'

// Image Open Graph dédiée à l'espace créateur « L'Atelier ».
// Générée au build, sans asset externe. Les couleurs reprennent les tokens de marque
// (ink, cream, honey, mocha) — codées en littéral car ImageResponse n'a pas accès au CSS.
export const runtime = 'nodejs'
export const alt = 'Fabrice Huet — L’Atelier, les coulisses de Morning Atlas'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const INK = '#261812'
const CREAM = '#fff6ea'
const HONEY = '#e7a93b'
const MOCHA = '#a47864'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: INK,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* esquisse blueprint en fond, coin haut-droit */}
        <div style={{ position: 'absolute', top: 56, right: 72, display: 'flex' }}>
          <div style={{ width: 150, height: 96, border: `3px solid ${HONEY}`, borderRadius: 10, opacity: 0.75 }} />
          <div
            style={{
              position: 'absolute',
              right: 24,
              top: 60,
              width: 70,
              height: 70,
              border: `3px solid ${MOCHA}`,
              borderRadius: 999,
              opacity: 0.6,
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 44, height: 4, background: HONEY, borderRadius: 999 }} />
          <div style={{ color: HONEY, fontSize: 26, fontWeight: 700, letterSpacing: 6 }}>L’ATELIER</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: CREAM, fontSize: 92, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>
            Fabrice Huet
          </div>
          <div style={{ color: HONEY, fontSize: 38, fontWeight: 700, marginTop: 18 }}>Développeur Front-End</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: CREAM, fontSize: 26, opacity: 0.75 }}>
          <span>morning-atlas.fr</span>
          <span style={{ color: MOCHA }}>·</span>
          <span>les coulisses de Morning Atlas</span>
        </div>
      </div>
    ),
    size,
  )
}
