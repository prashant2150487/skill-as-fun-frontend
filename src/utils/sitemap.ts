// Sitemap data for SEO
export const sitemapUrls = [
  {
    url: "https://skill-as-fun.com",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    url: "https://skill-as-fun.com/about",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    url: "https://skill-as-fun.com/quizzes",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    url: "https://skill-as-fun.com/courses",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    url: "https://skill-as-fun.com/auth/signin",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    url: "https://skill-as-fun.com/auth/signup",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    url: "https://skill-as-fun.com/book-demo",
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "weekly",
    priority: "0.9",
  },
];

export const generateSitemap = () => {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapUrls
    .map(
      (item) => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;
  return sitemapXml;
};
