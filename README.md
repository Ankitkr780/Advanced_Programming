# Assignment 6: Student Performance Analyzer in Java

## Problem Statement

Develop a student performance analyzer in Java.

You are given a list of students of your batch. Each student has:

```java
id (int)                  // don't include CSB string
name (String)
courses (List<String>)
scores (Map<String, Integer>) // key = course, value = marks
```

### Do:

#### 1. Store students using appropriate collections.

#### 2. Implement the following methods:

```java
List<Student> getTopNStudents(List<Student> students, int n);

Map<String, Double> getAverageScorePerCourse(List<Student> students);

Set<String> getAllUniqueCourses(List<Student> students);
```

### Must use:

1. ArrayList, HashMap, and HashSet
2. Streams for aggregation and filtering
3. Sort students by average score (descending)
4. Comparator
5. Handle missing course scores using getOrDefault
6. Ensure type safety using generics

### Perform complexity analysis:

1. What is the time complexity of computing course averages?
2. What is the complexity of sorting top N students?

---

## Solution Overview

The program analyzes student academic performance using Java Collections Framework and Stream API.

Each student contains:

* Student ID
* Name
* List of enrolled courses
* Course-wise scores

The analyzer can:

* Rank students based on average marks
* Calculate average score per course
* Extract all unique courses
* Handle missing course marks safely using `getOrDefault()`

The solution uses:

* `ArrayList<Student>` for storing students
* `HashMap<String, Integer>` for course scores
* `HashSet<String>` for unique courses
* Java Streams for aggregation and filtering
* `Comparator` for sorting
* Generics for type safety

---

## Features Implemented

### Student Class

Stores:

```java
private final int id;
private final String name;
private final List<String> courses;
private final Map<String, Integer> scores;
```

Features:

* Encapsulation
* Defensive copying
* Generic collections
* Safe score lookup using:

```java
scores.getOrDefault(course, 0);
```

---

### Average Score of a Student

```java
public double getAverageScore()
```

Uses Stream API:

```java
courses.stream()
       .mapToInt(this::getScoreForCourse)
       .average()
```

Returns the average marks across all enrolled courses.

---

### Top N Students

```java
getTopNStudents(List<Student> students, int n)
```

Uses:

```java
Comparator.comparingDouble(Student::getAverageScore)
          .reversed()
```

to sort students in descending order of average score.

Example:

```text
Top 3 Students

Grace
Ivy
Alice
```

---

### Average Score Per Course

```java
getAverageScorePerCourse(List<Student> students)
```

Uses:

```java
Collectors.groupingBy(...)
Collectors.averagingInt(...)
```

to compute average marks for every course.

Example:

```text
Math       : 80.6
Physics    : 80.0
CS         : 68.0
Biology    : 83.0
Literature : 87.5
History    : 83.3
```

---

### All Unique Courses

```java
getAllUniqueCourses(List<Student> students)
```

Uses:

```java
HashSet
```

and Stream flattening:

```java
flatMap(student -> student.getCourses().stream())
```

Example:

```text
[Math, Physics, CS, Biology, Literature, History]
```

---

## Java Concepts Demonstrated

### ArrayList

```java
List<Student> batch = Arrays.asList(...)
```

Used for storing student records.

---

### HashMap

```java
Map<String, Integer> scores
```

Stores course → marks mapping.

---

### HashSet

```java
Set<String> uniqueCourses
```

Stores distinct courses.

---

### Streams

Used extensively for:

```java
stream()
flatMap()
groupingBy()
averagingInt()
sorted()
limit()
collect()
```

---

### Comparator

Used for ranking students:

```java
Comparator.comparingDouble(Student::getAverageScore)
```

---

### Generics

Examples:

```java
List<Student>
Map<String, Integer>
Set<String>
```

Ensures compile-time type safety.

---

### getOrDefault()

Handles missing scores safely:

```java
scores.getOrDefault(course, 0)
```

Example:

```java
Courses : [Math, CS]
Scores  : {Math=70}

CS score automatically becomes 0.
```

---

## Complexity Analysis

Let:

* **S** = Number of students
* **C** = Average number of courses per student
* **K** = Number of unique courses

---

### Computing Course Averages

Method:

```java
getAverageScorePerCourse()
```

Steps:

1. Visit every student
2. Visit every course of that student
3. Insert into grouping structure

Total operations:

```text
S × C
```

Therefore:

**Time Complexity:** `O(S × C)`

**Space Complexity:** `O(K)`

where K is the number of unique courses.

---

### Sorting Top N Students

Method:

```java
getTopNStudents()
```

Steps:

1. Compute average score for each student
2. Sort all students

Sorting cost:

```text
O(S log S)
```

Average score computation:

```text
O(S × C)
```

Overall:

**Time Complexity:** `O(S × C + S log S)`

If average scores are precomputed:

**Time Complexity:** `O(S log S)`

**Space Complexity:** `O(S)`

---

## Sample Output

```text
Top 3 Students:
Grace (97.0)
Ivy (91.0)
Alice (89.0)

Average per course:
Math: 80.6
Physics: 80.0
CS: 68.0
Biology: 83.0
Literature: 87.5
History: 83.3

Unique courses:
[Math, Physics, CS, Biology, Literature, History]
```

---

## Conclusion

This Student Performance Analyzer demonstrates effective usage of Java Collections Framework and Stream API for academic data analysis. The solution employs ArrayList, HashMap, HashSet, Streams, Comparator, Generics, and getOrDefault() to perform ranking, aggregation, and filtering operations efficiently while maintaining type safety and clean object-oriented design.

**Complexities Summary**

| Operation                  | Time Complexity    | Space Complexity |
| -------------------------- | ------------------ | ---------------- |
| getTopNStudents()          | O(S × C + S log S) | O(S)             |
| getAverageScorePerCourse() | O(S × C)           | O(K)             |
| getAllUniqueCourses()      | O(S × C)           | O(K)             |

Where:

* S = Number of Students
* C = Average Courses per Student
* K = Unique Courses

**Author:** Ankit Kumar
