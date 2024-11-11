package org.example;

public class Exe8 {
    private Node first, last;

    private static class Node{
        int pass;
        Node next;

        public Node(int pass){
            this.pass = pass;
            this.next = null;
        }
    }

    public Exe8(){
        this.first = null;
        this.last = null;
    }

    public void enqueue(int data){
        Node node = new Node(data);

        if (this.last == null) {
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }
    }

    public int dequeue(){
        if (this.first == null) {
            throw new IllegalStateException("Fila vazia");
        }

        int data = this.first.pass;
        this.first = this.first.next;

        if(this.first == null)
            this.last = null;

        return data;
    }

    public void show(){
        Node current = this.first;

        while(current != null){
            System.out.print(current.pass + " ");
            current = current.next;
        }
        System.out.println();
    }
}
