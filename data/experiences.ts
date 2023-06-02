export type ExperienceListNodeType = {
  title: string;
  shortDescription: string;
  image?: any;
  dateStart: Date;
  dateEnd?: Date;
  demoLink?: string;
  sourceLink?: string;
};

export const ExperiencesListNode: Map<string, ExperienceListNodeType> = new Map(
  [
    [
      'index',
      {
        title: 'Index',
        shortDescription: 'Worked as a Back-end developer for index.',
        dateStart: new Date(2021, 8, 1),
        dateEnd: new Date(2022, 5, 1),
        demoLink: 'https://tihlde.org',
        sourceLink: 'https://github.com/TIHLDE/Lepton',
      },
    ],
    [
      'eisolutions',
      {
        title: 'Ei Solutions',
        shortDescription:
          'Created the Back-end for a automatic EU taxonomy reporter. I also created the landing page.',
        dateStart: new Date(2022, 8, 1),
        dateEnd: new Date(Date.now()),
        demoLink: 'https://eisolutions.no',
      },
    ],
  ]
);
