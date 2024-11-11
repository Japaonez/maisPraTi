package org.example;

public class Exe7 {
    private Node first, last;

    private static class Node{
        int print;
        Node next;

        public Node(int print){
            this.print = print;
            this.next = null;
        }
    }

    public Exe7(){
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

        int data = this.first.print;
        this.first = this.first.next;

        if(this.first == null)
            this.last = null;

        return data;
    }

    public void show(){
        Node current = this.first;

        while(current != null){
            System.out.print(current.print + " ");
            current = current.next;
        }
        System.out.println();
    }
}
