function valform(){
var name=document.feedback_form.name.value;
var email=document.feedback_form.email.value;
var comment=document.feedback_form.comment.value;
var rate=document.feedback_form.rate.value;


if (name==""){
alert("Your name must be required");
return false;
}

else if (email==""){
alert("Your Email address must be required");
return false;
}

else if (comment==""){
alert("Your comment must be required");
return false;
}

else{
    alert("Dear "+name+" ,Thank you very much for your feedback.You have rated our site as "+rate+" and your comment was "+comment);
    }
}
