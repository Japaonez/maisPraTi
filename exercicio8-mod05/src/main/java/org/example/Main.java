package org.example;

import org.example.exe1.Produto;
import org.example.exe2.Produto2;
import org.example.exe5.Bicicleta;
import org.example.exe5.Carro;
import org.example.exe5.IMeioTransporte;
import org.example.exe5.Trem;
import org.example.exe6.Animal;
import org.example.exe6.Cachorro;
import org.example.exe6.Gato;
import org.example.exe6.Vaca;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Produto2 a = new Produto2();
        a.setPreco(10);
        System.out.println(a.getPreco());
        a.aplicarDesconto(51);
        System.out.println(a.getPreco());

        List<IMeioTransporte> veiculo = new ArrayList<IMeioTransporte>();
        veiculo.add(new Carro());
        veiculo.add(new Bicicleta());
        veiculo.add(new Trem());

        for(IMeioTransporte v : veiculo){
            v.acelerar();
            v.frear();
        }

        List<Animal> animal = new ArrayList<>();
        animal.add(new Cachorro());
        animal.add(new Gato());
        animal.add(new Vaca());

        for(Animal ani : animal){
            ani.emitirSom();
        }
    }
}