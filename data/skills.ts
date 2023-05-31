import qgis from '/static/skills/qgis.png';

export type SkillType = {
  name: string;
  description: string;
  icon?: any;
  level?: 1 | 2 | 3 | 4 | 5; // 1-5
};

export const Skills: Map<string, SkillType> = new Map([
  [
    'docker',
    {
      name: 'Docker',
      description:
        'I have used docker in various projects in Index, Hackerspace, and Ei Solutions. It has been was very useful in both development and deployment. Yet, it is so complex to master. My skill with Docker centers around using Compose and creating Dockerfiles.',
      level: 3,
    },
  ],
  [
    'java',
    {
      name: 'Java',
      description:
        'Java was used extencively as the main language in the university.',
      level: 5,
    },
  ],
  [
    'nextjs',
    {
      name: 'Next.js',
      description:
        'This SSR framework was used to build this website in addition to the landing page for Ei Solutions.',
      level: 2,
    },
  ],
  [
    'typescript',
    {
      name: 'Type Script',
      description:
        'Typescript has been used in all web development projects. In high school, I was introduced to Javascript, but after learning Typescript, I have understood that I can never go back',
      level: 3,
    },
  ],
  [
    'django',
    {
      name: 'Django',
      description:
        'I have used Django in various projects in Index, Hackerspace, and Ei Solutions. It has been my Go To framework for backend developement because of its simplicity, scalability, and effeciency.',
      level: 5,
    },
  ],
  [
    'qgis',
    {
      name: 'QGIS',
      description:
        'In Ei Solutions, I used QGIS to convert vector and raster data to a PostGIS database',
      level: 3,
      icon: qgis,
    },
  ],
  [
    'postgis',
    {
      name: 'PostGIS',
      description:
        'This Postgres extension has been used to store and query spatial data in Ei Solutions. Postgres with PostGIS is by far the best relational geospatial database. As of now, I have only stored with the geographic type which does not support all available functions.',
      level: 3,
    },
  ],
  [
    'python',
    {
      name: 'Python',
      description:
        'Python was my my first introduction to programming with a purpose. It has been used with my projects in Django. It was also used in the CS50-AI course with Tensorflow.',
      level: 4,
    },
  ],
]);
