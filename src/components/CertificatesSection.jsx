// Add this at the top of your file to enable React hooks
"use client";

import React, { useState } from "react";

// --- CERTIFICATES DATA ---
const certificates = [
  {
    id: 1,
    title: "Algorithm and Programming Course",
    issuer: "Issued by Dacode",
    image: "/images/certif1.png",
  },
  {
    id: 2,
    title: "Finalist of BASIC 2024",
    issuer: "Issued by School of Information Systems",
    image: "/images/certif2.png",
  },
  {
    id: 3,
    title: "Coordinator of Event Division",
    issuer: "Issued by BINUS English Club",
    image: "/images/certif3.png",
  },
  {
    id: 4,
    title: "TOEFL ITP Score 620",
    issuer: "Issued by Englishvit",
    image: "/images/certif4.png",
  },
];

// --- COMPONENT ---
export const CertificatesSection = () => {
  // State to manage the currently selected image for the lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Certificates</span>
        </h2>

        {/* Grid container for the certificate cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              {/* Clickable Image Area */}
              <button
                onClick={() => setSelectedImage(cert.image)}
                className="focus:outline-none block"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>

              {/* Text Frame Area */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- IMAGE MODAL (LIGHTBOX) --- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size certificate view"
            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
