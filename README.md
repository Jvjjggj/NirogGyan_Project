# NirogGyan Frontend Assignment: Healthcare Appointment Booking Interface

## 🚀 Project Objective
This project is a simple, responsive web application for a healthcare appointment booking service. It allows users to view a list of doctors, search for them by name or specialization, see a doctor's detailed profile and availability, and book an appointment through a simple form.

## 🛠️ Technical Stack
- **Frontend:** React.js (with Vite)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Routing:** React Router DOM
- **Styling:** Plain CSS
- **Mock Backend:** Static JSON data served via JavaScript utility functions

## 📦 How to Run the Project
1.  **Clone the repository:**
    ```bash
    git clone [your-github-repo-link]
    cd nirog-gyan-appointment-booking
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to the local URL provided by Vite (e.g., `http://localhost:5173`).

## 🌟 Improvements with More Time
- **Backend Integration:** Replace the static JSON with a simple Node.js Express API to handle data persistence and dynamic appointment scheduling.
- **Form Validation:** Implement more robust client-side validation for the booking form to provide real-time feedback to the user.
- **Dynamic Availability:** Build a more sophisticated system to manage and display real-time doctor availability, rather than using a static schedule.
- **Global State Management:** For a larger application, I would consider using React Context or a small state management library to manage application-wide data more efficiently.
- **UI/UX Enhancements:** Add features like calendar date pickers, time slot selection, and better appointment confirmation flows.

## 🚧 Challenges Faced and Solutions
One of the main challenges during development was a persistent issue with the styling not updating or being applied correctly from the external CSS file.

**Challenge:** The application was initially not reflecting the CSS changes, despite the files being saved and the development server being restarted. This made it difficult to see the design changes in real-time.

**Solution:** After several attempts at troubleshooting caching issues, the problem was resolved by combining all the application logic and components into a single `App.jsx` file. This approach eliminated any potential file pathing or import issues between multiple component files, ensuring that the single `App.css` file was correctly applied to all elements within the main application component. This allowed for a successful and clean final implementation.