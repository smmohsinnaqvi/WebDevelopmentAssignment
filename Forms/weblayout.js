function validate()
{
    lname=document.reg.lname.value;
    for(i=0;i<lname.length;i++)
    {
        ch=lname.charCodeAt(i);
        if(!((ch>=65 && ch<=90) || (ch>=97 && ch<=122)))
        {
            alert("Name can only have Alphabets");
            document.reg.lname.value="";
            document.reg.lname.focus();
            return;
        }
    }

    fname=document.reg.fname.value;
    for(i=0;i<fname.length;i++)
    {
        ch=fname.charCodeAt(i);
        if(!((ch>=65 && ch<=90) || (ch>=97 && ch<=122)))
        {
            alert("Name can only have Alphabets");
            document.reg.fname.value="";
            document.reg.fname.focus();
            return;
        }
    }

    acno=document.reg.accno.value;

    if(acno.length<10 || acno.length>10)
    {
        alert("Account Number should be of 10 digits");
        document.reg.accno.value="";
        document.reg.accno.focus();
        return;

    }

    pwd=document.reg.pswd.value;
    if(pwd<5)
    {
        alert("Password length should be more than 5");
        document.reg.pswd.value="";
        document.reg.pswd.focus();
        return;
    }
    var nc=0,sc=0;
    for(i=0;i<pwd.length;i++)
    {
        ch=pwd.charCodeAt(i);
        if(ch>=48 && ch<=57)
        nc++;

        if(!((ch>=65 && ch<=90) || (ch>=97 && ch<=122) || (ch>=48 && ch<=57)))
        sc++;
    }
    if((sc==0) && (nc==0))
    {
        document.getElementById("strength").innerHTML="<p style='color:red'>WEAK PASSWORD </p>";
        alert("Password should have atleast one special and numeric Character");
        document.reg.pswd.value="";
        document.reg.pswd.focus();
        return;
    }

    if((sc>0 && nc==0) ||(nc>0 && sc==0))
    {
        document.getElementById("strength").innerHTML="<p style='color:blue'>AVERAGE PASSWORD </p>";
        return;
    }
    if(sc>0 && nc>0)
    {
        document.getElementById("strength").innerHTML="<p style='color:green'>STRONG PASSWORD </p>";
        return;
    }
    
    rpwd=document.reg.rpswd.value;

    if(!(pswd.length==rpwd.length))
    {
        alert("Password doesn't match");
        document.reg.rpswd.value="";
        document.reg.rpswd.focus();
        return;
    }
    for(i=0;i<rpwd.length;i++)
    {
        chr=charAt(i);
        chp=charAt(i);
        if(chr!=chp)
        {
       alert("Password doesn't match");
        document.reg.rpswd.value="";
        document.reg.rpswd.focus();
        return;
        }
    }




}