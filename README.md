# Activity Log Analyzer in Python

## Problem Statement

Develop an activity log analyzer in python:

You are given a list of activity records:

```python
{
    "user": str,      # roll numbers of students
    "action": str,    # Online activities of students such as apps, websites visited, etc.
    "duration": float # screen time for each activity
}
```

You must:

### 1. Store data efficiently using python built-in containers.

### 2. Implement the following:

```python
def total_time_per_user(logs: list[dict]) -> dict[str, float]
def most_active_users(logs: list[dict], k: int) -> list[str]
def unique_actions(logs: list[dict]) -> set[str]
```

### 3.

* Use dict, set, and list
* Use comprehensions where appropriate
* Use sorted() with key
* Avoid explicit loops where possible
* Use typing annotations
* Use defaultdict optionally
* Use reduce() to compute total activity time

### 4. Perform complexity analysis:

#### a. Time complexity for computing top K users

#### b. Space complexity of storing intermediate results

---

## Example

### Sample Activity Records

```text
CSB2101  GitHub         45.5
CSB2102  StackOverflow  15.0
CSB2101  VSCode        120.0
CSB2103  YouTube        60.5
CSB2102  GitHub         30.0
```

### Sample Output

```text
TOP 3 MOST ACTIVE USERS

1. CSB2105 → 200.0 min
2. CSB2103 → 210.5 min
3. CSB2101 → 176.0 min

UNIQUE ACTIONS

GitHub
LeetCode
Netflix
StackOverflow
VSCode
YouTube
```

---

## Solution Overview

The program analyzes student activity logs using Python's built-in containers and functional programming features.

Each activity record contains:

* User ID
* Activity name
* Duration

The analyzer aggregates activity durations, identifies the most active users, extracts unique actions, and computes additional statistics such as total activity time and activity breakdowns.

The implementation uses:

* Lists for storing logs
* Dictionaries for aggregation
* Sets for uniqueness
* defaultdict for efficient accumulation
* List comprehensions
* reduce() for total activity calculation
* sorted() with custom keys for ranking users

---

## Features Implemented

### Total Screen Time Per User

```python
total_time_per_user(logs)
```

Calculates the cumulative duration for every user.

Example:

```text
CSB2101 → 176.0 min
CSB2102 → 45.0 min
CSB2103 → 210.5 min
```

---

### Top-K Most Active Users

```python
most_active_users(logs, k)
```

Ranks users according to total screen time and returns the top K users.

Example:

```text
Top 3 Users:
CSB2105
CSB2103
CSB2101
```

---

### Unique Actions

```python
unique_actions(logs)
```

Uses a set comprehension to remove duplicates.

Example:

```text
GitHub
VSCode
YouTube
Netflix
LeetCode
```

---

### Total Activity Time

```python
total_activity_time(logs)
```

Uses:

```python
reduce()
```

to compute the cumulative duration of all log entries.

---

### Time Per Action

```python
time_per_action(logs)
```

Computes total screen time spent on each application or website.

---

### User Action Breakdown

```python
user_action_breakdown(logs)
```

Generates a nested dictionary showing how much time each user spent on each activity.

---

### Above Average Users

```python
above_average_users(logs)
```

Returns users whose total screen time exceeds the average user activity duration.

---

## Data Structures Used

| Data Structure | Purpose                     |
| -------------- | --------------------------- |
| List           | Store activity records      |
| Dictionary     | Aggregate durations         |
| Set            | Store unique actions        |
| defaultdict    | Simplify accumulation logic |

---

## Python Concepts Demonstrated

### Type Annotations

```python
List[Dict]
Dict[str, float]
Set[str]
```

Improves readability and maintainability.

### List Comprehensions

Used for:

```python
[user for user, _ in ...]
```

### Set Comprehensions

Used for:

```python
{log["action"] for log in logs}
```

### Functional Programming

Uses:

```python
reduce()
```

for cumulative calculations.

### Sorting with Custom Key

```python
sorted(..., key=lambda x: x[1])
```

Used to rank users by total activity duration.

---

## Complexity Analysis

Let:

* **N** = Total log entries
* **U** = Unique users
* **A** = Unique actions
* **K** = Number of top users requested

### total_time_per_user()

```python
defaultdict accumulation
```

* Time Complexity: O(N)
* Space Complexity: O(U)

---

### most_active_users(k)

Operations:

1. Aggregate user durations → O(N)
2. Sort users → O(U log U)
3. Extract top K → O(K)

Overall:

* **Time Complexity: O(N + U log U)**
* **Space Complexity: O(U)**

---

### unique_actions()

Uses set comprehension.

* Time Complexity: O(N)
* Space Complexity: O(A)

---

### total_activity_time()

Uses reduce.

* Time Complexity: O(N)
* Space Complexity: O(1)

---

### time_per_action()

* Time Complexity: O(N)
* Space Complexity: O(A)

---

### user_action_breakdown()

* Time Complexity: O(N)
* Space Complexity: O(N)

---

### above_average_users()

* Time Complexity: O(N + U)
* Space Complexity: O(U)

---

## Conclusion

This assignment demonstrates efficient activity log analysis using Python collections and functional programming techniques. The solution leverages lists, dictionaries, sets, defaultdict, comprehensions, sorting, and reduce() to process user activity data effectively. The analyzer can identify active users, compute usage statistics, extract unique actions, and generate detailed reports while maintaining efficient time and space complexity characteristics.

---

**Author:** Ankit Kumar
