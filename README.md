# CRM Software (MERN Stack)

# Overview :
This is a CRM system built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It has separate Admin and User panels, designed to manage leads efficiently and provide role-based access control.

• Admin Panel – For managing employees, access levels, and viewing all leads.
• User Panel – For employees to create leads and view their own leads.

# Note
● The first user you will login will be the default admin of CRM. After once, everyone will signup as user or employee only. Admin can give access of admin to other employees later.

# Features
🡪 Admin Panel
• Access Level Management: Admins can assign roles and permissions to employees.
• Dashboard: Displays all leads created by all employees in real-time.
• Employee Management: Add, remove, or manage employee access.

🡪User Panel
• Create Leads: Employees can add new leads to the system.
• View Own Leads: Employees can view all leads they have created.
• Dashboard: Shows leads created by the logged-in employee immediately upon login.

# Technologies Used

• Frontend: React.js, Redux (optional), HTML, CSS, JavaScript
• Backend: Node.js, Express.js
• Database: MongoDB
• Authentication: JWT-based authentication (Admin & User)
• Other: Axios for API calls, Material-UI/Bootstrap for UI (if used)

# Usage

🡪Admin Login:
• Access the admin panel URL
• Manage employees and access levels
• View all leads created by employees on the dashboard

🡪User Login:
• Access the user panel URL
• Create new leads
• View your own leads
• Dashboard displays your leads immediately after login

# Folder Structure
CRM-MERN/
├── client/           # React frontend
├── server/           # Node/Express backend
├── .env              # Environment variables
├── package.json      # Project dependencies
└── README.md

# Prerequisites
• Node.js 18 or newer

# Run locally
• npm install
• npm run dev
🡪 Then open the URL printed in the terminal (usually http://localhost:5173).

# Build
• npm run build
• npm run preview

# Author
• Fardeen Salmani
• Contact: mdfardeensalmani12@gmail.com