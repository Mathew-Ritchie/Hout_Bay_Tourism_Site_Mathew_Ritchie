# Hout Bay Establishments Directory

This is a single-page application (SPA) built with React that serves as a directory for establishments in Hout Bay. It showcases client-side routing, state management with Zustand, and API mocking with Mock Service Worker (MSW) to simulate fetching and filtering establishment data.

## ✨ Features

- **View All Establishments:** Browse a list of all available establishments in Hout Bay.

- **Filter by Type:** Filter establishments by specific types (e.g., Restaurants, Pharmacies) using dynamic buttons.

- **Individual Establishment Details:** View detailed information for each establishment on a dedicated page.

- **Client-Side Filtering:** Data is fetched once, and filtering is performed efficiently on the client-side.

- **Responsive Design:** Styled with Tailwind CSS for a mobile-first, adaptive user experience.

- **API Mocking:** Uses MSW to simulate a backend API, allowing for development without a real server.

## 🚀 Technologies Used

- **React:** A JavaScript library for building user interfaces.

- **Vite:** A fast build tool that provides an excellent development experience for React.

- **Zustand:** A small, fast, and scalable state-management solution using hooks.

- **React Router DOM:** For declarative routing within the application.

- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

- **Mock Service Worker (MSW):** For API mocking in development.

## 📦 Setup & Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)

- npm, Yarn, or pnpm (choose one)

### Steps

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

    (Replace `<repository-url>` and `<repository-name>` with your actual repository details)

2.  **Install dependencies:**

    ```bash
    npm install
    # OR
    yarn install
    # OR
    pnpm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    # OR
    yarn dev
    # OR
    pnpm dev
    ```

    The application should now be running at `http://localhost:5173` (or a similar port).

## 📂 Project Structure

houtbay-site/
├── public/
├── src/
│ ├── assets/ # Static assets like images
│ │ └── houtbay01.jpg
│ ├── components/ # Reusable UI components
│ │ ├── EstablishmentCards.jsx
│ │ └── TypeSelection.jsx
│ ├── mocks/ # MSW setup and API handlers
│ │ ├── browser.js
│ │ └── handlers.js
│ ├── pages/ # Top-level components representing distinct pages
│ │ ├── EstablishmentsListPage.jsx
│ │ ├── IndividualEstablishmentPage.jsx
│ │ └── LandingPage.jsx
│ ├── store/ # Zustand state management
│ │ └── useEstablishmentStore.js
│ ├── App.jsx # Main application component and router setup
│ ├── index.css # Global CSS (Tailwind directives)
│ └── main.jsx # Entry point of the React application
├── .gitignore # Files/folders to ignore in Git
├── package.json
├── tailwind.config.js
└── vite.config.js
└── README.md

## 🌐 API Mocking with MSW

During development, all API requests are intercepted and handled by Mock Service Worker (MSW). This allows for consistent and reliable data fetching without needing a live backend.

- **Handlers:** Defined in `src/mocks/handlers.js`.

  - `GET /api/establishments`: Fetches all establishments. Supports `type` and `category` query parameters for filtering.

  - `GET /api/establishments/:id`: Fetches a single establishment by its ID.

## 🎯 State Management with Zustand

The application's state is managed using Zustand. The `useEstablishmentStore` in `src/store/useEstablishmentStore.js` centralizes:

- `allEstablishments`: The complete, unfiltered list of data fetched from the API.

- `filteredEstablishments`: The list currently displayed, derived from `allEstablishments` based on active filters.

- `establishmentTypes`: A list of all unique types available in the data.

- `activeTypeFilter`: The currently selected filter type.

- `selectedEstablishmentDetails`: Details for a single establishment when viewed.

- Loading and error states.

- Actions for fetching data (`fetchInitialEstablishments`, `fetchIndividualEstablishment`) and applying client-side filters (`applyTypeFilter`).

## 🗺️ Routing with React Router DOM

The application uses `react-router-dom` for navigation:

- `/`: The main landing page (`LandingPage.jsx`).

- `/establishments/:type`: Displays a list of establishments filtered by the specified type (e.g., `/establishments/restaurant`). The `EstablishmentsListPage.jsx` component uses `useParams` to read the `:type` from the URL.

- `/establishments/details/:id`: Displays detailed information for a single establishment. The `IndividualEstablishmentPage.jsx` component uses `useParams` to read the `:id` from the URL.

## 🎨 Styling with Tailwind CSS

All styling is implemented using Tailwind CSS utility classes directly within the JSX. This provides a highly customizable and responsive design.

## 💡 Usage

1.  Navigate to the application in your browser (`http://localhost:5173`).

2.  The `LandingPage` will display all establishments.

3.  Use the type buttons (e.g., "Restaurant", "Pharmacy") to navigate to filtered lists.

4.  Click "View Details" on any establishment card to see its full information.

5.  Use the "Back to..." link or your browser's back button to return to the list.
