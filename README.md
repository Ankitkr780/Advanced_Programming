# Space Complexity Analysis in C

## Problem Statement

Write a C program to analyze the space complexity of three different operations representing **constant space O(1)**, **linear space O(n)**, and **quadratic space O(n²)**. The program should accept multiple input sizes and display the amount of memory consumed by each operation.

## Example

### Input

```text
Enter the number of samples
3

Enter sample 1 :10
Enter sample 2 :100
Enter sample 3 :1000
```

### Output

```text
Input size n = 10
O(1)   Space: 12 bytes
O(n)   Space: 40 bytes
O(n^2) Space: 400 bytes

Input size n = 100
O(1)   Space: 12 bytes
O(n)   Space: 400 bytes
O(n^2) Space: 40000 bytes

Input size n = 1000
O(1)   Space: 12 bytes
O(n)   Space: 4000 bytes
O(n^2) Space: 4000000 bytes
```

### Explanation

The program allocates memory according to three different growth rates. Constant-space operations use a fixed amount of memory regardless of input size. Linear-space operations allocate memory proportional to the input size, while quadratic-space operations allocate a two-dimensional structure whose memory requirement grows as the square of the input size.

## Solution Overview

The program demonstrates how memory consumption changes with increasing input size. A fixed number of variables are used to represent constant space complexity. Dynamic memory allocation is used to create a one-dimensional array for linear space complexity and a two-dimensional matrix for quadratic space complexity.

By comparing the reported memory usage for different input sizes, the program provides a practical illustration of how space requirements scale for various classes of algorithms.

## Complexity Analysis

| Operation       | Time Complexity | Space Complexity |
| --------------- | --------------- | ---------------- |
| Constant Space  | O(1)            | O(1)             |
| Linear Space    | O(n)            | O(n)             |
| Quadratic Space | O(n²)           | O(n²)            |

## Conclusion

This program demonstrates the relationship between input size and memory consumption. Constant-space operations require a fixed amount of memory, linear-space operations grow proportionally with the input size, and quadratic-space operations experience rapid memory growth. Understanding these differences is essential for designing efficient programs that can handle large inputs without exhausting system resources.

---

**Author:** Ankit Kumar
