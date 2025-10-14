import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      ...product,
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0],
    });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card border-0 shadow-product hover:shadow-product-hover transition-all duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <div className="aspect-[4/5] bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
          </div>
          
          {/* Overlay Actions */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full shadow-lg"
              onClick={handleLike}
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
                }`}
              />
            </Button>
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-primary/90 backdrop-blur hover:bg-primary"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-medium text-card-foreground group-hover:text-accent transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground capitalize">
              {product.category}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg text-card-foreground">
                ${product.price}
              </span>
              <div className="flex space-x-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full border border-border ${
                      color.toLowerCase() === 'white' ? 'bg-white' :
                      color.toLowerCase() === 'black' ? 'bg-black' :
                      color.toLowerCase() === 'navy' ? 'bg-blue-900' :
                      color.toLowerCase() === 'gray' ? 'bg-gray-500' :
                      color.toLowerCase() === 'blue' ? 'bg-blue-500' :
                      color.toLowerCase() === 'cream' ? 'bg-amber-50' :
                      color.toLowerCase() === 'charcoal' ? 'bg-gray-800' :
                      color.toLowerCase() === 'light blue' ? 'bg-blue-300' :
                      color.toLowerCase() === 'camel' ? 'bg-yellow-700' :
                      color.toLowerCase() === 'blush' ? 'bg-pink-200' :
                      'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;