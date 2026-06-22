// 5-day weekly rotation. Edit exercises freely — UI re-renders.
export const weeklyPlan = [
  {
    day: 'Day 1',
    title: 'PUSH + Handstand',
    emoji: '💪',
    duration: '55 min',
    focus: 'Pressing strength + handstand skill',
    sections: [
      {
        name: 'Warm-up (8 min)',
        items: [
          'Arm circles — 10 fwd + 10 back',
          'Wall slides — 2 × 12',
          'Pec minor doorway — 30s/side',
          'Foam roller thoracic ext — 10',
          'Wrist mobility — 30s',
          '2 × 5 push-ups',
        ],
      },
      {
        name: 'Skill (10 min)',
        items: [
          'Wall handstand holds — 4 × 30 sec',
          'Tucked planche holds — 3 × 10 sec',
        ],
      },
      {
        name: 'Main work (30 min)',
        items: [
          'Wall HSPU — 3 × 3–5 (chest to wall, head to floor)',
          'DB Bench Press — 4 × 8 (1 RIR — no failure)',
          'Weighted Dips — 3 × 6–8 @ +20–30 kg',
          'Landmine Rotations — 3 × 10/side @ 35 kg',
          'Pallof Press — 3 × 10/side',
        ],
      },
      {
        name: 'Cooldown',
        items: [
          'Pec minor stretch — 60s/side',
          'Lat hang — 60s/side',
          'Lacrosse ball on right scap if tight',
        ],
      },
    ],
  },
  {
    day: 'Day 2',
    title: 'KICKBOX',
    emoji: '🥊',
    duration: '60–75 min',
    focus: 'Muay Thai class — technique + conditioning',
    sections: [
      {
        name: 'Pre-class (10 min)',
        items: [
          'World\'s greatest stretch — 4/side',
          '90/90 hip switches — 8/side',
          'Standing leg swings — 10 fwd/back + 10 side/side per leg',
          'Cossack squats — 5/side',
          'Active hip flexor lifts — 2 × 10/side',
          'Couch stretch — 60s/side',
        ],
      },
      {
        name: 'Class',
        items: [
          'Whatever your gym programs — go full effort',
          'Stay tall in the clinch',
          'Snap kicks — don\'t push',
        ],
      },
      {
        name: 'Post-class cooldown',
        items: [
          'Pigeon — 90s/side',
          'Lying figure-4 — 60s/side',
          'Couch stretch — 90s/side',
          'Lat stretch — 60s/side',
        ],
      },
    ],
  },
  {
    day: 'Day 3',
    title: 'PULL + Front Lever + Core',
    emoji: '🔙',
    duration: '55 min',
    focus: 'Pulling strength + front lever + core skill',
    sections: [
      {
        name: 'Warm-up (8 min)',
        items: [
          'Arm circles — 10 fwd + 10 back',
          'Lat stretch on bar — 60s/side',
          'Scap wall slides — 2 × 12',
          'Scap pull-ups (just shrugs at hang) — 2 × 5',
          'Band pull-aparts — 2 × 15',
          'Dead hang — 30s',
        ],
      },
      {
        name: 'Skill (10 min)',
        items: [
          'Front lever holds — 3 × 8–12 sec',
          'Ring/bar muscle-up practice — 4 × 2–3 (slow, no kipping)',
        ],
      },
      {
        name: 'Main work (30 min)',
        items: [
          'Weighted pull-ups — 4 × 5–6 @ +20–25 kg (1 RIR)',
          'Single-arm DB row — 3 × 10/side, slow eccentric',
          'Lat pulldown wide grip — 3 × 10, slow tempo',
          'Dragon flag — 3 × 5–6 slow',
          'Face pulls — 3 × 15 light, perfect form',
        ],
      },
      {
        name: 'Cooldown',
        items: [
          'Lat hang — 90s/side',
          'Pec minor — 60s/side',
        ],
      },
    ],
  },
  {
    day: 'Day 4',
    title: 'LEGS + Pancake mobility',
    emoji: '🦵',
    duration: '70 min',
    focus: 'Lower body strength + plyo + deep mobility',
    sections: [
      {
        name: 'Knee activation (5 min)',
        items: [
          'Banded clamshells — 2 × 15/side',
          'Banded lateral walks — 10 steps/dir',
          'Adductor rocks — 8/side',
          'Glute bridges — 1 × 12',
          'Cossack squats — 5/side',
          'Couch stretch — 60s/side',
        ],
      },
      {
        name: 'Main work (35 min)',
        items: [
          'Back squat — 4 × 6 @ 80–85 kg (1 RIR, no failure)',
          'Conventional deadlift — 3 × 5 @ 100–120 kg',
          'Hip thrusts — 3 × 12 (load heavy)',
          'ATG split squats — 3 × 8/side (knee over toes, front foot elevated)',
          'Single-leg heavy calf raises — 4 × 10',
        ],
      },
      {
        name: 'Plyo finisher (5 min)',
        items: [
          'Pogo hops — 3 × 25',
          'Jump rope — 3 × 60s',
        ],
      },
      {
        name: 'Pancake mobility cooldown (10 min)',
        items: [
          'Butterfly PNF — 2 × (30s hold + 5 PNF reps)',
          'Pancake PNF — 2 × (30s hold + 5 PNF reps)',
          'Seated good morning with stick — 2 × 12',
          'Couch stretch — 90s/side',
          'Pigeon — 60s/side',
        ],
      },
    ],
  },
  {
    day: 'Day 5',
    title: 'KICKBOX or Movement',
    emoji: '🥋',
    duration: '60 min',
    focus: '2nd MT class OR movement practice (animal flow, locomotion, handstand drills)',
    sections: [
      {
        name: 'Option A — KICKBOX',
        items: [
          'Same pre-class mobility as Day 2',
          'Class',
          'Same cooldown as Day 2',
        ],
      },
      {
        name: 'Option B — Movement practice (~45 min)',
        items: [
          'CARS — 10 min (all joints, full ROM)',
          'Animal flow — beast, crab, ape walks — 10 min',
          'Floor work — rolls + ground-to-stand transitions — 10 min',
          'Handstand drills — 10 min',
          'Hanging variations — 5 min',
        ],
      },
      {
        name: 'Mobility (15 min)',
        items: [
          'Whatever was tightest this week',
          'Hip flexors + t-spine non-negotiable',
        ],
      },
    ],
  },
]

export const weeklyRules = [
  '2 rest days/week — your choice when to drop them',
  'Daily 5-min minimum: couch stretch + 90/90 + dead bugs',
  '22:30 bedtime ≥5 nights/week',
  '155g protein/day minimum',
  '2300–2500 kcal target (small deficit)',
  'NO failure on compound barbell lifts (bench, squat, deadlift) — only on isolation work',
]
