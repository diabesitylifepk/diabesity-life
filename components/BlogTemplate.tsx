import Image from "next/image";
import { JSX } from "react";

interface TextImageSectionProps {
  text: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export function TextImageSection({
  text,
  image,
  imageAlt,
  reverse = false,
}: TextImageSectionProps) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-4 md:gap-6 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <div className={`${reverse ? "md:order-2" : "md:order-1"}`}>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {text}
        </div>
      </div>

      {/* Image */}
      <div className={`${reverse ? "md:order-1" : "md:order-2"}`}>
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={320}
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>
    </div>
  );
}

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export function Heading({ children, level = 2, className = "" }: HeadingProps) {
  const baseClasses = "font-bold text-gray-900 my-4";
  const sizeClasses = {
    1: "text-3xl md:text-4xl",
    2: "text-2xl md:text-3xl",
    3: "text-xl md:text-2xl",
    4: "text-lg md:text-xl",
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
}

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ children, className = "" }: ParagraphProps) {
  return (
    <p className={`text-gray-700 leading-relaxed my-4 ${className}`}>
      {children}
    </p>
  );
}

interface ListProps {
  items: string[];
  className?: string;
}

export function List({ items, className = "" }: ListProps) {
  return (
    <ul className={`list-disc pl-6 space-y-2 text-gray-700 my-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export function Quote({ children, author, className = "" }: QuoteProps) {
  return (
    <blockquote
      className={`border-l-4 border-primary pl-6 py-4 my-8 italic text-gray-700 ${className}`}
    >
      <p className="text-lg">{children}</p>
      {author && (
        <footer className="text-sm text-gray-600 mt-2 not-italic">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}

interface HighlightsProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Highlights({
  children,
  title = "Highlights",
  className = "",
}: HighlightsProps) {
  return (
    <div className={`bg-gray-100 border border-gray-200 p-6 my-6 ${className}`}>
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
