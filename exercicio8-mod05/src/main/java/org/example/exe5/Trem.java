package org.example.exe5;

public class Trem implements IMeioTransporte{
    @Override
    public void acelerar() {
        System.out.println("trem acelerando!");
    }

    @Override
    public void frear() {
        System.out.println("trem freiando!");
    }
}
