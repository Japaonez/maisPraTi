package threads;

import java.util.List;
import java.util.concurrent.ForkJoinPool;

public class ParallelismExample{
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13);

        ForkJoinPool forkJoinPool = new ForkJoinPool(Runtime.getRuntime().availableProcessors());

        forkJoinPool.submit(() -> {
            numbers.parallelStream().forEach(number -> {
                System.out.println("Número " + number + " - " + Thread.currentThread().getName());
                try{
                    Thread.sleep(1000);
                }catch (InterruptedException e){
                    e.printStackTrace();
                }
            });
        }).join();

        forkJoinPool.shutdown();
    }
}
