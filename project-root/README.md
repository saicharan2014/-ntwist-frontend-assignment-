# NTWIST Frontend Assignment

A multi-page web application demonstrating form validation, list sorting, and CSS-only accordion functionality.

## Pages Implemented

### 1. Responsive Form with Validation (`index.html`)

- **Features**:
  - Input fields for Name, Email, and Message
  - HTML5 validation (required fields, email pattern matching)
  - Time tracking from first focus to submission
  - Success confirmation on valid submission
  - Form reset after submission
  - Fixed sidebar that moves to bottom on mobile

### 2. Sortable List Viewer (`sort.html`)

- **Features**:
- Hardcoded list of 5 names (Virat, Rohit, Gill, Rahul, Jaiswal)
- Single "Sort" button that alphabetizes the list in ascending order
- Pure JavaScript implementation without page reload
- Efficient DOM manipulation through innerHTML replacement

### 3. FAQ Accordion (`faq.html`)

- **Features**:
  - Pure CSS/HTML implementation (no JavaScript)
  - Uses native `<details>`/`summary` elements
  - Responsive design with smooth animations
  - Accessible keyboard navigation

## Bonus Features

- **Star Rating Widget** (Implemented on form page)
  - Interactive 5-star rating system
  - Visual feedback on hover/selection
  - Pure CSS/JS implementation

## Technical Implementation

### Core Technologies

- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, animations)
- Vanilla JavaScript (ES6+)

### Key Techniques

1. **Form Validation**:

   - HTML5 `required` and `pattern` attributes
   - JavaScript validation fallback
   - Time tracking using `Date.now()`

2. **List Sorting**:

- One-directional alphabetical sorting (A-Z)
- Complete DOM reconstruction for sorting
- Simple and straightforward approach
  -Immediate visual update on click

3. **CSS-Only Accordion**:

   - Native `<details>` element
   - CSS transitions for smooth animations

4. **Responsive Layouts**:
   - Mobile-first CSS approach
   - Flexbox for main layouts
   - Media queries for breakpoints

## How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saicharan2014/-ntwist-frontend-assignment-.git
   cd ntwist-assignment
   ```
