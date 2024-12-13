export type GridItemLayout = "1x2" | "1x6" | "2x1" | "2x2" | "2x4" | "2x7";
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  description?: string;
  color?: string;
  backgroundColor?: {
    light: string;
    dark: string;
  };
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  promotion?: string;
  price?: string;
  oldPrice?: string;
  stars?: number;
  equipments?: EqiupmentItem[];
  image?: string;
  images?: string[];
  video?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "WhatsApp",
    backgroundColor: {
      light: "#dcf8c6",
      dark: "#075e54",
    },
    icon: "whatsapp",
    description: "Entre em contato agora e agende uma consulta.",
    color: "#25d366",
    buttonTitle: "17 99141-4224",
    buttonLink:
      "https://api.whatsapp.com/send?phone=5517991414224",
    buttonSecondaryText: "",
  },
  {
    layout: "2x7",
    type: "equipment",
    title:
      "Essa combinação de verde com dourado tem seu charme.",
    images: ["/consultorio/1.jpeg", "/consultorio/3.jpg", "/consultorio/4.jpg", "/consultorio/8.jpg"],
  },
  {
    layout: "1x6",
    type: "equipment",
    title:
      "Eu quero ajudá-los a educar os seus pequeninos sobre o quão importante é cuidarmos da nossa saúde bucal.",
    image: "/tati.jpg",
  },
  {
    layout: "1x6",
    type: "equipment",
    title: "Obra de arte feita para verdadeiros apaixonados por música.",
    video: "/1.mp4",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Instagram",
    icon: "instagram",
    description:
      "Acompanhe meu Instagram para dicas de saúde bucal e novidades do consultório.",
    buttonTitle: "Seguidores",
    buttonLink: "https://www.instagram.com/dratatianasocio/",
    buttonSecondaryText: "3.163",
    color: "rgba(104, 60, 190, 1)",
    backgroundColor: {
      light: "#f7e3fc",
      dark: "#2e1437",
    },
  },
  {
    layout: "2x1",
    type: "project",
    title: "Acabamentos Exclusivos",
    icon: "guitar",
    color: "#090707",
    backgroundColor: {
      light: "#F6FCDF",
      dark: "#859F3D",
    },
  },
  {
    layout: "1x6",
    type: "equipment",
    title:
      "Precision Black Relic",
    images: ["/blackrelic/1.jpg", "/blackrelic/2.jpg", "/blackrelic/3.jpg", "/blackrelic/4.jpg", "/blackrelic/5.jpg"],
  },
  {
    layout: "1x6",
    type: "equipment",
    title:
      "Mustang Semi Acústico.",
    images: ["/mustang/1.jpg", "/mustang/2.jpg", "/mustang/3.jpg", "/mustang/4.jpg", "/mustang/5.jpg", "/mustang/6.jpg"],
  },
  {
    layout: "1x6",
    type: "equipment",
    title:
      "Mustang Dourado",
    images: ["/bass/1.jpg", "/bass/2.jpg", "/bass/3.jpg", "/bass/4.jpg", "/bass/0.jpg"],
  },
  {
    layout: "1x6",
    type: "equipment",
    title:
      "Jazzbass Imbuia Tigrada",
    images: ["1.jpg", "2.jpg", "3.jpg"],
  },
];

export const siteConfig = {
  creator: "Dra. Tatiana",
  title: "Odontopediatra 🐻",
  bio: "Cada sorriso é único e merece um cuidado especial, combinando técnica moderna com um atendimento acolhedor e gentil.",
  location: "São José Rio Preto - SP",
  locationLink:
    "https://maps.app.goo.gl/V67nKJ7QjabckVNK9",
  email: "drtati@gmail.com",
  items: GridItems,
} as const;
