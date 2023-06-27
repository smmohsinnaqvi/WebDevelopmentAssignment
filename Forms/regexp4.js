function validate()
{
    fname=document.reg.fname.value;
    var regf=/^[A-Z][a-z]{2,}$/;
    if(!regf.test(fname))
    {
        document.getElementById("fnerr").innerHTML="Only first character with Capitals";
        document.reg.fname.value="";
        document.reg.fname.focus();
        return;
    }

    flname=document.reg.flname.value;
    regf=/^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
    if(!regf.test(flname))
    {
        document.getElementById("flerr").innerHTML="Invalid Name Format";
        document.reg.flame.value="";
        document.reg.flame.focus();
        return;
    }

    number=document.reg.mobile.value;
    regf=/^\d{10}$/;
//alert(regf.test(number));
    if(!regf.test(number))
    {
        document.getElementById("merr").innerHTML="Invalid Mobile Number";
        document.reg.mobile.value="";
        document.reg.mobile.focus();
        return;
    }

    email=document.reg.email.value;
    regf=/^[\w._-]{5,}@[\w]{4,}\.[\w]{2,3}$/;
    if(!regf.test(email))
    {
        document.getElementById("emerr").innerHTML="Invalid E-mail";
        document.reg.email.value="";
        document.reg.email.focus();
        return;
    }
    cname=document.reg.cname.value;
    var creg=/^PG\-[A-Z]{3,8}/;
    //alert(creg.test(cname));
    if(!creg.test(cname))
    {
        //alert("Course");
        document.getElementById("cerr").innerHTML="Invalid Course";
        document.reg.cname.value="";
        document.reg.cname.focus();
        return;
    }
    document.reg.submit();
}