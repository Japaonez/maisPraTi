package org.example;

public class Exe4 {
    private Node head;
    private int count;
    private String aux;

    private static class Node{
        String action;
        Node next, previous;

        public Node(String action){
            this.action = action;
            this.next = null;
            this.previous = null;
        }
    }

    public Exe4(){
        this.head = null;
        this.count = 0;
        this.aux = null;
    }

    public void add(String title){
        Node node = new Node(title);

        if(this.head == null) {
            this.head = node;
            count++;
        } else if(count == 5) {
            remove(5);
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
            count++;
        }
    }

    public void remove(int index){
        if (this.head == null || index > count)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        Node current = this.head, previous = null;
        int count = 1;

        if(this.count == 1) {
            aux = this.head.action;
            this.head = null;
        }else {
            while (current != null && count < index) {
                previous = current;
                current = current.next;
                count++;
            }
        }

        if (current == null)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        aux = current.action;
        if(current.next != null)
            current.next.previous = previous;

        previous.next = current.next;
    }

    public void show(){
        Node current = this.head;

        for(int i = 0; i < count; i++){
            System.out.println(current.action);
            current = current.next;
        }
    }

    public void undo(){
        if (this.head == null)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        aux = this.head.action;
        this.head = this.head.next;
        this.count--;
    }

    public void redo(){
        if(aux != null){
            add(aux);
            aux = null;
        }else
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");
    }
}
