import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
}

export function Cart() {
  // Mock cart data - in a real app this would come from state management
  const cartItems: CartItem[] = [];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 0 : 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12 min-h-[calc(100vh-200px)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Playfair_Display']">
            Shopping Cart
          </h1>
          <p className="text-gray-400 font-['Montserrat']">
            {cartItems.length === 0 ? 'Your cart is empty' : `${cartItems.length} ${cartItems.length === 1 ? 'item' : 'items'} in your cart`}
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">
              Your Cart is Empty
            </h2>
            <p className="text-gray-400 mb-8 font-['Montserrat']">
              Check out today's exclusive drop and add it to your cart before it's gone.
            </p>
            <a
              href="/"
              className="inline-block bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 font-['Montserrat']"
            >
              View Today's Drop
            </a>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 flex gap-6"
                >
                  <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2 font-['Montserrat']">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 font-['Montserrat']">
                      Size: {item.size}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 bg-gray-800 rounded-lg p-1">
                        <button className="p-2 hover:bg-gray-700 rounded transition-colors">
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span className="text-white font-semibold w-8 text-center font-['Montserrat']">
                          {item.quantity}
                        </span>
                        <button className="p-2 hover:bg-gray-700 rounded transition-colors">
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </div>
                      <button className="p-2 hover:bg-red-600/20 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5 text-red-500" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#D4AF37] font-['Playfair_Display']">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6 font-['Playfair_Display']">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300 font-['Montserrat']">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300 font-['Montserrat']">
                    <span>Shipping</span>
                    <span className="text-green-500">FREE</span>
                  </div>
                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex justify-between text-white font-semibold font-['Montserrat']">
                      <span>Total</span>
                      <span className="text-2xl text-[#D4AF37] font-['Playfair_Display']">
                        ₹{total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold py-4 rounded-xl transition-all hover:scale-105 font-['Montserrat']">
                  Proceed to Checkout
                </button>
                <p className="text-xs text-gray-400 text-center mt-4 font-['Montserrat']">
                  100% Secure Prepaid Checkout
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
