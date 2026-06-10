# Garbage Collection and Circular References in Python

## Problem Statement

Create a scenario where objects are "dead" but still have a reference count higher than zero, then force the Garbage Collector to clean them up. Do in python only.

### Implementation Steps:

Create a Node class with a name and a link attribute.

Create a Cycle: Instantiate Node A and Node B.

Set A.link = B and B.link = A.

Check References: Use sys.getrefcount() to show that both objects have multiple references.

The "Deletion": Use del A and del B.

The Investigation: Use the gc module to show that these objects still exist in memory because of the cycle, even though you can no longer access them from your code.

The Cleanup: Call gc.collect() and print the number of "unreachable" objects collected.

## Example

### Sample Output

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

> Note: Reference counts and the number of collected objects may vary depending on the Python version and runtime environment.

## Solution Overview

The program demonstrates how Python's reference counting mechanism alone cannot reclaim objects involved in a circular reference.

Two `Node` objects are created and linked to each other, forming a cycle. Even after deleting the variables `A` and `B`, the objects remain in memory because each object still holds a reference to the other.

Weak references are used to observe the objects without increasing their reference counts. The program then forces Python's cyclic garbage collector to run using `gc.collect()`, which detects the unreachable cycle and frees the associated memory.

## Circular Reference Demonstration

### Initial State

```text
A ──► Node A
B ──► Node B
```

### After Creating the Cycle

```text
Node A ──► Node B
   ▲          │
   └──────────┘
```

### After Deleting A and B

```text
Node A ──► Node B
   ▲          │
   └──────────┘
```

Although the variables are gone, the objects still reference each other and therefore remain alive.

### After Garbage Collection

```text
gc.collect()
```

The cycle is detected as unreachable and both objects are destroyed.

## Modules Used

| Module    | Purpose                                             |
| --------- | --------------------------------------------------- |
| `sys`     | Inspect object reference counts                     |
| `gc`      | Trigger garbage collection                          |
| `weakref` | Observe objects without increasing reference counts |

## Complexity Analysis

Let:

* **N** = Number of objects tracked by the garbage collector

### Creating Nodes

* **Time Complexity:** O(1)
* **Space Complexity:** O(1)

### Creating Circular References

* **Time Complexity:** O(1)
* **Space Complexity:** O(1)

### Checking Reference Counts

```python
sys.getrefcount()
```

* **Time Complexity:** O(1)
* **Space Complexity:** O(1)

### Garbage Collection

```python
gc.collect()
```

The garbage collector scans tracked objects to identify unreachable cycles.

* **Time Complexity:** O(N)
* **Space Complexity:** O(N)

where **N** is the number of tracked objects in the garbage collector.

## Conclusion

This assignment demonstrates an important limitation of simple reference counting memory management. Even after all programmer-accessible references are removed, objects involved in circular references can remain in memory because they still reference one another. Python addresses this issue through its cyclic garbage collector, which identifies unreachable reference cycles and safely reclaims the memory. The implementation provides a practical understanding of reference counting, weak references, circular references, and garbage collection in Python.

---

**Author:** Ankit Kumar
