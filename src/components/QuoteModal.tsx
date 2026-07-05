import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, AlertCircle, Phone, Calendar } from "lucide-react";
import { SERVICES_DATA, BUSINESS_INFO } from "../data";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteModal({ isOpen, onClose, preselectedService = "" }: QuoteModalProps) {
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

  // Set preselected service if provided when opened
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService, isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    if (!formData.service) tempErrors.service = "Please select a service";
    if (!formData.postcode.trim()) {
      tempErrors.postcode = "Postcode is required";
    } else if (formData.postcode.trim().length < 5) {
      tempErrors.postcode = "Enter a valid UK postcode";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("=== Beacon POPUP Quote Request Submitted ===");
      console.log("Customer details:", formData);
      console.log("===========================================");
      
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Header Block with Orange Gradient */}
        <div className="bg-gradient-to-r from-brand-coral to-brand-orange text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-1.5 rounded-full bg-black/10 hover:bg-black/20 text-white transition-colors duration-200"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5">
            <Calendar className="w-4.5 h-4.5" />
            <span className="font-display font-black text-xs uppercase tracking-widest text-slate-100">
              FREE NO-OBLIGATION ESTIMATE
            </span>
          </div>
          
          <h3 className="font-display font-black text-xl sm:text-2xl">
            Get Your Free Custom Quote
          </h3>
          <p className="font-sans text-xs text-white/85 mt-1 leading-relaxed">
            Usually responded to within 2 hours. Fully custom pricing, transparent quotes.
          </p>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {isSuccess ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h4 className="font-display font-black text-xl text-slate-900">
                  Estimate Requested!
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Excellent, we have logged your property specifications. One of our specialists will be in touch via phone or WhatsApp shortly.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl text-left text-xs text-slate-600 max-w-sm mx-auto space-y-1 font-sans">
                <div className="flex justify-between">
                  <span className="font-semibold">Expected Reply:</span>
                  <span className="text-emerald-600 font-bold">Within 2 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Direct Enquiries:</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-brand-coral font-bold">
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="font-sans font-bold text-xs uppercase tracking-widest text-brand-coral hover:text-brand-orange transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div>
                <label htmlFor="modal-name" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className={`w-full font-sans text-sm bg-slate-50 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                    errors.name ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-coral focus:ring-brand-coral/20"
                  }`}
                />
                {errors.name && (
                  <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </span>
                )}
              </div>

              {/* Phone & Postcode */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07708 234054"
                    className={`w-full font-sans text-sm bg-slate-50 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      errors.phone ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-coral focus:ring-brand-coral/20"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="modal-postcode" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1">
                    UK Postcode *
                  </label>
                  <input
                    type="text"
                    id="modal-postcode"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="B91 3QD"
                    className={`w-full font-sans text-sm bg-slate-50 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                      errors.postcode ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-coral focus:ring-brand-coral/20"
                    }`}
                  />
                  {errors.postcode && (
                    <span className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.postcode}
                    </span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="modal-email" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full font-sans text-sm bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-brand-coral focus:ring-brand-coral/20 focus:bg-white transition-all"
                />
              </div>

              {/* Service Required */}
              <div>
                <label htmlFor="modal-service" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1">
                  Cleaning Service *
                </label>
                <select
                  id="modal-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full font-sans text-sm bg-slate-50 border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                    errors.service ? "border-red-500 focus:ring-red-500/20" : "border-slate-200 focus:border-brand-coral focus:ring-brand-coral/20"
                  }`}
                >
                  <option value="">-- Select cleaning service --</option>
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

              {/* Message */}
              <div>
                <label htmlFor="modal-message" className="block font-sans text-xs font-bold text-slate-700 uppercase mb-1">
                  Message / Property size &amp; details
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="e.g. 3-bedroom detached house, double block driveway, etc..."
                  className="w-full font-sans text-sm bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:border-brand-coral focus:ring-brand-coral/20 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-display font-extrabold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-coral to-brand-orange hover:from-brand-coral hover:to-brand-coral transition-all duration-300 py-4 rounded-xl shadow-md shadow-brand-coral/10 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Quote...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy note */}
              <p className="text-[10px] text-center text-slate-400 font-sans mt-2">
                * We value your privacy. Your information is purely used to prepare your requested service estimate and is never shared or sold.
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
