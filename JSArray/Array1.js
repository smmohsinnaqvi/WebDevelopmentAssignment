var arr=[3,52,70,11,17];
function addElement()
{
    var y= prompt("Enter Value to Insert in Array");
    arr.push(y);
}

function display()
{
    str="";
    str+="<ol>";
    // for(i=0;i<arr.length;i++)
    // {
    //     str+="<li>" + arr[i] +"</li>";
    // }
    for( var i in arr)
    {
        str+="<li>" + arr[i] + "</li>";
    }
    str+="</ol>";
    document.getElementById("res").innerHTML=str;
}

function sorting1()
{
    function mysort(a,b)
    {
        return a-b;
    }
    arr.sort(mysort);
    document.getElementById("res2").innerHTML=arr.toString();
}

function sorting2()
{
    arr.sort(function(a,b){return a-b;});
    document.getElementById("res2").innerHTML=arr.toString();
}

function sorting3()
{
    arr.sort((a,b)=> a-b);
    document.getElementById("res2").innerHTML=arr.toString();

}

function display2()
{
    str="";
    str+="<ul>"
    function myiter(v,i)
    {
        str+="<li>" + v + " is Present at index : " + i + "</li>";
    }
    arr.forEach(myiter);
    str+="</ul>";
    document.getElementById("res3").innerHTML=str;
    
}
function display3()
{
    str="";
    str+="<ul>";
    arr.forEach(function(v,i){str+="<li>" + v + " is Present At :" + i + "</li>"});
    str+="</ul>";
    document.getElementById("res3").innerHTML=str;
}

function display4()
{
    str="";
    str+="<ul>";
    arr.forEach(v=> str+="<li>" + v + "</li>");
    str+="</li>";
    document.getElementById("res3").innerHTML=str;

}

function sum()
{
    //var sum= arr.reduce(function(v,add){return v+add});
    var sum=arr.reduce((v,add)=> v+add);
    document.getElementById("res4").innerHTML="<h2>" + sum + "</h2>";
}

function max()
{
    m=0;
    var max=arr.reduce((v,m)=>{if(v>m) m=v; return m});
     document.getElementById("res5").innerHTML="<h2>" + max + "</h2>";

}

function min()
{
    var m;
    var min=arr.reduce((v,m)=>{if(v<m) m=v; return m;});
    document.getElementById("res6").innerHTML="<h2>" + min + "</h2>";

}

function average()
{
    var av;
    var avg=arr.reduce((v,av,arr)=>{return av+v})/arr.length;
    document.getElementById("res7").innerHTML="<h2>" + avg + "</h2>";

}

function checkEven()
{
    var ce= arr.every(a=> {if(a%2==0) return a});
    document.getElementById("res8").innerHTML="<h2>" + ce + "</h2>";
 
}

function checkOdd()
{
    var co= arr.every(a=> {if(a%2!=0) return a});
    document.getElementById("res8").innerHTML="<h2>" + co + "</h2>";

}

function checkPrime()
{
    var co= arr.every(a=> { if(a==2)return true;for(i=2;i<a;i++){if(a%i==0)return false;} return true;});
    document.getElementById("res8").innerHTML="<h2>" + co + "</h2>";

}

function oddEven()
{
    var e=arr.filter((v)=> v%2==0 );
    var o=arr.filter((v)=> v%2!=0);
    document.getElementById("res9").innerHTML="<h2>ODD ARRAY : " + o.toString() + "</h2>" + "<h2>EVEN ARRAY : " + e.toString() + "</h2>";
    
}



