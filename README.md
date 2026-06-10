# Banking System Using Inheritance, Polymorphism, and Encapsulation in Java

## Problem Statement

Design a banking system in Java with:

A base class `Account` containing private fields:

* `accountNumber`
* `ownerName`
* `balance`

Provide getters/setters and at least two constructors (use constructor chaining).

Implement:

* `deposit()`
* `withdraw()`

with proper validation.

Add a `display()` method.

### Extend it with:

#### SavingsAccount

* Add `interestRate`
* Override `display()`
* Show calculated interest

#### CurrentAccount

* Add `overdraftLimit`
* Restrict withdrawals accordingly

### Your implementation should clearly show:

* Proper encapsulation (no direct field access)
* Use of constructor overloading and chaining (`this(...)`)
* Inheritance and method overriding (use `@Override` and `super`)
* Polymorphism by storing objects in an `Account` reference list and calling `display()`
* Basic validation/debugging (e.g., assert or exception for invalid operations)

## Example

### Sample Output

```text
Account Number: A101
Owner: Ankit
Balance: 10000.0
Interest Rate: 0.05
Interest Earned: 500.0
-------------------

Account Number: A102
Owner: Rahul
Balance: 5000.0
Overdraft Limit: 2000.0
-------------------
```

After transactions:

```text
Deposit: 2000
Withdrawal: 1000
Withdrawal: 100

Updated Balance: 10900.0
```

## Solution Overview

The program models a banking system using object-oriented programming principles. A common `Account` base class stores account details and provides standard banking operations such as deposit and withdrawal.

Two specialized account types extend the base functionality:

* `SavingsAccount`
* `CurrentAccount`

The design demonstrates encapsulation through private fields, inheritance through subclassing, method overriding for customized behavior, and polymorphism by storing different account types in a common `Account` reference list.

## OOP Concepts Demonstrated

### 1. Encapsulation

The fields:

```java
private String accountNumber;
private String ownerName;
private double balance;
```

are declared private and accessed only through getters and setters.

This prevents direct modification of sensitive account data.

### 2. Constructor Overloading and Chaining

The default constructor uses:

```java
this("0000", "Unknown", 0.0);
```

which delegates initialization to another constructor.

Benefits:

* Avoids duplicate code
* Centralizes validation logic
* Demonstrates constructor chaining

### 3. Inheritance

The following classes inherit from `Account`:

```java
SavingsAccount
CurrentAccount
```

Common functionality is reused while allowing specialized behavior.

### 4. Method Overriding

#### SavingsAccount

Overrides:

```java
display()
```

to show:

* Interest rate
* Interest earned

#### CurrentAccount

Overrides:

```java
withdraw()
```

to support overdraft facilities.

Also overrides:

```java
display()
```

to show overdraft information.

### 5. Polymorphism

Different account types are stored using a common reference:

```java
List<Account> accounts = new ArrayList<>();
```

Example:

```java
accounts.add(new SavingsAccount(...));
accounts.add(new CurrentAccount(...));
```

When:

```java
acc.display();
```

is called, Java automatically invokes the appropriate overridden method based on the actual object type.

## Validation Features

### Account Validation

Checks:

```java
balance >= 0
```

Invalid balances throw:

```java
IllegalArgumentException
```

### Deposit Validation

Checks:

```java
amount > 0
```

### Withdrawal Validation

Checks:

```java
amount > 0
```

and

```java
amount <= balance
```

for normal accounts.

### Current Account Validation

Allows withdrawal up to:

```java
balance + overdraftLimit
```

Preventing overdraft abuse.

### Interest Rate Validation

Checks:

```java
interestRate >= 0
```

### Owner Name Validation

Rejects:

```java
null
empty string
```

values.

## Class Relationships

```text
Account
│
├── SavingsAccount
│      └── Interest Calculation
│
└── CurrentAccount
       └── Overdraft Facility
```

## Complexity Analysis

All operations in this implementation involve direct field access and arithmetic operations.

### Constructor Execution

* Time Complexity: O(1)
* Space Complexity: O(1)

### Deposit

```java
deposit(amount)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Withdrawal

```java
withdraw(amount)
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Interest Calculation

```java
calculateInterest()
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Display Operation

```java
display()
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Iterating Through Accounts

```java
for (Account acc : accounts)
```

Let:

* **N** = Number of accounts

Then:

* Time Complexity: O(N)
* Space Complexity: O(1)

## Conclusion

This assignment demonstrates core object-oriented programming concepts in Java through a banking management system. The design utilizes encapsulation to protect account data, constructor chaining to simplify initialization, inheritance to extend functionality, and method overriding to customize account behavior. Polymorphism allows different account types to be managed through a common interface, while validation logic ensures safe and consistent banking operations. The resulting system is modular, extensible, and aligned with good software design practices.

---

**Author:** Ankit Kumar
