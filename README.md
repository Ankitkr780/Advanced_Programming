# User Onboarding Validation Module Using Custom Exceptions and Pytest

## Problem Statement

Build a user onboarding validation module for a platform. Your objective is to create a core validation class that processes incoming application data—specifically a user's email address and age—and enforces strict business constraints before allowing a registration to complete.

The system must ensure that the email string is neither null nor empty, and that it conforms to a standard email format matching the regular expression patterns outlined in the slides (containing a valid identifier, an @ symbol, and a domain name). Additionally, the system must enforce a strict age restriction where applicants must be at least 18 years old to create an account.

### Implementation Rules

#### If choosing Java:

You must implement a checked exception named `InvalidEmailException` and an unchecked (`RuntimeException`) exception named `UnderageException`.

Create a `RegistrationService` class containing a method:

```java
public boolean registerUser(String email, int age) throws InvalidEmailException
```

You must include an internal assert statement to guarantee that the inputs are not processed if the system context is invalid.

Finally, write a JUnit 5 test suite named `RegistrationServiceTest` that uses a `@BeforeEach` setup method, validates successful registrations, and uses `assertThrows` to verify that both custom exceptions are thrown under incorrect conditions.

#### If choosing Python:

You must implement a custom exception named `InvalidEmailError` and another named `UnderageError`, both inheriting from the appropriate built-in exception classes.

Create a `RegistrationService` class containing a method:

```python
def register_user(self, email: str, age: int) -> bool
```

Use an internal assert statement to verify basic state invariants.

Finally, write a pytest suite using a shared `@pytest.fixture` for configuration, validating successful workflows, and utilizing `pytest.raises` to assert that your custom errors are raised appropriately during invalid inputs.

### You must have the followings:

#### Custom Exception Design

Correctly establishing checked vs. unchecked hierarchies (Java) or appropriate base class inheritance (Python) with descriptive, dynamic error messages.

#### Core Service Validation

Implementing the regex parsing, age boundary checks, invariant assertions, and proper exception triggering.

#### Unit Testing Suite

Writing comprehensive test cases using the correct framework assertions, proper test lifecycle setup (fixtures/before-each), and targeted exception testing.

## Example

### Successful Registration

#### Input

```python
service.register_user("ankit123@example.com", 20)
```

#### Output

```text
True
```

### Invalid Email

#### Input

```python
service.register_user("ankit.example.com", 20)
```

#### Output

```text
InvalidEmailError:
Invalid email format: 'ankit.example.com'
```

### Underage User

#### Input

```python
service.register_user("user@example.com", 17)
```

#### Output

```text
UnderageError:
User age 17 is below the minimum required age of 18
```

## Solution Overview

The implementation uses a dedicated `RegistrationService` class responsible for validating user registration requests. Validation is performed in stages: checking for empty or null email values, verifying email format using a regular expression, and enforcing the minimum age requirement.

Custom exception classes provide meaningful error reporting while maintaining a clean separation between validation logic and error handling. Automated tests built with pytest verify both successful and failure scenarios, ensuring the correctness and reliability of the registration module.

## Complexity Analysis

Let **N** be the length of the email string.

### Email Validation

The regular expression match examines the email string.

* **Time Complexity:** O(N)
* **Space Complexity:** O(1)

### Age Validation

Simple integer comparison.

* **Time Complexity:** O(1)
* **Space Complexity:** O(1)

### Registration Process

The dominant operation is regex matching.

* **Time Complexity:** O(N)
* **Space Complexity:** O(1)

### Unit Tests

Each test performs a constant number of validation operations.

* **Time Complexity:** O(N)
* **Space Complexity:** O(1)

## Conclusion

This assignment demonstrates robust user input validation using custom exceptions, assertions, regular expressions, and automated testing. The solution enforces strict business rules for email and age validation while providing descriptive error messages and comprehensive test coverage. By combining service-oriented design with pytest-based verification, the implementation ensures both correctness and maintainability.

---

**Author:** Ankit Kumar
