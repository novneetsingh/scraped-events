# 🏆 Scraped Events

This is a **Full-Stack Web Application** that automatically scrapes event data for **Sydney, Australia** and displays it on a beautiful web page. Users can browse upcoming events, click **"GET TICKETS"**, enter their email, and be redirected to the original ticket website.

---

---

## 📌 **Features**

### 🔹 **Event Scraping**

- Scrapes events from Eventbrite **every 24 hours** using Cheerio.
- Stores events in a **MongoDB database**.

### 🔹 **Web Application**

- Beautiful **React.js** frontend with Tailwind CSS.
- Displays **event title, date, and location** in a **responsive grid**.
- "GET TICKETS" button opens a modal to collect user email.

### 🔹 **User Interaction**

- **Email Collection:** Before redirecting, users enter their email.
- **Smart Redirect:** If an email has already been submitted, it redirects instantly.
- **Opens Ticket Link in New Tab.**

### 🔹 **Automated Background Job**

- **`node-cron`** runs the scraper **every 24 hours**.
- **Scraped events** are updated in MongoDB.

---

## 🛠️ **Tech Stack**

| Technology     | Purpose                |
| -------------- | ---------------------- |
| **Frontend**   | React.js, Tailwind CSS |
| **Backend**    | Node.js, Express.js    |
| **Database**   | MongoDB, Mongoose      |
| **Scraping**   | Cheerio                |
| **Scheduling** | Node-Cron              |
|                |                        |

---

## 📂 **Project Structure**

```
scraped-events/
├── server/                  # Express.js backend
│   ├── controllers/          # API logic
│   ├── models/               # Mongoose schemas
│   ├── routes/               # Express API routes
│   ├── utils/                # Scraper and cron jobs
│   ├── config/               # Database connection
│   ├── index.js              # Server entry point
│
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── modals/           # Modal for email input
│   │   ├── pages/            # Pages (Home, etc.)
│   │   ├── App.js            # Main React App
│   │   ├── index.js          # React entry point
│
├── .env                      # Environment variables
├── package.json              # Dependencies
├── README.md                 # Project Documentation
```

---

## 🔥 **Setup & Installation**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/novneetsingh/scraped-events.git
cd scraped-events
```

### **2️⃣ Install Dependencies**

```sh
# Install Backend Dependencies
cd backend
npm install

# Install Frontend Dependencies
cd ../frontend
npm install
```

### **3️⃣ Configure Environment Variables**

Create a **`.env`** file in the **backend** folder:

```env
VITE_BACKEND_URL=http://localhost:5000
MONGO_URI=mongodb+srv://your-mongodb-url
PORT=5000
```

---

## 🚀 **Run the Project**

### **Start the Backend**

```sh
cd backend
npm start
```

**Runs on**: `https://scrapedevents.onrender.com`

### **Start the Frontend**

```sh
cd frontend
npm run dev
```

**Runs on**: `https://scraped-events.onrender.com`

---

## 🔄 **How Event Scraping Works**

1. **Every 24 hours**, `node-cron` runs the Cheerio script.
2. **Extracts** event title, date, location, and ticket link.
3. **Stores/Updates** events in MongoDB.
4. **Website updates automatically** with the latest events.

---

## 💪 **Challenges Faced & Solutions**

### **❌ Getting Events from Website**

👉 **Solution:** Used Cheerio and Axios to fetch and parse event data efficiently.

### **❌ Keeping Data Updated**

👉 **Solution:** Implemented `node-cron` to scrape every 24 hours.

### **❌ Preventing Duplicate Submissions**

👉 **Solution:** Used **state tracking** to manage email submissions.

---

---

## 🎯 **Assignment Requirements (Checklist)**

✅ **Scrapes Events** from Eventbrite ✅\
✅ **Lists Events Beautifully** on Website ✅\
✅ **User Email Collection Before Redirecting** ✅\
✅ **Opens Ticket in New Tab** ✅\
✅ **Runs Every 24 Hours** ✅\
✅ **Setup Instructions & Documentation Provided** ✅

---

🚀 **Built for the Internship Assignment.**
