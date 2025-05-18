# Madani Group Hospitality Website

A clean, minimalist, modern website for Madani Group Hospitality showcasing their vacation rental properties in Yogyakarta, Indonesia.

## Project Overview

This is a static website built with Jekyll and designed to be hosted on GitHub Pages. The website serves as a portfolio for the vacation rental properties managed by Madani Group Hospitality, with a focus on highlighting the properties, their features, nearby attractions, and providing a direct WhatsApp booking channel.

## Features

- Responsive, mobile-friendly design
- Property listings with details, amenities, and photo galleries
- Property filtering by type (owned/partner) and location
- Information about local attractions in Yogyakarta
- About page showcasing the company's story, philosophy, team, and values
- Contact form and WhatsApp integration for direct bookings
- Clean, minimalist design with subtle Javanese cultural elements

## Project Structure

```
madani_hospitality/
├── _config.yml            # Jekyll configuration
├── _layouts/              # Layout templates
│   ├── default.html       # Main site layout
│   └── property.html      # Property listing layout
├── _properties/           # Property listings (collection)
│   └── luxury-villa-ngaglik.md  # Sample property
├── assets/
│   ├── css/               # Stylesheets
│   │   └── main.css       # Main CSS file
│   ├── js/                # JavaScript
│   │   └── main.js        # Main JS file
│   └── images/            # Images (not included in repo)
├── about/                 # About page
│   └── index.html
├── properties/            # Properties index page
│   └── index.html
├── contact/               # Contact page
│   └── index.html
└── index.html             # Homepage
```

## Getting Started

### Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make (for some Ruby gems)

### Installation

1. Clone this repository
   ```
   git clone https://github.com/yourusername/madani_hospitality.git
   cd madani_hospitality
   ```

2. Install Jekyll and dependencies
   ```
   gem install bundler
   bundle install
   ```

3. Run the local development server
   ```
   bundle exec jekyll serve
   ```

4. Open your browser and visit: `http://localhost:4000`

## Customization

### Adding Properties

To add a new property, create a new markdown file in the `_properties` directory following the format of the sample property:

```markdown
---
layout: property
title: Property Name
location: Property Location
bedrooms: 2
bathrooms: 1
max_occupancy: 4
size: 100 m²
price: IDR 800,000
min_stay: 2
check_in: 14:00
check_out: 12:00
featured: true
featured_image: /assets/images/properties/property-name/featured.jpg
gallery:
  - image: /assets/images/properties/property-name/image1.jpg
    alt: Living Room
  - image: /assets/images/properties/property-name/image2.jpg
    alt: Bedroom
amenities:
  - WiFi
  - Air conditioning
  - Kitchen
nearby_attractions:
  - name: Attraction Name
    distance: 10 minutes drive
map_embed: <iframe src="..." width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
---

Property description goes here. You can use Markdown formatting.
```

### Images

For the website to look complete, you'll need to add images to the `assets/images/` directory:

- Hero images for the homepage and about page
- Property images (featured images and gallery images)
- Team member photos
- Placeholder images

### Configuration

Edit the `_config.yml` file to update:

- Website title and description
- Contact information (email, WhatsApp number)
- Social media links
- Other Jekyll settings

## Deployment to GitHub Pages

1. Create a GitHub repository for your website

2. Update the `_config.yml` file:
   ```yaml
   baseurl: "/repository-name"  # if your site is in a subdirectory
   url: "https://yourusername.github.io"
   ```

3. Push your code to GitHub:
   ```
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/repository-name.git
   git push -u origin main
   ```

4. In your GitHub repository settings, enable GitHub Pages and select the `main` branch as the source.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Jekyll - https://jekyllrb.com/
- Font Awesome - https://fontawesome.com/
- Google Fonts (Poppins) - https://fonts.google.com/
- Yogyakarta Tourism - For inspiration on local attractions 