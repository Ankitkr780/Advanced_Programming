# E-Commerce Order Processing System Using SOLID Principles

## Problem Statement

Design a system in java/python for processing customer orders in an e-commerce platform.

An order system should support:

* Multiple payment methods (Credit Card, UPI, Wallet, etc.)
* Multiple notification channels (Email, SMS, Push)
* Different order types (Regular Order, Discounted Order, Priority Order)
* Ability to store order data using different storage mechanisms (Database, File, etc.)

### Design Constraints (Must Apply SOLID Principles)

Your design must satisfy the SOLID principles as follows:

#### 1. Single Responsibility Principle (SRP)

Each class should have a single responsibility (e.g., order logic, payment processing, notification, storage should be separate).

#### 2. Open/Closed Principle (OCP)

You should be able to add:

* New payment methods
* New notification types

Without modifying existing classes.

#### 3. Liskov Substitution Principle (LSP)

All subclasses (e.g., payment types, order types) should work correctly when used through their base type. No subclass should break expected behavior.

#### 4. Interface Segregation Principle (ISP)

Avoid large interfaces. Design small, role-specific interfaces (e.g., don’t force all classes to implement unused methods).

#### 5. Dependency Inversion Principle (DIP)

High-level classes (e.g., `OrderService`) must depend on abstractions, not concrete implementations. Use dependency injection.

### Your system should:

* Create an order
* Process payment using a selected payment method
* Send notification after successful order
* Save order details using a storage mechanism

## Example

### Sample Output

```text id="k42cyw"
========== ORDER PROCESSING ==========
[UPI] Payment of ₹5000 successful.
[Database] Order saved:
Order ID: 101, Customer: Ankit, Amount: ₹5000
[Email] Order 101 placed successfully.
======================================

========== ORDER PROCESSING ==========
[UPI] Payment of ₹3500 successful.
[Database] Order saved:
Order ID: 102, Customer: Rahul, Amount: ₹3500
[Email] Order 102 placed successfully.
======================================

========== ORDER PROCESSING ==========
[UPI] Payment of ₹7300 successful.
[Database] Order saved:
Order ID: 103, Customer: Priya, Amount: ₹7300
[Email] Order 103 placed successfully.
======================================
```

## Solution Overview

The system is designed around the SOLID principles to create a flexible and extensible e-commerce order processing framework.

The architecture separates responsibilities into independent components:

* Order management
* Payment processing
* Notification delivery
* Data storage

The `OrderService` acts as the coordinator and relies only on abstract interfaces. This allows new payment methods, notification channels, or storage mechanisms to be added without modifying existing code.

Dependency Injection is used to provide the required implementations at runtime, making the system highly configurable and maintainable.

## SOLID Principles Applied

### Single Responsibility Principle (SRP)

Each class performs exactly one task:

| Component            | Responsibility          |
| -------------------- | ----------------------- |
| Order Classes        | Store order information |
| Payment Classes      | Handle payments         |
| Notification Classes | Send notifications      |
| Storage Classes      | Persist order data      |
| OrderService         | Coordinate workflow     |

### Open/Closed Principle (OCP)

New implementations can be added without modifying existing code.

Examples:

```python id="h1j5ja"
class PayPalPayment(PaymentMethod):
```

```python id="n9sz0k"
class TelegramNotification(NotificationService):
```

The existing system remains unchanged.

### Liskov Substitution Principle (LSP)

All subclasses can replace their parent types:

```python id="g2d6hl"
PaymentMethod payment = UPIPayment()
```

```python id="cr1a9v"
PaymentMethod payment = WalletPayment()
```

Both behave correctly through the base abstraction.

### Interface Segregation Principle (ISP)

Separate interfaces are created for:

* Payment operations
* Notification operations
* Storage operations

Classes implement only the functionality they require.

### Dependency Inversion Principle (DIP)

`OrderService` depends on abstractions:

```python id="l4mr3z"
PaymentMethod
NotificationService
StorageService
```

instead of concrete classes.

Dependencies are injected through the constructor.

## System Workflow

```text id="gzcx3m"
Create Order
      │
      ▼
Process Payment
      │
      ▼
Save Order
      │
      ▼
Send Notification
```

Each stage is independent and replaceable.

## Complexity Analysis

Let:

* **N** = Number of orders processed

### Order Creation

* Time Complexity: O(1)
* Space Complexity: O(1)

### Payment Processing

```python id="szzp2j"
payment.pay()
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Order Storage

```python id="mslyl7"
storage.save_order()
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Notification Delivery

```python id="x94cpv"
send_notification()
```

* Time Complexity: O(1)
* Space Complexity: O(1)

### Processing N Orders

* Time Complexity: O(N)
* Space Complexity: O(1)

## Conclusion

This assignment demonstrates the design of a modular e-commerce order processing system using the SOLID principles. The architecture separates responsibilities, promotes extensibility, supports multiple payment and notification mechanisms, and enables dependency injection through abstractions. The resulting system is maintainable, scalable, and easy to extend with new business requirements while preserving existing functionality.

---

**Author:** Ankit Kumar
