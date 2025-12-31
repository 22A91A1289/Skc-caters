import { useState, useMemo } from "react";

/**
 * Get image path with fallback support for multiple formats
 * Tries different image formats (jpg, jpeg, png, webp) in order
 * 
 * @param {string} baseName - Base name of the image without extension (e.g., "hero-background")
 * @param {string} folder - Folder path in public directory (default: "/")
 * @returns {string} - Image path to try first
 */
export function getImagePath(baseName, folder = "/") {
  // Remove leading/trailing slashes from folder
  const cleanFolder = folder.replace(/^\/+|\/+$/g, "");
  const folderPath = cleanFolder ? `${cleanFolder}/` : "";
  
  // Common image formats to try (in order of preference)
  const formats = ["jpg", "jpeg", "png", "webp"];
  
  // Return the first format (most common)
  return `/${folderPath}${baseName}.${formats[0]}`;
}

/**
 * Get all possible image paths for a given base name
 * Useful for srcSet or fallback scenarios
 * 
 * @param {string} baseName - Base name of the image without extension
 * @param {string} folder - Folder path in public directory (default: "/")
 * @returns {string[]} - Array of image paths in order of preference
 */
export function getAllImagePaths(baseName, folder = "/") {
  const cleanFolder = folder.replace(/^\/+|\/+$/g, "");
  const folderPath = cleanFolder ? `${cleanFolder}/` : "";
  const formats = ["jpg", "jpeg", "png", "webp"];
  
  return formats.map(format => `/${folderPath}${baseName}.${format}`);
}

/**
 * Image component with automatic format fallback
 * Tries multiple image formats until one loads successfully
 * 
 * @param {Object} props - Component props
 * @param {string} props.baseName - Base name of image without extension
 * @param {string} props.folder - Folder path in public directory
 * @param {string} props.alt - Alt text for image
 * @param {string} props.className - CSS classes
 * @param {Function} props.onError - Error handler
 * @param {Function} props.onLoad - Load handler
 * @returns {JSX.Element} - Image element
 */
export function AdaptiveImage({ 
  baseName, 
  folder = "/", 
  alt = "", 
  className = "", 
  onError,
  onLoad,
  ...rest 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagePaths = useMemo(() => getAllImagePaths(baseName, folder), [baseName, folder]);
  const currentSrc = imagePaths[currentIndex];

  const handleError = (e) => {
    // Try next format
    if (currentIndex < imagePaths.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // All formats failed, hide image
      e.target.style.display = 'none';
      if (onError) onError(e);
    }
  };

  const handleLoad = (e) => {
    if (onLoad) onLoad(e);
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      {...rest}
    />
  );
}

// For use without React hooks (simple version)
export function createImageSrc(baseName, folder = "/") {
  return getImagePath(baseName, folder);
}

