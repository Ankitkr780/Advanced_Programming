# Time Complexity Analysis in C

## Problem Statement

Write a C program to analyze the execution time of algorithms with different time complexities: constant time **O(1)**, linear time **O(n)**, and quadratic time **O(n²)**. The program should allow the user to provide multiple input sizes and measure the time consumed by each algorithm for those inputs.

## Example

### Input

```text
Enter the number of samples
3

Enter sample 1 :1000
Enter sample 2 :5000
Enter sample 3 :10000
```

### Output

```text
Input size n = 1000
O(1)   Time: 0.000000 seconds
O(n)   Time: 0.000001 seconds
O(n^2) Time: 0.002341 seconds

Input size n = 5000
O(1)   Time: 0.000000 seconds
O(n)   Time: 0.000005 seconds
O(n^2) Time: 0.058732 seconds

Input size n = 10000
O(1)   Time: 0.000000 seconds
O(n)   Time: 0.000010 seconds
O(n^2) Time: 0.235681 seconds
```

### Explanation

The program measures the execution time of three functions representing different complexity classes. As the input size increases, the constant-time function remains nearly unchanged, the linear-time function grows proportionally with the input size, and the quadratic-time function grows much more rapidly.

## Solution Overview

The program implements three separate functions corresponding to constant, linear, and quadratic time complexities. The `clock()` function from the C Standard Library is used to record the execution time before and after each function call.

By running the functions on progressively larger input sizes, the program demonstrates how execution time scales with different algorithmic complexities. This provides a practical understanding of the relationship between input size and computational cost.

## Complexity Analysis

| Function       | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| Constant Time  | O(1)            | O(1)             |
| Linear Time    | O(n)            | O(1)             |
| Quadratic Time | O(n²)           | O(1)             |

## Conclusion

This program experimentally demonstrates the impact of algorithmic complexity on execution time. While constant-time operations remain unaffected by input size, linear-time operations grow proportionally, and quadratic-time operations exhibit significantly higher growth. The results highlight the importance of selecting efficient algorithms when working with large datasets.

---

**Author:** Ankit Kumar
