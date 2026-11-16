export const authors = {
  shane: {
    name: "Shane Czajkowski",
    role: "Creative Director",
    image: "/images/team/shane.png",
  },
  cameron: {
    name: "Cameron McMillen",
    role: "Technical Lead",
    image: "/images/team/cameron.png",
  },
  luna: {
    name: "Luna Croft",
    role: "Art Lead",
    image: "/images/team/luna.png",
  },
  christine: {
    name: "Christine Lundberg",
    role: "3D Artist",
    image: "/images/team/christine.png",
  },
  kayla: {
    name: "Kayla Bennis",
    role: "3D Artist",
    image: "/images/team/kayla.png",
  },
  jason: {
    name: "Jason McMillen",
    role: "Narrative Designer",
    image: "/images/team/jason.png",
  },
  ralph: {
    name: "Ralph Rivera",
    role: "UI/UX Artist",
    image: "/images/team/ralph.png",
  },
  nick: {
    name: "Nick Williams",
    role: "Programmer",
    image: "/images/team/nick.png",
  },
} as const;

export type AuthorId = keyof typeof authors;