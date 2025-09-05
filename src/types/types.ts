export type BaseDate = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
};

export type DestinationData = {
  description: string;
  distance: string;
  travel: string;
} & BaseDate;

export type CrewData = {
  role: string;
  bio: string;
} & BaseDate;

export type Techdata = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};
