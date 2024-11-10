package threads;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ConcurrencyExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        Runnable task1 = () -> {
            for(int i = 0; i < 10; i++){
                System.out.println("Task 1 - " + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e){
                    e.printStackTrace();
                }
            }
        };

        Runnable task2 = () -> {
            for(int i = 0; i < 10; i++){
                System.out.println("Task 2 - " + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e){
                    e.printStackTrace();
                }
            }
        };

        Runnable task3 = () -> {
            for(int i = 0; i < 10; i++){
                System.out.println("Task 3 - " + i);
                try {
                    Thread.sleep(333);
                } catch (InterruptedException e){
                    e.printStackTrace();
                }
            }
        };

        executor.submit(task1);
        executor.submit(task2);
        executor.submit(task3);

        executor.shutdown();
    }
}
