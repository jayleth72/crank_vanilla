# Crank with Hank - Personal Training Website

A modern, responsive website for Peter Hancock's personal training business "Crank with Hank" located in Seaford Heights, South Australia.

## Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing on all devices
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Eye-catching Landing Page**: Hero section with compelling call-to-actions
- **Comprehensive Pages**: Home, About, Services, Blog, and Contact pages
- **Professional Branding**: Custom color scheme and typography
- **SEO Optimized**: Proper meta tags and structured content
- **Contact Form**: Interactive contact form for lead generation
- **Blog System**: Ready for content marketing and SEO

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter & Oswald (Google Fonts)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About Peter page
│   ├── blog/page.tsx           # Blog listing page
│   ├── contact/page.tsx        # Contact form page
│   ├── services/page.tsx       # Services and pricing page
│   ├── globals.css             # Global styles and CSS variables
│   ├── layout.tsx              # Root layout with navigation
│   └── page.tsx               # Home page
└── components/
    ├── Navigation.tsx          # Main navigation component
    ├── Hero.tsx               # Landing page hero section
    └── Footer.tsx             # Site footer
```

## Customization

### Colors
The brand colors are defined in `globals.css`:
- **Primary**: #ff6b35 (Orange)
- **Secondary**: #2d3748 (Dark Gray)
- **Accent**: #f7931e (Light Orange)

### Content
- Update business information in components and pages
- Replace placeholder content with actual business details
- Add real images to the `public` folder
- Update social media links and contact information

### Features to Add
- [ ] Blog post detail pages
- [ ] Image gallery/portfolio
- [ ] Online booking system
- [ ] Testimonials with photos
- [ ] Training videos
- [ ] Progress tracking portal

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
This Next.js app can be deployed to any platform that supports Node.js applications.

## Business Information

- **Business Name**: Crank with Hank
- **Owner**: Peter Hancock
- **Location**: Seaford Heights, South Australia
- **Services**: Personal fitness training, group training, nutrition coaching
- **Facebook**: https://www.facebook.com/profile.php?id=100063771754476

## Contact

For website customizations or updates, please contact the development team.

---

Built with ❤️ for Peter Hancock's fitness business
