package org.example.exe5;

public class Carro implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("carro acelerando!");
    }

    @Override
    public void frear() {
        System.out.println("carro freiando!");
    }
}
