const twoSum = (nums, target) => {
   const complementMap = {};
   for(let i = 0; i < nums.length; i++) {
        if(Object.keys(complementMap).includes(String(nums[i]))) {
           const outputArr = [i, complementMap[nums[i]]];
           return outputArr;
        }
       complement = target - nums[i];
       complementMap[complement] = i;
   }    
};