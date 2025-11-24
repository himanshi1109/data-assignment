# ☕ Café Debug – ReactJS Beginner Project

A simple and beginner-friendly **ReactJS café order management app** where users can add, view, edit, and delete customer order details.
This project helped me practice **props drilling**, **form handling**, and **state lifting**.  
It also includes a **light/dark theme switcher** for better UI.

---

## 📂 Project Structure

/src
├── components/
│ ├── LeftForm.jsx // Form to enter customer order
│ ├── OrderCard.jsx // Shows saved order details
│ ├── Header.jsx // App title + theme toggle
│ └── ThemeContext.jsx // Light/Dark theme handler
│
├── App.jsx // Parent component, manages all state
├── index.css // Styling
└── main.jsx // React DOM entry point

yaml
Copy code

---

## 🚀 Features

- Add customer details (name, contact, items, table number, price)
- Edit and delete order
- Clear form button
- Real-time order preview card
- Light/Dark theme toggle
- Clean and responsive beginner UI

---

## 🛠️ Setup & Installation

```bash
git clone <your-repo-url>

npm install

npm run dev
The project runs on: http://localhost:4173

📘 What I Learned
Using useState() to manage form inputs

Props Drilling – passing data through multiple components

Lifting state up to the parent component

Creating reusable React components

Controlled form inputs

Using Context API for theme switching

Structuring React app folders properly

🔮 Future Improvements
Replace props drilling with Context API or Redux

Support multiple orders instead of a single one

Store orders in LocalStorage

Add form input validation

Add animations for better UI

Convert it into a small POS (Point of Sale) system in the future