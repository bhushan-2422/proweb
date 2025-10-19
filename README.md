## ProWeb – Backend Boilerplate Generator

ProWeb is a simple CLI tool that creates a complete Node.js backend setup (Express + MongoDB) with one command.
It was built to save time by avoiding the repetitive process of setting up folder structures, auth, environment files, and configurations manually.

---

## How It Works

Run:

```bash
npx proweb
```

It will ask for a project name and then generate a backend project with everything pre-configured.

---

## What It Generates

```
your-project/
│── .env
│── .gitignore
│── package.json
│── src/
│   ├── app.js
│   ├── index.js
│   ├── constants.js
│   ├── db/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── asyncHandler.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── multer.middleware.js
```

---

## Technologies Included

* **Express** – Server framework
* **MongoDB + Mongoose** – Database setup
* **dotenv** – Environment variable support
* **jsonwebtoken** – Authentication (JWT)
* **bcrypt** – Password hashing
* **multer** – File upload handling
* **cookie-parser** – Cookies for auth
* **cors** – Cross-origin resource sharing
* **inquirer** – Command-line prompts

---

## Contributing

1. Fork the repository
2. Clone it locally

   ```bash
   git clone https://github.com/bhushan-2422/proweb.git
   cd proweb
   npm install
   ```
3. Make your changes
4. Test locally using:

   ```bash
   npm link
   proweb
   ```
5. Commit and push your changes
6. Create a pull request

---

## Future Improvements

* integrating some more repetitive packages
* Option to choose between different databases
* Frontend + backend full-stack template

---

## Feedback

You can open an issue in the repository for bugs, suggestions, or improvements. Contributions are welcome.

---

