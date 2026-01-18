const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const getCachedData = (key) => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is still valid
    if (now - timestamp < CACHE_DURATION) {
      return data;
    }
    
    // Cache expired, remove it
    localStorage.removeItem(key);
    return null;
  } catch (err) {
    console.error("Cache read error:", err);
    return null;
  }
};

export const setCachedData = (key, data) => {
  try {
    const cache = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(cache));
  } catch (err) {
    console.error("Cache write error:", err);
  }
};
