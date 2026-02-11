
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600",
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Visual Tour</span>
          <h2 className="text-4xl md:text-5xl font-bold">Studio Gallery</h2>
          <p className="text-gray-600">A glimpse into our luxury clinic where high-tech meets warm hospitality.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl group relative cursor-pointer shadow-md">
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border border-white px-4 py-2 rounded-full">View Large</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
