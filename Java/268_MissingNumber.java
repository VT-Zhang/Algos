class Solution {
    public int missingNumber(int[] nums) {
        int s = 0;
        for (int i = 1; i <= nums.length; i++) {
            s += i - nums[i - 1];
        }
        return s;
    }
}