package encapsulamento;

public class ContaBancaria {
    private String numConta;
    private double saldo;

    public ContaBancaria(String numConta, double saldoInicial){
        this.numConta = numConta;
        this.saldo = saldoInicial;
    }

    public String getNumConta() {
        return numConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public void depositar(double montante){
        if(montante > 0)
            this.saldo += montante;
        else
            throw new IllegalArgumentException("O valor do depósito deve ser positivo.");
    }

    public void sacar(double montante){
        if(montante > 0 && montante <= this.saldo)
            this.saldo -= montante;
        else
            throw new IllegalArgumentException("O valor do saque deve ser positivo");
    }
}
