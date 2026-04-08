# 🚀 API Hunter

API Hunter is a React + Redux Toolkit based web application that allows users to explore and test APIs easily. Users can send **GET** and **POST** requests using both **fetch()** and **axios**, and view responses in a clean UI.

---

## 📌 Features

* 🔍 Test APIs using GET & POST methods
* ⚡ Supports both **fetch()** and **axios**
* 🗂️ Redux Toolkit state management
* 📡 JSON Server for local API testing
* 💡 Simple and user-friendly UI

---
<img width="1865" height="608" alt="Screenshot 2026-04-07 220306" src="https://github.com/user-attachments/assets/5cbf326b-8c37-4305-997f-3e4432109809" />
---

<img width="1778" height="918" alt="Screenshot 2026-04-07 221010" src="https://github.com/user-attachments/assets/a8fe5294-a2ab-4789-94bd-27d92166d4ab" />

---
## 📁 Project Structure

```
api-hunter/
│── public/
│── src/
│   │── components/
│   │   └── ApiForm.jsx
│   │── redux/
│   │   └── apiSlice.js
│   │── App.jsx
│   │── main.jsx
│── db.json
│── package.json
│── vite.config.js
```

---


## 📡 Run JSON Server

Create a `db.json` file in root folder and run:

```
npx json-server --watch db.json --port 3001
```

Open in browser:

```
http://localhost:3001
```

---

## 🧪 Example API (db.json)

```
{
  "posts": [
    { "id": 1, "name": "Dhara" },
    { "id": 2, "name": "Mahi" }
  ]
}
```

---

## 📸 How It Works

1. Enter API URL
2. Select method (GET/POST)
3. Choose fetch or axios
4. Click Send
5. View response instantly

---

## 🚧 Future Improvements

* Add authentication support
* Save API history
* Dark mode 🌙
* Response formatting (JSON viewer)

---

## 🤝 Contributing

Feel free to fork this project and improve it. Pull requests are welcome!

---

## 📄 License

This project is open-source and free to use.

---

## 💡 Author

**Dhara Parekh**

---

✨ Happy Coding!
