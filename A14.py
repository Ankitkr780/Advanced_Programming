import sys
import gc


class Node:
    def __init__(self, name):
        self.name = name
        self.link = None

    def __del__(self):
        print(f"{self.name} is finally destroyed")


A = Node("Node A")
B = Node("Node B")

A.link = B
B.link = A

print("Cycle created:")
print(f"A links to: {A.link.name}")
print(f"B links to: {B.link.name}")

print("\nReference Counts:")
print("Ref count of A:", sys.getrefcount(A))
print("Ref count of B:", sys.getrefcount(B))


import weakref

weak_A = weakref.ref(A)
weak_B = weakref.ref(B)


del A
del B

print("\nDeleted A and B variables.")


print("\nBefore garbage collection:")

if weak_A() is not None:
    print("Node A still exists in memory")

if weak_B() is not None:
    print("Node B still exists in memory")

print("\nRunning garbage collector...")

collected = gc.collect()

print("Unreachable objects collected:", collected)

print("\nAfter garbage collection:")

print("weak_A() ->", weak_A())
print("weak_B() ->", weak_B())