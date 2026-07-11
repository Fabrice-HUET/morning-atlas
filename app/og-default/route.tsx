import { ImageResponse } from 'next/og'

// Image Open Graph par défaut de la marque, servie à une URL stable (/og-default) et utilisée
// comme fallback par `buildPageMetadata`. Générée à la volée (cache SSG), sans asset externe.
// Couleurs de la palette Mocha Mousse en littéral (pas d'accès au CSS ici).
export const dynamic = 'force-static'

const SIZE = { width: 1200, height: 630 }
const CREAM = '#fff6ea'
const OAT = '#e8d8c3'
const ESPRESSO = '#3a241c'
const MOCHA = '#a47864'
const TOAST = '#c9895b'
const HONEY = '#e7a93b'

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: `linear-gradient(135deg, ${CREAM}, ${OAT})`,
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ position: 'absolute', top: 70, right: 92, display: 'flex' }}>
          <div style={{ width: 92, height: 92, borderRadius: 999, background: HONEY, opacity: 0.9 }} />
        </div>
        <div
          style={{
            position: 'absolute',
            right: 96,
            bottom: 96,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
            <div style={{ width: 5, height: 34, background: MOCHA, borderRadius: 999, opacity: 0.7 }} />
            <div style={{ width: 5, height: 44, background: MOCHA, borderRadius: 999, opacity: 0.7 }} />
            <div style={{ width: 5, height: 34, background: MOCHA, borderRadius: 999, opacity: 0.7 }} />
          </div>
          <div style={{ width: 150, height: 84, background: TOAST, borderRadius: '0 0 80px 80px' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 44, height: 4, background: TOAST, borderRadius: 999 }} />
          <div style={{ color: MOCHA, fontSize: 26, fontWeight: 700, letterSpacing: 5 }}>ATLAS CULINAIRE</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: ESPRESSO, fontSize: 100, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>
            Morning Atlas
          </div>
          <div style={{ color: TOAST, fontSize: 40, fontWeight: 700, marginTop: 18 }}>Petits-déjeuners du monde</div>
        </div>

        <div style={{ color: ESPRESSO, fontSize: 26, opacity: 0.7 }}>morning-atlas.fr</div>
      </div>
    ),
    SIZE,
  )
}
