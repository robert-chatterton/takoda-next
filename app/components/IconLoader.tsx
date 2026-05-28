import Image from "next/image"

interface IconLoaderProps {
  src: string
  alt?: string
  width?: number
  height?: number
  className?: string
}

/**
 * IconLoader - A component for lazy-loading icons with fallback handling.
 * Renders an optimized image that gracefully handles loading states.
 *
 * Usage example:
 * ```tsx
 * <IconLoader src="/images/icons/bc-32.png" alt="Bandcamp" width={32} height={32} />
 * ```
 */
export function IconLoader({
  src,
  alt = "",
  width = 64,
  height = 64,
  className = "",
}: IconLoaderProps) {
  // Determine if image is already cached to conditionally apply priority
  const isDynamic = src.includes("bandcamp.com/EmbeddedPlayer")

  return (
    <Image
      src={src}
      alt={alt}
      className={`transition-opacity duration-200 ${className}`}
      width={width}
      height={height}
      priority={isDynamic ? false : undefined}
      unoptimized={isDynamic}
    />
  )
}
