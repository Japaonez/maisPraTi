package org.example.exe8;

public class Funcionario{
    private double salario;

    public Funcionario(double salario){
        this.salario = salario;
    }

    protected class Estagiario extends Funcionario{
        public Estagiario(double salario) {
            super(salario * 0.8);
        }
    }

    protected class Desenvolvedor extends Funcionario{
        public Desenvolvedor(double salario) {
            super(salario);
        }
    }

    protected class Gerente extends Funcionario{
        public Gerente(double salario) {
            super(salario * 1.2);
        }
    }

    
}