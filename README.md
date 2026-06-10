# Dynamic String Buffer in C

## Problem Statement

In C, managing strings is a common source of buffer overflows and memory leaks. Implement a Dynamic String Buffer that automatically grows as needed.

### Requirements:

1. Create a `StringBuffer` struct containing a `char *data`, a `size_t length`, and a `size_t capacity`.

2. Write a function `sb_init(size_t initial_capacity)` that allocates the struct and the data buffer on the heap. Handle `NULL` returns from `malloc`.

3. Write `sb_append(StringBuffer *sb, const char *str)`.

4. If the new string exceeds current capacity, use `realloc` to double the capacity. Ensure you handle `realloc` safely (don't overwrite the original pointer if it returns `NULL`).

5. Write `sb_free(StringBuffer *sb)` which works as a destructor that frees both the internal data and the struct itself to prevent memory leaks.

6. Demonstrate the buffer growing at least twice and then free all memory.

## Example

### Sample Output

```text
Initial Capacity = 8

Buffer: Hello
Length: 5
Capacity: 8

Growing buffer:
Old Capacity = 8
New Capacity = 16

Buffer: Hello World!
Length: 12
Capacity: 16

Growing buffer:
Old Capacity = 16
New Capacity = 32

Growing buffer:
Old Capacity = 32
New Capacity = 64

Buffer: Hello World! This is a dynamic string buffer implementation in C.
Length: 64
Capacity: 64

All memory freed successfully.
```

> Note: The exact capacities may vary depending on the initial buffer size and appended string lengths.

## Solution Overview

The program implements a dynamic string buffer that grows automatically whenever additional storage is required. The buffer maintains three pieces of information:

* Pointer to character data
* Current string length
* Current buffer capacity

When a new string is appended, the program checks whether enough space is available. If not, the capacity is repeatedly doubled until the required size can be accommodated.

To avoid memory leaks and data loss, reallocation is performed using a temporary pointer before updating the original buffer pointer. Finally, all dynamically allocated memory is released using a dedicated cleanup function.

## Buffer Growth Strategy

The buffer starts with an initial capacity:

```text
8 bytes
```

Example growth:

```text
8  →  16  →  32  →  64
```

This doubling strategy minimizes the number of reallocations and provides efficient amortized performance.

## Memory Management

### Initialization

```c
sb_init()
```

Allocates:

* StringBuffer structure
* Internal character buffer

### Dynamic Expansion

```c
char *temp = realloc(sb->data, new_capacity);
```

A temporary pointer is used to safely handle reallocation failures.

### Cleanup

```c
sb_free()
```

Releases:

* Internal character buffer
* StringBuffer structure

This prevents memory leaks.

## Complexity Analysis

Let:

* **N** = Current number of characters stored
* **M** = Length of the string being appended

### Buffer Initialization

```c
sb_init()
```

* **Time Complexity:** O(1)
* **Space Complexity:** O(initial_capacity)

### String Append (No Reallocation)

```c
sb_append()
```

* **Time Complexity:** O(M)
* **Space Complexity:** O(1)

### String Append (With Reallocation)

When the buffer grows, existing data may need to be copied.

* **Worst-Case Time Complexity:** O(N + M)
* **Space Complexity:** O(N)

### Amortized Append Cost

Because the capacity doubles on each expansion:

* **Amortized Time Complexity:** O(M)

This is the same strategy used by many dynamic array implementations.

### Memory Cleanup

```c
sb_free()
```

* **Time Complexity:** O(1)
* **Space Complexity:** O(1)

## Conclusion

This assignment demonstrates dynamic memory management in C through the implementation of a resizable string buffer. The solution safely handles memory allocation failures, automatically expands storage using `realloc`, prevents memory leaks through proper cleanup, and avoids common string-handling issues such as fixed-size buffer limitations. The capacity-doubling strategy provides efficient growth while maintaining good performance for repeated append operations.

---

**Author:** Ankit Kumar
