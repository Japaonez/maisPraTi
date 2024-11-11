package org.example.exe5;

public class Bicicleta implements IMeioTransporte{
    @Override
    public void acelerar() {
        System.out.println("bicicleta acelerando!");
    }

    @Override
    public void frear() {
        System.out.println("bicicleta freiando!");
    }
}
