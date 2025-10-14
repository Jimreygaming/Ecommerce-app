import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Jim Shop</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a passion for quality fashion, Jim Shop brings you carefully curated clothing 
            that combines style, comfort, and sustainability.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              At Jim Shop, we believe that great fashion should be accessible to everyone. We carefully 
              select each piece in our collection to ensure it meets our high standards for quality, 
              style, and ethical production.
            </p>
            <p className="text-muted-foreground">
              From everyday essentials to statement pieces, every item tells a story of craftsmanship 
              and attention to detail.
            </p>
          </div>
          <Card className="bg-gradient-card border-0 shadow-product">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    Every piece is carefully inspected and selected for durability and comfort.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sustainable Practices</h3>
                  <p className="text-sm text-muted-foreground">
                    We partner with suppliers who share our commitment to environmental responsibility.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Customer Focused</h3>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our priority, from selection to delivery and beyond.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-product">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-sm text-muted-foreground">
                Committed to eco-friendly practices and sustainable fashion choices.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-product">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Premium materials and craftsmanship in every piece we offer.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 shadow-product">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💫</span>
              </div>
              <h3 className="font-semibold mb-2">Style</h3>
              <p className="text-sm text-muted-foreground">
                Timeless designs that reflect current trends and personal expression.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Behind Jim Shop is a dedicated team of fashion enthusiasts, quality experts, 
            and customer service professionals who work together to bring you the best shopping experience.
          </p>
          <Card className="max-w-md mx-auto border-0 shadow-product">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">👨‍💼</span>
              </div>
              <h3 className="font-semibold mb-2">Jim Thompson</h3>
              <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-xs text-muted-foreground">
                "Fashion is about expressing who you are through what you wear."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;