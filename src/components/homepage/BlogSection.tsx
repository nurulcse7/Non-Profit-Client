import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Community Health Camp 2025",
    description:
      "We successfully arranged a free medical camp where 500+ people received healthcare support.",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    link: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
  },
  {
    title: "Legal Awareness Workshop",
    description:
      "Our law support volunteers organized a workshop on basic human rights and legal guidance.",
    image: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b",
    link: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b",
  },
  {
    title: "Food & Shelter for Flood Victims",
    description:
      "During recent floods, we provided food, shelter, and basic support to affected families.",
    image: "https://images.unsplash.com/photo-1585735248142-6f8115c4acbb",
    link: "https://images.unsplash.com/photo-1585735248142-6f8115c4acbb",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest News & Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our recent activities, events, and impactful
            stories from the community.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <Card
              key={idx}
              className="overflow-hidden group hover:shadow-xl transition rounded-2xl"
            >
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link
                  href={post.link}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
