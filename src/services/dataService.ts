import i18n from '@/i18n/config';
import type { Section, WelcomeSection } from '@/types/index';

/**
 * تحميل صفحة البداية من ملف اللغة الحالي
 */
export const getWelcomeSection = (): WelcomeSection => {
  const t = i18n.t;
  return {
    id: 'welcome',
    title: t('sections.welcome.title'),
    description: t('sections.welcome.description'),
    button: {
      label: t('sections.welcome.button'),
      action: 'cta',
    },
    sound: 'https://stembegeleider.prodemos.nl/sounds/8490af954e.m4a',
  };
};

/**
 * تحميل الأقسام من ملف اللغة الحالي
 */
export const getSections = (): Section[] => {
  const t = i18n.t;

  return [
    {
      id: "brief",
      title: t("sections.brief.title"),
      description: t("sections.brief.description"),
      image:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899143/image_dvx143.png",
      sound: "https://stembegeleider.prodemos.nl/sounds/5878d16d62.m4a",
      button: {
        label: t("sections.brief.button"),
        action: "doe",
      },
      doeType: "quiz",
      doeContent: {
        title: t("sections.brief.doe.title"),
        sounds: [
          "https://stembegeleider.prodemos.nl/sounds/68b921b749.m4a",
          "https://stembegeleider.prodemos.nl/sounds/73af711763.m4a",
        ],
        questions: [
          {
            question: t("sections.brief.doe.questions.0.question"),
            image:
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899141/q1_rzvx4g.png",
            options: [
              t("sections.brief.doe.questions.0.options.0"),
              t("sections.brief.doe.questions.0.options.1"),
              t("sections.brief.doe.questions.0.options.2"),
            ],
            correct: 1,
            explanation: t("sections.brief.doe.questions.0.explanation"),
          },
          {
            question: t("sections.brief.doe.questions.1.question"),
            image:
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899141/q1_rzvx4g.png",

            options: [
              t("sections.brief.doe.questions.1.options.0"),
              t("sections.brief.doe.questions.1.options.1"),
              t("sections.brief.doe.questions.1.options.2"),
            ],
            correct: 2,
            explanation: t("sections.brief.doe.questions.1.explanation"),
          },
        ],
      },
      imageButtons: [
        {
          id: "machtigen",
          label: t("sections.brief.buttons.machtigen.label"),
          modalTitle: t("sections.brief.buttons.machtigen.title"),
          modalContent: t("sections.brief.buttons.machtigen.content"),
          sounds: [
            "https://stembegeleider.prodemos.nl/sounds/2738d9f1d3.m4a",
            "https://stembegeleider.prodemos.nl/sounds/2dbadb51f1.m4a",
          ],
        },
        {
          id: "mag-ik-stemmen",
          label: t("sections.brief.buttons.magIkStemmen.label"),
          modalTitle: t("sections.brief.buttons.magIkStemmen.title"),
          modalContent: t("sections.brief.buttons.magIkStemmen.content"),
          sounds: [
            "https://stembegeleider.prodemos.nl/sounds/2dbadb51f1.m4a",
            "https://stembegeleider.prodemos.nl/sounds/2918917e4e.m4a",
            "https://stembegeleider.prodemos.nl/sounds/eb2f47d222.m4a",
          ],
        },
        {
          id: "geen-stempas",
          label: t("sections.brief.buttons.geenStempas.label"),
          modalTitle: t("sections.brief.buttons.geenStempas.title"),
          modalContent: t("sections.brief.buttons.geenStempas.content"),
          sounds: [
            "https://stembegeleider.prodemos.nl/sounds/4af46404e4.m4a",
            "https://stembegeleider.prodemos.nl/sounds/fa03b634e6.m4a",
            "https://stembegeleider.prodemos.nl/sounds/00b3d17372.m4a",
          ],
        },
        {
          id: "in-het-kort",
          label: t("sections.brief.buttons.inHetKort.label"),
          modalTitle: t("sections.brief.buttons.inHetKort.title"),
          modalContent: t("sections.brief.buttons.inHetKort.content"),
          sounds: [
            "https://stembegeleider.prodemos.nl/sounds/5db58f0b1c.m4a",
            "https://stembegeleider.prodemos.nl/sounds/70c8ae1e51.m4a",
          ],
        },
      ],
    },
    {
      id: "naar-stembureau",
      title: t("sections.naarStembureau.title"),
      description: t("sections.naarStembureau.description"),

      image:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899141/s2_mg26uu.png",

      button: {
        label: t("sections.naarStembureau.button"),
        action: "doe",
      },
      doeType: "dragdrop",
      doeContent: {
        title: "sections.naarStembureau.doe.title",
        items: [
          {
            id: "stempas",
            label: "sections.naarStembureau.doe.items.stempas",
            correct: true,
          },
          {
            id: "paspoort",
            label: "sections.naarStembureau.doe.items.paspoort",
            correct: true,
          },

          {
            id: "kandidatenlijst",
            label: "sections.naarStembureau.doe.items.kandidatenlijst",
            correct: false,
          },
          {
            id: "appel",
            label: "sections.naarStembureau.doe.items.appel",
            correct: false,
          },

          {
            id: "poster",
            label: "sections.naarStembureau.doe.items.poster",
            correct: false,
          },
        ],
        correctItems: ["stempas", "paspoort"],
      },
      imageButtons: [
        {
          id: "identiteitsbewijs",
          label: t("sections.naarStembureau.buttons.identiteitsbewijs.label"),
          modalTitle: t(
            "sections.naarStembureau.buttons.identiteitsbewijs.title",
          ),
          modalContent: t(
            "sections.naarStembureau.buttons.identiteitsbewijs.content",
          ),
        },
        {
          id: "kandidatenlijst-button",
          label: t("sections.naarStembureau.buttons.kandidatenlijst.label"),
          modalTitle: t(
            "sections.naarStembureau.buttons.kandidatenlijst.title",
          ),
          modalContent: t(
            "sections.naarStembureau.buttons.kandidatenlijst.content",
          ),
        },
        {
          id: "kind-mee",
          label: t("sections.naarStembureau.buttons.kindMee.label"),
          modalTitle: t("sections.naarStembureau.buttons.kindMee.title"),
          modalContent: t("sections.naarStembureau.buttons.kindMee.content"),
        },
        {
          id: "vreemdelingendocument",
          label: t(
            "sections.naarStembureau.buttons.vreemdelingendocument.label",
          ),
          modalTitle: t(
            "sections.naarStembureau.buttons.vreemdelingendocument.title",
          ),
          modalContent: t(
            "sections.naarStembureau.buttons.vreemdelingendocument.content",
          ),
        },
        {
          id: "in-het-kort-2",
          label: t("sections.naarStembureau.buttons.inHetKort2.label"),
          modalTitle: t("sections.naarStembureau.buttons.inHetKort2.title"),
          modalContent: t("sections.naarStembureau.buttons.inHetKort2.content"),
        },
      ],
    },
    {
      id: "op-stembureau",
      title: t("sections.opStembureau.title"),
      description: t("sections.opStembureau.description"),
      image:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899146/s3_ez0vrr.png",

      imageButtons: [
        {
          id: "ik-ben-gemachtigd",
          label: t("sections.opStembureau.buttons.ikBenGemachtigd.label"),
          modalTitle: t("sections.opStembureau.buttons.ikBenGemachtigd.title"),
          modalContent: t(
            "sections.opStembureau.buttons.ikBenGemachtigd.content",
          ),
        },
        {
          id: "stempas-gescand",
          label: t("sections.opStembureau.buttons.stempasGescand.label"),
          modalTitle: t("sections.opStembureau.buttons.stempasGescand.title"),
          modalContent: t(
            "sections.opStembureau.buttons.stempasGescand.content",
          ),
        },
        {
          id: "op-wie-stem-ik",
          label: t("sections.opStembureau.buttons.opWieStemIk.label"),
          modalTitle: t("sections.opStembureau.buttons.opWieStemIk.title"),
          modalContent: t("sections.opStembureau.buttons.opWieStemIk.content"),
        },
        {
          id: "in-het-kort-3",
          label: t("sections.opStembureau.buttons.inHetKort3.label"),
          modalTitle: t("sections.opStembureau.buttons.inHetKort3.title"),
          modalContent: t("sections.opStembureau.buttons.inHetKort3.content"),
        },
      ],
    },
    {
      id: "in-stemhokje",
      title: t("sections.inStemhokje.title"),
      description: t("sections.inStemhokje.description"),
      image:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899142/s4_id9xoq.png",

      button: {
        label: t("sections.inStemhokje.button"),
        action: "doe",
      },
      doeType: "quiz",
      doeContent: {
        title: t("sections.inStemhokje.doe.title"),
        questions: [
          {
            question: t("sections.inStemhokje.doe.questions.0.question"),
            image:
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899142/yn01_hmtmao.png",
            options: [
              t("sections.inStemhokje.doe.questions.0.options.0"),
              t("sections.inStemhokje.doe.questions.0.options.1"),
            ],
            correct: 1,
            explanation: t("sections.inStemhokje.doe.questions.0.explanation"),
          },
          {
            question: t("sections.inStemhokje.doe.questions.1.question"),
            image:
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899143/yn02_jeextx.png",

            options: [
              t("sections.inStemhokje.doe.questions.1.options.0"),
              t("sections.inStemhokje.doe.questions.1.options.1"),
            ],
            correct: 0,
            explanation: t("sections.inStemhokje.doe.questions.1.explanation"),
          },
          {
            question: t("sections.inStemhokje.doe.questions.2.question"),
            image:
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899141/yn03_pw9egc.png",

            options: [
              t("sections.inStemhokje.doe.questions.2.options.0"),
              t("sections.inStemhokje.doe.questions.2.options.1"),
            ],
            correct: 1,
            explanation: t("sections.inStemhokje.doe.questions.2.explanation"),
          },
          {
            question: t("sections.inStemhokje.doe.questions.3.question"),
            image:
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899141/yn04_rv07he.png",

            options: [
              t("sections.inStemhokje.doe.questions.3.options.0"),
              t("sections.inStemhokje.doe.questions.3.options.1"),
            ],
            correct: 1,
            explanation: t("sections.inStemhokje.doe.questions.3.explanation"),
          },
          {
            question: t("sections.inStemhokje.doe.questions.4.question"),
            image:
              "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899142/yn05_zjutjd.png",

            options: [
              t("sections.inStemhokje.doe.questions.4.options.0"),
              t("sections.inStemhokje.doe.questions.4.options.1"),
            ],
            correct: 1,
            explanation: t("sections.inStemhokje.doe.questions.4.explanation"),
          },
        ],
      },
      imageButtons: [
        {
          id: "verkeerd-ingevuld",
          label: t("sections.inStemhokje.buttons.verkeerdIngevuld.label"),
          modalTitle: t("sections.inStemhokje.buttons.verkeerdIngevuld.title"),
          modalContent: t(
            "sections.inStemhokje.buttons.verkeerdIngevuld.content",
          ),
        },
        {
          id: "inkleuren-verplicht",
          label: t("sections.inStemhokje.buttons.inkleurenVerplicht.label"),
          modalTitle: t(
            "sections.inStemhokje.buttons.inkleurenVerplicht.title",
          ),
          modalContent: t(
            "sections.inStemhokje.buttons.inkleurenVerplicht.content",
          ),
        },
        {
          id: "foto-maken",
          label: t("sections.inStemhokje.buttons.fotoMaken.label"),
          modalTitle: t("sections.inStemhokje.buttons.fotoMaken.title"),
          modalContent: t("sections.inStemhokje.buttons.fotoMaken.content"),
        },
        {
          id: "hulp",
          label: t("sections.inStemhokje.buttons.hulp.label"),
          modalTitle: t("sections.inStemhokje.buttons.hulp.title"),
          modalContent: t("sections.inStemhokje.buttons.hulp.content"),
        },
        {
          id: "slechtziend",
          label: t("sections.inStemhokje.buttons.slechtziend.label"),
          modalTitle: t("sections.inStemhokje.buttons.slechtziend.title"),
          modalContent: t("sections.inStemhokje.buttons.slechtziend.content"),
        },
        {
          id: "in-het-kort-4",
          label: t("sections.inStemhokje.buttons.inHetKort4.label"),
          modalTitle: t("sections.inStemhokje.buttons.inHetKort4.title"),
          modalContent: t("sections.inStemhokje.buttons.inHetKort4.content"),
        },
      ],
    },
    {
      id: "bij-stembus",
      title: t("sections.bijStembus.title"),
      description: t("sections.bijStembus.description"),
      image:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899143/s5_eamtmw.png",

      imageButtons: [
        {
          id: "afvalcontainer",
          label: t("sections.bijStembus.buttons.afvalcontainer.label"),
          modalTitle: t("sections.bijStembus.buttons.afvalcontainer.title"),
          modalContent: t("sections.bijStembus.buttons.afvalcontainer.content"),
        },
        {
          id: "stembus-openen",
          label: t("sections.bijStembus.buttons.stembusOpenen.label"),
          modalTitle: t("sections.bijStembus.buttons.stembusOpenen.title"),
          modalContent: t("sections.bijStembus.buttons.stembusOpenen.content"),
        },
        {
          id: "in-het-kort-5",
          label: t("sections.bijStembus.buttons.inHetKort5.label"),
          modalTitle: t("sections.bijStembus.buttons.inHetKort5.title"),
          modalContent: t("sections.bijStembus.buttons.inHetKort5.content"),
        },
      ],
    },
    {
      id: "je-hebt-gestemd",
      title: t("sections.jeHebtGestemd.title"),
      description: t("sections.jeHebtGestemd.description"),
      image:
        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1771899143/s6_t4dde2.png",

      imageButtons: [
        {
          id: "stemmen-tellen",
          label: t("sections.jeHebtGestemd.buttons.stemmenTellen.label"),
          modalTitle: t("sections.jeHebtGestemd.buttons.stemmenTellen.title"),
          modalContent: t(
            "sections.jeHebtGestemd.buttons.stemmenTellen.content",
          ),
        },
        {
          id: "exitpoll",
          label: t("sections.jeHebtGestemd.buttons.exitpoll.label"),
          modalTitle: t("sections.jeHebtGestemd.buttons.exitpoll.title"),
          modalContent: t("sections.jeHebtGestemd.buttons.exitpoll.content"),
        },
        {
          id: "uitslagen",
          label: t("sections.jeHebtGestemd.buttons.uitslagen.label"),
          modalTitle: t("sections.jeHebtGestemd.buttons.uitslagen.title"),
          modalContent: t("sections.jeHebtGestemd.buttons.uitslagen.content"),
        },
        {
          id: "in-het-kort-6",
          label: t("sections.jeHebtGestemd.buttons.inHetKort6.label"),
          modalTitle: t("sections.jeHebtGestemd.buttons.inHetKort6.title"),
          modalContent: t("sections.jeHebtGestemd.buttons.inHetKort6.content"),
        },
      ],
    },
  ];
};
