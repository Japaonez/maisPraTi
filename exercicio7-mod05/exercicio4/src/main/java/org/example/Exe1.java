package org.example;

public class Exe1 {
    private Node head;

    private static class Node {
        String task;
        boolean completed;
        Node next;

        public Node(String task) {
            this.task = task;
            this.completed = false;
            this.next = null;
        }
    }

    public Exe1() {
        this.head = null;
    }

    public void add(String task){
        Node node = new Node(task);

        if(this.head == null)
            this.head = node;
        else{
            Node current = this.head;
            while(current.next != null){
                current = current.next;
            }

            current.next = node;
        }
    }

    public String get(int index){
        Node current = this.head;
        int count = 0;

        while(current != null){
            if (count == index) {
                return current.task + " " + current.completed;
            }

            count++;
            current = current.next;
        }

        throw new IndexOutOfBoundsException("Index fora dos limites/invalido");
    }

    public void remove(int index){
        if (this.head == null)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        if(index == 0) {
            this.head = this.head.next;
            return;
        }

        int count = 0;
        Node previous = null, current = this.head;

        while(current != null && count < index){
            previous = current;
            current = current.next;
            count++;
        }

        if (current == null)
            throw new IndexOutOfBoundsException("Index fora dos limites/invalido");

        previous.next = current.next;
    }

    public String completed(int index){
        Node current = this.head;
        int count = 0;

        while(current != null){
            if (count == index) {
                current.completed = true;
                return current.task + " " + current.completed;
            }

            count++;
            current = current.next;
        }

        throw new IndexOutOfBoundsException("Index fora dos limites/invalido");
    }
}
