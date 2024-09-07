public class Main {
    public static void main(String[] args) {
        int[] vetor = new int[5];
        int[] vetorInicializado = {1, 2, 3 , 4, 5};

        vetor[0] = 10;
        vetor[1] = 20;
        vetor[2] = 30;
        vetor[3] = 40;
        vetor[4] = 50;

//        //Reverter o array
//        int[] alt = new int[5];
//
//        for(int i = 0; i < vetor.length; i++)
//            alt[vetor.length - i - 1] = vetor[i];
//
//        for(int i = 0; i < vetor.length; i++) {
//            vetor[i] = alt[i];
//            System.out.println("vetor: " + vetor[i]);
//        }
//
//        //Adicionar elemento em um array
//        int[] vetorNovo = new int[vetor.length + 1];
//
//        for(int i = 0; i < vetor.length; i++)
//            vetorNovo[i] = vetor[i];
//
//        vetorNovo[vetor.length] = 1;
//
//        //Removendo elemento em um array
//        int count = 0;
//
//        for(int i = 0; i < vetor.length; i++){
//            if(vetor[i] == 20)
//                count++;
//        }
//
//        int vetorRemovido[] = new int[count];
//        count = 0;
//
//        for(int i = 0; i < vetor.length; i++){
//            if(vetor[i] == 20){
//                vetorRemovido[count] = vetor[i];
//                count++;
//            }
//        }
//
//        //Pequisando elemento
//        for(int i = 0; i < vetor.length; i++){
//            if(vetor[i] == 30)
//                System.out.println(i);
//        }

        //matriz
        int[][] matriz = {
                {1, 2, 3},
                {10, 20, 30},
                {100, 200, 300}
        };

//        int soma = 0;
//
//        for(int[] row : matriz){
//            for(int value : row){
//                System.out.println(value + "");
//                soma += value;
//            }
//            System.out.println();
//        }
//
//        System.out.println(soma);

        //Somando as diagonais
        int diagPrin = 0, diagSecun = 0;

        for(int i = 0; i < matriz.length; i++){
            diagPrin += matriz[i][i];
            diagSecun += matriz[matriz.length - i - 1][i];
        }

        System.out.println(diagPrin + " " + diagSecun);

        //Rotacionar matriz
        int matrizRota[][] = new int[3][3];

        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz.length; j++){
                matrizRota[i][j] = matriz[matriz.length - j - 1][i];
            }
        }

        for(int[] row : matrizRota){
            for(int value : row){
                System.out.println(value);
            }
            System.out.println();
        }

        //busque elemento na matriz
        for(int i = 0; i < matriz.length; i++){
            for(int j = 0; j < matriz.length; j++){
                if(matriz[i][j] == 100){
                    System.out.println("Linha: " + i + " Coluna: " + j);
                }
            }
        }
    }
}