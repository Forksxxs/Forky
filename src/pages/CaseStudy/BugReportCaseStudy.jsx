import styles from './CaseStudy.module.css'

export default function BugReportCaseStudy() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1 className={styles.title}>Bug Report Generator</h1>
        <p className={styles.tagline}>
          AI-powered bug report creation tool — describe a bug, get a structured QA report instantly.
        </p>
        <div className={styles.badges}>
          <span className={styles.badge}>React 19</span>
          <span className={styles.badge}>Vite</span>
          <span className={styles.badge}>CSS Modules</span>
          <span className={styles.badge}>Mock AI</span>
        </div>
      </div>

      {/* Overview */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>What Is It</h2>
        <p className={styles.sectionBody}>
          A demo tool that simulates an AI-powered bug report generator. Users type a natural-language
          description of a bug, click "Generate Report," and watch as a professionally formatted
          bug report streams in character-by-character — mimicking a real AI response. The report
          includes a title, severity level, steps to reproduce, expected vs. actual behavior, and
          environment details.
        </p>
        <p className={styles.sectionBody} style={{ marginTop: '0.75rem' }}>
          Built to demonstrate how AI can accelerate QA workflows — turning vague bug descriptions
          into actionable, structured reports that dev teams can immediately work from.
        </p>
      </div>

      {/* Screenshot 1: Input State */}
      <div className={styles.screenshot}>
        <div className={styles.screenshotBar}>
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
        </div>
        <div className={styles.screenshotBody}>
          <div className={styles.mockInput}>Users can't log in on mobile devices after the latest update...</div>
          <div className={styles.mockChips}>
            <span className={styles.mockChip}>Login fails on mobile</span>
            <span className={styles.mockChip}>Dashboard data stale</span>
            <span className={styles.mockChip}>Payment timeout</span>
          </div>
          <div><span className={styles.mockBtn}>Generate Report</span></div>
        </div>
      </div>
      <p className={styles.screenshotCaption}>Input state — textarea with quick-fill example chips</p>

      {/* Screenshot 2: Streaming State */}
      <div className={styles.screenshot}>
        <div className={styles.screenshotBar}>
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
        </div>
        <div className={styles.screenshotBody}>
          <div className={styles.mockStream}>
            # Login Fails on Mobile Devices{'\n\n'}
            **Severity:** Critical{'\n\n'}
            ## Steps to Reproduce{'\n'}
            1. Open the application on a mobile device{'\n'}
            2. Navigate to the login page{'\n'}
            3. Enter valid credentials<span className={styles.mockCursor}>|</span>
          </div>
        </div>
      </div>
      <p className={styles.screenshotCaption}>Streaming state — text appears character-by-character with blinking cursor</p>

      {/* Screenshot 3: Result Card */}
      <div className={styles.screenshot}>
        <div className={styles.screenshotBar}>
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
          <span className={styles.screenshotDot} />
        </div>
        <div className={styles.screenshotBody}>
          <div className={styles.mockCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className={styles.mockCardTitle}>Login Fails on Mobile Devices</span>
              <span className={styles.mockBadgeCritical}>CRITICAL</span>
            </div>
            <p className={styles.mockText}><strong style={{ color: 'var(--color-accent)' }}>Steps to Reproduce</strong></p>
            <p className={styles.mockText}>1. Open the application on a mobile device (iOS Safari or Android Chrome)</p>
            <p className={styles.mockText}>2. Navigate to the login page</p>
            <p className={styles.mockText}>3. Enter valid credentials and tap "Sign In"</p>
            <p className={styles.mockText} style={{ marginTop: '8px' }}><strong style={{ color: 'var(--color-accent)' }}>Actual Behavior</strong></p>
            <p className={styles.mockText}>Page reloads without error. Session token not set due to SameSite attribute misconfiguration.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span className={styles.mockBtn}>Copy to Clipboard</span>
            <span style={{ padding: '8px 20px', border: '1.5px solid var(--color-accent)', borderRadius: 'var(--radius-md)', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-accent)' }}>New Report</span>
          </div>
        </div>
      </div>
      <p className={styles.screenshotCaption}>Result — formatted report card with severity badge and action buttons</p>

      {/* How It Works */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.featureList}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>1</div>
            <div className={styles.featureText}>
              <h4>Keyword Matching</h4>
              <p>User input is scanned for keywords (login, payment, dashboard, timeout, UI) to select the most relevant mock report from 5 pre-written templates.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>2</div>
            <div className={styles.featureText}>
              <h4>Streaming Simulation</h4>
              <p>An 800ms "thinking" delay, then text streams at 25ms per character — replicating how real LLM APIs deliver responses progressively.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>3</div>
            <div className={styles.featureText}>
              <h4>Formatted Output</h4>
              <p>Once streaming completes, the raw text transforms into a styled report card with color-coded severity, numbered steps, and environment metadata.</p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>4</div>
            <div className={styles.featureText}>
              <h4>Clipboard Export</h4>
              <p>One-click copy puts the full markdown report on the clipboard, ready to paste into Jira, Linear, GitHub Issues, or any bug tracker.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Test Results */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Test Results</h2>
        <p className={styles.sectionBody}>
          Functional testing across key user flows — verifying that each feature behaves as expected
          under normal and edge-case conditions.
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
              <td>Empty textarea + click Generate</td>
              <td>Button stays disabled, no report generated</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Type "login" + Generate</td>
              <td>Streams login-related report with Critical severity</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Type "payment timeout" + Generate</td>
              <td>Streams payment-related report with High severity</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Type random unmatched text + Generate</td>
              <td>Falls back to a random report from the pool</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Quick-fill chip click</td>
              <td>Populates textarea with chip text</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Streaming in progress — click Generate again</td>
              <td>Button disabled, no duplicate stream</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Copy to Clipboard</td>
              <td>Full markdown report copied, button shows "Copied!"</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>New Report button</td>
              <td>Clears report and textarea, returns to input state</td>
              <td className={styles.pass}>PASS</td>
            </tr>
            <tr>
              <td>Responsive layout at 375px</td>
              <td>Single column, full-width buttons, readable text</td>
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
          href="https://forksxxs.github.io/bug-report-generator/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.ctaBtn} ${styles.ctaPrimary}`}
        >
          Live Demo
        </a>
      </div>
    </div>
  )
}
