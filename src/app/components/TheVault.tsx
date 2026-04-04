import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface VaultProduct {
  id: number;
  image: string;
  name: string;
  date: string;
}

export function TheVault() {
  const soldOutProducts: VaultProduct[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1760162692537-e8fd41367069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Midnight Royal Lehenga',
      date: 'Apr 2'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1760162693478-4c96b6c99d55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Emerald Dream Saree',
      date: 'Apr 1'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1770748147858-a7c2eb8012ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Jade Heritage Set',
      date: 'Mar 31'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1753981031189-27bb7bd1c079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Forest Grace Saree',
      date: 'Mar 30'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1756483515151-468b4b5ca1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Turquoise Majesty',
      date: 'Mar 29'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1760162692659-6f7b83dc763f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Golden Dusk Drape',
      date: 'Mar 28'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1756483527259-8017fa38b947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Azure Dynasty',
      date: 'Mar 27'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 font-['Montserrat']">
            Past Drops
          </h2>
          <p className="text-gray-600 font-['Montserrat']">
            These exclusive pieces are no longer available
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {soldOutProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden aspect-[3/4] border border-gray-200 hover:border-black transition-all"
            >
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/archive"
            className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-sm font-['Montserrat'] font-medium transition-all"
          >
            View Full Archive
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
