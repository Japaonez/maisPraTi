package polymorphism;

public class OperacaoMatematica {
    public static int add(int a, int b){
        return a + b;
    }

    public static int add(int a, int b, int c){
        return a + b + c;
    }

    public static double add(double a, double b){
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(OperacaoMatematica.add(1, 2.3));
    }
}
