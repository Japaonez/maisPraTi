package stack;

public class StackTest {
    public static void main(String[] args) {
        StackExample stack = new StackExample();

        stack.push(21);
        stack.push(145);
        stack.push(423);
        stack.push(52);

        System.out.println("Elemento topo: " + stack.peek());
        System.out.println("Elemento removido: " + stack.pop());
        System.out.println("Elemento topo: " + stack.peek());
    }
}
