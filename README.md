# Producer-Consumer Synchronization Using POSIX Threads and Semaphores in C

## Problem Statement

Develop a multithreaded C program using POSIX threads where multiple threads coordinate access to a shared resource using either semaphores or condition variables. You may implement a simple producer-consumer system, limited resource access system, or thread scheduling simulation. The program should ensure that threads wait correctly when the resource is unavailable and continue execution only when signaled. Demonstrate proper synchronization, safe shared-memory access, and thread communication using functions such as `sem_wait()`, `sem_post()`, `pthread_cond_wait()`, or `pthread_cond_signal()`. Print messages showing thread execution order and explain how synchronization prevents inconsistent behavior.

## Example

### Output

```text
Producer produced item 1 at position 0
Consumer consumed item 1 from position 0

Producer produced item 2 at position 1
Consumer consumed item 2 from position 1

Producer produced item 3 at position 2
Consumer consumed item 3 from position 2

...

Execution completed successfully.
```

> Note: The exact ordering of messages may vary depending on thread scheduling by the operating system.

### Explanation

The producer thread inserts items into a bounded circular buffer, while the consumer thread removes items from it. Semaphores ensure that the producer waits when the buffer is full and the consumer waits when the buffer is empty. A mutex protects the shared buffer and index variables from concurrent access.

## Solution Overview

The program implements the classical Producer-Consumer problem using POSIX threads, semaphores, and a mutex. Two counting semaphores track the number of empty and occupied slots in the buffer, while a mutex ensures that only one thread can modify the shared buffer at a time.

The producer generates items and places them into the buffer, signaling the consumer when new data becomes available. The consumer retrieves items from the buffer and signals the producer when space becomes available again. This coordination guarantees safe communication between threads and prevents race conditions.

## Synchronization Mechanisms Used

### Semaphore: `empty`

Tracks available slots in the buffer.

```c
sem_wait(&empty);
sem_post(&empty);
```

### Semaphore: `full`

Tracks occupied slots in the buffer.

```c
sem_wait(&full);
sem_post(&full);
```

### Mutex

Protects the critical section where shared variables are accessed.

```c
pthread_mutex_lock(&mutex);
pthread_mutex_unlock(&mutex);
```

## How Synchronization Prevents Inconsistent Behavior

Without synchronization, both producer and consumer could access the shared buffer simultaneously. This may lead to:

* Race conditions
* Data corruption
* Reading invalid values
* Lost updates

The mutex ensures that only one thread accesses the critical section at a time. The semaphores guarantee that:

* The producer never writes to a full buffer.
* The consumer never reads from an empty buffer.

As a result, all operations occur safely and in the correct order.

## Complexity Analysis

Let:

* **N** = Number of items produced and consumed
* **B** = Buffer size

### Producer Operation

For each item:

* Semaphore wait
* Mutex lock
* Buffer insertion
* Mutex unlock
* Semaphore signal

**Time Complexity:** O(1)

**Space Complexity:** O(1)

### Consumer Operation

For each item:

* Semaphore wait
* Mutex lock
* Buffer removal
* Mutex unlock
* Semaphore signal

**Time Complexity:** O(1)

**Space Complexity:** O(1)

### Complete Execution

Processing all items:

**Time Complexity:** O(N)

**Space Complexity:** O(B)

where **B** is the buffer size.

For this implementation:

```text
BUFFER_SIZE = 5
```

so the buffer space remains constant.

## Conclusion

This assignment demonstrates thread synchronization and communication using POSIX threads, semaphores, and mutexes. The Producer-Consumer model ensures that threads coordinate correctly when accessing shared resources. Semaphores manage resource availability, while mutexes protect critical sections, preventing race conditions and maintaining data consistency throughout execution.

---

**Author:** Ankit Kumar
