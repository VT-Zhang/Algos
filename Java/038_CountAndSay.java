class Solution {
    public String countAndSay(int n) {
        String s = "1";
        while (n-- > 1) {
            int c = 0;
            String t = "";
            for (int i = 0; i <= s.length(); i++) {
                if (i == s.length() || (i > 0 && s.charAt(i) != s.charAt(i - 1))) {
                    t += String.valueOf(c) + s.charAt(i - 1);
                    c = 0;
                }
                c++;
            }
            s = t;
        }
        return s;
    }
}