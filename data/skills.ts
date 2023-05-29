import qgis from '/static/skills/qgis.png';

export type SkillType = {
  name: string;
  description: string;
  icon?: any;
  level?: 1 | 2 | 3 | 4 | 5; // 1-5
};

export const Skills: SkillType[] = [
  {
    name: 'Docker',
    description:
      'I have used docker in various projects in Index, Hackerspace, and Ei Solutions. his was very useful in deploying applications and services',
    level: 3,
  },
  {
    name: 'Django',
    description:
      'I have used Django in various projects in Index, Hackerspace, and Ei Solutions',
    level: 5,
  },
  {
    name: 'QGIS',
    description:
      'In Ei Solutions, I used QGIS to convert vector and raster data to a PostGIS database',
    level: 3,
    icon: qgis,
  },
];
