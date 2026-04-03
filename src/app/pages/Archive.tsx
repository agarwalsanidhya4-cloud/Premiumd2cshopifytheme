import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Search, Calendar, Filter } from 'lucide-react';

interface ArchivedProduct {
  id: number;
  image: string;
  name: string;
  date: string;
  price: string;
  month: string;
}

export function Archive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('all');

  const archivedProducts: ArchivedProduct[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1760162692537-e8fd41367069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Midnight Royal Lehenga',
      date: 'Apr 2, 2026',
      price: '₹28,999',
      month: 'April'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1760162693478-4c96b6c99d55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Emerald Dream Saree',
      date: 'Apr 1, 2026',
      price: '₹22,999',
      month: 'April'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1770748147858-a7c2eb8012ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Jade Heritage Set',
      date: 'Mar 31, 2026',
      price: '₹26,999',
      month: 'March'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1753981031189-27bb7bd1c079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Forest Grace Saree',
      date: 'Mar 30, 2026',
      price: '₹24,999',
      month: 'March'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1756483515151-468b4b5ca1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Turquoise Majesty',
      date: 'Mar 29, 2026',
      price: '₹25,999',
      month: 'March'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1760162692659-6f7b83dc763f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Golden Dusk Drape',
      date: 'Mar 28, 2026',
      price: '₹23,999',
      month: 'March'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1756483527259-8017fa38b947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Azure Dynasty',
      date: 'Mar 27, 2026',
      price: '₹27,999',
      month: 'March'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Crimson Elegance',
      date: 'Mar 26, 2026',
      price: '₹29,999',
      month: 'March'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1583391733981-5151a6c0cefe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Ruby Heritage',
      date: 'Mar 25, 2026',
      price: '₹26,999',
      month: 'March'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Coral Sunset',
      date: 'Mar 24, 2026',
      price: '₹24,999',
      month: 'March'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1598084991519-c90900bc9df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Sapphire Tradition',
      date: 'Mar 23, 2026',
      price: '₹28,999',
      month: 'March'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1610030469984-3e877e04b399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      name: 'Pearl Divinity',
      date: 'Mar 22, 2026',
      price: '₹31,999',
      month: 'March'
    }
  ];

  const filteredProducts = archivedProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMonth = selectedMonth === 'all' || product.month === selectedMonth;
    return matchesSearch && matchesMonth;
  });

  const months = ['all', 'April', 'March', 'February', 'January'];

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
            The Archive
          </h1>
          <p className="text-gray-300 text-lg font-['Montserrat'] max-w-2xl mx-auto">
            Browse our collection of past drops. Each piece tells a story of craftsmanship and exclusivity.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-[#D4AF37] focus:outline-none font-['Montserrat']"
            />
          </div>

          {/* Month Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-gray-900/50 border border-gray-800 rounded-xl pl-12 pr-8 py-4 text-white focus:border-[#D4AF37] focus:outline-none font-['Montserrat'] appearance-none cursor-pointer"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month === 'all' ? 'All Months' : month}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-6">
          <p className="text-gray-400 font-['Montserrat']">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-all cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold font-['Montserrat']">
                  SOLD OUT
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-1 font-['Montserrat']">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400 font-['Montserrat'] flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {product.date}
                  </p>
                  <p className="text-[#D4AF37] font-semibold font-['Montserrat']">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg font-['Montserrat']">
              No products found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
