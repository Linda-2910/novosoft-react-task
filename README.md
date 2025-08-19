# novosoft-react-task

A production-ready React.js application replicating the given Figma UI for displaying wallet transactions.
Implements routing, state management, API integration, and responsive design.

#Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Linda-2910/novosoft-react-task
   cd novosoft-react-task
   ```
2. **Install dependencies**
    ```bash
   npm install
    ```
4. **Run the development server**
    ```bash
   npm run dev
    ```
6. **Build for production**
    ```bash
   npm run build
    ```

# Architecture & Approach

## Tech Stack

React.js (latest stable version) — component-based UI development

React Router v6 — routing and navigation

Styled-components — scoped styling with dynamic props

Context API + Hooks — global state management

Axios — API requests and error handling

## Implementation Approach

1. **UI Replication**

Matched Figma design for layout, typography, spacing, colors, and component styling.

Ensured responsiveness for both desktop and mobile breakpoints.

Added hover, focus, and transition effects per design spec.

2. **Routing**

Used React Router v6 to handle navigation between pages.

Sidebar component handles active link highlighting.

3. **State Management**

Implemented with useState + useEffect inside a TransactionContext using the Context API.

Local state (useState) for form and component-specific data.

4. **API Integration**

Axios for fetching transaction history from the provided API.

Implemented pagination support.

Skeleton loading placeholders and error state display for API calls.

5. **Code Quality**

Components are modular and reusable.

Used a clear folder structure with separation of concerns.

# Folder Structure

```plaintext
src/
  assets/              # Images and icons
  components/          # Reusable UI components
  common-components/   # Shared components like Banner
  context/             # Global state management
  pages/               # Page-level components
  service/             # API calls handling
  styles/              # Global styles
  routes/              # Defined all the app routes
App.tsx
index.tsx
```

# Time spent

Project setup & environment config: ~1 hour

UI development (all pages, responsiveness, states): ~8 hours

Routing & navigation setup: ~1 hour

API integration & state management: ~3 hours

Testing & bug fixes: ~1 hour
Total: ~14 hours

# Known Limitations

No unit tests added due to time constraints.

Some minor hover/focus states might differ slightly from Figma.

Only supports sequential navigation; no jump-to-page or infinite scroll (done based on Figma).

Token is embedded for assesment purposes only. In production, it would be stored in .env

EOF
