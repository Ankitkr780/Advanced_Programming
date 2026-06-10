# Garbage Collection and Circular References in Python

## Problem Statement

Create a Python program that demonstrates how objects can remain in memory even after all user-accessible references are removed due to circular references.

### Requirements

1. Create a `Node` class containing:

   * `name`
   * `link`

2. Create two objects:

   * Node A
   * Node B

3. Create a reference cycle:

```text
Node A → Node B
Node B → Node A
```

4. Use `sys.getrefcount()` to observe reference counts.

5. Delete the accessible variables:

```python
del A
del B
```

6. Demonstrate that the objects still exist in memory because of the cycle.

7. Use the `gc` module to force garbage collection.

8. Display the number of unreachable objects collected.

## Example

### Output

```text
Cycle created:
A links to: Node B
B links to: Node A

Reference Counts:
Ref count of A: 3
Ref count of B: 3

Deleted A and B variables.

Before garbage collection:
Node A still exists in memory
Node B still exists in memory

Running garbage collector...

Node A is finally destroyed
Node B is finally destroyed

Unreachable objects collected: 2

After garbage collection:
weak_A() -> None
weak_B() -> None
```

> Note: Exact reference counts and collected object counts may vary depending on the Python implementation and runtime environment.

### Explanation

Although the variables `A` and `B` are deleted, the two objects still reference each other. Their reference counts do not immediately drop to zero, preventing simple reference counting from reclaiming the memory.

Python's cyclic garbage collector detects this unreachable reference cycle and removes the objects when `gc.collect()` is executed.

## Solution Overview

The program creates two interconnected objects forming a circular reference. Weak references are then used to monitor whether the objects remain alive after the original variables are deleted.

Even though the programmer can no longer directly access the objects, they continue to exist because each object still references the other. The garbage collector identifies this unreachable cycle and frees the associated memory.

## Concepts Demonstrated

### Reference Counting

Python primarily manages memory using reference counting.

```python
sys.getrefcount(obj)
```

returns the number of active references to an object.

### Circular References

```text
Node A
   ↓
Node B
   ↑
   └───────
```

The cycle prevents the reference count from reaching zero.

### Weak References

```python
weakref.ref(object)
```

Weak references allow observation of an object without increasing its reference count.

### Garbage Collection

```python
gc.collect()
```

The cyclic garbage collector detects unreachable cycles and reclaims memory.

### Destructor Execution

```python
def __del__(self):
```

The destructor is invoked when the object is finally destroyed.

## Memory Lifecycle

### Step 1: Object Creation

```text
A ───► Node A
B ───► Node B
```

### Step 2: Circular Reference

```text
A ───► Node A ───► Node B
           ▲         │
           └─────────┘
```

### Step 3: Variable Deletion

```text
Node A ───► Node B
   ▲         │
   └─────────┘
```

External references disappear, but the cycle remains.

### Step 4: Garbage Collection

```text
gc.collect()
```

The cycle is detected as unreachable and removed.

## Modules Used

| Module  | Purpose                                                    |
| ------- | ---------------------------------------------------------- |
| sys     | Inspect reference counts                                   |
| gc      | Trigger garbage collection                                 |
| weakref | Observe object lifetime without affecting reference counts |

## Complexity Analysis

Let:

* **N** = Number of objects tracked by the garbage collector

### Creating Nodes

```python
Node(...)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Creating Circular References

```python
A.link = B
B.link = A
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Checking Reference Counts

```python
sys.getrefcount()
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Garbage Collection

```python
gc.collect()
```

The collector scans tracked objects to detect unreachable cycles.

* Time Complexity: O(N)
* Space Complexity: O(N)

where **N** is the number of tracked objects.

## Key Features

* Circular reference creation
* Reference count inspection
* Weak reference monitoring
* Explicit garbage collection
* Destructor invocation
* Memory lifecycle demonstration
* Practical understanding of Python memory management

## Conclusion

This project demonstrates one of the classic limitations of pure reference-counting memory management: circular references. Even after deleting all programmer-accessible references, objects can remain alive because they reference one another. Python solves this problem using a cyclic garbage collector, which detects unreachable object cycles and safely reclaims memory. The example provides a practical illustration of how Python's garbage collection system complements reference counting to prevent memory leaks.

---

**Author:** Ankit Kumar
