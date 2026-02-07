import styles from './CaseStudy.module.css'

export default function ApiHealthCaseStudy() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1 className={styles.title}>API Health Monitor</h1>
        <p className={styles.tagline}>
          Real-time dashboard for monitoring API endpoint status, response times, and uptime history.
        </p>
        <div className={styles.badges}>
          <span className={styles.badge}>React 19</span>
          <span className={styles.badge}>Vite</span>
          <span className={styles.badge}>CSS Modules</span>
          <span className={styles.badge}>Mock Data</span>
        </div>
      </div>

      {/* Overview */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>What Is It</h2>
        <p className={styles.sectionBody}>
          A mock API health monitoring dashboard that simulates real-time endpoint status checking.
          It displays 6 pre-configured API endpoints with live status indicators, response times,
          and 10-point uptime history. Users can check individual endpoints, run a "Check All" sweep,
          add new endpoints, and remove existing ones.
        </p>
        <p className={styles.sectionBody} style={{ marginTop: '0.75rem' }}>
          Built to demonstrate monitoring UI patterns commonly used in DevOps and QA environments —
          the kind of dashboard a QA engineer would use daily to verify service health before running
          test suites.
        </p>
      </div>

      {/* Screenshot 1: Dashboard Overview */}
      <div className={styles.screenshot}>
        <div className={styles.screenshotBar}>
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
        </div>
        <div className={styles.screenshotBody}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'var(--color-ghost)', borderRadius: 'var(--radius-md)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700 }}>
              <span style={{ color: '#5BA67D', fontSize: '1.3rem' }}>4/6</span>{' '}
              <span className={styles.mockText}>endpoints up</span>
            </span>
            <span className={styles.mockBtn}>Check All</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {/* Card 1 */}
            <div className={styles.mockCard}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <span className={`${styles.mockStatusDot} ${styles.green}`} />
                <span className={styles.mockBadgeUp}>OPERATIONAL</span>
              </div>
              <p className={styles.mockCardTitle}>Users API</p>
              <p className={styles.mockText} style={{ fontFamily: 'monospace', fontSize: '0.72rem' }}>api.example.com/v1/users</p>
              <p className={styles.mockText}><strong style={{ color: 'var(--color-text)' }}>124ms</strong> response</p>
              <div className={styles.mockHistoryDots}>
                {['green','green','green','green','green','green','green','green','red','green'].map((c, i) => (
                  <span key={i} className={styles.mockHistDot} style={{ background: c === 'green' ? '#5BA67D' : '#D64545' }} />
                ))}
              </div>
            </div>
            {/* Card 2 */}
            <div className={styles.mockCard} style={{ borderColor: '#D64545' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <span className={`${styles.mockStatusDot} ${styles.red}`} />
                <span className={styles.mockBadgeDown}>DOWN</span>
              </div>
              <p className={styles.mockCardTitle}>Payment Gateway</p>
              <p className={styles.mockText} style={{ fontFamily: 'monospace', fontSize: '0.72rem' }}>payments.example.com/status</p>
              <p className={styles.mockText}>No response</p>
              <div className={styles.mockHistoryDots}>
                {['green','red','green','green','red','green','red','red','red','red'].map((c, i) => (
                  <span key={i} className={styles.mockHistDot} style={{ background: c === 'green' ? '#5BA67D' : '#D64545' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.screenshotCaption}>Dashboard — summary bar with endpoint cards showing status, response time, and history dots</p>

      {/* Screenshot 2: Checking State */}
      <div className={styles.screenshot}>
        <div className={styles.screenshotBar}>
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
        </div>
        <div className={styles.screenshotBody}>
          <div className={styles.mockCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span className={styles.mockStatusDot} style={{ background: '#E0A030', animation: 'pulse 1s infinite' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#E0A030', textTransform: 'uppercase' }}>CHECKING...</span>
            </div>
            <p className={styles.mockCardTitle}>Auth Service</p>
            <p className={styles.mockText}>Simulating health check with random 200-1500ms delay...</p>
          </div>
          <div className={styles.mockCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span className={`${styles.mockStatusDot} ${styles.gray}`} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#8E8E93', textTransform: 'uppercase' }}>UNKNOWN</span>
            </div>
            <p className={styles.mockCardTitle}>Analytics Engine</p>
            <p className={styles.mockText}>Never checked — waiting in queue</p>
          </div>
        </div>
      </div>
      <p className={styles.screenshotCaption}>Check in progress — orange pulse during check, sequential "Check All" sweep</p>

      {/* Screenshot 3: Add Endpoint */}
      <div className={styles.screenshot}>
        <div className={styles.screenshotBar}>
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
        </div>
        <div className={styles.screenshotBody}>
          <div className={styles.mockCard}>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>Add New Endpoint</p>
            <div className={styles.mockInput} style={{ marginBottom: '8px' }}>Search API</div>
            <div className={styles.mockInput} style={{ marginBottom: '10px' }}>https://search.example.com/health</div>
            <span className={styles.mockBtn}>Add Endpoint</span>
          </div>
        </div>
      </div>
      <p className={styles.screenshotCaption}>Add endpoint — collapsible form with URL validation</p>

      {/* How It Works */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>1</div>
            <div className={styles.featureText}>
              <h4>Mock Endpoint Pool</h4>
              <p>6 pre-configured endpoints with realistic names, URLs, and pre-built history arrays showing different uptime ratios.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>2</div>
            <div className={styles.featureText}>
              <h4>Check Simulation</h4>
              <p>Each check has a random 200-1500ms delay and 85% chance of returning "up" with a randomized response time (45-350ms).</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>3</div>
            <div className={styles.featureText}>
              <h4>Visual Status System</h4>
              <p>Four states: green (up), red (down), orange pulse (checking), gray (unknown). History shows last 10 checks as colored dots.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>4</div>
            <div className={styles.featureText}>
              <h4>Dynamic Management</h4>
              <p>Add custom endpoints with name + URL validation. Remove endpoints with one click. All state managed in React with no external dependencies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Test Results */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Test Results</h2>
        <p className={styles.sectionBody}>
          Manual and functional testing covering all user interactions, state transitions,
          and edge cases across the monitoring dashboard.
        </p>
        <table className={styles.testTable}>
          <thead>
            <tr>
              <th>Test Case</th>
              <th>Expected</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Initial load — 6 default endpoints</td>
              <td>All 6 render with correct status colors and history</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Summary shows "4/6 endpoints up"</td>
              <td>Count updates dynamically as statuses change</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Click "Check Now" on single endpoint</td>
              <td>Dot turns orange, then resolves to green/red</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Click "Check All"</td>
              <td>Checks each endpoint sequentially, button disabled during sweep</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Add endpoint — valid name + URL</td>
              <td>New card appears with "unknown" status and empty history</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Add endpoint — missing URL</td>
              <td>Shows "URL is required" error, no card added</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Add endpoint — URL without http(s)://</td>
              <td>Shows validation error</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Remove endpoint</td>
              <td>Card removed, summary count updates</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Remove all endpoints</td>
              <td>Empty state message shown, Check All disabled</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>History dots — 10 dots per endpoint</td>
              <td>New check pushes to end, oldest dropped from start</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Responsive layout at 375px</td>
              <td>Single column grid, full-width buttons</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Production build (Vite)</td>
              <td>Zero errors, all assets bundled correctly</td>
              <td className={styles.pass}>PASS</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tech Stack */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={styles.techStack}>
          <span className={styles.techItem}>React 19</span>
          <span className={styles.techItem}>Vite 6</span>
          <span className={styles.techItem}>CSS Modules</span>
          <span className={styles.techItem}>JavaScript (ES2022)</span>
          <span className={styles.techItem}>GitHub Pages</span>
          <span className={styles.techItem}>Playfair Display + Inter</span>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <a
          href="https://forksxxs.github.io/api-health-monitor/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.ctaBtn} ${styles.ctaPrimary}`}
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Forksxxs/api-health-monitor"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.ctaBtn} ${styles.ctaSecondary}`}
        >
          Source Code
        </a>
      </div>
    </div>
  )
}
