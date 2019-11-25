class Solution {
    public boolean isNumber(String s) {
        final String PATTERN = "[-+]?(\\d+\\.?|\\.\\d+)\\d*(e[-+]?\\d+)?";
        return s.trim().matches(PATTERN);
    }
}