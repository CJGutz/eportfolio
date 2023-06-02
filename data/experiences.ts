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
      'quantum-algorithms',
      {
        title: 'Trying out Quantum Computing',
        shortDescription: 'Followed a course on Quantum Computing and tried out some algorithms with the Qiskit Python library.',
        dateStart: new Date(2021, 6, 1),
        sourceLink: 'https://github.com/CJGutz/Quantum-Algorithms',
      },
    ],
    [
      'index',
      {
        title: 'Programmer with Index',
        shortDescription: 'Worked as a Back-end developer for index.',
        dateStart: new Date(2021, 8, 1),
        dateEnd: new Date(2022, 5, 1),
        demoLink: 'https://tihlde.org',
        sourceLink: 'https://github.com/TIHLDE/Lepton',
      },
    ],
    [
      'hackerspace-devops',
      {
        title: 'DevOps Team Leader - Hackerspace',
        shortDescription:
          'For a year I managed the DevOps team at Hackerspace NTNU. I had responsibility for the development lifecycle, server infrastructure and the team\'s well-being.',
        dateStart: new Date(2022, 2, 1),
        dateEnd: new Date(2023, 2, 1),
        demoLink: 'https://hackerspace-ntnu.no',
        sourceLink: 'https://github.com/hackerspace-ntnu',
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
    [
      'hackerspace-deputy',
      {
        title: 'Deputy Commander - Hackerspace',
        shortDescription:
          'The deputy commander, together with the lead and the financial manager, have the responsibility to administer the organization. This includes having equipment available for students, organizing events like the general assembly, and creating an environment for students to learn.',
        dateStart: new Date(2023, 2, 1),
        dateEnd: new Date(2024, 2, 1),
        demoLink: 'https://hackerspace-ntnu.no',
        sourceLink: 'https://github.com/hackerspace-ntnu',
      },
    ],
  ]
);
