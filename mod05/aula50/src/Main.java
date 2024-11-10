import lists.CustomList;
import lists.SingleLinkedList;

public class Main {
    public static void main(String[] args) {
        CustomList list = new CustomList();

        list.add(10);
        list.add(2);
        list.add(150);
        list.add(52);
        list.add(11);

        System.out.println(list);

        System.out.println(list.get(2));
        list.remove(3);

        System.out.println(list);

        SingleLinkedList single = new SingleLinkedList();

        System.out.println(single.isEmpty());
        single.add(10);
        System.out.println(single.size());
        System.out.println(single.get(1));
        single.remove(1);
    }
}