import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'protein-1',
    slug: 'whey-protein-1000',
    name: 'HelsiHub Whey Protein 1000 g',
    category: 'Protein',
    price: 249,
    tags: ['Top', 'New'],
    shortDescription: 'Ultra-filtered whey for lean muscle and fast recovery.',
    longDescription:
      'HelsiHub Whey Protein delivers a clean macro profile with added digestive enzymes for perfect absorption. Ideal for breakfast shakes or post-workout recovery.',
    ingredients: ['Whey protein isolate', 'Digestive enzymes blend', 'Natural flavours', 'Stevia'],
    nutritionFacts: ['24 g protein', '2 g carbs', '1 g sugar', '120 kcal'],
    howToUse: 'Mix 1 scoop with 250 ml of water or milk. Take 1-2 servings daily.',
    goals: ['Mass gain', 'Strength', 'Recovery'],
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    weightOptions: ['1000 g - Vanilla', '1000 g - Chocolate'],
    benefits: ['Fast digesting protein', 'Enhanced with enzymes', 'Low sugar'],
    targetAudience: ['Fighters', 'Crossfit', 'Gamers']
  },
  {
    id: 'creatine-1',
    slug: 'creatine-monohydrate-500',
    name: 'HelsiHub Creatine Monohydrate 500 g',
    category: 'Creatine',
    price: 139,
    tags: ['Top'],
    shortDescription: 'Pharmaceutical grade micronized creatine.',
    longDescription:
      'Boost ATP, power output and hydration with micronized creatine monohydrate. Dissolves instantly and is flavour neutral.',
    ingredients: ['Creatine monohydrate'],
    nutritionFacts: ['5 g creatine per serving'],
    howToUse: 'Take 5 g daily with water or juice. Loading phase optional.',
    goals: ['Strength', 'Mass gain', 'Recovery'],
    imageUrl: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&q=80',
    weightOptions: ['500 g'],
    benefits: ['Improves power', 'Supports hydration', 'Vegan friendly'],
    targetAudience: ['Powerlifters', 'MMA', 'Gamers']
  },
  {
    id: 'gainer-1',
    slug: 'mass-gainer-3000',
    name: 'HelsiHub Mass Gainer 3000 g',
    category: 'Gainer',
    price: 299,
    tags: ['Stack'],
    shortDescription: 'High-calorie blend for clean bulking.',
    longDescription:
      'Mass Gainer stacks complex carbs with dual-source protein plus MCT fats for athletes who burn thousands of calories per day.',
    ingredients: ['Oat flour', 'Whey protein concentrate', 'Micellar casein', 'MCT powder'],
    nutritionFacts: ['50 g protein', '200 g carbs', '900 kcal'],
    howToUse: 'Blend 3 scoops with 400 ml of milk or water between meals.',
    goals: ['Mass gain', 'Recovery'],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    weightOptions: ['3000 g - Chocolate', '3000 g - Cookies'],
    benefits: ['900 kcal per shake', 'Added MCT fats', 'Electrolyte complex'],
    targetAudience: ['Rugby', 'Bodybuilders']
  },
  {
    id: 'stack-1',
    slug: 'strength-mass-stack',
    name: 'HelsiHub Strength & Mass Stack',
    category: 'Stacks',
    price: 429,
    tags: ['Top', 'Stack'],
    shortDescription: 'Complete system: Gainer + Creatine + Focus shots.',
    longDescription:
      'The HelsiHub Strength & Mass Stack combines our best-selling Gainer with Creatine Monohydrate and Neuro Focus shots to cover training, recovery and gameplay.',
    ingredients: ['Mass Gainer', 'Creatine monohydrate', 'Neuro Focus shot'],
    nutritionFacts: ['30 servings stack'],
    howToUse: 'Follow the included 4-week protocol for best results.',
    goals: ['Mass gain', 'Strength', 'Focus'],
    imageUrl: 'https://images.unsplash.com/photo-1579723185296-a88c6b1f52dc?auto=format&fit=crop&w=600&q=80',
    weightOptions: ['Full stack'],
    benefits: ['All-in-one system', 'Focus boost', 'Periodized plan'],
    targetAudience: ['Combat sports', 'Esports teams', 'Athletes']
  },
  {
    id: 'protein-2',
    slug: 'plant-protein-900',
    name: 'HelsiHub Plant Protein 900 g',
    category: 'Protein',
    price: 219,
    tags: ['New'],
    shortDescription: 'Pea & rice isolate with adaptogens.',
    longDescription:
      'Vegan-friendly protein fortified with ashwagandha and electrolytes for everyday recovery.',
    ingredients: ['Pea protein', 'Rice protein', 'Ashwagandha', 'Electrolyte mix'],
    nutritionFacts: ['21 g protein', '3 g carbs', '100 kcal'],
    howToUse: 'Mix 1 scoop with cold water or add to smoothies.',
    goals: ['Recovery', 'Fat loss'],
    imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
    weightOptions: ['900 g - Salted Caramel'],
    benefits: ['Plant based', 'Added adaptogens', 'Light texture'],
    targetAudience: ['Lifestyle athletes', 'Gamers']
  }
];

export const categories = ['Protein', 'Creatine', 'Gainer', 'Stacks'] as const;

export const goals = ['Mass gain', 'Strength', 'Fat loss', 'Focus', 'Recovery'] as const;
