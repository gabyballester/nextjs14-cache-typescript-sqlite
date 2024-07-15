# 📱 Blog App

## 📝 Description

Messages App is a Tech Assessment Project to demonstrate knowledge of Next.js cache strategies.

## 🚀 Getting Started

1. Install the necessary dependencies: Before running the development server, make sure to install all project dependencies. You can do this with one of the following commands:

```bash
npm install
```

2. Run the development server: You can start the development server using one of the following commands:

```bash
npm run dev
```

It includes a built-in db through the use of this file `lib\messages.js` which recreates the db if it doesn't exist.

**Note:** Image files must be stored in assets and also in public allowing the db url access the folder based on the url provided.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Code Quality and Best Practices

The platform ensures high code quality and follows best practices.

## 📚 Base libraries used

- **Next.js:** As the chosen framework to build with.
- **React:** As the UI library in the background.
- **TypeScript:** Adding strong static types and advanced features to improve large-scale development and code maintainability.
- **better-sqlite3** This application uses SQLite as its database.

## 🎨 UX/UI

- **CSS Modules:** The application utilizes global CSS styles and CSS Modules for precise styling on each component that requires it.

## 🌟 Special Features

**Caching in Next.js**

1. **Request Memoization:**

   - Function: Memoizes fetch responses with the same URL and options.
   - Use: Prevents multiple network requests for the same data.

2. **Data Cache**

   - Function: Stores data on the server.
   - Use: Reduces the need to fetch data on every request.

3. **Full Route Cache**

   - Function: Caches HTML and Server Components payload.
   - Use: Improves performance by caching entire routes.

4. **Router Cache**

   - Function: Caches RSC payload on the client.
   - Use: Reduces server requests during navigation.

## 📦 Prepare for production

1. Creating an optimized production build

```bash
npm run build
```

2. Start the production build

```bash
npm run start
```

## 🤝 Contributions

Contributions are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push your branch (git push origin feature/new-feature).
   Open a Pull Request.
