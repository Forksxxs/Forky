import styles from './FloatingGhosts.module.css'

const DRIFT_CLASSES = [styles.driftA, styles.driftB, styles.driftC, styles.driftD]

const CONFIGS = {
  home: [
    { size: 80, top: '4%',  left: '3%',  delay: 0,   dur: 8,   rotate: -6 },
    { size: 55, top: '10%', right: '5%', delay: 1.2, dur: 7,   rotate: 10 },
    { size: 28, top: '38%', left: '5%',  delay: 0.5, dur: 6,   rotate: -4 },
    { size: 65, bottom: '12%', right: '3%', delay: 2, dur: 8.5, rotate: 5 },
    { size: 22, bottom: '30%', left: '14%', delay: 1.8, dur: 5.5, rotate: -12 },
    { size: 40, top: '60%', right: '12%', delay: 0.8, dur: 7, rotate: 3 },
    { size: 18, top: '25%', left: '20%', delay: 3, dur: 6, rotate: 8 },
  ],
  about: [
    { size: 70, top: '6%',  left: '2%',  delay: 0.3, dur: 8,   rotate: -5 },
    { size: 24, top: '30%', left: '3%',  delay: 1.5, dur: 6,   rotate: 8 },
    { size: 50, bottom: '8%', left: '6%', delay: 0.8, dur: 7.5, rotate: -10 },
    { size: 35, top: '15%', right: '4%', delay: 2,   dur: 6.5, rotate: 6 },
    { size: 20, bottom: '35%', right: '8%', delay: 1, dur: 7, rotate: -3 },
    { size: 45, bottom: '25%', right: '2%', delay: 0, dur: 9, rotate: 4 },
  ],
  skills: [
    { size: 60, top: '3%',  left: '5%',  delay: 0,   dur: 7.5, rotate: -5 },
    { size: 45, top: '8%',  right: '3%', delay: 1.4, dur: 7,   rotate: 12 },
    { size: 25, top: '45%', left: '2%',  delay: 0.6, dur: 5.5, rotate: -8 },
    { size: 70, bottom: '5%', right: '4%', delay: 1.8, dur: 8.5, rotate: 4 },
    { size: 20, bottom: '35%', left: '8%', delay: 2.2, dur: 6, rotate: -14 },
    { size: 32, top: '28%', right: '10%', delay: 0.4, dur: 7, rotate: 7 },
  ],
  gallery: [
    { size: 55, top: '5%',  right: '3%', delay: 0.5, dur: 7.5, rotate: 6 },
    { size: 30, top: '35%', right: '2%', delay: 1.6, dur: 6,   rotate: -9 },
    { size: 45, bottom: '10%', right: '6%', delay: 0, dur: 8, rotate: 3 },
    { size: 22, top: '20%', left: '4%',  delay: 2, dur: 6, rotate: -6 },
    { size: 65, bottom: '20%', left: '2%', delay: 1, dur: 9, rotate: 5 },
  ],
  contact: [
    { size: 75, bottom: '5%', left: '5%',  delay: 0.3, dur: 8, rotate: -4 },
    { size: 50, bottom: '3%', right: '6%', delay: 1.2, dur: 7, rotate: 8 },
    { size: 30, top: '8%',  left: '4%',   delay: 0.8, dur: 6.5, rotate: -10 },
    { size: 35, top: '15%', right: '3%',  delay: 1.8, dur: 7, rotate: 5 },
    { size: 90, bottom: '15%', left: '35%', delay: 0, dur: 10, rotate: 0 },
    { size: 20, top: '40%', left: '10%', delay: 2.5, dur: 5.5, rotate: -8 },
  ],
}

CONFIGS.default = CONFIGS.skills

function Ghost({ size, style, delay, dur, rotate, driftIndex }) {
  const eyeSize = Math.max(3, size * 0.13)
  const eyeGap = size * 0.24
  const driftClass = DRIFT_CLASSES[driftIndex % DRIFT_CLASSES.length]

  return (
    <div
      className={`${styles.ghostWrap} ${driftClass}`}
      style={{
        '--delay': `${delay}s`,
        '--dur': `${dur}s`,
        ...style,
      }}
    >
      <div
        className={styles.ghost}
        style={{
          width: size,
          height: size * 1.15,
          '--delay': `${delay}s`,
          '--rot': `${rotate}deg`,
        }}
      >
        <div className={styles.body}>
          <div className={styles.eyes} style={{ gap: eyeGap }}>
            <span style={{ width: eyeSize, height: eyeSize }} />
            <span style={{ width: eyeSize, height: eyeSize }} />
          </div>
        </div>
        <svg className={styles.tail} viewBox="0 0 60 16" preserveAspectRatio="none">
          <path d="M0 0 Q10 16 20 0 Q30 16 40 0 Q50 16 60 0 L60 16 L0 16 Z" fill="var(--color-border)" />
        </svg>
      </div>
    </div>
  )
}

export default function FloatingGhosts({ variant = 'default' }) {
  const config = CONFIGS[variant] || CONFIGS.default

  return (
    <div className={styles.container} aria-hidden="true">
      {config.map((g, i) => {
        const pos = {}
        if (g.top) pos.top = g.top
        if (g.bottom) pos.bottom = g.bottom
        if (g.left) pos.left = g.left
        if (g.right) pos.right = g.right
        return (
          <Ghost
            key={i}
            size={g.size}
            style={pos}
            delay={g.delay}
            dur={g.dur}
            rotate={g.rotate}
            driftIndex={i}
          />
        )
      })}
    </div>
  )
}
