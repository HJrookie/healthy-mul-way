export default {
  id: 'circadian',
  category: { zh: '睡眠 · 节律', en: 'Sleep · Rhythm' },
  title: { zh: '生物钟：比闹钟更准的身体节拍器', en: 'Your Body Clock: A Metronome More Accurate Than Any Alarm' },
  excerpt: { zh: '为什么有人早起有人熬夜？这不是意志力，而是刻在基因里的计时系统。人造光与不规律作息正在打乱它——本文教你把作息调回正轨。', en: 'Early bird or night owl is not willpower — it is a built-in timer. Here is how to reset it.' },
  author: { zh: '净食编辑部', en: 'PureEat Editorial' },
  date: '2026-07-15',
  readingTime: 10,
  cover: 'sleep',
  content: {
    zh: [
      { type: 'lead', text: '为什么有人是「早起鸟」，有人是「夜猫子」？这背后不是意志力，而是一套刻在基因里的计时系统——生物钟。它决定你几点犯困、几点清醒、甚至几点代谢最旺。现代社会的人造光、熬夜和不规则作息，正在悄悄打乱这台精密的节拍器。本文带你读懂生物钟，并给出把作息「调回正轨」的实操方法。' },
      { type: 'h2', text: '生物钟到底是什么？' },
      { type: 'p', text: '生物钟（circadian rhythm）是生物体内置的、约 24 小时一轮的生理节律，由大脑下丘脑的视交叉上核（SCN）担任「总指挥」。它像一支管弦乐团的指挥，协调体温、激素、血压和警觉度在一天中起伏。其中最知名的「报时员」是褪黑素：天黑后，松果体分泌褪黑素让你产生困意；天亮时，光线抑制褪黑素，皮质醇上升把你唤醒。这套系统深植于基因，但可以被外界信号「校对」——其中最强的一个信号，就是光。' },
      { type: 'h2', text: '光线：最强的「校对钟」' },
      { type: 'p', text: '视交叉上核并不直接「看」世界，它靠视网膜里一类特殊的感光细胞（ipRGC）接收光线信息，尤其是早晨的蓝光。清晨接触自然光，等于给大脑发送「新的一天开始了」的明确指令，褪黑素迅速退场，生物钟被校准到正确时区。反之，夜晚尤其是睡前的强光（手机、平板、LED 灯）会欺骗大脑「现在还是白天」，推迟褪黑素分泌，让你越刷越精神。研究指出，睡前两小时使用发光屏幕，可使入睡时间平均延后约 30 分钟，并降低睡眠深度。' },
      { type: 'callout', title: { zh: '一个反直觉的事实', en: 'A counter-intuitive fact' }, text: { zh: '你不需要更贵的床垫来睡得更好——你可能只需要更早一点关掉那盏刺眼的灯。', en: 'You may not need a pricier mattress — sometimes you just need to switch off that glaring light a bit earlier.' } },
      { type: 'h2', text: '三餐与运动，也在给时钟「对表」' },
      { type: 'p', text: '生物钟不只听光的。进食时间本身就是强信号：固定在白天进食、夜间禁食，能让代谢节律与光照节律同步；而频繁夜宵则像不断地把时钟往回拨。运动也有类似作用——早晨或下午的锻炼能提前生物钟、提升日间警觉；睡前高强度训练则可能因肾上腺素升高而干扰入睡。换句话说，你每天「何时吃饭、何时活动、何时见光」，共同写就了生物钟的校准说明书。' },
      { type: 'list', items: [
        { zh: '起床后尽快见光：拉开窗帘或户外走 10 分钟，帮生物钟「开机」', en: 'Get light soon after waking: open curtains or step outside 10 min' },
        { zh: '固定起床时间：比固定入睡更重要，是稳定节律的锚点', en: 'Fix wake time: more important than bedtime for stable rhythm' },
        { zh: '白天多晒阳，晚上调暗：睡前 1–2 小时把灯光调暖调暗', en: 'Daylight by day, dim by night: warm-dim lights 1–2h before bed' },
        { zh: '夜宵往后推不如往前移：尽量在睡前 3 小时结束进食', en: 'Move late meals earlier: finish eating 3h before bed' },
        { zh: '周末别补觉过头：作息波动不要超过 1 小时，避免「社交时差」', en: 'Don’t overcompensate weekends: keep shifts under 1h' }
      ] },
      { type: 'h2', text: '什么是「社交时差」？' },
      { type: 'p', text: '很多人工作日早起、周末赖床到中午，这种周内作息与周末作息的错位，被睡眠科学家称为「社交时差」（social jet lag）。它和真正的跨时区飞行一样，会让身体持续处于轻微「倒时差」状态：周一清晨格外疲惫、注意力下降、代谢效率变差。长期较大的社交时差，与更高的肥胖、抑郁和心血管风险相关。最便宜的解药，不是补觉，而是把周末的起床时间尽量向工作日靠拢——让生物钟不必每个周一重新出发。' },
      { type: 'stats', items: [ { value: '24h', label: { zh: '生物钟基础周期', en: 'Core clock period' } }, { value: '~30min', label: { zh: '睡前屏幕延后入睡', en: 'Screen delays sleep onset' } }, { value: '<1h', label: { zh: '周末作息波动上限', en: 'Weekend shift limit' } } ] },
      { type: 'h2', text: '三个误区' },
      { type: 'list', items: [
        { zh: '误区一：「补觉能还清睡眠债」——生物钟紊乱靠补觉补不回，规律才是关键', en: 'Myth 1: catch-up sleep fixes debt — rhythm beats catch-up' },
        { zh: '误区二：「夜猫子改不了」——光照与作息训练可逐步前移节律', en: 'Myth 2: night owls can’t change — light & schedule retraining works' },
        { zh: '误区三：「睡前酒助眠」——酒精虽催睡却破坏深睡与节律', en: 'Myth 3: nightcap helps — alcohol fragments deep sleep' }
      ] },
      { type: 'quote', text: '生物钟不关心你的日程有多满，它只认光线、进食和作息。顺应它，精力会自己找上门。', cite: ' —— 净食编辑部' },
      { type: 'h2', text: '写在最后' },
      { type: 'p', text: '你不必把生活过成精密的实验室。只需记住三件事：早起见光、夜里调暗、周末别乱。生物钟是身体里最守时的伙伴，你给它清晰的信号，它还你稳定的精力与睡眠。从明天清晨拉开窗帘的那一刻开始，让光来为你校对时间。' },
      { type: 'p', text: '如果只能带走一句话：稳定，比时长更懂你的生物钟。' }
    ],
    en: [
      { type: 'lead', text: 'Why are some people early birds while others are night owls? It is not willpower — it is a timing system etched into your genes: the body clock. It decides when you feel sleepy, when you feel alert, even when your metabolism peaks. Artificial light, late nights and irregular schedules are quietly throwing this precise metronome off beat. This article helps you understand the clock and gives practical ways to reset it.' },
      { type: 'h2', text: 'What exactly is the body clock?' },
      { type: 'p', text: 'The circadian rhythm is the body’s built-in, roughly 24-hour cycle, conducted by a cluster in the hypothalamus called the suprachiasmatic nucleus (SCN). Like an orchestra conductor, it coordinates the rise and fall of body temperature, hormones, blood pressure and alertness through the day. Its most famous timekeeper is melatonin: after dark, the pineal gland releases it to make you drowsy; at dawn, light suppresses it while cortisol rises to wake you. The system is genetically wired, yet it can be “calibrated” by outside cues — and the strongest of them is light.' },
      { type: 'h2', text: 'Light: the master calibrator' },
      { type: 'p', text: 'The SCN does not literally see the world; it receives light through special retinal cells (ipRGCs), especially sensitive to morning blue light. Catching natural light soon after waking sends the brain a clear “a new day has begun” signal, melatonin clears quickly, and the clock locks onto the right time zone. Conversely, strong light at night — phones, tablets, LED lamps — fools the brain into thinking it is still daytime, delaying melatonin and leaving you more wired the longer you scroll. Studies show that using lit screens in the two hours before bed delays sleep onset by about 30 minutes on average and reduces sleep depth.' },
      { type: 'callout', title: { zh: '一个反直觉的事实', en: 'A counter-intuitive fact' }, text: { zh: '你不需要更贵的床垫来睡得更好——你可能只需要更早一点关掉那盏刺眼的灯。', en: 'You may not need a pricier mattress — sometimes you just need to switch off that glaring light a bit earlier.' } },
      { type: 'h2', text: 'Meals and movement also set the clock' },
      { type: 'p', text: 'The clock listens to more than light. Meal timing is itself a strong signal: eating by day and fasting at night synchronizes metabolic rhythm with light rhythm; frequent late-night snacks keep yanking the hands backward. Exercise works similarly — morning or afternoon training advances the clock and sharpens daytime alertness, while intense late-night workouts can interfere with sleep through raised adrenaline. In other words, when you eat, when you move and when you see light together write the calibration manual for your body clock.' },
      { type: 'list', items: [
        { zh: 'Light after waking', en: 'Get light soon after waking: open curtains or step outside 10 min' },
        { zh: 'Fixed wake time', en: 'Fix wake time: more important than bedtime for stable rhythm' },
        { zh: 'Daylight by day, dim by night', en: 'Daylight by day, dim by night: warm-dim lights 1–2h before bed' },
        { zh: 'Move late meals earlier', en: 'Move late meals earlier: finish eating 3h before bed' },
        { zh: 'Don’t overcompensate weekends', en: 'Don’t overcompensate weekends: keep shifts under 1h' }
      ] },
      { type: 'h2', text: 'What is “social jet lag”?' },
      { type: 'p', text: 'Many people wake early on weekdays and sleep until noon on weekends. This mismatch between weekday and weekend schedules is called “social jet lag” by sleep scientists. Like real cross-time-zone travel, it keeps the body in a mild, constant state of jet lag: extra fatigue and poorer focus on Monday mornings, lower metabolic efficiency. Larger long-term social jet lag is linked to higher obesity, depression and cardiovascular risk. The cheapest cure is not catch-up sleep but moving the weekend wake time closer to the weekday one — so the clock need not restart every Monday.' },
      { type: 'stats', items: [ { value: '24h', label: { zh: 'Clock period', en: 'Core clock period' } }, { value: '~30min', label: { zh: 'Screen delay', en: 'Screen delays sleep onset' } }, { value: '<1h', label: { zh: 'Weekend limit', en: 'Weekend shift limit' } } ] },
      { type: 'h2', text: 'Three common myths' },
      { type: 'list', items: [
        { zh: 'Myth 1: catch-up sleep', en: 'Myth 1: catch-up sleep fixes debt — rhythm beats catch-up' },
        { zh: 'Myth 2: night owls can’t change', en: 'Myth 2: night owls can’t change — light & schedule retraining works' },
        { zh: 'Myth 3: nightcap helps', en: 'Myth 3: nightcap helps — alcohol fragments deep sleep' }
      ] },
      { type: 'quote', text: 'The body clock does not care how busy your schedule is; it only reads light, food and routine. Follow it and energy comes to you.', cite: ' — PureEat Editorial' },
      { type: 'h2', text: 'The takeaway' },
      { type: 'p', text: 'You need not turn life into a precision lab. Just remember three things: light after waking, dim at night, steady on weekends. The body clock is your most punctual partner; give it clear signals and it returns stable energy and sleep. Start tomorrow, the moment you pull the curtains open, and let light set your time.' },
      { type: 'p', text: 'If you take only one line: consistency speaks to your clock better than duration ever could.' }
    ]
  }
}
