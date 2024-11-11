package org.example.exe3;

public class Funcionario {
    private String nome;
    private double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public double calcularBonus(){
        return getSalario();
    }

    public void trabalhar(){
        System.out.println("trabalhando!");
    }

    protected class Gerente extends Funcionario{
        public Gerente(String nome, double salario) {
            super(nome, salario);
        }

        @Override
        public double calcularBonus() {
            return super.calcularBonus() * 1.2;
        }

        @Override
        public void trabalhar() {
            System.out.println("gerente trabalhando!");
        }
    }

    protected class Desenvolvedor extends Funcionario{
        public Desenvolvedor(String nome, double salario) {
            super(nome, salario);
        }

        @Override
        public double calcularBonus() {
            return super.calcularBonus() * 1.1;
        }

        @Override
        public void trabalhar() {
            System.out.println("desenvolvedor trabalhando!");
        }
    }
}

