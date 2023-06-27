function validate()
{
    //alert("IN FUNCTION");
    var upattern=/^[A-Za-z.]{5,15}$/;
    //alert(upattern.test("MohsinNaqvi"));
    uid=document.getElementById("uid").value;
    if(!upattern.test(uid))
    {
      // alert("Wrong uid");
     // document.getElementById("uiderr").firstChild.nodeValue="Invalid UID";
     //alert("WRONG INPUT")
     document.getElementById("uid").value="";
     document.getElementById("uid").focus();
     document.getElementById("uiderr").innerHTML="Invalid UID";
        return;
    }

    pwd=document.f1.pwd.value;

    var ppattern=/([A-Z]{1})([0-9]{1})([~!@#$%^&*()_+-]{1})[a-z]{5,15}/;

    if(!ppattern.test(pwd))
    {
        document.getElementById("perr").innerHTML="Invalid Password";
        document.getElementById("pwd").value="";
        document.getElementById("pwd").focus();
        return;
    }
    document.f1.submit();
}
