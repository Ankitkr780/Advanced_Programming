# Course Enrollment Dashboard in React

## Problem Statement

Develop a course enrollment dashboard in ReactJS.

You are building a React component that displays enrolled students.

Each student:

```javascript
{
  id: number,
  name: string,
  enrolledCourses: Set<string>,
  gpa: number
}
```

You must:

### 1. Maintain students in state.

### 2. Implement the following features:

* Add new student
* Remove student by ID
* Display students sorted by GPA (descending)
* Display all unique courses across students
* Filter students enrolled in a specific course

### 3. Use the following

* useState
* Map internally for id to student mapping
* Set for course uniqueness
* map, filter, and reduce
* Do not mutate state directly
* Use spread operator for updates
* Convert Set to array before rendering

### 4. Compute time complexity of filtering students by course.

---

## Features Implemented

### Student Management

* Add new students dynamically
* Remove students by ID
* Maintain student records using React state

### GPA-Based Sorting

Students are automatically sorted in descending GPA order.

### Course Filtering

Users can select a course and view only students enrolled in that course.

### Unique Course Extraction

All unique courses are collected using a Set and displayed as filter buttons.

### State Management

The application uses:

* `useState`
* `Map`
* `Set`
* `map()`
* `filter()`
* `reduce()`

while ensuring immutable state updates.

---

## Example

### Student Data

```text
Student: Alice
GPA: 3.9
Courses: React, DSA

Student: Bob
GPA: 3.6
Courses: DBMS, React

Student: Charlie
GPA: 3.8
Courses: OS, DSA
```

### Unique Courses

```text
React
DSA
DBMS
OS
```

### Filter: React

```text
Alice
Bob
```

### Sorted by GPA

```text
Alice   3.9
Charlie 3.8
Bob     3.6
```

---

## Solution Overview

The dashboard stores students inside a JavaScript `Map`, where the student ID acts as the key and the student object acts as the value.

When a student is added or removed, a new Map is created to avoid mutating React state directly.

All student data is converted into an array for sorting, filtering, and rendering.

Unique courses are generated using a Set and accumulated through the `reduce()` function.

The interface updates automatically whenever the state changes.

---

## React Concepts Demonstrated

### useState

Used to manage:

```javascript
students
name
gpa
courses
filterCourse
```

### Map

Stores students efficiently:

```javascript
Map<id, Student>
```

Benefits:

* Fast insertion
* Fast deletion
* Fast lookup

### Set

Stores unique courses:

```javascript
Set<string>
```

Duplicate course names are automatically removed.

### map()

Used for rendering:

```javascript
filtered.map(...)
```

### filter()

Used for course filtering:

```javascript
sorted.filter(...)
```

### reduce()

Used to collect unique courses:

```javascript
studentArray.reduce(...)
```

### Immutable Updates

State is never mutated directly:

```javascript
const newMap = new Map(students);
```

This follows React best practices.

---

## Complexity Analysis

Let:

* **N** = Number of students
* **C** = Average number of courses per student

### Add Student

```javascript
newMap.set(...)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Remove Student

```javascript
newMap.delete(...)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Sort by GPA

```javascript
sort(...)
```

* Time Complexity: O(N log N)
* Space Complexity: O(N)

### Generate Unique Courses

```javascript
reduce(...)
```

* Time Complexity: O(N × C)
* Space Complexity: O(U)

where U is the number of unique courses.

### Filter Students by Course

```javascript
sorted.filter(...)
```

Each student is checked once.

* **Time Complexity: O(N)**
* **Space Complexity: O(N)**

This satisfies the assignment requirement.

---

## Conclusion

This project implements a dynamic course enrollment dashboard using React. The application demonstrates effective use of React Hooks, Maps, Sets, immutable state updates, and functional array operations. Students can be added, removed, sorted by GPA, filtered by course, and analyzed through unique course aggregation. The design is efficient, maintainable, and follows modern React development practices.

---

## React + Vite

This project is built using **React + Vite**, providing fast development builds, Hot Module Replacement (HMR), and modern tooling support.

### Available React Plugins

* `@vitejs/plugin-react` (uses Oxc)
* `@vitejs/plugin-react-swc` (uses SWC)

### React Compiler

The React Compiler is enabled in this project.

For more information:

* React Compiler Documentation: https://react.dev/learn/react-compiler

### TypeScript Support

For production-scale applications, Vite recommends using TypeScript with type-aware ESLint rules. See the React TypeScript template for additional configuration options.

---

**Author:** Ankit Kumar
