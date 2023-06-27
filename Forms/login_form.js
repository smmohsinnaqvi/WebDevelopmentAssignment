function validate() {
    uid = document.getElementById("uid").value;
    if (uid.length < 5 || uid.length > 15) {
        alert("User ID should be between 5 to 15 Characters");
        document.getElementById("uid").value = "";
        document.getElementById("uid").focus();
        return;
    }
    for (i = 0; i < uid.length; i++) {
        ch = uid.charCodeAt(i);
        if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch == '.'))) {
            alert("Characters can only be upperCase, lowerCase or '.'");
            document.getElementById("uid").value = "";
            document.getElementById("uid").focus();
            return;
        }
    }

    pwd = document.getElementById("pwd").value;
    if (pwd.length < 8 || pwd.length > 15) {
        alert("Password length should be between 8-15 Characters");
        document.getElementById("pwd").value = "";
        document.getElementById("pwd").focus();
        return;
    }
    var nc = 0, cc = 0, sc = 0;
    for (i = 0; i < pwd.length; i++) {
        ch = pwd.charCodeAt(i);
        if (ch >= 48 && ch <= 57)
            nc++;
        if (ch >= 65 && ch <= 90)
            cc++;
        if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57)))
            sc++;
    }
    if (!((nc <= 1) && (cc <= 1) && (sc <= 1))) {
        alert("Only One Numeric, Capital and Special Character in Password")
        document.getElementById("pwd").value = "";
        document.getElementById("pwd").focus();
        return;
    }
    document.f1.submit();
}