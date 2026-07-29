/* Every step carries an icon key, including the ones without an icon:
   TypeScript infers a union when object shapes differ across an array, and
   reading step.icon then fails on the members missing it. */
const originSteps = [
  {
    year: "2020",
    title: "Chemistry BSc",
    detail: "Nottingham Trent University",
    icon: "flask",
  },
  {
    year: "2020",
    title: "Caught the bug",
    detail: "A dissertation on programming for chemical analysis",
    icon: null,
  },
  {
    year: "2020",
    title: "The School of Code",
    detail: "16 weeks, zero to hero",
    icon: null,
  },
  {
    year: "2021",
    title: "First dev role",
    detail: "And never looked back",
    icon: "code",
  },
];

export { originSteps };
