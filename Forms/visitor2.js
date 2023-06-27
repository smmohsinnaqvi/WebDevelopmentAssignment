function validate()
{
    eid=document.f1.mailid.value;

    var pe=/^[\w.]{2,}@[a-z.]{5,15}\.[a-z]{2,3}/;
    if(!pe.test(eid))
    {
        document.getElementById("e-err").innerHTML="INVALID E_MAIL";
        document.f1.mailid.value="";
        document.f1.mailid.focus();
        return;
    }

    occ=document.f1.occ.value;
    if(occ=="")
    {
        document.getElementById("o-err").innerHTML="Please Select Occupation"
    }

    var radio1=document.f1.r.value;
    if(radio1=="")
    {
        document.getElementById("r-err").innerHTML="Please select"
        return;
    }
    document.f1.submit();
}