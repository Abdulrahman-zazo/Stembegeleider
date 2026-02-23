export interface ImageButton {
  id: string;
  label: string;
  modalTitle: string;
  modalContent: string;
  sounds?: string[];
}

export interface Section {
  id: string;
  title: string;
  description?: string;
  image?: string;
  content?: string;
  
  sound?: string;
  button?: {
    label: string;
    action: 'cta' | 'doe' | 'quiz';
  };
  imageButtons?: ImageButton[];
  doeType?: 'quiz' | 'dragdrop';
  doeContent?: any;
}

export const sections: Section[] = [
  {
    id: 'welcome',
    title: 'sections.welcome.title',
    description: 'sections.welcome.description',
    image: 'https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899143/image_dvx143.png',
    button: {
      label: 'sections.welcome.button',
      action: 'cta',
    },
    sound: 'https://stembegeleider.prodemos.nl/sounds/8490af954e.m4a',
  },
  {
    id: 'brief',
    title: 'sections.brief.title',
   image:"https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899143/image_dvx143.png",
    sound: 'https://stembegeleider.prodemos.nl/sounds/5878d16d62.m4a',
    button: {
      label: 'sections.brief.button',
      action: 'doe',
    },
    doeType: 'quiz',
    doeContent: {
      title: 'sections.brief.doe.title',
      sounds: [
        'https://stembegeleider.prodemos.nl/sounds/68b921b749.m4a',
        'https://stembegeleider.prodemos.nl/sounds/73af711763.m4a',
      ],
      questions: [
        {
          question: 'sections.brief.doe.questions.0.question',
   
          options: [
            'sections.brief.doe.questions.0.options.0',
            'sections.brief.doe.questions.0.options.1',
            'sections.brief.doe.questions.0.options.2',
          ],
          correct: 1,
          explanation: 'sections.brief.doe.questions.0.explanation',
        },
        {
          question: 'sections.brief.doe.questions.1.question',
          options: [
            'sections.brief.doe.questions.1.options.0',
            'sections.brief.doe.questions.1.options.1',
            'sections.brief.doe.questions.1.options.2',
          ],
          correct: 2,
          explanation: 'sections.brief.doe.questions.1.explanation',
        },
      ],
    },
    imageButtons: [
      {
        id: 'machtigen',
        label: 'sections.brief.buttons.machtigen.label',
        modalTitle: 'sections.brief.buttons.machtigen.title',
        modalContent: 'sections.brief.buttons.machtigen.content',
        sounds: [
          'https://stembegeleider.prodemos.nl/sounds/2738d9f1d3.m4a',
          'https://stembegeleider.prodemos.nl/sounds/2dbadb51f1.m4a',
        ],
      },
      {
        id: 'mag-ik-stemmen',
        label: 'sections.brief.buttons.magIkStemmen.label',
        modalTitle: 'sections.brief.buttons.magIkStemmen.title',
        modalContent: 'sections.brief.buttons.magIkStemmen.content',
        sounds: [
          'https://stembegeleider.prodemos.nl/sounds/2dbadb51f1.m4a',
          'https://stembegeleider.prodemos.nl/sounds/2918917e4e.m4a',
          'https://stembegeleider.prodemos.nl/sounds/eb2f47d222.m4a',
        ],
      },
      {
        id: 'geen-stempas',
        label: 'sections.brief.buttons.geenStempas.label',
        modalTitle: 'sections.brief.buttons.geenStempas.title',
        modalContent: 'sections.brief.buttons.geenStempas.content',
        sounds: [
          'https://stembegeleider.prodemos.nl/sounds/4af46404e4.m4a',
          'https://stembegeleider.prodemos.nl/sounds/fa03b634e6.m4a',
          'https://stembegeleider.prodemos.nl/sounds/00b3d17372.m4a',
        ],
      },
      {
        id: 'in-het-kort',
        label: 'sections.brief.buttons.inHetKort.label',
        modalTitle: 'sections.brief.buttons.inHetKort.title',
        modalContent: 'sections.brief.buttons.inHetKort.content',
        sounds: [
          'https://stembegeleider.prodemos.nl/sounds/5db58f0b1c.m4a',
          'https://stembegeleider.prodemos.nl/sounds/70c8ae1e51.m4a',
        ],
      },
    ],
  },
  {
    id: 'naar-stembureau',
    title: 'sections.naarStembureau.title',
    description: 'sections.naarStembureau.description',
    image: 'Image: naar het stembureau',
    button: {
      label: 'sections.naarStembureau.button',
      action: 'doe',
    },
    doeType: 'dragdrop',
    doeContent: {
      title: 'sections.naarStembureau.doe.title',
      items: [
        { id: 'stempas', label: 'sections.naarStembureau.doe.items.stempas', correct: true },
        { id: 'paspoort', label: 'sections.naarStembureau.doe.items.paspoort', correct: true },
        { id: 'rijbewijs', label: 'sections.naarStembureau.doe.items.rijbewijs', correct: true },
        { id: 'kandidatenlijst', label: 'sections.naarStembureau.doe.items.kandidatenlijst', correct: false },
        { id: 'appel', label: 'sections.naarStembureau.doe.items.appel', correct: false },
        { id: 'lippenstift', label: 'sections.naarStembureau.doe.items.lippenstift', correct: false },
        { id: 'poster', label: 'sections.naarStembureau.doe.items.poster', correct: false },
      ],
      correctItems: ['stempas', 'paspoort', 'rijbewijs'],
    },
    imageButtons: [
      {
        id: 'identiteitsbewijs',
        label: 'sections.naarStembureau.buttons.identiteitsbewijs.label',
        modalTitle: 'sections.naarStembureau.buttons.identiteitsbewijs.title',
        modalContent: 'sections.naarStembureau.buttons.identiteitsbewijs.content',
      },
      {
        id: 'kandidatenlijst-button',
        label: 'sections.naarStembureau.buttons.kandidatenlijst.label',
        modalTitle: 'sections.naarStembureau.buttons.kandidatenlijst.title',
        modalContent: 'sections.naarStembureau.buttons.kandidatenlijst.content',
      },
      {
        id: 'kind-mee',
        label: 'sections.naarStembureau.buttons.kindMee.label',
        modalTitle: 'sections.naarStembureau.buttons.kindMee.title',
        modalContent: 'sections.naarStembureau.buttons.kindMee.content',
      },
      {
        id: 'vreemdelingendocument',
        label: 'sections.naarStembureau.buttons.vreemdelingendocument.label',
        modalTitle: 'sections.naarStembureau.buttons.vreemdelingendocument.title',
        modalContent: 'sections.naarStembureau.buttons.vreemdelingendocument.content',
      },
      {
        id: 'in-het-kort-2',
        label: 'sections.naarStembureau.buttons.inHetKort2.label',
        modalTitle: 'sections.naarStembureau.buttons.inHetKort2.title',
        modalContent: 'sections.naarStembureau.buttons.inHetKort2.content',
      },
    ],
  },
  {
    id: 'op-stembureau',
    title: 'sections.opStembureau.title',
    description: 'sections.opStembureau.description',
    image: 'Image: op het stembureau',
    imageButtons: [
      {
        id: 'ik-ben-gemachtigd',
        label: 'sections.opStembureau.buttons.ikBenGemachtigd.label',
        modalTitle: 'sections.opStembureau.buttons.ikBenGemachtigd.title',
        modalContent: 'sections.opStembureau.buttons.ikBenGemachtigd.content',
      },
      {
        id: 'stempas-gescand',
        label: 'sections.opStembureau.buttons.stempasGescand.label',
        modalTitle: 'sections.opStembureau.buttons.stempasGescand.title',
        modalContent: 'sections.opStembureau.buttons.stempasGescand.content',
      },
      {
        id: 'op-wie-stem-ik',
        label: 'sections.opStembureau.buttons.opWieStemIk.label',
        modalTitle: 'sections.opStembureau.buttons.opWieStemIk.title',
        modalContent: 'sections.opStembureau.buttons.opWieStemIk.content',
      },
      {
        id: 'in-het-kort-3',
        label: 'sections.opStembureau.buttons.inHetKort3.label',
        modalTitle: 'sections.opStembureau.buttons.inHetKort3.title',
        modalContent: 'sections.opStembureau.buttons.inHetKort3.content',
      },
    ],
  },
  {
    id: 'in-stemhokje',
    title: 'sections.inStemhokje.title',
    description: 'sections.inStemhokje.description',
    image: 'Image: in het stemhokje',
    button: {
      label: 'sections.inStemhokje.button',
      action: 'doe',
    },
    doeType: 'quiz',
    doeContent: {
      title: 'sections.inStemhokje.doe.title',
      questions: [
        {
          question: 'sections.inStemhokje.doe.questions.0.question',
          options: ['sections.inStemhokje.doe.questions.0.options.0', 'sections.inStemhokje.doe.questions.0.options.1'],
          correct: 1,
          explanation: 'sections.inStemhokje.doe.questions.0.explanation',
        },
        {
          question: 'sections.inStemhokje.doe.questions.1.question',
          options: ['sections.inStemhokje.doe.questions.1.options.0', 'sections.inStemhokje.doe.questions.1.options.1'],
          correct: 0,
          explanation: 'sections.inStemhokje.doe.questions.1.explanation',
        },
        {
          question: 'sections.inStemhokje.doe.questions.2.question',
          options: ['sections.inStemhokje.doe.questions.2.options.0', 'sections.inStemhokje.doe.questions.2.options.1'],
          correct: 1,
          explanation: 'sections.inStemhokje.doe.questions.2.explanation',
        },
        {
          question: 'sections.inStemhokje.doe.questions.3.question',
          options: ['sections.inStemhokje.doe.questions.3.options.0', 'sections.inStemhokje.doe.questions.3.options.1'],
          correct: 1,
          explanation: 'sections.inStemhokje.doe.questions.3.explanation',
        },
        {
          question: 'sections.inStemhokje.doe.questions.4.question',
          options: ['sections.inStemhokje.doe.questions.4.options.0', 'sections.inStemhokje.doe.questions.4.options.1'],
          correct: 1,
          explanation: 'sections.inStemhokje.doe.questions.4.explanation',
        },
      ],
    },
    imageButtons: [
      {
        id: 'verkeerd-ingevuld',
        label: 'sections.inStemhokje.buttons.verkeerdIngevuld.label',
        modalTitle: 'sections.inStemhokje.buttons.verkeerdIngevuld.title',
        modalContent: 'sections.inStemhokje.buttons.verkeerdIngevuld.content',
      },
      {
        id: 'inkleuren-verplicht',
        label: 'sections.inStemhokje.buttons.inkleurenVerplicht.label',
        modalTitle: 'sections.inStemhokje.buttons.inkleurenVerplicht.title',
        modalContent: 'sections.inStemhokje.buttons.inkleurenVerplicht.content',
      },
      {
        id: 'foto-maken',
        label: 'sections.inStemhokje.buttons.fotoMaken.label',
        modalTitle: 'sections.inStemhokje.buttons.fotoMaken.title',
        modalContent: 'sections.inStemhokje.buttons.fotoMaken.content',
      },
      {
        id: 'hulp',
        label: 'sections.inStemhokje.buttons.hulp.label',
        modalTitle: 'sections.inStemhokje.buttons.hulp.title',
        modalContent: 'sections.inStemhokje.buttons.hulp.content',
      },
      {
        id: 'slechtziend',
        label: 'sections.inStemhokje.buttons.slechtziend.label',
        modalTitle: 'sections.inStemhokje.buttons.slechtziend.title',
        modalContent: 'sections.inStemhokje.buttons.slechtziend.content',
      },
      {
        id: 'in-het-kort-4',
        label: 'sections.inStemhokje.buttons.inHetKort4.label',
        modalTitle: 'sections.inStemhokje.buttons.inHetKort4.title',
        modalContent: 'sections.inStemhokje.buttons.inHetKort4.content',
      },
    ],
  },
  {
    id: 'bij-stembus',
    title: 'sections.bijStembus.title',
    description: 'sections.bijStembus.description',
    image: 'Image: bij de stembus',
    imageButtons: [
      {
        id: 'afvalcontainer',
        label: 'sections.bijStembus.buttons.afvalcontainer.label',
        modalTitle: 'sections.bijStembus.buttons.afvalcontainer.title',
        modalContent: 'sections.bijStembus.buttons.afvalcontainer.content',
      },
      {
        id: 'stembus-openen',
        label: 'sections.bijStembus.buttons.stembusOpenen.label',
        modalTitle: 'sections.bijStembus.buttons.stembusOpenen.title',
        modalContent: 'sections.bijStembus.buttons.stembusOpenen.content',
      },
      {
        id: 'in-het-kort-5',
        label: 'sections.bijStembus.buttons.inHetKort5.label',
        modalTitle: 'sections.bijStembus.buttons.inHetKort5.title',
        modalContent: 'sections.bijStembus.buttons.inHetKort5.content',
      },
    ],
  },
  {
    id: 'je-hebt-gestemd',
    title: 'sections.jeHebtGestemd.title',
    description: 'sections.jeHebtGestemd.description',
    image: 'Image: je hebt gestemd',
    imageButtons: [
      {
        id: 'stemmen-tellen',
        label: 'sections.jeHebtGestemd.buttons.stemmenTellen.label',
        modalTitle: 'sections.jeHebtGestemd.buttons.stemmenTellen.title',
        modalContent: 'sections.jeHebtGestemd.buttons.stemmenTellen.content',
      },
      {
        id: 'exitpoll',
        label: 'sections.jeHebtGestemd.buttons.exitpoll.label',
        modalTitle: 'sections.jeHebtGestemd.buttons.exitpoll.title',
        modalContent: 'sections.jeHebtGestemd.buttons.exitpoll.content',
      },
      {
        id: 'uitslagen',
        label: 'sections.jeHebtGestemd.buttons.uitslagen.label',
        modalTitle: 'sections.jeHebtGestemd.buttons.uitslagen.title',
        modalContent: 'sections.jeHebtGestemd.buttons.uitslagen.content',
      },
      {
        id: 'in-het-kort-6',
        label: 'sections.jeHebtGestemd.buttons.inHetKort6.label',
        modalTitle: 'sections.jeHebtGestemd.buttons.inHetKort6.title',
        modalContent: 'sections.jeHebtGestemd.buttons.inHetKort6.content',
      },
    ],
  },
];
