export type Category = 'Protein' | 'Creatine' | 'Gainer' | 'Stacks';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  tags: string[];
  shortDescription: string;
  longDescription: string;
  ingredients: string[];
  nutritionFacts: string[];
  howToUse: string;
  goals: string[];
  imageUrl: string;
  weightOptions: string[];
  benefits: string[];
  targetAudience: string[];
}
