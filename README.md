# Student Management System Using Composition and Inheritance in Python

## Problem Statement

Design a student system in Python with:

* Address class (street, city, zipCode)
* Student class with name, age, Address, and course list
* Store age as a protected attribute and control it using @property
* Methods: add_course() and display()

Extend it with:

* ScholarshipStudent (add scholarshipAmount and override display())

Your implementation should clearly show:

* Composition (Student HAS-A Address)
* Proper data validation using @property (age must be valid)
* Inheritance and overriding (use super() in display)
* Understanding of mutable behavior (course list updates persist)

## Example

### Sample Output

```text
Student 1 Courses: ['DSA', 'OS', 'DBMS']
Student 2 Courses: ['DSA', 'OS', 'DBMS']

--- Student Display ---
Name: Ankit
Age: 20
Address: GS Road, Guwahati - 781005
Courses: DSA, OS, DBMS

--- Scholarship Student ---
Name: Priya
Age: 22
Address: GS Road, Guwahati - 781005
Courses: ML
Scholarship: 50000
```

## Solution Overview

The program models students and their addresses using object-oriented programming concepts. Each student contains personal information, an address object, and a list of enrolled courses.

The design demonstrates composition by associating an Address object with each Student. Data validation is enforced through Python properties, ensuring that age values remain within a valid range. Inheritance is used to create a specialized ScholarshipStudent class that extends the Student class with scholarship-related information.

The implementation also illustrates Python's mutable list behavior by sharing a course list between two student objects and showing how updates made through one reference are reflected in the other.

## OOP Concepts Demonstrated

### 1. Composition (HAS-A Relationship)

A student contains an address object:

```python
Student HAS-A Address
```

This relationship allows address details to be managed separately while remaining associated with a student.

### 2. Encapsulation Using @property

The age attribute is stored as a protected variable:

```python
_age
```

Access is controlled through:

```python
@property
@age.setter
```

Validation rules:

* Age must be an integer
* Age must be between 1 and 150

### 3. Inheritance

The class:

```python
ScholarshipStudent
```

inherits from:

```python
Student
```

and reuses all student functionality while introducing scholarship information.

### 4. Method Overriding

The ScholarshipStudent class overrides:

```python
display()
```

while reusing parent functionality through:

```python
super().display()
```

This avoids code duplication and extends existing behavior.

### 5. Mutable List Behavior

The program demonstrates shared mutable objects:

```python
s2 = Student("Rahul", 21, addr, s1.courses)
```

Both students reference the same course list.

When:

```python
s2.add_course("DBMS")
```

is executed, the change is visible through both student objects.

This demonstrates how mutable lists behave when shared between objects.

## Data Validation

### Age Validation

```python
@age.setter
```

Checks:

* Integer type
* Range between 1 and 150

Invalid values raise:

```python
TypeError
ValueError
```

### Address Validation

The constructor verifies:

```python
isinstance(address, Address)
```

ensuring that only valid Address objects are assigned.

### Course Validation

The method:

```python
add_course()
```

accepts only string values and raises:

```python
TypeError
```

for invalid input.

## Complexity Analysis

Let:

* **C** = Number of courses in a student's course list

### Creating Address Object

* Time Complexity: O(1)
* Space Complexity: O(1)

### Creating Student Object

* Time Complexity: O(1)
* Space Complexity: O(1)

### Adding a Course

```python
add_course()
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Displaying Student Information

```python
display()
```

The course list is joined into a string.

* Time Complexity: O(C)
* Space Complexity: O(C)

### Scholarship Student Display

```python
super().display()
```

plus scholarship output.

* Time Complexity: O(C)
* Space Complexity: O(C)

## Conclusion

This assignment demonstrates key object-oriented programming concepts in Python, including composition, encapsulation, inheritance, and method overriding. The Address and Student classes model real-world relationships effectively, while the ScholarshipStudent class extends functionality through inheritance. Property-based validation ensures data integrity, and the shared course list example highlights the behavior of mutable objects in Python. The design is modular, reusable, and aligns with good object-oriented programming practices.

---

**Author:** Ankit Kumar
