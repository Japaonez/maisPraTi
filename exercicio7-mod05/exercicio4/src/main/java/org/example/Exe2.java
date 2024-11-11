package org.example;

public class Exe2 {
    private Node head;
    private int count;

    private static class Node{
        String title;
        Node next;

        public Node(String title){
            this.title = title;
            this.next = null;
        }
    }

    public Exe2(){
        this.head = null;
        this.count = 0;
    }

    public void add(String title){
        Node node = new Node(title);

        if(this.head == null) {
            this.head = node;
            count++;
        } else if(count == 5) {
            remove(5);
            node.next = this.head;
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
            count++;
        }
    }

    public void remove(int index){
        if (this.head == null || index > count)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        Node current = this.head, previous = null;
        int count = 1;

        if(this.count == 1)
            this.head = null;
        else {
            while (current != null && count < index) {
                previous = current;
                current = current.next;
                count++;
            }
        }

        if (current == null)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        previous.next = current.next;
    }

    public void mostrar(){
        Node current = this.head;

        for(int i = 0; i < count; i++){
            System.out.println(current.title);
            current = current.next;
        }
    }
}
