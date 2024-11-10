package encapsulamento;

public class BancoTransacao implements Transacao{
    private final ContaBancaria conta;
    private final TipoTransacao tipo;
    private final double saldo;

    public enum TipoTransacao {
        DEPOSITO,
        SAQUE
    }

    public BancoTransacao(ContaBancaria conta, double saldo, TipoTransacao tipo){
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = tipo;
    }

    @Override
    public void execute() {
        switch (tipo){
            case DEPOSITO -> this.conta.depositar(saldo);
            case SAQUE -> this.conta.sacar(saldo);
        }
    }

    @Override
    public String getDetails() {
        return String.format("%s com valor de %.2f na conta %s", this.tipo, this.saldo, this.conta.getNumConta());
    }
}
