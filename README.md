# Book Title Search using ArrayList in Java

## Problem Statement

Write a Java program using `ArrayList` to store book titles.

Add at least 5 books and search for books whose title contains a given word.

```java
ArrayList<String> books
```

The program should accept a search keyword from the user and display all book titles that contain the given word.

---

## Solution Overview

This program uses Java's `ArrayList` collection to store multiple book titles. The user enters a search word, and the program performs a case-insensitive search across all stored book titles.

If a book title contains the given word, it is displayed as a matching result. If no matching titles are found, an appropriate message is shown.

---

## Features Implemented

### Book Storage

Books are stored using:

```java
ArrayList<String> books
```

The collection contains multiple book titles related to programming, computer science, and software development.

### User Search

The user enters a keyword:

```java
String word = sc.nextLine().toLowerCase();
```

### Case-Insensitive Matching

To ensure matching is independent of letter case:

```java
book.toLowerCase().contains(word)
```

### Match Detection

A boolean flag is used to determine whether any matching books were found.

```java
boolean found = false;
```

---

## Java Concepts Used

### ArrayList

Used for dynamic storage of book titles.

Example:

```java
ArrayList<String> books = new ArrayList<>();
```

### String Methods

The program uses:

```java
toLowerCase()
contains()
```

for flexible text searching.

### Enhanced For Loop

Used to traverse all book titles.

```java
for (String book : books)
```

### Scanner

Used to accept user input.

```java
Scanner sc = new Scanner(System.in);
```

---

## Sample Input

```text
Enter word to search in book titles: java
```

---

## Sample Output

```text
Matching books:

Java Programming
Data Structures in Java
Design Patterns in Java
```

---

## Another Example

### Input

```text
Enter word to search in book titles: python
```

### Output

```text
Matching books:

Python Basics
Deep Learning with Python
```

---

## Example with No Match

### Input

```text
Enter word to search in book titles: blockchain
```

### Output

```text
Matching books:

No matching books found.
```

---

## Complexity Analysis

Let:

* N = Number of books stored
* L = Average length of a book title

### Searching Books

The program checks every book title once.

```text
Time Complexity: O(N × L)
```

The `contains()` operation may scan the title string.

### Storage

The program stores all book titles in an `ArrayList`.

```text
Space Complexity: O(N)
```

where N is the number of stored books.

---

## Conclusion

This program demonstrates the use of Java's `ArrayList` for storing and managing collections of strings. It performs a case-insensitive keyword search using string manipulation methods and displays all matching book titles efficiently. The solution highlights fundamental Java concepts such as collections, loops, user input handling, and string processing.

**Author:** Ankit Kumar
