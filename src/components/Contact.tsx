import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { BUSINESS_INFO, SERVICES_DATA } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    postcode: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.service) tempErrors.service = "Please select a service";
    if (!formData.postcode.trim()) {
      tempErrors.postcode = "Postcode is required";
    } else if (formData.postcode.trim().length < 5) {
      tempErrors.postcode = "Please enter a valid UK postcode";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request delay
    setTimeout(() => {
      console.log("=== Beacon Quote Request Submitted ===");
      console.log("Customer details:", formData);
      console.log("=====================================");
      
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        postcode: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-extrabold text-sm text-brand-coral uppercase tracking-widest bg-brand-coral/10 px-4 py-1.5 rounded-full inline-block">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mt-6 mb-4">
            Request Your Free No-Obligation Quote
          </h2>
          <p className="font-sans text-slate-500 text-sm sm:text-base lg:text-lg">
            Have questions or ready to book? Complete the quick estimate form below, or contact our team directly via phone, text, or WhatsApp. We reply within 2 hours!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Details & Coverage Info */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            {/* Business Contact Cards */}
            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm space-y-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-950 mb-6">
                  Contact Details
                </h3>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">Phone &amp; WhatsApp</span>
                      <span className="block font-sans font-bold text-slate-900 group-hover:text-brand-coral transition-colors duration-200">
                        {BUSINESS_INFO.phoneFormatted}
                      </span>
                      <span className="block font-sans text-xs text-slate-500 mt-0.5">Click to call or chat directly</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">Email Enquiries</span>
                      <span className="block font-sans font-bold text-slate-900 group-hover:text-brand-coral transition-colors duration-200">
                        {BUSINESS_INFO.email}
                      </span>
                      <span className="block font-sans text-xs text-slate-500 mt-0.5">Send photos for a rapid desktop quote</span>
                    </div>
                  </a>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 p-3 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">Business Hours</span>
                      <span className="block font-sans font-bold text-slate-900">
                        {BUSINESS_INFO.workingHours}
                      </span>
                      <span className="block font-sans text-xs text-slate-500 mt-0.5">Quotes dispatched daily</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverage Information (Clean, No Map) */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span>Our Service Coverage</span>
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed mb-4">
                  Based in Worcestershire and serving surrounding areas within 35 miles for all major roof, render, and driveway restorations.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-sans text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span>Worcestershire</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span>Bromsgrove</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span>Solihull</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span>Redditch</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span>Stourbridge</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                    <span>West Midlands</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: High Conversion Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-xl h-full flex flex-col justify-center">
              
              {isSuccess ? (
                // Success screen
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-100/50">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-black text-2xl text-slate-900">
                      Quote Request Received!
                    </h3>
                    <p className="font-sans text-slate-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                      Thank you for contacting Beacon. Our operations team will review your requirements and respond with a transparent price estimate or schedule a quick site visit.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl max-w-md mx-auto font-sans text-xs text-slate-600 space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">Next Action:</span>
                      <span className="text-slate-900 font-bold">2-Hour Reply Target</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Need rapid confirmation?</span>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-coral font-bold hover:underline">
                        Call {BUSINESS_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-sans font-bold text-xs uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                // Actual interactive Form
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display font-black text-2xl text-slate-900">
                      Request Your Free Estimate
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-500">
                      Fill out the details below. We never share your data.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full font-sans text-sm bg-slate-50 border px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                          errors.name
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-brand-coral focus:ring-brand-coral/20"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label htmlFor="phone" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07708 234054"
                        className={`w-full font-sans text-sm bg-slate-50 border px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                          errors.phone
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-brand-coral focus:ring-brand-coral/20"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email & Postcode */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full font-sans text-sm bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:border-brand-coral focus:ring-brand-coral/20 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Postcode */}
                    <div>
                      <label htmlFor="postcode" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1.5">
                        UK Postcode *
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        required
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="e.g. B91 3QD"
                        className={`w-full font-sans text-sm bg-slate-50 border px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                          errors.postcode
                            ? "border-red-500 focus:ring-red-500/20"
                            : "border-slate-200 focus:border-brand-coral focus:ring-brand-coral/20"
                        }`}
                      />
                      {errors.postcode && (
                        <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {errors.postcode}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label htmlFor="service" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Select Exterior Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full font-sans text-sm bg-slate-50 border px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.service
                          ? "border-red-500 focus:ring-red-500/20"
                          : "border-slate-200 focus:border-brand-coral focus:ring-brand-coral/20"
                      }`}
                    >
                      <option value="">-- Choose an option --</option>
                      {SERVICES_DATA.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Other / Multiple">Other / Multiple Services</option>
                    </select>
                    {errors.service && (
                      <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.service}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Message / Property details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about the size, condition, or any special requests..."
                      className="w-full font-sans text-sm bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:border-brand-coral focus:ring-brand-coral/20 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-display font-black text-[15px] uppercase tracking-wider text-white bg-gradient-to-r from-brand-coral to-brand-orange hover:from-brand-coral hover:to-brand-coral transition-all duration-300 py-4.5 rounded-xl shadow-lg shadow-brand-coral/20 hover:shadow-xl hover:shadow-brand-coral/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Request Free Estimate</span>
                      </>
                    )}
                  </button>
                </form>
              )}
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
