# SEO Quick Reference Guide

## How to Add SEO to a New Page

### Step 1: Import SEO Component
```tsx
import SEO from '@/components/SEO/SEO';
```

### Step 2: Wrap Your Page Content
```tsx
const YourPage = () => {
  return (
    <>
      <SEO
        title="Your Page Title | Skill as Fun"
        description="Clear description of your page content (150-160 chars)"
        keywords="keyword1, keyword2, keyword3"
        url="https://skill-as-fun.com/your-page"
        image="https://skill-as-fun.com/your-og-image.png"
      />
      {/* Your page content */}
    </>
  );
};
```

## SEO Properties Explained

| Property | Required | Description | Example |
|----------|----------|-------------|---------|
| `title` | ✅ Yes | Page title for browser & search results | "Home - Skill as Fun" |
| `description` | ✅ Yes | Meta description (150-160 chars) | "Learn through gamified courses..." |
| `keywords` | ❌ Optional | Comma-separated keywords | "learning, gamified, courses" |
| `author` | ❌ Optional | Page author name | "Skill as Fun" |
| `url` | ❌ Optional | Canonical URL | "https://skill-as-fun.com/" |
| `image` | ❌ Optional | Social media share image (1200x630) | "https://..." |
| `type` | ❌ Optional | OpenGraph type | "website", "article" |
| `structuredData` | ❌ Optional | JSON-LD schema.org data | `{...}` |

## SEO Checklist for New Pages

- [ ] Create unique, descriptive title (50-60 chars)
- [ ] Write compelling meta description (150-160 chars)
- [ ] Add relevant keywords
- [ ] Use `<h1>` for main page heading
- [ ] Add alt text to all images
- [ ] Use semantic HTML (`<header>`, `<main>`, `<section>`)
- [ ] Create internal links to related pages
- [ ] Add SEO component with proper metadata
- [ ] Test with Google Rich Results Test
- [ ] Verify page in Google Search Console

## Title Tag Formula

```
Primary Keyword - Secondary Keyword | Brand Name
```

**Example:**
```
Interactive Quiz Challenge - Test Your Knowledge | Skill as Fun
```

## Meta Description Formula

```
[Value Proposition] + [Main Feature] + [CTA/Benefit]
```

**Example:**
```
Challenge yourself with interactive quizzes. Track your progress and compete with others on the leaderboard!
```

## Common SEO Mistakes to Avoid

❌ **Don't:**
- Use generic titles like "Home" or "Page 1"
- Stuff keywords unnaturally
- Copy descriptions from other pages
- Forget mobile meta viewport tag
- Use multiple `<h1>` tags per page
- Have duplicate content across pages

✅ **Do:**
- Write unique, descriptive titles
- Place keywords naturally in content
- Create unique descriptions for each page
- Test on mobile devices
- Use only one `<h1>` per page
- Use canonical tags for similar content

## Image Alt Text Best Practices

```tsx
<img 
  src="/image.jpg" 
  alt="Descriptive text explaining the image content" 
/>
```

**Good Alt Text:**
- Describes the image content
- Includes relevant keywords when natural
- Concise (10-20 words)
- Doesn't start with "Image of" or "Picture of"

**Bad Alt Text:**
- "image123.jpg"
- "picture"
- "this is a photo of a person learning"

## Internal Linking Best Practices

```tsx
<Link to="/quizzes">
  Interactive Quizzes - Test Your Knowledge
</Link>
```

**Good Links:**
- Descriptive anchor text
- Relevant to linking content
- Use natural keywords
- Link to related pages

**Bad Links:**
- "Click here"
- "Read more"
- "Link"
- No context

## SEO Monitoring Tools

### Free Tools
- **Google Search Console** - Indexation, rankings, errors
- **Google Analytics** - Traffic, user behavior
- **PageSpeed Insights** - Performance metrics
- **Mobile-Friendly Test** - Mobile optimization
- **Rich Results Test** - Structured data validation

### Recommended Tools
- **SEMrush** - Keyword research, competitor analysis
- **Ahrefs** - Backlink analysis, keyword research
- **Moz** - Domain authority, ranking tracking
- **SE Ranking** - Rank tracking, site audit

## Performance Metrics to Track

### Monthly
- Organic traffic volume
- Page ranking positions
- Click-through rate (CTR)
- Average position in search results

### Quarterly
- Keyword ranking changes
- New organic keywords
- Competitor analysis
- Backlink profile

## Important URLs

- **Google Search Console**: https://search.google.com/search-console/
- **Google Analytics**: https://analytics.google.com/
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

## SEO Config File Locations

```
src/
├── components/SEO/SEO.tsx           ← Main SEO Component
├── constants/seo.ts                 ← SEO Constants & Config
└── utils/sitemap.ts                 ← Sitemap Generator

public/
├── robots.txt                       ← Crawler Directives
└── manifest.json                    ← PWA Manifest

index.html                           ← Base Meta Tags
```

## Need Help?

Refer to:
- `/docs/SEO_IMPLEMENTATION.md` - Detailed documentation
- `/SEO_SUMMARY.md` - Implementation summary
- `SEO.tsx` component - Comments in code
- `seo.ts` - Centralized metadata reference

## Quick Test Checklist

Before committing SEO changes:

```bash
# 1. Check page renders correctly
npm run dev

# 2. Inspect meta tags in browser DevTools
# Right-click → Inspect → <head> section

# 3. Test with Google Rich Results
# https://search.google.com/test/rich-results

# 4. Validate with Lighthouse
# DevTools → Lighthouse → Performance/SEO

# 5. Mobile test
# DevTools → Toggle Device Toolbar
```

---

**Remember:** Good SEO is a marathon, not a sprint. Focus on creating quality content, proper technical implementation, and consistent optimization! 🚀
