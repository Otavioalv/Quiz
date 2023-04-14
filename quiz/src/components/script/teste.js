var str = "a) char b) float c) int d) double";
var res = [];
var a = 0;

/* for(var i = 0; i < str.length; i++) { 
    if(str[i] != ' '){
        res.push(str[i])
        console.log(res)
    }
} */

str = str.replaceAll(')', '')
console.log(str);


for(var i = 0; i < str.length; i++) { 
    
    if(i == 0) {
        console.log(str[i]) 
        str = str.replace(str[i], '');

        console.log(str) 
    }
    else if (str[i] == ' ') {
        console.log(str[i+1], str[i+2]) 
        str = str.replace(str[i], '');

        console.log(str) 
    }
    
    if(a == 1)
        a = 0;
    else    
        a = 1;
}


/* res = res.join('');
console.log(res)

for(var i = 0; i < res.length; i++) {
    if(res[i] == ')' ){
        console.log(res[i-1]);

        //b = b.slice(0, a - 1) + b.slice(a + 1);
    }
} */

