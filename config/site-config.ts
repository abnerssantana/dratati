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
    description: "Entre em contato agora e vamos criar juntos o instrumento perfeito para você.",
    color: "#25d366",
    buttonTitle: "17 99743-3628",
    buttonLink:
      "https://api.whatsapp.com/send?phone=5517997433628.",
    buttonSecondaryText: "",
  },
  {
    layout: "2x7",
    type: "equipment",
    title:
      "Essa combinação de verde com dourado tem seu charme.",
    images: ["/azul/baixo-azul1.jpg", "/azul/baixo-azul2.jpg", "/azul/baixo-azul3.jpg", "/azul/baixo-azul4.jpg", "/azul/baixo-azul5.jpg", "/azul/baixo-azul6.jpg"],
  },
  {
    layout: "1x6",
    type: "equipment",
    title:
      "Mustang Dourado, pronto pra fazer história. Madeira selecionada e acabamento impecável.",
    image: "/bass/0.jpg",
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
      "Acompanhe meu trabalho no Instagram para ver mais projetos e atualizações.",
    buttonTitle: "Seguidores",
    buttonLink: "https://www.instagram.com/as_guitars/",
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
  creator: "AS Guitars",
  title: "Fabricação de Baixos",
  bio: "Cada instrumento é uma obra-prima que combina a nostalgia dos clássicos com a inovação do design contemporâneo.",
  location: "São José Rio Preto - SP",
  locationLink:
    "https://www.google.com/maps/place/São+José+do+Rio+Preto+-+SP/data=!4m2!3m1!1s0x94bc52ce6910005f:0xb39d5c0e3b8c5675?sa=X&ved=1t:242&ictx=111",
  email: "asguitars@gmail.com",
  items: GridItems,
} as const;
