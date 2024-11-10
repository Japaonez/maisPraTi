package stack;

public class StackOverflowExemple {
    public static void recursiveCall(int i){
        System.out.println("Chamando recursivamente " + i++);
        recursiveCall(i);
    }

    public static void main(String[] args) {
        try{
            recursiveCall(1);
        }catch(StackOverflowError e){
            System.err.println(e);
        }
    }
}
