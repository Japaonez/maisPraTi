package tree;

class Node{
    int value;
    Node left, right;

    Node(int value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node root;

    BinaryTree(){
        this.root = null;
    }

    public void add(int value){
        this.root = addRecursive(this.root, value);
    }

    private Node addRecursive(Node current, int value){
        if(current == null)
            return new Node(value);

        if(value < current.value)
            current.left = addRecursive(current.left, value);
        else if(value > current.value)
            current.right = addRecursive(current.right, value);

        return current;
    }

    public void print(Node root){
        if(root == null)
            return;

        print(root.left);
        System.out.println(root.value);
        print(root.right);
    }

    public void remove(int value){
        this.root = removeRecursive(this.root, value);
    }

    private Node removeRecursive(Node current, int value){
        if(current == null)
            return null;

        if(value < current.value)
            current.left = removeRecursive(current, value);
        else if(value > current.value)
            current.right = removeRecursive(current, value);
        else{
            if(current.left == null && current.right == null)
                return null;

            if(current.left == null)
                return current.right;
            else if(current.right == null)
                return current.left;

            int smallestValue = findSmallestValue(current.right);
            current.value = smallestValue;
            current.right = removeRecursive(current.right, smallestValue);
        }

        return current;
    }

    private int findSmallestValue(Node root){
        return root.left == null ? root.value : findSmallestValue(root.left);
    }

    public static void main(String[] args) {
        BinaryTree arvore = new BinaryTree();

        arvore.add(10);
        arvore.add(34);
        arvore.add(1);
        arvore.add(2);
        arvore.add(22);

        arvore.print(arvore.root);
    }
}
