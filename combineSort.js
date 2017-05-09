function combineSort(a1, a2){
    var counter = 0;
    var l = a2.length;
    for (var i = 0; i < a1.length; i++){
        for (var j = 0; j < a2.length; j++){
            if(a1[i+1]){
                while (a1[i] < a2[j] && a2[j] < a1[i+1]){
                    a1.splice(i, 0, a2[j]);
                    a2.splice(j, 1);
                    counter++;
                }
            }
        }
    }
    console.log(a1);
    console.log(a2);
    if (counter != l){
        for (var k = 0; k < counter; k++){
            a1.splice(0, 0, a2[k]);
        }
    }
    console.log(a1);
}

combineSort([2,3,6,10], [1,7,8,11]);

function cSort(a1, a2){
    var newarr = [];
    for (var i = 0; i < a1.length; i++){
        for (var j = 0; j < a2.length; j++){
            if(a1[i] < a2[j]){
                newarr.push(a1[i]);
                i++;
            }
            else if (a1[i] > a2[j]){
                newarr.push(a2[j]);
            }
        }
    }
    console.log(newarr);
}
cSort([1,3,6,10], [2,7,8,11]);

function c2Sort(a1, a2){
    var newarr = [];
    var i = 0;
    var j = 0;
    if (a1.length < a2.length){
        while(i < a1.length){
            while(a1[i] < a2[j]){
                newarr.push(a1[i]);
                i++;
            }
            while(a1[i] > a2[j]){
                newarr.push(a2[j]);
                j++;
            }
        }
        for (var k = j; j < a2.length; k++){
            newarr.push(a2[k]);
        }
    }
    else{
        while(j < a2.length){
            while(a1[i] < a2[j]){
                newarr.push(a1[i]);
                i++;
            }
            while(a1[i] > a2[j]){
                newarr.push(a2[j]);
                j++;
            }
        }
        for (var l = i; l < a2.length; l++){
            newarr.push(a2[l]);
        }
    }
    console.log(newarr);
}
c2Sort([1,3,6,10], [2,7,8,11,12]);
