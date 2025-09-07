"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Building a Better Future",
      description:
        "Join us in making a difference through innovation and compassion.",
      img: "https://plus.unsplash.com/premium_photo-1661317333758-841c33d4d341",
    },
    {
      id: 2,
      title: "Empowering Communities",
      description:
        "Together, we can uplift lives and create sustainable change.",
      img: "https://plus.unsplash.com/premium_photo-1661317333758-841c33d4d341",
    },
    {
      id: 3,
      title: "Your Support Matters",
      description: "Every contribution counts in creating a brighter tomorrow.",
      img: "https://plus.unsplash.com/premium_photo-1661317333758-841c33d4d341",
    },
  ];

  return (
    <section className="relative w-full h-[100%] overflow-hidden">
      <Carousel
        className="w-full h-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative w-full h-screen">
              {/* Background Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover bg-black"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl px-6">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-6">{slide.description}</p>
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold">
                    Get Started
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-14 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black" />
        <CarouselNext className="absolute right-14 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black" />
      </Carousel>
    </section>
  );
};

export default HeroSection;
