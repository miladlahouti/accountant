//create.tracsation

function validateform(){
    var name=document.myform.name.value;
    var amount=document.myform.amount.value;
    var data=document.myform.data.value;

    if (name==null || name==""){
        alert("لطفا عنوان فاکتور خود را وارد کنید");
        return false;
    }else if(amount==null || amount==""){
        alert("لطفا مبلغ فاکتور خود را وارد کنید");
        return false;
    }else if (data==null || data==""){
        alert("لطفا تاریخ فاکتور خود را وارد کنید");
    }
}

//list.tracsation
function myFunction() {
    var text;
    var r = confirm("آیا داده حذف گردد ؟");
    if (r == true){
        alert('با موفقیت حذف گردید');
    }else if (r == false){
        alert("حذف کنسل شد")
    }
}
function edit(){
    var text;
    var r = confirm("آیا داده ویرایش شود ؟");
    if (r==true){
        alert("ویرایش انجام شد")
    }
}

//login.new
function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;

    if (name==null || name==""){
        alert("لطفا نام کاربری خود را وارد کنید");
        return false;
    }else if(password==null || password==""){
        alert("لطفا رمز عبور خود را وارد کنید");
        return false;
    }else {name , password = "ok"}
}