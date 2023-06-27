function validate()
{
    lname=document.reg.lname.value;
    var lp=/^[A-Za-z]{1,}$/;
    if(!lp.test(lname))
    {
        document.getElementById("lerr").innerHTML="Name can have only alphabets";
        document.reg.lname.value="";
        document.reg.lname.focus();
        return;
    }

    fname=document.reg.fname.value;
    var fp=/^[A-Za-z]{1,}$/;
    if(!fp.test(fname))
    {
        document.getElementById("ferr").innerHTML="Name can have only alphabets";
        document.reg.fname.value="";
        document.reg.fname.focus();
        return;
    }

    acno=document.reg.accno.value;
    var fp=/^\d{10}$/;
    if(!fp.test(acno))
    {
        document.getElementById("aerr").innerHTML="Invalid Account Number";
        document.reg.accno.value="";
        document.reg.accno.focus();
        return;

    }
    pwd=document.reg.pswd.value;
    fp=/(?=.*[0-9])(?=.[!@#$%^&*()+_-])[A-Za-z0-9~!@#$%^&*()_+-]{5,}/;
    if(!fp.test(pwd))
    {
        document.getElementById("strength").innerHTML="Invalid";
        document.reg.pswd.value="";
        document.reg.pswd.focus();
        return;
    } 

    document.reg.submit();
}