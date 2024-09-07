import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//        System.out.println("Hello World!");
//        System.out.printf("Hello World!");
//        System.out.println("Hello World!");

        byte byteVar = 127;
        short shortVar = 32000;
        int intVar = 21000000;
        long longVar = 9000000000000000000L;

        float floatVar = 3.14F;
        double doubleVar = 3.14159265;

        char charVar = 'A';
        boolean booleanVar = true;

//        System.out.println("Byte: " + byteVar);
//        System.out.println("Short: " + shortVar);
//        System.out.println("Int: " + intVar);
//        System.out.println("Long: " + longVar);
//        System.out.println("Float: " + floatVar);
//        System.out.println("Double: " + doubleVar);
//        System.out.println("Char: " + charVar);
//        System.out.println("Boolean: " + booleanVar);
        System.out.printf("%.2f\n", floatVar);

        String nome = "Jhonata";

        System.out.println(nome);

        Locale.setDefault(Locale.US);
        System.out.printf("%.2f\n", floatVar);

        int a, b, c;
        double area;

        a = 5; b = 7; c = 3;
        area = (float)(a + b) / 2 * c;

        System.out.println("Area: " + area);

        Scanner sc = new Scanner(System.in);

        String idade = sc.next();

        System.out.println("Qual a sua idade?: " + idade);
    }
}