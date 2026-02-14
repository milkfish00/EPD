"use client";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const images = [
    "/images/flowers2.JPG",
    "/images/wedding2.jpg",
    "/images/flowers3.JPG",
    "/images/wedding2.jpg",
    "/images/flowers5.png",
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Mobile */}
      <section className="lg:hidden h-screen w-full relative overflow-hidden bg-[#e3ddcf] flex justify-center">
        <div className="w-full max-w-[1640px] relative h-full">
          <img
            src="/images/flowers2.JPG"
            alt="Floral background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#e6dfd1]/10" />

          <div className="relative h-full flex items-center justify-center px-6">
            <div className="bg-[#f5f0e2] max-w-sm w-full h-[82vh] sm:h-[80vh] px-8 pt-10 pb-8 flex flex-col items-center">
              <div className="flex-1 flex items-start justify-center w-full">
                <img
                  src="/images/leaf.svg"
                  className="h-60 mt-4"
                  alt="Leaf icon"
                />
              </div>

              <div className="flex flex-col items-center justify-center w-full mb-10">
                <h1
                  className="text-2xl text-center uppercase mb-3 text-[#4f4a34]"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Emily Page Designs
                </h1>
                <p className="text-sm tracking-[0.28em] uppercase text-[#7a7369]">
                  Floral
                </p>
              </div>

              <div className="w-full text-[#7a7369]">
                <p className="text-sm text-center leading-relaxed text-[#5b5447] mb-6">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
                <p className="text-xs uppercase text-center tracking-[0.2em]">
                  San Francisco
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <main className="hidden lg:flex h-[910px] p-3 w-full bg-[#f3ebdf] justify-center items-center">
        <div className="w-full max-w-[1640px] flex h-full">
          <section className="relative w-3/4 h-full overflow-hidden">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Botanical artwork"
                className={`absolute inset-0 w-full h-full object-cover image-transition ${
                  idx === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-[#c7a58c]/35 mix-blend-multiply" />
          </section>

          <section className="w-1/4 h-full bg-[#f3ebdf] flex flex-col justify-center items-center px-4 py-14">
            <div className="flex-1 flex items-start justify-center w-full">
              <img
                src="/images/leaf.svg"
                className="h-60 mt-4 opacity-30"
                alt="Leaf icon"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full mb-10">
              <h1
                className="text-3xl text-center mb-3 text-[#4f4a34]"
                style={{ fontFamily: "'Baskerville', serif" }}>
                EMILY PAGE DESIGNS
              </h1>
              <p className="text-sm tracking-[0.28em] uppercase text-[#7a7369]">
                Floral
              </p>
            </div>

            <div className="w-full text-[#7a7369]">
              <p className="text-md text-center text-[#5b5447] mb-6">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
              <p className="text-xs uppercase text-center tracking-[0.2em]">
                San Francisco
              </p>
              <div className="mt-10 flex justify-center gap-6 text-[0.7rem] tracking-[0.18em] text-[#9a8b7a]">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#d4c8b5] hover:border-[#8b7355] transition-colors duration-200">
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#9a8b7a]">
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3.2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle cx="16.8" cy="7.4" r="0.8" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Pinterest"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#d4c8b5] hover:border-[#8b7355] transition-colors duration-200">
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#9a8b7a]">
                    <circle
                      cx="12"
                      cy="12"
                      r="7.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M11.5 17.5C11.8 16.1 12.3 14 12.3 14C12.5 14.3 13.1 14.6 13.7 14.6C15.3 14.6 16.5 13.3 16.5 11.6C16.5 9.7 15 8.5 13.1 8.5C10.9 8.5 9.5 9.9 9.5 11.8C9.5 12.7 9.9 13.4 10.6 13.8L10.1 15.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#d4c8b5] hover:border-[#8b7355] transition-colors duration-200">
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#9a8b7a]">
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M8 17V11M8 9V8.5M11 17V13.2C11 12.2 11.8 11.4 12.8 11.4C13.8 11.4 14.6 12.2 14.6 13.2V17"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <circle cx="8" cy="8.2" r="0.8" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Contact Form Section */}
      <section className="w-full bg-[#f3ebdf] py-16 lg:py-24 px-6 lg:px-20 flex justify-center">
        <div className="max-w-[1640px] w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="bg-[#f9f5ee] border border-[#d4c8b5] p-8 flex flex-col">
              <div className="mb-12">
                <h2
                  className="text-xl uppercase mb-6 text-[#8b7355] text-center"
                  style={{ fontFamily: "'Baskerville', serif" }}>
                  Get in Touch
                </h2>
                <p className="text-sm text-center text-[#9a8b7a] leading-relaxed">
                  Etiam vehicula tellus enim, ut vehicula lorem auctor id.
                  Aliquam dictum turpis nec leo aliquam faucibus. Donec eu ipsum
                  leo. Nam elementum quis urna ut porta.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 w-full mb-12">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="form-input w-full bg-transparent border-b border-[#c9bda8] pb-2 text-sm text-[#5b5447]     "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="form-input w-full bg-transparent border-b border-[#c9bda8] pb-2 text-sm text-[#5b5447]     "
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={6}
                  className="form-textarea w-full bg-transparent border-b border-[#c9bda8] pb-2 text-sm text-[#5b5447] resize-none     "
                />

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-transparent border border-[#8b7355] px-12 py-3 text-xs uppercase tracking-[0.24em] text-[#8b7355] hover:bg-[#8b7355] hover:text-[#f9f5ee] transition-all duration-300">
                    Send
                  </button>
                </div>
              </form>

              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#d4c8b5] hover:border-[#8b7355] transition-colors duration-200">
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#9a8b7a]">
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3.2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle cx="16.8" cy="7.4" r="0.8" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Pinterest"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#d4c8b5] hover:border-[#8b7355] transition-colors duration-200">
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#9a8b7a]">
                    <circle
                      cx="12"
                      cy="12"
                      r="7.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M11.5 17.5C11.8 16.1 12.3 14 12.3 14C12.5 14.3 13.1 14.6 13.7 14.6C15.3 14.6 16.5 13.3 16.5 11.6C16.5 9.7 15 8.5 13.1 8.5C10.9 8.5 9.5 9.9 9.5 11.8C9.5 12.7 9.9 13.4 10.6 13.8L10.1 15.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#d4c8b5] hover:border-[#8b7355] transition-colors duration-200">
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#9a8b7a]">
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M8 17V11M8 9V8.5M11 17V13.2C11 12.2 11.8 11.4 12.8 11.4C13.8 11.4 14.6 12.2 14.6 13.2V17"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <circle cx="8" cy="8.2" r="0.8" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-row lg:gap-0 relative">
            {/* Stamp (postcard style) */}
            <div className="hidden lg:flex absolute top-4 right-6 w-16 h-16 border border-dashed border-[#d4b1b1] items-center justify-center z-10">
              <img
                src="/images/lilly.png"
                alt="Emily Page Designs stamp"
                className="w-10 h-auto object-contain"
              />
            </div>

            {/* Left Side - Description */}
            <div className="bg-[#f9f5ee] border border-r-0 border-[#d4c8b5] px-3 py-20 flex flex-col justify-between items-center shadow-sm h-[700px] w-1/2 border-r-1 border-r-dashed border-r-[#d4c8b5]">
              <h1
                className="text-[2rem] text-center text-[#aca091af] tracking-wide max-w-xl w-full"
                style={{ fontFamily: "'Baskerville', serif" }}>
                GET IN TOUCH{" "}
              </h1>

              <div className="text-[1.05rem] text-[#aca091] text-left leading-[1.8] max-w-xl w-full space-y-4">
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p>(415) 555-0123</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p>
                    123 Valencia Street
                    <br />
                    San Francisco, CA 94110
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p>hello@emilypagedesigns.com</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#f9f5ee] border border-l-0 border-[#d4c8b5] px-16 py-20 flex items-end h-[700px] w-1/2">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl space-y-10">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="form-input w-full bg-transparent border-b border-[#d4c8b5] pb-3 text-[0.95rem] text-[#5b5447]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="form-input w-full bg-transparent border-b border-[#d4c8b5] pb-3 text-[0.95rem] text-[#5b5447]"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={4}
                  className="form-textarea w-full bg-transparent border-b border-[#d4c8b5] pb-3 text-[0.95rem] text-[#5b5447] resize-none"
                />

                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    className="bg-transparent border border-[#d4c8b5] px-20 py-3.5 text-[0.7rem] uppercase      text-[#aca091] hover:bg-[#8b7355] hover:text-[#f9f5ee] hover:border-[#8b7355] transition-all duration-300">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
