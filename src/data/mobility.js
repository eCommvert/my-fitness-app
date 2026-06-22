// Mobility priorities from Assessment-11.2025
// Severity: 5 = worst, 1 = great
export const mobilityPriorities = [
  { area: 'Hip flexors', severity: 5, why: 'Anterior pelvic tilt — blocks high kicks, kills seated 90°, drives lumbar dominance' },
  { area: 'Thoracic spine', severity: 5, why: 'Kills overhead, handstand, pancake, posture' },
  { area: 'Lats', severity: 4, why: 'Restricts overhead range, used to be supple from swimming' },
  { area: 'Pec minor', severity: 4, why: 'Shoulder rounding forward, anterior posture' },
  { area: 'Adductors', severity: 3, why: 'Pancake limiter, knee tracking, lateral movement' },
  { area: 'Hamstrings', severity: 2, why: 'Forward fold is fine — not the main limiter' },
  { area: 'Ankles', severity: 1, why: 'Surprisingly good — squat depth excellent' },
]

export const dailyMobilityMinimum = [
  'Couch stretch — 90s/side',
  '90/90 hip switches — 8/side',
  'Dead bugs — 2 × 8/side',
  'Open books — 8/side',
]

export const mobilityTests = [
  { test: 'Deep squat hold (heels down)', now: 'solid', target: '3min relaxed' },
  { test: 'Forward fold (palms past ankles)', now: 'past ankles', target: 'palms flat' },
  { test: 'Pancake (chest to floor)', now: 'far', target: '60% to floor' },
  { test: 'Seated 90° wall upright', now: 'cannot hold', target: '3-min hold' },
  { test: 'Shoulder flexion (ribs down)', now: 'rib flare', target: 'arms by ears clean' },
  { test: 'Couch stretch 2-min upright', now: 'tough', target: 'easy' },
]
