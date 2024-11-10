package heranca;

public class Cachorro extends Animal{
    public Cachorro(String nome){
        super(nome);
    }

    void emitirSom(){
        System.out.println("au au");
    }
}
