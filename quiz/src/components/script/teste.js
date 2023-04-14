var str = "a) ! b) && c) || d) > ";

for(var i = 0; i < str.length; i++) {   
    if(str[i] === ')') {
        str = str.slice(0, i-1) + "," + str.slice(i);
    }
    else if(str[i].match(/[a-zA-Z]/) && str[i-1] == ')') {
        str = str.slice(0, i) + " " + str.slice(i+1); 
    }
}

str = str.replaceAll(")", "")
str = str.replaceAll(" ", '"')

console.log(str); 