<div align="center">

# 🏗️ Erden Alüminyum

### Corporate aluminium & architectural systems website built with Next.js and React

A responsive corporate web platform for **aluminium joinery, glass balcony systems, façade applications, architectural projects and construction services**, with an integrated e-commerce UI foundation.

<br />

![Next.js](https://img.shields.io/badge/Next.js-13-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-Persist-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-1.54-CC6699?style=for-the-badge&logo=sass&logoColor=white)

</div>

---

## About the Project

**Erden Alüminyum** is a corporate website focused on aluminium and architectural building systems.

The application presents services such as:

- Glass balcony systems
- Aluminium joinery
- Exterior façade cladding
- Curtain wall systems
- Railing and security systems
- Architectural applications
- Project references

The repository also contains an e-commerce architecture with:

- Product listings
- Cart
- Wishlist
- Product comparison
- Checkout UI
- Redux state persistence

This makes the project a combination of a **corporate construction website** and a reusable **commerce frontend foundation**.

---

## Current Project Status

The project contains a substantial amount of implemented frontend architecture, but some sections still include template/demo content.

### Production-oriented areas

- Corporate homepage
- Service catalogue
- Service detail data
- Project gallery
- Responsive navigation
- Mobile navigation
- Contact page
- Corporate imagery
- Aluminium-specific content

### Template / demo areas

Some shop, project and form content still contains generic placeholder material.

Examples include:

```text id="eal001"
Principles and Policies
Winning Arguments
Learning the Law
Architecture
The Rehearsal Dinner
The Afterparty
```

These areas should be replaced with real Erden Alüminyum data before considering the complete application fully production-ready.

---

## Main Features

### Corporate Website

- Responsive homepage
- Corporate introduction
- Service listing
- Service detail architecture
- Project showcase
- Animated sections
- Statistics
- CTA components
- Responsive navigation
- Mobile menu
- Contact interface

### Commerce Architecture

- Product listing
- Product details architecture
- Shopping cart
- Quantity management
- Wishlist
- Product comparison
- Redux Persist
- Checkout UI
- Order received UI
- Toast notifications

### Media & Interaction

- Sliders
- Carousels
- Image zoom
- Photo gallery
- Video modal
- Animated content
- Scroll interactions

---

## Architecture

```text id="eal002"
Next.js Pages Router
        │
        ├── Corporate Website
        │     ├── Home
        │     ├── Services
        │     ├── Projects
        │     └── Contact
        │
        └── Commerce Layer
              ├── Products
              ├── Cart
              ├── Wishlist
              ├── Compare
              └── Checkout
```

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| **Next.js 13** | React framework |
| **React 18** | UI architecture |
| **Redux** | Global commerce state |
| **Redux Persist** | Persistent cart/wishlist state |
| **Redux Thunk** | Redux middleware |
| **Bootstrap 5** | Responsive layout |
| **Reactstrap** | Bootstrap-based React components |
| **Sass** | Styling architecture |
| **Material UI** | Additional UI components |
| **Emotion** | CSS-in-JS support |
| **Styled Components** | Component styling |
| **Swiper** | Slider components |
| **React Slick** | Carousel components |
| **React Toastify** | User notifications |
| **Simple React Validator** | Form validation |
| **React CountUp** | Animated statistics |
| **PhotoSwipe** | Gallery experience |
| **Vercel Analytics** | Analytics dependency |

---

## Next.js Architecture

Unlike newer App Router projects, this repository uses the traditional:

```text id="eal003"
pages/
```

architecture.

The application entry point is:

```text id="eal004"
pages/_app.js
```

Global providers are mounted here.

---

## Global Application Providers

The root application wraps every page with:

```text id="eal005"
Redux Provider
Redux Persist Gate
Navbar
Footer
Scroll-to-top
Toast Container
```

Structure:

```text id="eal006"
Provider
   │
   ▼
PersistGate
   │
   ├── Navbar
   ├── Current Page
   ├── Footer
   ├── Scrollbar
   └── ToastContainer
```

---

## Homepage

The homepage currently consists of:

```text id="eal007"
Hero
  ↓
Statistics
  ↓
About
  ↓
Services
  ↓
Projects
```

Implementation:

```jsx id="eal008"
<Hero />
<FunFact />
<About />
<ServiceSection />
<ProjectSection />
```

---

## Services

The current service data includes five main architectural solutions.

### Glass Balcony Systems

```text id="eal009"
Cam Balkon
```

Designed to improve comfort and protection from exterior conditions.

---

## Aluminium Joinery

```text id="eal010"
Alüminyum Doğrama
```

Focused on aluminium window, door and façade solutions with durability and insulation benefits.

---

## Exterior Façade Cladding

```text id="eal011"
Dış Cephe Kaplama
```

Provides architectural protection, thermal insulation and exterior design options.

---

## Curtain Wall Systems

```text id="eal012"
Cephe Giydirme
```

Supports modern glass, aluminium, composite panel and other façade applications.

---

## Railing & Security Systems

```text id="eal013"
Korkuluk ve Güvenlik
```

Designed for:

- Balconies
- Stairs
- Terraces
- Gardens
- Interior safety applications

---

## Service Data Architecture

Service information is separated into:

```text id="eal014"
api/Services.js
```

Each service includes fields such as:

```text id="eal015"
Id
Title
Slug
Description
Detail Content
Images
```

Example:

```js id="eal016"
{
  sTitle: "Alüminyum Doğrama",
  slug: "hizmetlerimiz/aluminyum-dograma-uygulamalari",
  description: "..."
}
```

This allows reusable service cards and detail pages to share the same content source.

---

## Projects

Project content is managed through:

```text id="eal017"
api/Projects.js
```

The structure supports:

- Project title
- Friendly slug
- Thumbnail
- Detail imagery
- Gallery images

Example model:

```js id="eal018"
{
  Id,
  pTitle,
  slug,
  pImg,
  pSImg,
  ssImg1,
  ssImg2
}
```

---

## Project Gallery

The repository contains a large collection of local project/media assets under:

```text id="eal019"
public/media/
```

These images form the visual base for the architecture and project portfolio.

---

## E-Commerce State Architecture

Commerce state is managed using Redux.

```text id="eal020"
Redux Store
   │
   ├── Products
   ├── Cart
   ├── Wishlist
   └── Compare
```

Redux persistence stores state in browser:

```text id="eal021"
localStorage
```

through:

```text id="eal022"
redux-persist
```

---

## Shopping Cart

The cart reducer supports:

- Add product
- Remove product
- Increment quantity
- Decrement quantity
- Selected color
- Selected size
- Product totals

---

## Add to Cart

When a product is added, the cart records:

```text id="eal023"
Product
Selected Color
Selected Size
Quantity
Calculated Sum
```

Existing products have their quantity increased rather than being duplicated.

---

## Cart Quantity

The application contains dedicated actions for:

```text id="eal024"
INCREMENT_QUANTITY
DECREMENT_QUANTITY
```

Quantity never drops below:

```text id="eal025"
1
```

through a shared utility function.

---

## Wishlist

Wishlist state is also handled through Redux.

The application supports:

```text id="eal026"
Add to Wishlist
Remove from Wishlist
```

and provides toast feedback using:

```text id="eal027"
React Toastify
```

---

## Product Comparison

The comparison system supports:

```text id="eal028"
Add Product
Remove Product
Duplicate Prevention
```

Attempting to add an existing product triggers a warning toast.

---

## Persistent State

The Redux store uses:

```js id="eal029"
persistReducer
```

with browser storage.

This allows commerce data such as the cart to remain available after page refreshes.

---

## Product Listing

The repository includes reusable product-grid components.

The primary architecture supports:

```text id="eal030"
Products
   │
   ▼
Product Grid
   │
   ├── Image
   ├── Title
   ├── Price
   └── Add to Cart
```

---

## Current Product Data

A static product source is included in:

```text id="eal031"
api/product.js
```

The current content is still template/demo material and should be replaced with aluminium products or removed if the website is intended to remain purely corporate.

---

## Checkout UI

The repository contains a substantial:

```text id="eal032"
CheckoutSection
```

component as well as:

```text id="eal033"
OrderRecivedSec
```

for post-checkout presentation.

This provides a frontend foundation for future commerce implementation.

---

## Checkout Status

The repository contains checkout UI and commerce state logic, but no verified production payment gateway or backend order service was identified during inspection.

Therefore the current commerce architecture should be treated as:

```text id="eal034"
Frontend Commerce Foundation
```

rather than a complete payment platform.

---

## Contact Form

The application includes a reusable contact form.

Fields include:

```text id="eal035"
Name
Email
Phone
Subject
Message
```

Validation uses:

```text id="eal036"
simple-react-validator
```

---

## Contact Validation

Current validation includes:

### Name

```text id="eal037"
Required
Alphabetic / spaces
```

### Email

```text id="eal038"
Required
Valid email
```

### Phone

```text id="eal039"
Required
Valid phone
```

### Subject

```text id="eal040"
Required
```

### Message

```text id="eal041"
Required
```

---

## Current Contact Form Status

When the form is valid, the component currently resets the input fields.

No backend delivery mechanism was identified in the current component.

It is therefore currently a client-side validated form rather than a complete email/contact backend.

---

## Navigation

The application includes:

- Desktop navbar
- Secondary navbar variant
- Mobile menu
- Header top bar
- Footer
- Scroll-to-top control

This provides reusable navigation across the full website.

---

## UI & Animation

The project uses several animation and presentation libraries:

```text id="eal042"
animate.css
react-awesome-reveal
react-animated-css
react-countup
react-slick
swiper
```

These provide:

- Entrance animations
- Counters
- Hero sliders
- Image sliders
- Project carousels
- Testimonials

---

## Gallery Features

The project includes:

```text id="eal043"
react-photoswipe-gallery
react-medium-image-zoom
fslightbox-react
```

providing foundations for interactive architecture and project galleries.

---

## Video Modal

Video presentation support is implemented through:

```text id="eal044"
react-modal-video
```

and a reusable:

```text id="eal045"
ModalVideo
```

component.

---

## Styling Architecture

The project uses a large Sass architecture:

```text id="eal046"
styles/sass/
│
├── base/
├── components/
├── helpers/
├── layout/
└── page/
```

Page-specific styles exist for:

```text id="eal047"
Home
Blog
Cart
Checkout
Contact
FAQ
Projects
Services
Shop
Team
```

---

## Project Structure

```text id="eal048"
next-erdenaluminyum/
│
├── api/
│   ├── Projects.js
│   ├── Services.js
│   ├── Teams.js
│   ├── blogs.js
│   ├── product.js
│   └── data.json
│
├── components/
│   ├── about/
│   ├── hero/
│   ├── ContactFrom/
│   ├── Contactpage/
│   ├── Features/
│   ├── FunFact/
│   ├── HeaderTopbar/
│   ├── MobileMenu/
│   ├── ModalVideo/
│   ├── Navbar/
│   ├── ProjectSection/
│   ├── ServiceSection/
│   ├── Shop/
│   ├── ShopProduct/
│   ├── TeamSection/
│   ├── Testimonial/
│   └── ...
│
├── pages/
│   ├── _app.js
│   └── index.js
│
├── public/
│   ├── images/
│   ├── media/
│   └── site.webmanifest
│
├── store/
│   ├── actions/
│   ├── reducers/
│   │   ├── cart.js
│   │   ├── compare.js
│   │   ├── products.js
│   │   ├── wishList.js
│   │   └── rootReducers.js
│   └── index.js
│
├── styles/
│   ├── sass/
│   ├── animate.css
│   ├── flaticon.css
│   └── themify-icons.css
│
├── utils/
│   └── index.js
│
├── package.json
└── tsconfig.json
```

---

## Getting Started

Clone the repository:

```bash id="eal049"
git clone https://github.com/seyitbugraerden/next-erdenaluminyum.git
```

Navigate into the project:

```bash id="eal050"
cd next-erdenaluminyum
```

Install dependencies:

```bash id="eal051"
npm install
```

Run development:

```bash id="eal052"
npm run dev
```

Open:

```text id="eal053"
http://localhost:3000
```

---

## Available Scripts

### Development

```bash id="eal054"
npm run dev
```

### Production Build

```bash id="eal055"
npm run build
```

### Production Server

```bash id="eal056"
npm start
```

---

## Current Development Status

### Implemented

- Next.js Pages Router architecture
- Responsive corporate homepage
- Aluminium-specific service data
- Project architecture
- Redux global state
- Persistent cart
- Wishlist
- Compare system
- Quantity management
- Checkout UI
- Contact validation
- Mobile menu
- Sliders
- Gallery components
- Video modal
- Toast notifications
- Sass architecture
- Bootstrap responsive system

### Areas to Improve

- Replace remaining template content
- Replace demo product catalogue
- Complete aluminium-specific project names
- Connect contact form to backend
- Add real product backend if commerce is required
- Add payment integration
- Add order persistence
- Add inventory management
- Add admin interface
- Add SEO metadata
- Add canonical URLs
- Add sitemap
- Add robots configuration
- Add structured data
- Add automated testing
- Upgrade outdated dependencies

---

## Technical Modernization Opportunities

Because this project currently uses Next.js 13 Pages Router, a future refactor could migrate the architecture toward:

```text id="eal057"
Next.js App Router
Server Components
Route Handlers
Server Actions
Modern Metadata API
```

The commerce state could also be simplified or modernized depending on project requirements.

---

## Performance Opportunities

The repository contains a large number of local media and style assets.

Potential optimizations include:

- Convert remaining JPEG assets to WebP/AVIF
- Use `next/image` consistently
- Reduce unused template assets
- Remove unused shop modules if not required
- Split large Sass bundles
- Remove unused UI libraries
- Lazy-load galleries
- Optimize slider images

---

## Developer

<div align="center">

### Seyit Buğra Erden

**Full Stack Developer · Software Engineer**

[GitHub](https://github.com/seyitbugraerden) ·
[LinkedIn](https://www.linkedin.com/in/sbugraerden/)

<br />

Built with **Next.js · React · Redux · Bootstrap · Sass**

</div>
