import java.util.ArrayList;
import java.util.Scanner;

public class A3{
    public static void main(String[] args) {
        ArrayList<String> books = new ArrayList<>();

        books.add("Java Programming");
        books.add("Python Basics");
        books.add("Data Structures in Java");
        books.add("Machine Learning Guide");
        books.add("Introduction to Algorithms");
        books.add("Operating System Concepts");
        books.add("Computer Networks");
        books.add("Database Management Systems");
        books.add("Artificial Intelligence Basics");
        books.add("Clean Code");
        books.add("Design Patterns in Java");
        books.add("Deep Learning with Python");
        books.add("Competitive Programming Handbook");


        Scanner sc = new Scanner(System.in);
        System.out.print("Enter word to search in book titles: ");
        String word = sc.nextLine().toLowerCase();

        System.out.println("Matching books:");
        boolean found = false;

        for (String book : books) {
            if (book.toLowerCase().contains(word)) {
                System.out.println(book);
                found = true;
            }
        }
        

        if (!found) {
            System.out.println("No matching books found.");
        }
        sc.close();
    }
}
