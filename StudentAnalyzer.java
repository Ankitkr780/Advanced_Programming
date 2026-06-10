import java.util.*;
import java.util.stream.Collectors;

class Student {
    private final int id;
    private final String name;
    private final List<String> courses;
    private final Map<String, Integer> scores;

    public Student(int id, String name, List<String> courses, Map<String, Integer> scores) {
        this.id = id;
        this.name = name;
        this.courses = new ArrayList<>(courses);
        this.scores = new HashMap<>(scores);
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public List<String> getCourses() { return courses; }

    public int getScoreForCourse(String course) {
        return scores.getOrDefault(course, 0);
    }

    public double getAverageScore() {
        if (courses.isEmpty()) return 0.0;
        return courses.stream()
                .mapToInt(this::getScoreForCourse)
                .average()
                .orElse(0.0);
    }
}

public class StudentAnalyzer {

    public static List<Student> getTopNStudents(List<Student> students, int n) {
        if (students == null || students.isEmpty() || n <= 0) {
            return new ArrayList<>();
        }

        return students.stream()
                .sorted(Comparator.comparingDouble(Student::getAverageScore).reversed())
                .limit(n)
                .collect(Collectors.toCollection(ArrayList::new));
    }

    public static Map<String, Double> getAverageScorePerCourse(List<Student> students) {
        if (students == null || students.isEmpty()) {
            return new HashMap<>();
        }

        return students.stream()
                .flatMap(student -> student.getCourses().stream()
                        .map(course -> new AbstractMap.SimpleEntry<>(
                                course, 
                                student.getScoreForCourse(course)
                        )))
                .collect(Collectors.groupingBy(
                        Map.Entry::getKey,
                        HashMap::new, 
                        Collectors.averagingInt(Map.Entry::getValue)
                ));
    }

    public static Set<String> getAllUniqueCourses(List<Student> students) {
        if (students == null || students.isEmpty()) {
            return new HashSet<>();
        }

        return students.stream()
                .flatMap(student -> student.getCourses().stream())
                .collect(Collectors.toCollection(HashSet::new));
    }

    public static void main(String[] args) {
        Student s1 = new Student(1, "Alice", Arrays.asList("Math", "Physics", "CS"), 
                Map.of("Math", 90, "Physics", 85, "CS", 92));
        Student s2 = new Student(2, "Bob", Arrays.asList("Math", "CS"), 
                Map.of("Math", 70));
        Student s3 = new Student(3, "Charlie", Arrays.asList("Physics", "Literature"), 
                Map.of("Physics", 78, "Literature", 88));
        Student s4 = new Student(4, "Diana", Arrays.asList("Math", "Biology"), 
                Map.of("Math", 95, "Biology", 90));
        Student s5 = new Student(5, "Eve", Arrays.asList("CS", "Literature"), 
                Map.of("CS", 85, "Literature", 91));
        Student s6 = new Student(6, "Frank", Arrays.asList("Math", "Physics", "Biology"), 
                Map.of("Math", 60, "Physics", 65, "Biology", 70));
        Student s7 = new Student(7, "Grace", Arrays.asList("Literature", "History"), 
                Map.of("Literature", 99, "History", 95));
        Student s8 = new Student(8, "Hank", Arrays.asList("CS", "History"), 
                Map.of("History", 80));
        Student s9 = new Student(9, "Ivy", Arrays.asList("Math", "Physics", "CS", "Biology"), 
                Map.of("Math", 88, "Physics", 92, "CS", 95, "Biology", 89));
        Student s10 = new Student(10, "Jack", Arrays.asList("History", "Literature"), 
                Map.of("History", 75, "Literature", 72));

        List<Student> batch = Arrays.asList(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);

        System.out.println("Top 3 Students:");
        getTopNStudents(batch, 3).forEach(s -> System.out.println(s.getName() + " (" + s.getAverageScore() + ")"));
        
        System.out.println("\nAverage per course:");
        getAverageScorePerCourse(batch).forEach((course, avg) -> System.out.println(course + ": " + avg));
        
        System.out.println("\nUnique courses: " + getAllUniqueCourses(batch));

        printComplexity();
    }

    private static void printComplexity() {
        System.out.println("\n--- Complexity Analysis ---");
        System.out.println("Time Complexity (Sorting): O(S log S)");
        System.out.println("Time Complexity (Averages): O(S * C)");
        System.out.println("Where S=Students, C=Avg Courses/Student, K=Unique Courses.");
    }
}