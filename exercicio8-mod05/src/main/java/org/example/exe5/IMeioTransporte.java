package org.example.exe5;

public interface IMeioTransporte {
    public default void acelerar(){
        System.out.println("acelerando!");
    }

    public default void frear(){
        System.out.println("freiando!");
    }
}
