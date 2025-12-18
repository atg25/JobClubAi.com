import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../lib/sanity";
import { RESOURCES_QUERY } from "../queries/resources";
import { Container } from "../components/Container";

interface Resource {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  author: string;
  publishedAt: string;
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(RESOURCES_QUERY);
        setResources(data);
      } catch (err) {
        console.error("Failed to load resources:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return (
      <section className="py-20 lg:py-32">
        <Container>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-pulse text-slate-400 text-xl">
              Loading resources...
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 lg:mb-8 leading-tight italic page-h1">
            Resources & Articles
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4 sm:px-6">
            Explore our collection of guides, tips, and insights to help you
            succeed in your career journey.
          </p>
        </div>

        {/* Resources Grid */}
        {resources.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">
              No resources available yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
            {resources.map((resource) => {
              const publishedDate = new Date(
                resource.publishedAt
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <Link
                  key={resource._id}
                  to={`/resources/${resource.slug.current}`}
                  className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group"
                >
                  {/* Card Content */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">
                      By {resource.author} • {publishedDate}
                    </p>
                    <p className="text-slate-300 line-clamp-3">
                      {resource.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
