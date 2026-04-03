import { useState } from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';

export function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('orders');

  // Mock user data
  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    joinDate: 'March 2026'
  };

  const orders = [
    {
      id: '1234',
      date: 'Apr 2, 2026',
      product: 'Midnight Royal Lehenga',
      price: '₹28,999',
      status: 'In Production',
      estimatedDelivery: 'Apr 12, 2026'
    },
    {
      id: '1233',
      date: 'Mar 28, 2026',
      product: 'Golden Dusk Drape',
      price: '₹23,999',
      status: 'Delivered',
      estimatedDelivery: 'Apr 8, 2026'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate with a backend
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12 min-h-[calc(100vh-200px)]">
        <div className="max-w-md mx-auto">
          {/* Login Form */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2 font-['Playfair_Display']">
                Welcome Back
              </h1>
              <p className="text-gray-400 font-['Montserrat']">
                Sign in to track your orders and manage your account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 font-['Montserrat']">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none font-['Montserrat']"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 font-['Montserrat']">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none font-['Montserrat']"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold py-4 rounded-xl transition-all hover:scale-105 font-['Montserrat']"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400 font-['Montserrat']">
                Don't have an account?{' '}
                <button className="text-[#D4AF37] hover:underline font-semibold">
                  Create one
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Playfair_Display']">
            My Account
          </h1>
          <p className="text-gray-400 font-['Montserrat']">
            Welcome back, {user.name}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-['Montserrat'] ${
                  activeTab === 'orders'
                    ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Package className="w-5 h-5" />
                My Orders
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-['Montserrat'] ${
                  activeTab === 'wishlist'
                    ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Heart className="w-5 h-5" />
                Wishlist
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-['Montserrat'] ${
                  activeTab === 'settings'
                    ? 'bg-[#D4AF37]/10 text-[#D4AF37]'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <Settings className="w-5 h-5" />
                Settings
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-600/10 transition-colors font-['Montserrat']"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display']">
                  Order History
                </h2>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-400 font-['Montserrat']">
                          Order #{order.id}
                        </p>
                        <h3 className="text-xl font-semibold text-white font-['Montserrat']">
                          {order.product}
                        </h3>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold font-['Montserrat'] ${
                          order.status === 'Delivered'
                            ? 'bg-green-600/20 text-green-400'
                            : 'bg-yellow-600/20 text-yellow-400'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400 font-['Montserrat']">Order Date</p>
                        <p className="text-white font-semibold font-['Montserrat']">
                          {order.date}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-['Montserrat']">Total</p>
                        <p className="text-[#D4AF37] font-semibold font-['Montserrat']">
                          {order.price}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400 font-['Montserrat']">
                          {order.status === 'Delivered' ? 'Delivered On' : 'Estimated Delivery'}
                        </p>
                        <p className="text-white font-semibold font-['Montserrat']">
                          {order.estimatedDelivery}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="text-center py-16">
                <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4 font-['Playfair_Display']">
                  Your Wishlist is Empty
                </h2>
                <p className="text-gray-400 font-['Montserrat']">
                  Save your favorite drops to track them here.
                </p>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display']">
                  Account Settings
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 font-['Montserrat']">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none font-['Montserrat']"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 font-['Montserrat']">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none font-['Montserrat']"
                    />
                  </div>
                  <button className="bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 font-['Montserrat']">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
