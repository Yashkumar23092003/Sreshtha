# Sreshtha - Leadership Organization Website

A modern, responsive single-page landing website for Sreshtha, an educational and community organization focused on creating leaders with a difference.

## Project Overview

This website showcases Sreshtha's mission, programs, events, and team through a beautifully designed, fully responsive landing page. The design emphasizes leadership, growth, and community engagement with a modern aesthetic.

## File Structure

```
Sreshtha/
├── index.html          # Homepage shell
├── pages/              # Individual page shells
├── data/               # Editable website content
├── components/         # Shared render components
├── css/                # Split stylesheet files
├── js/                 # Rendering and interaction scripts
└── README.md           # This file
```

## Features

### 1. **Responsive Design**
- Full-width layout optimized for desktop, tablet, and mobile devices
- Hamburger menu for mobile navigation
- Flexible grid layouts using CSS Grid and Flexbox
- Optimized images and content for all screen sizes

### 2. **Interactive Elements**
- Sticky navigation bar with smooth scroll
- Testimonial carousel with auto-rotation
- Hover animations on cards and buttons
- Keyboard navigation (arrow keys for testimonials)
- Smooth scroll behavior on internal links

### 3. **Sections Included**

#### Header/Navbar
- Sticky positioning
- Responsive mobile menu
- Logo and navigation links
- Call-to-action "Join Us" button

#### Hero Section
- Large headline with subheading
- Call-to-action button
- Leadership illustration
- Wave divider animation

#### About Us
- Team photography
- Organization description
- Three feature cards with descriptions
- Read more call-to-action

#### Sreshtha's Wings
- Three circular category cards
- College Wing
- School Wing
- Music Wing

#### What You Get
- Three-column layout with benefits
- Leadership development description
- Growth illustration
- Additional benefits grid

#### Programs & Events
- 3x2 grid of program cards
- Program titles and descriptions
- View more buttons
- Dark footers with white text

#### Upcoming Events
- Three event cards
- Event details (date, location)
- Registration buttons
- Poster-style design

#### Student Testimonials
- Carousel/slider functionality
- Quote styling
- Student images and names
- Auto-rotation every 5 seconds
- Manual navigation via dots

#### Core Team
- Four team member cards
- Portrait images
- Names and positions
- Hover effects

#### CTA Banner
- Full-width call-to-action
- Orange background
- Prominent heading
- Join button

#### Footer
- Logo and organization info
- Quick links
- Contact information
- Social media links

## Design System

### Color Palette
- **Primary Orange:** `#d97706` (Warm saffron/orange)
- **White:** `#ffffff`
- **Light Gray:** `#f3f3f3` (Section backgrounds)
- **Dark Text:** `#1f2937` (Headings)
- **Footer:** `#2d3748` (Dark gray)

### Typography
- **Font Family:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings:** Bold, uppercase, strong hierarchy
- **Button Text:** Bold, uppercase
- **Body Text:** Regular weight, 1.6 line-height

### Spacing
- **Section Padding:** 80px (desktop), 40px (mobile)
- **Max Content Width:** 1200px
- **Gap Between Elements:** 20px-60px depending on context

### Buttons
- Orange background (`#d97706`)
- White text
- 8px border radius
- Hover effects with color change and scale transformation

## Responsive Breakpoints

- **Desktop:** Full layout (> 768px)
- **Tablet:** 2-column grids, adjusted spacing (480px - 768px)
- **Mobile:** Single column, hamburger menu (< 480px)

## JavaScript Features

### Testimonial Carousel
- Auto-rotation every 5 seconds
- Manual navigation via dots
- Keyboard navigation (arrow keys)
- Smooth fade transitions

### Mobile Menu
- Hamburger toggle button
- Animated menu appearance
- Auto-close on link click
- Animated hamburger icon

### Smooth Scrolling
- Internal link navigation
- Smooth scroll behavior on hash links

### Performance Optimizations
- Debounced resize events
- Intersection Observer for scroll animations
- Event delegation for buttons

## Getting Started

### 1. Open in Browser
Simply open the `index.html` file in any modern web browser. No build tools or server required for basic functionality.

### 2. Deployment
To deploy online:
- Upload all three files to your web hosting provider
- Ensure all files are in the same directory
- Access via your domain URL

### 3. Customization

#### Update Content
Edit `index.html` to:
- Change organization name and descriptions
- Update contact information
- Modify program and event details
- Add team member information

#### Update Images
Replace placeholder images:
- Use `https://via.placeholder.com` URLs for quick testing
- Replace with actual images by updating `src` attributes in `img` tags
- Recommended image dimensions:
  - Team photos: 150x150px (circular)
  - Program/Event posters: 300x250px
  - Feature cards: 300x200px

#### Modify Styling
Edit files inside `css/` to:
- Change color scheme (update CSS variables at top)
- Adjust spacing and layout
- Customize typography
- Add or modify animations

#### Extend JavaScript
Edit files inside `js/` to:
- Add form validation
- Integrate with backend services
- Add more interactive features
- Connect to analytics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Considerations

- Images use placeholder service (replace with optimized versions)
- CSS is minifiable for production
- JavaScript uses vanilla JS (no external dependencies except Font Awesome)
- Responsive design reduces unnecessary rendering

## Future Enhancements

- Database integration for dynamic content
- Admin dashboard for content management
- Email subscription form
- Blog section
- Photo gallery
- Program registration system
- User authentication
- Analytics integration

## Font Icons

This project uses Font Awesome 6.4.0 icons via CDN:
- `fas fa-graduation-cap` - College wing
- `fas fa-book` - School wing
- `fas fa-music` - Music wing
- `fas fa-calendar`, `fas fa-map-marker-alt`, `fas fa-clock` - Event details
- `fas fa-quote-left` - Testimonial quotes
- `fas fa-facebook`, `fas fa-twitter`, `fas fa-instagram`, `fas fa-youtube` - Social links
- `fas fa-user-tie`, `fas fa-rocket`, `fas fa-hands-helping` - Benefit icons

## License

This website template is provided as-is for the Sreshtha organization.

## Support

For issues or questions regarding the website:
1. Check the code comments in each file
2. Review the responsive design breakpoints
3. Test in different browsers
4. Verify all file paths are correct

---

**Last Updated:** 2024
**Version:** 1.0
