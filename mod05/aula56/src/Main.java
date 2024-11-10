import singleton.ConfigurationManager;

public class Main {
    public static void main(String[] args) {
        ConfigurationManager config = ConfigurationManager.getInstance();
        String dbUser = config.getProperties("db.user");

        System.out.println(dbUser);
    }
}