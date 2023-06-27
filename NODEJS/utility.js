
 exports.isPrime=function(x)
 {
    if(x==2)
    return true;
    for(i=2;i<x;i++)
    {
        if(x%i==0)
        return false;
    }
    return true;
 }

exports.calFact=function(x)
 {
    var f=1;
    for(i=x;i>0;i--)
    {
        f*=i;
    }
    return f;
 }

 exports.isPerfect=function(x)
 {
    var sum=0;
    for(i=1;i<x;i++)
    {
        if(x%i==0)
        sum+=i;
    }
    if(sum==x)
    return true;
    else
    return false;
 }