export interface Dinosaur {
  name: string;
  description: string;
  id: number;
}

export interface DinosaurResponse {
  data: Dinosaur;
  error: string;
}