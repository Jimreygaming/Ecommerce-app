import { Product } from '@/contexts/CartContext';
import cottonTee from '@/assets/products/cotton-tee.jpg';
import denimJacket from '@/assets/products/denim-jacket.jpg';
import hoodie from '@/assets/products/hoodie.jpg';
import blazer from '@/assets/products/blazer.jpg';
import jeans from '@/assets/products/jeans.jpg';
import cashmere from '@/assets/products/cashmere-sweater.jpg';
import shorts from '@/assets/products/athletic-shorts.jpg';
import blouse from '@/assets/products/silk-blouse.jpg';

export const products: Product[] = [
  {
    id: "1",
    name: "Essential Cotton Tee",
    price: 29.99,
    image: cottonTee,
    category: "basics",
    description: "A premium cotton t-shirt perfect for everyday wear. Made from 100% organic cotton with a comfortable, relaxed fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Gray"]
  },
  {
    id: "2",
    name: "Classic Denim Jacket",
    price: 89.99,
    image: denimJacket,
    category: "outerwear",
    description: "Timeless denim jacket crafted from premium denim. Features classic styling with modern fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Light Blue"]
  },
  {
    id: "3",
    name: "Minimalist Hoodie",
    price: 65.99,
    image: hoodie,
    category: "hoodies",
    description: "Cozy and stylish hoodie with a minimalist design. Perfect for layering or wearing on its own.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy", "Cream"]
  },
  {
    id: "4",
    name: "Tailored Blazer",
    price: 149.99,
    image: blazer,
    category: "formal",
    description: "Sophisticated blazer with a modern tailored fit. Perfect for business or smart casual occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal"]
  },
  {
    id: "5",
    name: "Vintage Wash Jeans",
    price: 79.99,
    image: jeans,
    category: "denim",
    description: "Premium jeans with a vintage wash and comfortable fit. Made from sustainable denim.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Blue", "Black", "Gray"]
  },
  {
    id: "6",
    name: "Cashmere Sweater",
    price: 199.99,
    image: cashmere,
    category: "knitwear",
    description: "Luxurious cashmere sweater with a timeless design. Incredibly soft and warm.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Navy", "Gray", "Camel"]
  },
  {
    id: "7",
    name: "Athletic Shorts",
    price: 39.99,
    image: shorts,
    category: "activewear",
    description: "High-performance athletic shorts with moisture-wicking technology and comfortable fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"]
  },
  {
    id: "8",
    name: "Silk Blouse",
    price: 119.99,
    image: blouse,
    category: "formal",
    description: "Elegant silk blouse with a flowing fit and sophisticated design. Perfect for professional settings.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Blush"]
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "basics", name: "Basics" },
  { id: "outerwear", name: "Outerwear" },
  { id: "hoodies", name: "Hoodies" },
  { id: "formal", name: "Formal" },
  { id: "denim", name: "Denim" },
  { id: "knitwear", name: "Knitwear" },
  { id: "activewear", name: "Activewear" }
];