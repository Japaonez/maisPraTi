import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

//        //Atividade 1
//        float c, f;
//        System.out.printf("Celsius: ");
//        c = sc.nextFloat();
//
//        f = (c * 9/5) + 32;
//
//        System.out.println("Fahrenheit: " + f);

//        //Atividade 1.5
//        int idade = 17;
//
//        if(idade >= 18)
//            System.out.println("Você é maior de idade!");
//        else
//            System.out.println("Você é menor de idade!");

//        //Atividade 2: Par ou Impar
//        int n;
//
//        System.out.print("Digite um numero: ");
//        n = sc.nextInt();
//
//        if(n % 2 == 0)
//            System.out.println("É par!");
//        else
//            System.out.println("É impar!");

//        //De para de dias com switch case
//        int dia = 1;
//
//        switch(dia){
//            case 1:
//                System.out.println("Domingo!");
//                break;
//            case 2:
//                System.out.println("Segunda-feira!");
//                break;
//            case 3:
//                System.out.println("Terca-feira!");
//                break;
//            case 4:
//                System.out.println("Quarta-feira!");
//                break;
//            case 5:
//                System.out.println("Quinta-feira!");
//                break;
//            case 6:
//                System.out.println("Sexta-feira!");
//                break;
//            case 7:
//                System.out.println("Sabado!");
//                break;
//            default:
//                System.out.println("Dia invalido!");
//                break;
//        }

//        //Atividade 3: ano bissexto!
//        int ano;
//
//        System.out.print("Digite o ano: ");
//        ano = sc.nextInt();
//
//        if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0)
//            System.out.println("O ano é bissexto");
//        else
//            System.out.println("O ano não é bissexto");

//        //Atividade 4: calculadora
//        double n1, n2;
//        char op;
//
//        System.out.print("Digite o numero 1: ");
//        n1 = sc.nextDouble();
//        System.out.print("Digite o numero 2: ");
//        n2 = sc.nextDouble();
//        System.out.print("Digite o operador: ");
//        op = sc.next().charAt(0);
//
//        switch(op){
//            case '+':
//                System.out.println("Resultado: " + (n1 + n2));
//                break;
//            case '-':
//                System.out.println("Resultado: " + (n1 - n2));
//                break;
//            case '*':
//                System.out.println("Resultado: " + (n1 * n2));
//                break;
//            case '/':
//                System.out.println("Resultado: " + (n1 / n2));
//                break;
//            default:
//                System.out.println("Invalido!");
//                break;
//        }

        //Atividade 5: simule um login basico que permita somente tres tentativas de login antes de bloquear o usuario
        int senha = 5, login;

        for(int i = 1; i < 4; i++){
            System.out.print("Digite a senha: ");
            login = sc.nextInt();

            if(senha == login){
                System.out.println("Logado com sucesso!");
                break;
            }else{
                System.out.println("Senha invalido! Tentativa " + i);
            }

            if(i == 3)
                System.out.println("Tentativa esgotado!");
        }
    }
}