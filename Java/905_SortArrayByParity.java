class Solution {
    public int[] sortArrayByParity(int[] A) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < A.length; i++) {
            if (A[i] % 2 == 0) {
                list.add(A[i]);
            }
        }
        for (int i = 0; i < A.length; i++) {
            if (A[i] % 2 == 1) {
                list.add(A[i]);
            }
        }
        int[] array = new int[list.size()];
        return list.toArray(array);
    }
}