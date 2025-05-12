# Patient Awareness System

🌐 **Live Website:** [https://dental-learning.netlify.app](https://dental-learning.netlify.app)

A modern, multi-language web portal for Bharati Vidyapeeth Dental College and Hospital, Navi Mumbai. This project provides comprehensive information about treatments, services, courses, doctors, and campus facilities, with dedicated admin features for content management.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Multi-language Support](#multi-language-support)
- [Contributing](#contributing)

---

## Project Structure

This repository contains three main folders, each representing the portal in a different language:

- `Dental Project English` – English version
- `Dental Hindi` – Hindi version
- `Dental Marathi` – Marathi version

Each folder is a standalone Vite + React + TypeScript project with the same features and structure, but with content localized to the respective language.

---

## Features

### For Visitors

- **Home Page:** College introduction, principal’s message, featured treatments, and doctor highlights.
- **Treatments:** Browse all dental treatments, search by title, and view detailed information including videos and FAQs.
- **Courses:** Explore available dental courses, with details, main video, and FAQ section.
- **Services:** List of all departments and their services, with transparent pricing.
- **Department Details:** In-depth information about each department and its services.
- **Campus Map:** Interactive map to explore the facility floor by floor, with room and service details.
- **Contact Information:** Address, phone numbers, and email for inquiries and admissions.

### For Admins

- **Admin Panel:** Secure login for admins to add, edit, or delete treatments, including uploading images, videos, FAQs, and location details.
- **Content Management:** Manage all treatments and their associated data from a single dashboard.

---

## Tech Stack

- **Frontend:** TypeScript, Vite
- **UI:** Tailwind CSS, Lucide Icons, Framer Motion
- **Routing:** React Router DOM
- **Backend:** Firebase (for data storage and authentication)
- **Other:** ESLint for linting, PostCSS for CSS processing

## Multi-language Support

- Each language version is a separate project folder with the same codebase and features, but all content (UI, treatments, courses, etc.) is localized.
- To add or update content in a specific language, edit the corresponding folder.

---

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

---

**Note:**  
- Make sure to configure your own Firebase project and update the credentials in each language folder.
- For any issues or questions, please open an issue on GitHub.
