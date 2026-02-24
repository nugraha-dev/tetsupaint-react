export interface Product {
  id: string;
  name: string;
  category: 'Protective & Marine' | 'General Industry' | 'Autorefinish' | 'Specialty';
  description: string;
  features: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
}

export interface CoreValue {
  letter: string;
  title: string;
  description: string;
}
