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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Submit the form
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setIsSubmitting(false);
        setIsSubmitted(true); // Show thank you anyway
      });
  };

  const resetForm = () => {
    setIsSubmitted(false);
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
                  className="text-2xl text-center uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-heading-primary)",
                  }}>
                  Emily Page Designs
                </h1>
                <p
                  className="text-sm tracking-[0.28em] uppercase"
                  style={{ color: "var(--color-accent)" }}>
                  Floral
                </p>
              </div>

              <div className="w-full">
                <p
                  className="text-sm text-center leading-relaxed mb-6"
                  style={{ color: "var(--color-text-primary)" }}>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit.
                </p>
                <p
                  className="text-xs uppercase text-center tracking-[0.2em]"
                  style={{ color: "var(--color-accent)" }}>
                  San Francisco
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <main
        className="hidden lg:flex h-[910px] p-3 w-full justify-center items-center"
        style={{ backgroundColor: "var(--color-background)" }}>
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
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                backgroundColor: "var(--color-background-overlay)",
                opacity: 0.35,
              }}
            />
          </section>

          <section
            className="w-1/4 h-full flex flex-col justify-center items-center px-4 py-14"
            style={{ backgroundColor: "var(--color-background)" }}>
            <div className="flex-1 flex items-start justify-center w-full">
              <img
                src="/images/leaf.svg"
                className="h-60 mt-4 opacity-30"
                alt="Leaf icon"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-full mb-10">
              <h1
                className="text-3xl text-center mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-heading-primary)",
                }}>
                EMILY PAGE DESIGNS
              </h1>
              <p
                className="text-sm tracking-[0.28em] uppercase"
                style={{ color: "var(--color-accent)" }}>
                Floral
              </p>
            </div>

            <div className="w-full">
              <p
                className="text-md text-center mb-6"
                style={{ color: "var(--color-text-primary)" }}>
                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              </p>
              <p
                className="text-xs uppercase text-center tracking-[0.2em]"
                style={{ color: "var(--color-accent)" }}>
                San Francisco
              </p>
              <div className="mt-10 flex justify-center gap-6 text-[0.7rem] tracking-[0.18em]">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200 cursor-pointer"
                  style={{ borderColor: "var(--color-border)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--color-border-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }>
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "var(--color-text-tertiary)" }}>
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
                  className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200 cursor-pointer"
                  style={{ borderColor: "var(--color-border)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--color-border-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }>
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "var(--color-text-tertiary)" }}>
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
                  className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200"
                  style={{ borderColor: "var(--color-border)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--color-border-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }>
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "var(--color-text-tertiary)" }}>
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
      <section
        className="w-full py-16 lg:py-24 px-6 lg:px-20 flex justify-center"
        style={{ backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div
              className="border p-8 flex flex-col relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-background-light)",
                borderColor: "var(--color-border)",
              }}>
              {/* Form */}
              {!isSubmitted && (
                <div>
                  <div className="mb-12">
                    <h2
                      className="text-xl uppercase mb-6 text-center"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--color-heading-primary)",
                      }}>
                      Get in Touch
                    </h2>
                    <p
                      className="text-sm text-center leading-relaxed"
                      style={{ color: "var(--color-text-primary)" }}>
                      Etiam vehicula tellus enim, ut vehicula lorem auctor id.
                      Aliquam dictum turpis nec leo aliquam faucibus.
                    </p>
                  </div>

                  <form
                    action="https://www.form-to-email.com/api/s/zE_5D-vRYdrj"
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                    className="space-y-6 w-full mb-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="form-input w-full bg-transparent border-b pb-2 text-sm"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-primary)",
                      }}
                    />

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="form-input w-full bg-transparent border-b pb-2 text-sm"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-primary)",
                      }}
                    />

                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                      rows={6}
                      className="form-textarea w-full bg-transparent border-b pb-2 text-sm resize-none"
                      style={{
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-primary)",
                      }}
                    />

                    <div className="flex justify-center pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-transparent border px-12 py-3 text-xs uppercase tracking-[0.24em] transition-all duration-300"
                        style={{
                          borderColor: "var(--color-heading-secondary)",
                          color: "var(--color-heading-secondary)",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.backgroundColor =
                              "var(--color-heading-secondary)";
                            e.currentTarget.style.color =
                              "var(--color-background-light)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color =
                            "var(--color-heading-secondary)";
                        }}>
                        {isSubmitting ? "Sending..." : "Send"}
                      </button>
                    </div>
                  </form>

                  <div className="flex justify-center gap-6">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200"
                      style={{ borderColor: "var(--color-border)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-border-hover)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-border)")
                      }>
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "var(--color-text-tertiary)" }}>
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
                        <circle
                          cx="16.8"
                          cy="7.4"
                          r="0.8"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-label="Pinterest"
                      className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200"
                      style={{ borderColor: "var(--color-border)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-border-hover)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-border)")
                      }>
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "var(--color-text-tertiary)" }}>
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
                      className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200"
                      style={{ borderColor: "var(--color-border)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-border-hover)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-border)")
                      }>
                      <svg
                        aria-hidden="true"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: "var(--color-text-tertiary)" }}>
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
              )}

              {/* Thank You Card */}
              {isSubmitted && (
                <div
                  className="min-h-[600px] flex items-center justify-center p-2 relative"
                  style={{
                    backgroundImage: "url('/images/flowers3.JPG')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                  <div className="absolute inset-0 bg-white/80" />
                  <div className="relative z-10 text-center">
                    <img
                      src="/images/leaf.svg"
                      className="h-32 mx-auto mb-6 opacity-40"
                      alt="Leaf icon"
                    />
                    <h3
                      className="text-2xl uppercase mb-4"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--color-heading-primary)",
                      }}>
                      Thank You
                    </h3>
                    <p
                      className="text-sm mb-8 leading-relaxed"
                      style={{ color: "var(--color-text-primary)" }}>
                      Your message has been received. <br />
                      We'll get back to you soon!
                    </p>
                    <button
                      onClick={resetForm}
                      className="bg-transparent border px-8 py-2 text-xs uppercase tracking-[0.24em] transition-all duration-300"
                      style={{
                        borderColor: "var(--color-heading-secondary)",
                        color: "var(--color-heading-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor =
                          "var(--color-heading-secondary)";
                        e.currentTarget.style.color =
                          "var(--color-background-light)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color =
                          "var(--color-heading-secondary)";
                      }}>
                      Send Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-row lg:gap-0 relative">
            {/* Stamp (postcard style) */}
            <div
              className="hidden lg:flex absolute top-4 right-6 w-24 h-24 border border-dashed items-center justify-center z-10 pointer-events-none"
              style={{ borderColor: "#d4b1b1" }}>
              <img
                src="/images/lilly.png"
                alt="Emily Page Designs stamp"
                className="w-16 h-auto object-contain"
              />
            </div>

            {/* Left Side - Description */}
            <div
              className={`border border-r-0 px-16 py-20 flex flex-col justify-between items-center shadow-sm h-[700px] w-1/2 border-r-1 border-r-dashed transition-all duration-700 ${
                isSubmitted ? "opacity-0" : "opacity-100"
              }`}
              style={{
                backgroundColor: "var(--color-background-light)",
                borderColor: "var(--color-border)",
              }}>
              <h1
                className="text-[2rem] text-center tracking-wide max-w-xl w-full"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-heading-primary)",
                }}>
                GET IN TOUCH{" "}
              </h1>

              <div
                className="text-[1.05rem] text-left leading-[1.8] max-w-xl w-full space-y-4"
                style={{ color: "var(--color-text-secondary)" }}>
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
            <div
              className="border border-l-0 px-16 py-20 flex items-end h-[700px] w-1/2 relative overflow-hidden"
              style={{
                backgroundColor: "var(--color-background-light)",
                borderColor: "var(--color-border)",
              }}>
              {/* Form */}
              <div
                className={`w-full max-w-2xl transition-all duration-700 ${
                  isSubmitted
                    ? "opacity-0 translate-y-[50px] pointer-events-none"
                    : "opacity-100 translate-y-0"
                }`}>
                <form
                  action="https://www.form-to-email.com/api/s/zE_5D-vRYdrj"
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="w-full space-y-10">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="form-input w-full bg-transparent border-b pb-3 text-[0.95rem]"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="form-input w-full bg-transparent border-b pb-3 text-[0.95rem]"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    rows={4}
                    className="form-textarea w-full bg-transparent border-b pb-3 text-[0.95rem] resize-none"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                  />

                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-transparent border px-20 py-3.5 text-[0.7rem] uppercase transition-all duration-300"
                      style={{
                        borderColor: "var(--color-heading-secondary)",
                        color: "var(--color-heading-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.currentTarget.style.backgroundColor =
                            "var(--color-heading-secondary)";
                          e.currentTarget.style.color =
                            "var(--color-background-light)";
                          e.currentTarget.style.borderColor =
                            "var(--color-heading-secondary)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color =
                          "var(--color-heading-secondary)";
                        e.currentTarget.style.borderColor =
                          "var(--color-heading-secondary)";
                      }}>
                      {isSubmitting ? "SENDING..." : "SEND"}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Thank You Card - Separate from form section */}
            {isSubmitted && (
              <div
                className="absolute top-0 right-0 w-full h-[700px] flex items-center justify-center transition-all duration-700 z-20 "
                style={{
                  backgroundImage: "url('/images/weding2.JPG')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-black/15" />
                <div className="relative z-10 text-center px-16">
                  <h2
                    className="text-[10rem] uppercase  mb-4 tracking-wide"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "white",
                    }}>
                    Thank You
                  </h2>
                  <p
                    className="text-lg mb-10 leading-relaxed max-w-md mx-auto"
                    style={{ color: "white" }}>
                    Your message has been received. <br />
                    We'll get back to you soon!
                  </p>
                  <button
                    onClick={resetForm}
                    className="bg-transparent  border px-16 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-300"
                    style={{
                      borderColor: "var(--color-heading-secondary)",
                      color: "var(--color-heading-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-heading-secondary)";
                      e.currentTarget.style.color =
                        "var(--color-background-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color =
                        "var(--color-heading-secondary)";
                    }}>
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
