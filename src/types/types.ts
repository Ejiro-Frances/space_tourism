export type DataType = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description?: string;
  distance?: string;
  travel?: string;
  role?: string;
  bio?: string;
};

export type Techdata = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};
