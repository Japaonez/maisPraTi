package stack;
import java.util.Stack;

public class StringReverser {
    public static String reverseString(String input){
        Stack<Character> stack = new Stack<>();
        for(char ch: input.toCharArray())
            stack.push(ch);

        String reversed = "";

        for(; !stack.isEmpty();)
            reversed = reversed.concat(stack.pop().toString());

        return reversed;
    }

    public static void main(String[] args) {
        String input = "Isso é um teste!";

        System.out.println(input);
        System.out.println(reverseString(input));
    }
}
