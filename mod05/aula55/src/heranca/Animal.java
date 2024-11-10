package heranca;

abstract class Animal {
    String nome;

    public Animal(String nome) {
        this.nome = nome;
    }

    abstract void emitirSom();
}
