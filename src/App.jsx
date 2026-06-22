import { useState } from 'react'
import { profile, goals } from './data/goals'
import { weeklyPlan, weeklyRules } from './data/plan'
import { lifting, calisthenics, running, swimming } from './data/prs'
import { mobilityPriorities, dailyMobilityMinimum, mobilityTests } from './data/mobility'
import { nonNegotiables, forbidden, supplementStack } from './data/principles'

const TABS = [
  { id: 'today', label: 'Today' },
  { id: 'plan', label: 'Weekly Plan' },
  { id: 'prs', label: 'PRs' },
  { id: 'mobility', label: 'Mobility' },
  { id: 'rules', label: 'Rules' },
  { id: 'goals', label: 'Goals' },
]

function pickInitialDay() {
  // 0=Sun, 1=Mon, ... 6=Sat — map to plan day index (0–4)
  const day = new Date().getDay()
  const map = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 0, 0: 0 } // Mon→0, Tue→1, Wed→2, Thu→3, Fri→4, Sat→0, Sun→0
  return map[day] ?? 0
}

export default function App() {
  const [tab, setTab] = useState('today')
  const [dayIdx, setDayIdx] = useState(pickInitialDay())

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="logo">D</div>
          <div>
            <h1>{profile.name}</h1>
            <p className="subtitle">{profile.oneLiner}</p>
          </div>
        </div>
        <div className="stats">
          <div className="stat"><span className="label">Now</span><span className="value">{profile.currentWeight}</span></div>
          <div className="stat"><span className="label">Target</span><span className="value">{profile.targetWeight}</span></div>
          <div className="stat"><span className="label">By</span><span className="value">{profile.targetDate}</span></div>
        </div>
      </header>

      <nav className="tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={tab === t.id ? 'tab active' : 'tab'}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main className="main">
        {tab === 'today' && <Today dayIdx={dayIdx} setDayIdx={setDayIdx} />}
        {tab === 'plan' && <WeeklyPlan />}
        {tab === 'prs' && <PRs />}
        {tab === 'mobility' && <Mobility />}
        {tab === 'rules' && <Rules />}
        {tab === 'goals' && <Goals />}
      </main>

      <footer className="footer">
        Last updated 2026-06-22 · edit `src/data/*.js` to update
      </footer>
    </div>
  )
}

function Today({ dayIdx, setDayIdx }) {
  const session = weeklyPlan[dayIdx]
  return (
    <section className="card">
      <div className="day-selector">
        {weeklyPlan.map((d, i) => (
          <button
            key={d.day}
            className={i === dayIdx ? 'day-pill active' : 'day-pill'}
            onClick={() => setDayIdx(i)}
          >
            {d.emoji} {d.day}
          </button>
        ))}
      </div>
      <SessionCard session={session} />
    </section>
  )
}

function WeeklyPlan() {
  return (
    <section>
      <div className="rules-strip">
        <strong>Rules:</strong>
        <ul>
          {weeklyRules.map(r => <li key={r}>{r}</li>)}
        </ul>
      </div>
      {weeklyPlan.map(s => (
        <div key={s.day} className="card">
          <SessionCard session={s} />
        </div>
      ))}
    </section>
  )
}

function SessionCard({ session }) {
  return (
    <article className="session">
      <div className="session-head">
        <h2>{session.emoji} {session.title}</h2>
        <span className="duration">{session.duration}</span>
      </div>
      <p className="focus">{session.focus}</p>
      {session.sections.map(sec => (
        <div className="section-block" key={sec.name}>
          <h3>{sec.name}</h3>
          <ul>
            {sec.items.map(it => <li key={it}>{it}</li>)}
          </ul>
        </div>
      ))}
    </article>
  )
}

function PRs() {
  return (
    <section>
      <PRTable title="Lifting" rows={lifting} columns={['lift', 'current', 'peak', 'target']} />
      <PRTable title="Calisthenics" rows={calisthenics} columns={['skill', 'current', 'target']} />
      <PRTable title="Running" rows={running} columns={['event', 'current', 'target']} />
      <PRTable title="Swimming" rows={swimming} columns={['event', 'current', 'peak', 'target']} />
    </section>
  )
}

function PRTable({ title, rows, columns }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>{columns.map(c => <th key={c}>{c[0].toUpperCase() + c.slice(1)}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {columns.map(c => <td key={c}>{r[c] ?? '—'}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Mobility() {
  return (
    <section>
      <div className="card">
        <h2>Priority order (5 = worst)</h2>
        <ul className="mobility-list">
          {mobilityPriorities.map(m => (
            <li key={m.area}>
              <div className="mobility-row">
                <span className="area">{m.area}</span>
                <span className={`badge sev-${m.severity}`}>{m.severity}/5</span>
              </div>
              <p className="why">{m.why}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>Daily 5-min minimum</h2>
        <ul>
          {dailyMobilityMinimum.map(d => <li key={d}>{d}</li>)}
        </ul>
      </div>
      <div className="card">
        <h2>Mobility tests (track monthly)</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Test</th><th>Now</th><th>Target</th></tr>
            </thead>
            <tbody>
              {mobilityTests.map((t, i) => (
                <tr key={i}><td>{t.test}</td><td>{t.now}</td><td>{t.target}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Rules() {
  return (
    <section>
      <div className="card">
        <h2>✅ Daily non-negotiables</h2>
        <ul className="rules-list">
          {nonNegotiables.map(r => (
            <li key={r.label}>
              <strong>{r.label}</strong> — {r.detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>❌ Forbidden</h2>
        <ul className="rules-list">
          {forbidden.map(r => (
            <li key={r.label}>
              <strong>{r.label}</strong> — {r.detail}
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>💊 Supplement stack</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Name</th><th>Dose</th><th>Timing</th><th>Why</th></tr>
            </thead>
            <tbody>
              {supplementStack.map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.dose}</td>
                  <td>{s.timing}</td>
                  <td>{s.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Goals() {
  return (
    <section>
      <div className="card">
        <h2>3-month goals — by {profile.targetDate}</h2>
        <ol className="goals-list">
          {goals.map(g => (
            <li key={g.priority}>
              <div className="goal-head">
                <span className="prio">#{g.priority}</span>
                <strong>{g.label}</strong>
                <span className="timeline">{g.timeline}</span>
              </div>
              <p>{g.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
