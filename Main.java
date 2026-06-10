import java.util.*;

class Account {
    private String accountNumber;
    private String ownerName;
    private double balance;

    
    public Account() {
        this("0000", "Unknown", 0.0);
    }

  
    public Account(String accountNumber, String ownerName, double balance) {
        if (balance < 0) {
            throw new IllegalArgumentException("Balance cannot be negative");
        }
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }


    public String getAccountNumber() {
        return accountNumber;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public double getBalance() {
        return balance;
    }

   
    public void setOwnerName(String ownerName) {
        if (ownerName == null || ownerName.isEmpty()) {
            throw new IllegalArgumentException("Invalid owner name");
        }
        this.ownerName = ownerName;
    }


    protected void setBalance(double balance) {
        this.balance = balance;
    }


    public void deposit(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit must be positive");
        }
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal must be positive");
        }
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }
        balance -= amount;
    }


    public void display() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Owner: " + ownerName);
        System.out.println("Balance: " + balance);
    }
}


class SavingsAccount extends Account {
    private double interestRate;

    public SavingsAccount(String accNo, String owner, double balance, double interestRate) {
        super(accNo, owner, balance);
        if (interestRate < 0) {
            throw new IllegalArgumentException("Invalid interest rate");
        }
        this.interestRate = interestRate;
    }

    public double calculateInterest() {
        return getBalance() * interestRate;
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Interest Rate: " + interestRate);
        System.out.println("Interest Earned: " + calculateInterest());
    }
}


class CurrentAccount extends Account {
    private double overdraftLimit;

    public CurrentAccount(String accNo, String owner, double balance, double overdraftLimit) {
        super(accNo, owner, balance);
        if (overdraftLimit < 0) {
            throw new IllegalArgumentException("Invalid overdraft limit");
        }
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void withdraw(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal must be positive");
        }

        if (amount > getBalance() + overdraftLimit) {
            throw new IllegalArgumentException("Exceeds overdraft limit");
        }

        setBalance(getBalance() - amount);
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Overdraft Limit: " + overdraftLimit);
    }
}


public class Main {
    public static void main(String[] args) {

        List<Account> accounts = new ArrayList<>();

        accounts.add(new SavingsAccount("A101", "Ankit", 10000, 0.05));
        accounts.add(new CurrentAccount("A102", "Rahul", 5000, 2000));

        for (Account acc : accounts) {
            acc.display();
            System.out.println("-------------------");
        }

      
        Account acc = accounts.get(0);

        acc.deposit(2000);
        acc.withdraw(1000);

     
         acc.withdraw(100);
    }
}