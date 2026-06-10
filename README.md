# Todo List Application

## React + Vite

This project is built using **React** and **Vite**.

### Available Plugins

* `@vitejs/plugin-react` (Babel/Oxc based Fast Refresh)
* `@vitejs/plugin-react-swc` (SWC based Fast Refresh)

### React Compiler

The React Compiler is enabled in this project.

> Note: React Compiler may affect development and build performance.

---

# Assignment: Todo List using React useState

## Problem Statement

Create a simple React component that maintains a list of todos using `useState`.

Allow the user to:

* Add a todo item
* Maintain the todo list using React state
* Display all added todos on the screen

---

## Solution Overview

This project implements a Todo List application using React Functional Components and the `useState` hook.

Users can enter a task, add it to the list, and view all created tasks dynamically without refreshing the page.

In addition to the assignment requirements, the application also includes task completion tracking, filtering options, deletion functionality, progress visualization, and responsive UI styling.

---

## Features Implemented

### Required Features

* Add new todo items
* Store todos using `useState`
* Display all todos dynamically
* Update UI automatically on state changes

### Additional Features

* Mark tasks as completed
* Delete individual tasks
* Filter tasks (All / Active / Completed)
* Clear completed tasks
* Progress indicator showing completion percentage
* Keyboard support (Enter key to add task)
* Responsive and modern UI design

---

## React Concepts Used

### useState

Used to manage:

```javascript
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");
const [filter, setFilter] = useState("all");
```

### Event Handling

Handles:

* Adding tasks
* Deleting tasks
* Toggling completion status
* Filtering tasks

### Conditional Rendering

Used to:

* Show empty state when no tasks exist
* Display filtered task lists
* Show progress information dynamically

### Array Methods

The application uses:

```javascript
map()
filter()
```

for rendering and manipulating todo items.

---

## Sample Usage

### Input

```text
Learn React
Complete Assignment
Prepare Presentation
```

### Output

```text
• Learn React
• Complete Assignment
• Prepare Presentation
```

---

## Complexity Analysis

Let:

* N = Number of todos

### Add Todo

```text
Time Complexity: O(1)
Space Complexity: O(N)
```

### Display Todos

```text
Time Complexity: O(N)
Space Complexity: O(1)
```

### Filter Todos

```text
Time Complexity: O(N)
Space Complexity: O(N)
```

### Delete Todo

```text
Time Complexity: O(N)
Space Complexity: O(N)
```

---

## Project Structure

```text
src/
 ├── App.jsx
 ├── main.jsx
 └── assets/
```

---

## Conclusion

This project demonstrates state management in React using the `useState` hook. The application satisfies all assignment requirements by allowing users to add and display todo items dynamically. Additional features such as task completion tracking, filtering, deletion, progress visualization, and modern UI enhancements provide a richer user experience while showcasing practical React development concepts.

**Author:** Ankit Kumar
