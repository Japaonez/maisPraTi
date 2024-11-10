package encapsulamento2;

public final class Retangulo extends Shape{
    private final double altura, largura;

    public Retangulo(double altura, double largura) {
        this.altura = altura;
        this.largura = largura;
    }

    @Override
    public double area() {
        return altura * largura;
    }
}
