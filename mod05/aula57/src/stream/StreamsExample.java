package stream;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Integer> evenNumbers = numbers
                .stream()
                .filter(n -> n % 2 == 0)
                .map(n -> n * 2)
                .collect(Collectors.toList());

        System.out.println(evenNumbers);

        int sum = numbers.stream().reduce(0, Integer::sum);

        System.out.println(sum);

        List<String> names = Arrays.asList("Sherlock", "Tony", "Bruce", "Murdock", "Aang", "Logan", "Bilbo");

        names.stream().map(String::toUpperCase).forEach(System.out::println);
        //names.stream().map(a -> a.toUpperCase()).forEach(s -> System.out.println(s));
    }
}
