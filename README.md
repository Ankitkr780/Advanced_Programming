# Product Stock Management System

## Problem Statement

Create a Python program using a list and dictionary to store products with name and stock quantity.

Display all products whose stock is less than 10.

```python
products = [
    {"name": "Laptop", "quantity": 15},
    {"name": "Mouse", "quantity": 8},
    {"name": "Keyboard", "quantity": 5},
    {"name": "Monitor", "quantity": 12},
    {"name": "USB Cable", "quantity": 3},
    {"name": "Headphones", "quantity": 20},
    {"name": "Webcam", "quantity": 7},
    {"name": "Speaker", "quantity": 14},
    {"name": "External HDD", "quantity": 6},
    {"name": "Microphone", "quantity": 11}
]
```

The program should also allow users to add additional products and their quantities dynamically before displaying products with low stock.

---

## Solution Overview

This program manages product inventory using Python's built-in data structures.

* A **list** is used to store multiple products.
* Each product is represented as a **dictionary** containing:

  * Product name
  * Available stock quantity

The user can add additional products at runtime. After collecting all product information, the program scans the inventory and displays products whose stock quantity is less than 10.

---

## Features Implemented

### Product Storage

Products are stored using:

```python
{
    "name": product_name,
    "quantity": stock_quantity
}
```

and maintained inside a list.

### Dynamic Product Addition

The user can add any number of products using:

```python
n = int(input("How many additional products do you want to add?"))
```

### Low Stock Detection

The program identifies products with:

```python
quantity < 10
```

and displays them separately.

---

## Python Concepts Used

### List

Used to store all products.

Example:

```python
products = []
```

### Dictionary

Used to store product details.

Example:

```python
{
    "name": "Mouse",
    "quantity": 8
}
```

### Looping

Used for:

* Accepting additional products
* Traversing the inventory
* Checking stock levels

### Conditional Statements

Used to determine whether a product has low stock.

```python
if product["quantity"] < 10:
```

---

## Sample Input

```text
How many additional products do you want to add? 2

Enter product name: Printer
Enter quantity: 4

Enter product name: SSD
Enter quantity: 18
```

---

## Sample Output

```text
Products with stock less than 10:

Mouse - Stock: 8
Keyboard - Stock: 5
USB Cable - Stock: 3
Webcam - Stock: 7
External HDD - Stock: 6
Printer - Stock: 4
```

---

## Complexity Analysis

Let:

* N = Initial number of products
* M = Number of additional products entered by the user

Total products:

```text
N + M
```

### Adding Products

```text
Time Complexity: O(M)
Space Complexity: O(M)
```

Each new product is appended once to the list.

### Finding Low Stock Products

```text
Time Complexity: O(N + M)
Space Complexity: O(1)
```

The inventory is traversed once and only a constant amount of extra memory is used.

### Overall Complexity

```text
Time Complexity: O(N + M)

Space Complexity: O(N + M)
```

---

## Conclusion

This program demonstrates inventory management using Python lists and dictionaries. It allows dynamic product entry, maintains stock information efficiently, and identifies products that require restocking by displaying all items with stock quantities below 10. The solution is simple, scalable, and provides a practical example of using fundamental Python data structures for real-world inventory tracking.

**Author:** Ankit Kumar
