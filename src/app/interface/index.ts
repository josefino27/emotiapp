export interface RootObject {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

export interface Result {
  id: number;
  uuid: string;
  name: string;
  exercise_base: number;
  status: string;
  description: string;
  creation_date: string;
  category: number;
  muscles: number[];
  muscles_secondary: number[];
  equipment: number[];
  language: number;
  license: number;
  license_author: string;
  variations: number[];
}

export interface exerciceInfo {
  count: number;
  next: string;
  previous?: any;
  results: Resultt[];
}

export interface Resultt {
  id: number;
  name: string;
  uuid: string;
  exercise_base_id: number;
  description: string;
  creation_date: string;
  category: Category;
  muscles: Muscle[];
  muscles_secondary: Muscle[];
  equipment: Category[];
  language: Language;
  license: License;
  license_author: string;
  images: Image[];
  videos: any[];
  comments: Comment[];
  variations: number[];
}

export interface Comment {
  id: number;
  exercise: number;
  comment: string;
}

export interface Image {
  id: number;
  uuid: string;
  exercise_base: number;
  image: string;
  is_main: boolean;
  status: string;
  style: string;
}

export interface License {
  id: number;
  full_name: string;
  short_name: string;
  url: string;
}

export interface Language {
  id: number;
  short_name: string;
  full_name: string;
}

export interface Muscle {
  id: number;
  name: string;
  is_front: boolean;
  image_url_main: string;
  image_url_secondary: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface RootObject2 {
  clases: Clase[];
}

export interface Clase {
  id_clase: number;
  nombreClase: string;
  cupo: string;
  fecha: string;
  comienza: string;
  termina: string;
  descripcion: string;
  imagen: string;
  created_at: string;
  updated_at: string;
}