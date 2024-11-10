package encapsulamento2;

public final class Circulo extends Shape{
    private final double r;
    
    public Circulo(double r){
        this.r = r;
    }
    
    @Override
    public double area(){
        return Math.PI * Math.pow(r, 2);
    }
}
