"use client";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const images = [
    "/images/flowers2.JPG",
    "/images/wedding2.jpg",
    "/images/flowers3.JPG",
    "/images/wedding2.jpg", // Fixed typo: "weding2.jpg" → "wedding2.jpg"
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
  }, [images.length]); // Added dependency

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          cursor: default;
        }

        body {
          background-color: #f3ebde;
        }

        input, textarea {
          cursor: text;
        }

        .image-transition {
          transition: opacity 1.5s ease-in-out;
        }

        .form-input::placeholder {
          color: #b8afa0;
          opacity: 0.6;
        }

        .form-input:focus {
          outline: none;
          border-color: #8b7e6a;
        }

        .form-textarea::placeholder {
          color: #b8afa0;
          opacity: 0.6;
        }

        .form-textarea:focus {
          outline: none;
          border-color: #8b7e6a;
        }
      `}</style>

      {/* Mobile */}
      <section className="lg:hidden h-screen w-full relative overflow-hidden bg-[#e3ddcf]">
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
              <p
                className="text-sm tracking-[0.28em] uppercase text-[#7a7369]"
                style={{ fontFamily: "'Crimson Text', serif" }}>
                Floral
              </p>
            </div>

            <div
              className="w-full text-[#7a7369]"
              style={{ fontFamily: "' Srisakdi', serif" }}>
              <p className="text-sm text-center leading-relaxed text-[#5b5447] mb-6">
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
              <p className="text-xs uppercase text-center tracking-[0.2em]">
                San Francisco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <main className="hidden lg:flex h-screen p-3 w-full bg-[#f3ebdf]">
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
              className="text-3xl text-center  mb-3 text-[#4f4a34]"
              style={{ fontFamily: "'Baskerville', serif" }}>
              EMILY PAGE DESIGNS
            </h1>
            <p
              className="text-sm tracking-[0.28em] uppercase text-[#7a7369]"
              style={{ fontFamily: "'Crimson Text', serif" }}>
              Floral
            </p>
          </div>

          <div
            className="w-full text-[#7a7369]"
            style={{ fontFamily: "'Crimson Text', serif" }}>
            <p className="text-md text-center  text-[#5b5447] mb-6">
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
      </main>

      {/* Contact Form Section */}
      <section className="w-full bg-[#f3ebdf] md:py-30 py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="bg-[#f9f5ee] border border-[#d4c8b5] p-8 flex flex-col items-center justify-between">
              <div>
                <h2
                  className="text-xl uppercase  mb-6 text-[#8b7355] text-center"
                  style={{ fontFamily: "'Baskerville', serif" }}>
                  Get in Touch
                </h2>
                <p
                  className="text-sm text-center mb-20 text-[#9a8b7a] leading-relaxed"
                  style={{ fontFamily: "' Srisakdi', serif" }}>
                  Etiam vehicula tellus enim, ut vehicula lorem auctor id.
                  Aliquam dictum turpis nec leo aliquam faucibus. Donec eu ipsum
                  leo. Nam elementum quis urna ut porta.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="form-input w-full bg-transparent border-b border-[#c9bda8] pb-2 text-sm text-[#5b5447] placeholder:tracking-[0.12em]"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="form-input w-full bg-transparent border-b border-[#c9bda8] pb-2 text-sm text-[#5b5447] placeholder:tracking-[0.12em]"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={4}
                    className="form-textarea w-full bg-transparent border-b border-[#c9bda8] pb-2 text-sm text-[#5b5447] resize-none placeholder:tracking-[0.12em]"
                    style={{ fontFamily: "' Srisakdi', serif" }}
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-transparent border border-[#8b7355] px-12 py-3 text-xs uppercase tracking-[0.24em] text-[#8b7355] hover:bg-[#8b7355] hover:text-[#f9f5ee] transition-all duration-300"
                    style={{ fontFamily: "' Srisakdi', serif" }}>
                    Send
                  </button>
                </div>
              </form>
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
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-row lg:gap-0 relative">
            {/* Stamp (postcard style) */}
            <div className="hidden lg:flex absolute top-4 right-6 w-16 h-16 border border-dashed border-[#d4b1b1] items-center justify-center">
              <img
                src="/images/lilly.png"
                alt="Emily Page Designs stamp"
                className="w-10 h-auto object-contain"
              />
            </div>

            {/* Left Side - Description */}
            <div className="bg-[#f9f5ee] border border-r-0 border-[#d4c8b5] p-14 flex flex-col justify-between shadow-sm min-h-[80vh] w-[44%]">
              <div className="flex justify-center mb-12">
                <h1
                  className="text-3xl text-center  mb-3 text-[#4f4a34] opacity-60 "
                  style={{ fontFamily: "'Baskerville', serif" }}>
                  EMILY PAGE DESIGNS
                </h1>
              </div>

              <p
                className="text-lg mb-8 text-[#9a8b7a] text-center leading-relaxed"
                style={{ fontFamily: "'Crimson Text', serif" }}>
                Etiam vehicula tellus enim, ut vehicula lorem auctor id. Aliquam
                dictum turpis nec leo aliquam faucibus. Donec eu ipsum leo. Nam
                elementum quis urna ut porta.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#f9f5ee] border border-[#d4c8b5] p-14 flex items-end min-h-[80vh] flex-1">
              <form onSubmit={handleSubmit} className="w-full space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="form-input w-full bg-transparent border-b border-[#c9bda8] pb-3 text-sm text-[#5b5447]"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="form-input w-full bg-transparent border-b border-[#c9bda8] pb-3 text-sm text-[#5b5447]"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    rows={5}
                    className="form-textarea w-full bg-transparent border-b border-[#c9bda8] pb-3 text-sm text-[#5b5447] resize-none"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="bg-transparent border border-[#8b7355] px-16 py-3 text-xs uppercase tracking-[0.24em] text-[#8b7355] hover:bg-[#8b7355] hover:text-[#f9f5ee] transition-all duration-300"
                    style={{ fontFamily: "'Crimson Text', serif" }}>
                    Send
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
