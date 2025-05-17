export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  // Add more fields based on your API response
}
export interface Quiz {
  id: string;
  title: string;
  category: string;
  description: string;
  questions: Question[];
}
export type Question = {
  text: string;
  options: string[];
  correctIndex: number;
};
