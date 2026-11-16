export const authors = {
  shane: {
    name: "Shane",
    role: "Creative Director",
    image: "/images/team/shane.png",
  },
  cameron: {
    name: "Cameron",
    role: "Technical Lead",
    image: "/images/team/cameron.png",
  },
  luna: {
    name: "Luna",
    role: "Art Lead",
    image: "/images/team/luna.png",
  },
  christine: {
    name: "Christine",
    role: "3D Artist",
    image: "/images/team/christine.png",
  },
  kayla: {
    name: "Kayla",
    role: "3D Artist",
    image: "/images/team/kayla.png",
  },
  jason: {
    name: "Jason",
    role: "Narrative Designer",
    image: "/images/team/jason.png",
  },
  ralph: {
    name: "Ralph",
    role: "UI/UX Artist",
    image: "/images/team/ralph.png",
  },
  nick: {
    name: "Nick",
    role: "Programmer",
    image: "/images/team/nick.png",
  },
} as const;

export type AuthorId = keyof typeof authors;