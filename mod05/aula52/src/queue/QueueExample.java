package queue;
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();

        queue.add(12);
        queue.add(42);
        queue.add(115);

        System.out.println("Elemento da frente: " + queue.peek());

        System.out.println("Elemento removido: " + queue.poll());
    }
}
