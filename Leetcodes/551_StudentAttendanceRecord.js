// You are given a string representing an attendance record for a student.
// The record only contains the following three characters:
//
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more
// than one 'A' (absent) or more than two continuous 'L' (late).
//
// You need to return whether the student could be rewarded according to his
// attendance record.
//
// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False

var checkRecord = function(s) {
    var l_counter = 0;
    var a_counter = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="L"){
            l_counter++;
        }
        if(s[i]==="A"){
            a_counter++;
            l_counter = 0;
        }
        if(s[i]==="P"){
            l_counter = 0;
        }
        if(l_counter === 3 || a_counter > 1){
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
};

checkRecord("PPALLP");
checkRecord("PPALLL");
checkRecord("LALL");
