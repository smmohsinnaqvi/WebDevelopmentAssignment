function process(str, n) {
    n = parseInt(n);
    //console.log(typeof (n));
    if (n == 1) {
        var l = str.length;
        document.getElementById("result").innerHTML = "<h2> Length of String is : " + l + "</h2>";
    }

    if(n == 2)
    {
        document.getElementById("result").innerHTML = "<h2> Upper Case String : " + str.toUpperCase() + "</h2>";
    }
    
    if(n == 3)
    {
        document.getElementById("result").innerHTML = "<h2> Lower Case String : " + str.toLowerCase() + "</h2>";
    }
    if(n == 4)
    {
        str="<h2> FROM START AT INDEX : "+ str.indexOf('w') +"</h2><h2> FROM END AT INDEX : "+ str.lastIndexOf('w') +"</h2>";
        document.getElementById("result").innerHTML=str;
    }

    if( n == 5)
    {
        e=str.charAt(4);
        h=str.charCodeAt(4);
        str+="<h2> VALUE AT INDEX 4 IS " + e + "</h2><h2> ITS ASCII VALUE IS : " + h +"</h2>";
        document.getElementById("result").innerHTML=str;

    }
    if ( n == 6)
    {
        var s=prompt("Enter Second String");
        str+=s;
        document.getElementById("result").innerHTML="<h2>"+ str + "</h2>";

    }
    if( n == 7)
    {
        var arr=str.split(" ");
        document.getElementById("result").innerHTML="<h2>"+ arr.toString() + "</h2>";

    }
    if(n>7 || n<0)
    {
        document.getElementById("result").innerHTML='<h1 style="color:red"> WRONG CHOICE </h1>';
    }

}