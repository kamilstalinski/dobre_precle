# Components Structure

This directory contains all React components organized by their purpose and usage.

## Folder Structure

### `/layout`

Components used across the entire application layout:

- `Navbar.tsx` - Main navigation bar
- `Footer.tsx` - Site footer
- `CookieConsent.tsx` - Cookie consent banner
- `Hamburger.tsx` - Mobile menu hamburger icon
- `MobileMenu.tsx` - Mobile navigation menu

### `/home`

Components specific to the home page:

- `HeroSection.tsx` - Main hero section
- `AboutSection.tsx` - About us section

### `/locations`

Components related to locations functionality:

- `LocationSection.tsx` - Locations section on home page
- `LocationDetails.tsx` - Individual location detail page
- `Maps.tsx` - Interactive map component
- `LocationsList.tsx` - List of locations
- `SingleLocationMap.tsx` - Map for single location

### `/menu`

Components related to the menu page:

- `MenuSection.tsx` - Menu section on home page

### `/contact`

Components related to contact functionality:

- `ContactSection.tsx` - Contact section on home page
- `ContactForm.tsx` - Contact form component

### `/blog`

Components related to blog/news functionality:

- `BlogPost.tsx` - Individual blog post component

### `/ui`

Reusable UI components:

- `CustomButton.tsx` - Custom button component
- `Banner.tsx` - Banner component
- `Slide.tsx` - Slide/carousel component

### `/utils`

Utility and helper components:

- `aos.tsx` - AOS (Animate On Scroll) initialization
- `BackToHome.tsx` - Back to home button
- `SocialMedia.tsx` - Social media links
- `AdminNavigation.tsx` - Admin navigation component

## Usage

All components are exported from the main `index.ts` file, so you can import them like this:

```tsx
import { Navbar, Footer, HeroSection } from "@/components";
```

Or import from specific folders:

```tsx
import { Navbar } from "@/components/layout";
import { HeroSection } from "@/components/home";
```
