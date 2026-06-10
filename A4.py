products = [
    {"name": "Laptop", "quantity": 15},
    {"name": "Mouse", "quantity": 8},
    {"name": "Keyboard", "quantity": 5},
    {"name": "Monitor", "quantity": 12},
    {"name": "USB Cable", "quantity": 3},
    {"name": "Headphones", "quantity": 20},
    {"name": "Webcam", "quantity": 7},
    {"name": "Speaker", "quantity": 14},
    {"name": "External HDD", "quantity": 6},
    {"name": "Microphone", "quantity": 11}
]

n = int(input("How many additional products do you want to add?"))

for _ in range(n):
    name = input("Enter product name: ")
    quantity = int(input("Enter quantity: "))
    products.append({"name": name, "quantity": quantity})

print("\nProducts with stock less than 10:\n")

for product in products:
    if product["quantity"] < 10:
        print(f"{product['name']} - Stock: {product['quantity']}")
