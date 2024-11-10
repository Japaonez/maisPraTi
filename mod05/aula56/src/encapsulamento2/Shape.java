package encapsulamento2;

public abstract sealed class Shape permits Circulo, Retangulo{
    public abstract double area();

    public static void main(String[] args) {
        Shape circulo = new Circulo(5), retangulo = new Retangulo(10, 4);

        System.out.println(circulo.area());
        System.out.println(retangulo.area());

        Point point = new Point(3, 5), point2 = new Point(5, 8);

        System.out.println(point);
        System.out.println(point2);
    }
}

