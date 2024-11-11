package org.example;

public class Exe5 {
    private Node head;

    private static class Node{
        int carta;
        Node next, previous;

        public Node(int carta){
            this.carta = carta;
            this.next = null;
            this.previous = null;
        }
    }

    public Exe5(){
        this.head = null;
    }

    public void add(int carta){
        Node node = new Node(carta);

        if(this.head == null) {
            this.head = node;
        } else {
            Node current = this.head, previous = null;

            while(current.next != null){
                current = current.next;
            }

            current.next = node;
            node.previous = current;
        }
    }

    public void remove(int index){
        if (this.head == null)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        Node current = this.head, previous = null;
        int count = 1;

        if(index == 1) {
            this.head = this.head.next;
            this.head.next.previous = null;
        }else {
            while (current != null && count < index) {
                previous = current;
                current = current.next;
                count++;
            }
        }

        if (current == null)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        if(current.next != null)
            current.next.previous = previous;

        previous.next = current.next;
    }

    public void show(){
        Node current = this.head;

        for(int i = 0; current != null; i++){
            System.out.print(current.carta + " ");
            current = current.next;
        }
    }

    public void sort() {
        Node current, aux;
        int i;

        if (this.head == null) {
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");
        } else {
            for (current = this.head; current.next != null; current = current.next) {
                for (aux = current.next; aux != null; aux = aux.next) {
                    if (current.carta > aux.carta) {
                        i = current.carta;
                        current.carta = aux.carta;
                        aux.carta = i;
                    }
                }
            }
        }
    }
}
