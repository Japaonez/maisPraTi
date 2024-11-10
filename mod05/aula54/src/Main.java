import abstracao.Pessoa;

public class Main {
    public static void main(String[] args) {
        Pessoa um = new Pessoa(), dois = new Pessoa("Joao", 1.70, 20, 'm');

        um.idade = 20;
    }
}