# 🗺️ Travel Log App

## [Deployment link](https://dgood-15.github.io/TravelLog/)

## 📖 Overview
Travel Log is a vibrant, user-friendly web application designed to let travelers document their adventures with ease and style. Users can drop pins on an interactive map to mark memorable locations, attach photos, and add captions to create a personal travel log. With a seamless profile page, users can revisit their cherished memories, edit their profile, and manage their travel logs—all wrapped in an intuitive and visually appealing interface. Built by a team of three students at different stages of their software engineering journey, Travel Log showcases collaborative development, leveraging each team member’s skills to create a cohesive and functional app.

### 🎯 Purpose
This project was developed as part of the TripleTen software engineering bootcamp, where team members Dustin Goodwin, Georgia Lloyd, and Jaimie Bowen combined their efforts to build a meaningful application.

## ✨ Features
### 🗺️ Interactive Map
    Drop pins on a Google Map to mark special locations.
### 📸 Travel Logs
    Add photos and captions to create rich memory entries.
### 👤 User Profiles
    View and manage all travel logs in a personalized profile page.
### 🔐 Secure Authentication
    Secure sign-up and login system with local storage for user data.
### 📱 Responsive Design
    Optimized for both desktop and mobile devices.
### 🖼️ Intuitive Modals
    Intuitive modal forms for adding logs, signing up, logging in, and editing profiles.

## 🛠️ Tech Stack
|      **Technology**     | **Purpose** |   **Key Feature**  |
|-------------------------|-------------|--------------------|
| 📝 **React**           | UI          | Dynamic components |
| ⚡ **Vite**            | Build Tool  | Fast dev server    |
| 🗺️ **Google Maps API** | Map         | Pin placement      |
| 🎨 **CSS**             | Styling     | Responsive design  |

### 📦 Installation & Setup
1. Clone the Repository:
    bash
    git clone [<repository-url>](https://github.com/DGOOD-15/MemoryMap.git) && cd memory-map

2. Install Dependencies:
    npm install

3. Set Up Environment Variables:
    Create a .env file in the root directory and add your Google Maps API key:
    env
    VITE_GOOGLE_MAPS_API_KEY=your-api-key

4. Run the Development Server:
    npm run dev

5. Open the App:
    Navigate to http://localhost:5173 (or the port specified by Vite) in your browser.

## 👥 Contributors
- **Dustin Goodwin** 🌍: Map integration, state management
- **Jaimie Bowen** 🎨: UI design, responsive CSS styling
- **Georgia Lloyd** 🔐: Authentication, modal logic
