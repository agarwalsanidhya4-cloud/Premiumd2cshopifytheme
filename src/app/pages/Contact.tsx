import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message to a backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg font-['Montserrat'] max-w-2xl mx-auto">
            Have a question about our drops? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-semibold text-white mb-2 font-['Montserrat']">Email Us</h3>
              <p className="text-gray-400 text-sm font-['Montserrat']">
                support@12amethnic.com
              </p>
              <p className="text-gray-500 text-xs mt-2 font-['Montserrat']">
                We respond within 24 hours
              </p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-semibold text-white mb-2 font-['Montserrat']">Call Us</h3>
              <p className="text-gray-400 text-sm font-['Montserrat']">
                +91 98765 43210
              </p>
              <p className="text-gray-500 text-xs mt-2 font-['Montserrat']">
                Mon-Sat, 10 AM - 6 PM IST
              </p>
            </div>

            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-semibold text-white mb-2 font-['Montserrat']">Visit Us</h3>
              <p className="text-gray-400 text-sm font-['Montserrat']">
                123 Textile Market Road<br />
                Surat, Gujarat 395003<br />
                India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-['Playfair_Display']">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 font-['Montserrat']">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none font-['Montserrat']"
                      placeholder="Priya Sharma"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2 font-['Montserrat']">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none font-['Montserrat']"
                      placeholder="priya@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 font-['Montserrat']">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none font-['Montserrat']"
                    placeholder="Question about today's drop"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 font-['Montserrat']">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none resize-none font-['Montserrat']"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#F4E4B0] text-[#001b3a] font-bold py-4 rounded-xl transition-all hover:scale-105 font-['Montserrat'] flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
