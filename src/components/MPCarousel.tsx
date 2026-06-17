import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const SAMPLE_MPS = [
  {
    slug: "ibrahim-muntaka",
    name: "Ibrahim Muntaka",
    constituency: "Asawase",
    region: "Ashanti Region",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    slug: "samuel-okudzeto-ablakwa",
    name: "Samuel O. Ablakwa",
    constituency: "North Tongu",
    region: "Volta Region",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    slug: "haruna-iddrisu",
    name: "Haruna Iddrisu",
    constituency: "Tamale South",
    region: "Northern Region",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=800",
  },
  {
    slug: "zanetor-agyeman-rawlings",
    name: "Zanetor Agyeman-Rawlings",
    constituency: "Klottey-Korle",
    region: "Greater Accra Region",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
  },
];

export default function MPCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SAMPLE_MPS.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SAMPLE_MPS.length) % SAMPLE_MPS.length,
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] rounded-[1px] overflow-hidden shadow-sm group">
      {/* Slides */}
      <div className="w-full h-full relative">
        {SAMPLE_MPS.map((mp, index) => (
          <div
            key={mp.slug}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={mp.image}
              alt={mp.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-surface-white flex flex-col items-start gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div>
                <h3 className="text-3xl font-bold mb-2 tracking-tight">
                  {mp.name}
                </h3>
                <div className="flex gap-2 text-sm font-medium opacity-90 items-center">
                  <div className="bg-white/20 px-3 py-1 rounded-[1px] backdrop-blur-sm border border-white/10 uppercase tracking-wide text-xs">
                    {mp.constituency}
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-[1px] backdrop-blur-sm border border-white/10 uppercase tracking-wide text-xs">
                    {mp.region}
                  </div>
                </div>
              </div>

              <Link
                to={`/mps/${mp.slug}`}
                className="bg-ndc-gold text-deep-navy font-bold px-6 py-3 rounded-[1px] hover:bg-white hover:-translate-y-[1px] transition-all shadow-sm"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Play/Pause Toggle */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-[1px] bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-colors shadow-sm"
        title={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 fill-current" />
        ) : (
          <Play className="w-5 h-5 fill-current ml-0.5" />
        )}
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-[1px] bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-[1px] bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-6 right-8 z-20 flex gap-2">
        {SAMPLE_MPS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-[1px] transition-all border border-white/30 ${index === currentIndex ? "bg-ndc-gold scale-125 border-ndc-gold" : "bg-white/50 hover:bg-white"} `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
