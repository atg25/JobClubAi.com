import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../lib/sanity";
import { RESOURCE_BY_SLUG_QUERY } from "../queries/resources";
import { Container } from "../components/Container";

interface ResourceDetail {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  author: string;
  publishedAt: string;
  body: any[];
}

// Portable Text Components for custom rendering
const portableTextComponents: any = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Article image"}
            className="rounded-xl w-full"
          />
          {value.alt && (
            <p className="text-sm text-slate-400 text-center mt-2">{value.alt}</p>
          )}
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-white mt-12 mb-6">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-white mt-8 mb-4">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-slate-300 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-slate-300">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-slate-800 px-2 py-1 rounded text-blue-400 font-mono text-sm">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-slate-300">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-300">{children}</ol>
    ),
  },
};

export default function ResourceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [resource, setResource] = useState<ResourceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(RESOURCE_BY_SLUG_QUERY, { slug });
        setResource(data);
      } catch (err) {
        setError("Failed to load resource");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchResource();
    }
  }, [slug]);

  if (loading) {
    return (
      <section className="py-20 lg:py-32">
        <Container>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-pulse text-slate-400 text-xl">Loading article...</div>
          </div>
        </Container>
      </section>
    );
  }

  if (error || !resource) {
    return (
      <section className="py-20 lg:py-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-slate-400 mb-8">{error || "The article you're looking for doesn't exist."}</p>
            <Link to="/resources" className="text-blue-400 hover:text-blue-300 transition-colors">
              ← Back to Resources
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  const publishedDate = new Date(resource.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            to="/resources"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>

          {/* Article Header */}
          <article className="glass-card rounded-2xl p-8 lg:p-12">
            <header className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
                {resource.title}
              </h1>
              <div className="flex items-center gap-4 text-slate-400">
                <span>By {resource.author}</span>
                <span>•</span>
                <time dateTime={resource.publishedAt}>{publishedDate}</time>
              </div>
            </header>

            {/* Article Description */}
            <div className="mb-8 pb-8 border-b border-slate-700">
              <p className="text-lg text-slate-300">{resource.description}</p>
            </div>

            {/* Article Body */}
            <div className="prose prose-invert max-w-none">
              <PortableText value={resource.body} components={portableTextComponents} />
            </div>
          </article>

          {/* Back Link at Bottom */}
          <div className="mt-12 text-center">
            <Link
              to="/resources"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
