import java.util.*;
public class Ques{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        HashMap<Integer,Integer> colors = new HashMap<Integer,Integer>();

        while(n-- >0){
            int c = sc.nextInt();
            Integer freq = colors.get(c);

            // If null initially.
            if(freq == null){
                colors.put(c,1);
            }

            else{
                colors.put(c,freq+1);
            }
        }
        sc.close();
        int pairs = 0;
        for(Integer frequency: colors.values()){
            pairs += frequency >> 1;
        }

        System.out.println(pairs);

    }
}

//So basically a hashmap will have .get, .set, .values() functions.