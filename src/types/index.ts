export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  categoryLabel: string;
  productType: string;
  price: number;
  priceMax?: number;
  priceRangeLabel?: string;
  originalPrice?: number;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: Record<string, string>;
  dimensions: {
    width: string;
    height: string;
    depth: string;
    weight: string;
  };
  images: string[];
  highlight?: boolean;
  buyUrl?: string;
  platform?: string;
  isDemo?: boolean;
}

export type ProductCategory =
  | 'cozinha';

export interface CategoryInfo {
  id: ProductCategory;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  productCount: number;
}

export type SortOption =
  | 'relevance'
  | 'price-asc'
  | 'price-desc'
  | 'newest';
