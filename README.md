# 💼 Job Portal

A modern, full-stack Job Portal built with **Vite**, **Tailwind CSS**, **Supabase**, **Clerk**, and **Shadcn UI**. This platform enables users to find jobs, apply, post job listings (for recruiters), and manage their profiles securely with modern authentication and real-time backend capabilities.

## Visit Website
Visit the [Live Demo](https://job-portal-orpin-nine.vercel.app/) of this project.


## ✨ Features

- 🔐 Authentication & User Management via **Clerk**
- 🧾 Post and Apply to Jobs (Role-based access)
- 🔍 Job Filtering & Search
- 📄 Resume Upload and Storage via **Supabase Storage**
- 📬 Real-time email alerts (future scope)
- 🎨 Beautiful UI using **Tailwind CSS** and **Shadcn UI**
- ⚡ Lightning-fast frontend with **Vite**
- 💾 Backend as a Service using **Supabase** (Database + Auth + Storage)

---

## 🛠️ Tech Stack

| Tech         | Purpose                          |
|--------------|----------------------------------|
| Vite         | Frontend bundler for development |
| Tailwind CSS | Utility-first CSS styling        |
| Supabase     | Database, Auth, and Storage      |
| Clerk        | Authentication & User profiles   |
| Shadcn UI    | Prebuilt accessible UI components|

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Vage10/job-portal.git
cd job-portal
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Environment Variables
Create a .env file in the root directory and add:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
⚠️ Never commit .env files to version control.

### 🚀 Running the Project
``` bash
npm run dev
```
The app should now be running at http://localhost:5173.

### 📁 Project Structure
```bash
job-portal/
│
├── src/
│   ├── api/ 
│   ├── components/         # Reusable components (Navbar, Footer, etc.)
│   ├── pages/              # Main route pages
│   ├── lib/                # Supabase & Clerk client setups
│   ├── hooks/              # Fetching data using supabase
│   ├── data/               # Static data 
│   ├── layouts/            # App layouts setup
│   ├── utils/              # Supabase setup
│   └── App.jsx             # Root app component
│
├── public/                 # Static assets
├── .env                    # Environment variables
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── jsconfig.js             # URL and path configuration
├── vite.config.ts          # Vite configuration
└── package.json
```

### 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Made By
Vageshwari Chaudhary

