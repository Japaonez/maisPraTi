package org.example.exe2;

import org.example.exe1.Produto;

public class Produto2 extends Produto {
    public void aplicarDesconto(double porcentagem){
        if(porcentagem <= 50)
            setPreco(getPreco() * porcentagem / 100);
        else
            System.out.println("Desconto não aplicado");

    }
}
