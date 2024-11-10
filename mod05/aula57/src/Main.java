import polymorphism.Animal;
import polymorphism.Cachorro;
import polymorphism.Gato;

public class Main {
    public static void main(String[] args) {
        Animal a = new Animal();
        Cachorro c = new Cachorro();
        Gato g = new Gato();

        a.som();
        c.som();
        g.som();
    }
}