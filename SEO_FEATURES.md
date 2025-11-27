# SEO Features Documentation

This FAQ portal includes automated SEO features that update automatically when you add new MDX files.

## ✅ Implemented Features

### 1. **Sitemap Generation** (`/sitemap.xml`)

- **Location**: `app/sitemap.ts`
- **Automatic**: Yes - Updates automatically when you add new MDX files
- **How it works**: 
  - Uses Next.js built-in `MetadataRoute.Sitemap` API
  - Scans all pages via Nextra's `getPageMap()` function
  - Generates XML sitemap with proper priorities and change frequencies
  - Accessible at: `https://faq.getmaxim.ai/sitemap.xml`

**Priority Rules**:
- Homepage (`/`): Priority 1.0, Daily updates
- Category pages (1 level deep): Priority 0.9, Weekly updates
- Subcategory pages (2 levels deep): Priority 0.8, Monthly updates
- Deep pages (3+ levels): Priority 0.7, Monthly updates

### 2. **robots.txt** (`/robots.txt`)

- **Location**: `app/robots.ts`
- **Automatic**: Yes - Automatically references the sitemap
- **How it works**:
  - Uses Next.js built-in `MetadataRoute.Robots` API
  - Allows all crawlers to index all pages
  - Blocks `/api/` and `/_next/` directories
  - References the sitemap automatically
  - Accessible at: `https://faq.getmaxim.ai/robots.txt`

### 3. **JSON-LD Structured Data**

#### Global Structured Data (in `app/layout.tsx`)

Automatically added to every page:

1. **Organization Schema**:
   - Organization name: Maxim AI
   - Website URL
   - Logo
   - Social media links

2. **WebSite Schema**:
   - Site name and URL
   - Search action for search engines

#### Page-Specific Structured Data

- **Component**: `app/components/StructuredData.tsx`
- **Usage**: Can be imported and used in MDX files for page-specific schemas
- **Types supported**: FAQPage, Article, WebPage

**Example usage in MDX**:
```mdx
import { StructuredData } from '../components/StructuredData'

<StructuredData 
  title="Page Title"
  description="Page description"
  type="FAQPage"
/>

# Your Content Here
```

### 4. **Meta Tags**

Automatically added to all pages:
- `robots`: index, follow
- `googlebot`: index, follow
- `canonical`: Base URL

## 🔧 Configuration

### Environment Variables

Set these in your `.env.local` or deployment environment:

```bash
NEXT_PUBLIC_BASE_URL=https://faq.getmaxim.ai
```

If not set, defaults to `https://faq.getmaxim.ai`

## 📝 Adding New Pages

When you add a new MDX file:

1. **Sitemap**: Automatically updated on next build
2. **robots.txt**: No changes needed (already allows all pages)
3. **JSON-LD**: Global schemas apply automatically. Add `<StructuredData />` component for page-specific schemas if needed

## 🚀 Testing

### Test Sitemap
```bash
# Development
curl http://localhost:3000/sitemap.xml

# Production
curl https://faq.getmaxim.ai/sitemap.xml
```

### Test robots.txt
```bash
# Development
curl http://localhost:3000/robots.txt

# Production
curl https://faq.getmaxim.ai/robots.txt
```

### Test JSON-LD
1. Open any page in browser
2. View page source
3. Look for `<script type="application/ld+json">` tags in `<head>`

## 📊 SEO Best Practices

1. **Always set `NEXT_PUBLIC_BASE_URL`** in production
2. **Use descriptive titles** in MDX frontmatter (if using frontmatter)
3. **Add page-specific StructuredData** for FAQ pages using the FAQPage type
4. **Keep content updated** - sitemap reflects lastModified date

## 🔍 Verification Tools

- **Google Search Console**: Submit sitemap at `/sitemap.xml`
- **Schema.org Validator**: https://validator.schema.org/
- **Google Rich Results Test**: https://search.google.com/test/rich-results

