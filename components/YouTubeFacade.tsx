"use client";

import Image from "next/image";
import { useState } from "react";

interface YouTubeFacadeProps {
  /** Full embed URL, e.g. https://www.youtube.com/embed/VIDEO_ID or .../embed/videoseries?list=... */
  embedSrc: string;
  /** Video ID used to fetch a thumbnail from i.ytimg.com. For a playlist embed, use the first video's ID. */
  thumbnailVideoId: string;
  title: string;
  className?: string;
}

/**
 * PageSpeed Insights flagged the site's YouTube <iframe> embeds as the
 * single largest contributor to poor performance — ~5.8MB and 2-3s of
 * main-thread blocking time from YouTube's player JS, loaded eagerly even
 * though nobody had pressed play. This renders a static thumbnail + play
 * button instead, and only mounts the real (heavy) iframe on click —
 * the standard "lite youtube embed" pattern.
 */
export default function YouTubeFacade({
  embedSrc,
  thumbnailVideoId,
  title,
  className = "",
}: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);
  const separator = embedSrc.includes("?") ? "&" : "?";

  if (loaded) {
    return (
      <div className={`relative w-full pb-[56.25%] bg-black ${className}`}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`${embedSrc}${separator}autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
      className={`relative w-full pb-[56.25%] bg-black block group cursor-pointer ${className}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${thumbnailVideoId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-black/70 group-hover:bg-red-600 transition-colors flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-7 h-7 ml-1"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
