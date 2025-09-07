"use client";

import {
  HeartPulse,
  Scale,
  Home,
  BookOpen,
  Briefcase,
  Users,
  Shield,
  HandHeart,
} from "lucide-react";

const services = [
  {
    title: "Medical Support",
    description: "Access to healthcare, emergency aid, and wellness programs.",
    icon: <HeartPulse className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Law Support",
    description: "Legal advice, rights protection, and justice assistance.",
    icon: <Scale className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Housing Support",
    description: "Safe housing assistance and shelter support for families.",
    icon: <Home className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Education Support",
    description: "Scholarships, resources, and skill-building opportunities.",
    icon: <BookOpen className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Employment Support",
    description: "Job placement, career counseling, and training programs.",
    icon: <Briefcase className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Family & Community",
    description: "Guidance, social services, and community engagement.",
    icon: <Users className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Safety & Protection",
    description: "Security, crisis response, and protective services.",
    icon: <Shield className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Financial Aid",
    description: "Donations, charity programs, and financial assistance.",
    icon: <HandHeart className="h-10 w-10 text-green-600" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3">
            We provide essential support to improve lives and strengthen
            communities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
