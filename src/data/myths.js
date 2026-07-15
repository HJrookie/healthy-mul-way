/**
 * 辟谣墙（健康谣言粉碎）。组件 GlossarySection 渲染。
 */
export const myths = [
  {
    id: 'wine',
    claim: { zh: '喝红酒能护心，所以多喝更好', en: 'Red wine is heart-healthy, so more is better' },
    truth: {
      zh: '研究观察到的「少量饮酒益处」常与生活方式混杂，且酒精没有安全剂量。过量饮酒伤肝、升癌风险、扰乱睡眠——护心不靠酒杯。',
      en: 'The “small-dose benefit” is confounded by lifestyle, and alcohol has no safe dose. Excess harms the liver, raises cancer risk and ruins sleep — the heart isn’t protected by the bottle.'
    }
  },
  {
    id: 'fatfree',
    claim: { zh: '无脂食品 = 健康', en: 'Fat-free means healthy' },
    truth: {
      zh: '许多低脂产品为弥补口感会加糖、增稠剂和香精，热量未必更低，饱腹感反而更差。看配料表比看「无脂」标签更靠谱。',
      en: 'Many low-fat products add sugar, thickeners and flavor to compensate, so calories aren’t lower and fullness is worse. The ingredient list beats the “fat-free” badge.'
    }
  },
  {
    id: 'spot',
    claim: { zh: '局部减脂：练哪瘦哪', en: 'Spot reduction: train here, lose fat here' },
    truth: {
      zh: '减脂是全身性的能量代谢过程，无法命令身体只从肚子或大腿抽脂。卷腹能练腹肌，但不让腹部单独变瘦。',
      en: 'Fat loss is a whole-body energy process; you can’t order fat off one spot. Crunches build abdominal muscle but won’t slim the belly alone.'
    }
  },
  {
    id: 'lateeat',
    claim: { zh: '晚上 8 点后吃东西就长胖', en: 'Eating after 8pm makes you fat' },
    truth: {
      zh: '体重取决于全天总热量而非时钟。夜里吃得多往往只是因为白天吃少了、总体仍超标；规律、不过量是关键。',
      en: 'Weight depends on total daily calories, not the clock. Late eating often just means you under-ate earlier; consistency and moderation matter more.'
    }
  },
  {
    id: 'protein',
    claim: { zh: '蛋白粉伤肾', en: 'Protein powder damages kidneys' },
    truth: {
      zh: '对肾功能正常的人，适量蛋白粉不会伤肾——身体会代谢掉多余蛋白。只有已有肾病的人才需限蛋白，且应遵医嘱。',
      en: 'For people with normal kidney function, moderate powder won’t hurt them — excess is metabolized. Only those with existing kidney disease must limit protein, under medical advice.'
    }
  },
  {
    id: 'alkaline',
    claim: { zh: '碱性食物能改变体质', en: 'Alkaline foods change your body pH' },
    truth: {
      zh: '血液酸碱由肺和肾精密调控在窄范围，食物几乎影响不了。所谓「酸性体质致病」是伪科学；均衡膳食才是正道。',
      en: 'Blood pH is tightly held in a narrow range by lungs and kidneys; food barely shifts it. “Acidic body causes disease” is pseudoscience — balanced eating is the real fix.'
    }
  },
  {
    id: 'detox',
    claim: { zh: '排毒饮食能清体毒', en: 'Detox diets cleanse your body' },
    truth: {
      zh: '人体自有肝脏与肾脏负责解毒，市售「排毒茶/果汁」多靠腹泻与限食制造「变轻」假象，并无清除毒素的实证。',
      en: 'Your liver and kidneys already detox. Most “detox teas/juices” just cause diarrhea and restriction, faking “lightness” with no proven toxin removal.'
    }
  }
]
