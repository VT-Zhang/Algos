function bubbleSort(arr){
    var counter = 0;
    while(counter < arr.length){
        for(var i=0; i<arr.length; i++){
            var temp;
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        console.log(arr);
        counter++;
        i=0;
    }
    console.log(arr);
    return arr;
}

bubbleSort([5,6,2,4,7,1,3,8]);
