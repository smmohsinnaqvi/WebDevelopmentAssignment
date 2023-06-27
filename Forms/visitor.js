function validate()
{
    c1= document.getElementById("c1").value;
    c2= document.getElementById("c2").value;

    if((c1=="") || (c2==""))
    {
        alert("Select choice for Web Use");
        return;
    }

    occ= document.getElementById("occ").value;
    if(occ=="")
    {
        alert("Select Occupation");
        return;
    }

    radio1= document.f1.r.value;

    if(radio1=="")
    {
        alert("Please answer to Our Question ");
        return;
    }

    alert("Data Valid");
    document.f1.submit();
}