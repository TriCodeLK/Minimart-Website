export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  tag?: string;
  weight: string;
}

export const products: Product[] = [
  { id: 1, name: 'Radish', category: 'Vegetables', price: 2.00, oldPrice: 3.99, rating: 4, image: 'https://images.unsplash.com/photo-1593026330056-b040ceadfc47?auto=format&fit=crop&w=300&q=80', weight: '500g', tag: 'Sale' },
  { id: 2, name: 'Potatoes', category: 'Vegetables', price: 1.00, rating: 5, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
  { id: 3, name: 'Tomatoes', category: 'Vegetables', price: 0.50, rating: 4, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80', weight: '200g' },
  { id: 4, name: 'Broccoli', category: 'Vegetables', price: 1.50, rating: 5, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bef?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
  { id: 5, name: 'Green Beans', category: 'Vegetables', price: 1.00, oldPrice: 1.50, rating: 4, image: 'https://images.unsplash.com/photo-1567375698509-4622942df6ae?auto=format&fit=crop&w=300&q=80', weight: '250g', tag: '10% Off' },
  { id: 6, name: 'Orange', category: 'Fruits', price: 2.50, rating: 5, image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee8b?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
  { id: 7, name: 'Fresh Meat', category: 'Meat', price: 12.00, rating: 4, image: 'https://images.unsplash.com/photo-1593976523910-acc2df107457?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
  { id: 8, name: 'Fresh Nuts', category: 'Nuts', price: 8.50, rating: 5, image: 'https://images.unsplash.com/photo-1551659974-98ae8cf43878?auto=format&fit=crop&w=300&q=80', weight: '500g' },
  { id: 9, name: 'Banana', category: 'Fruits', price: 1.20, rating: 4.5, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
  { id: 10, name: 'Carrots', category: 'Vegetables', price: 0.80, rating: 4, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
  { id: 11, name: 'Red Chili', category: 'Vegetables', price: 3.50, rating: 5, image: 'https://images.unsplash.com/photo-1588873281272-35548ea23f09?auto=format&fit=crop&w=300&q=80', weight: '200g', tag: 'Hot' },
  { id: 12, name: 'Onions', category: 'Vegetables', price: 1.10, rating: 4.2, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
  { id: 13, name: 'Apples', category: 'Fruits', price: 3.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
  { id: 14, name: 'Milk', category: 'Drinks', price: 2.50, rating: 4.5, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80', weight: '1L' },
  { id: 15, name: 'Bread', category: 'Bakery', price: 1.50, rating: 4.0, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80', weight: 'Each' }
];

export const categories = [
    { name: 'Vegetables', count: 8 },
    { name: 'Fruits', count: 3 },
    { name: 'Drinks', count: 1 },
    { name: 'Meat', count: 1 },
    { name: 'Bakery', count: 1 },
    { name: 'Nuts', count: 1 }
];
