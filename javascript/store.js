function addToCart01(){
    var value = parseInt(document.getElementById('qty01').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('qty01').value = value;
}
function removeFromCart01(){
    var value = parseInt(document.getElementById('qty01').value);
    value = isNaN(value) ? 0 : value;
    value<1? value=1:'';
    value--;
    document.getElementById('qty01').value = value;
}

function addToCart02(){
    var value = parseInt(document.getElementById('qty02').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('qty02').value = value;
}
function removeFromCart02(){
    var value = parseInt(document.getElementById('qty02').value);
    value = isNaN(value) ? 0 : value;
    value<1? value=1:'';
    value--;
    document.getElementById('qty02').value = value;
}

function addToCart03(){
    var value = parseInt(document.getElementById('qty03').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('qty03').value = value;
}
function removeFromCart03(){
    var value = parseInt(document.getElementById('qty03').value);
    value = isNaN(value) ? 0 : value;
    value<1? value=1:'';
    value--;
    document.getElementById('qty03').value = value;
}

function addToCart04(){
    var value = parseInt(document.getElementById('qty04').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('qty04').value = value;
}
function removeFromCart04(){
    var value = parseInt(document.getElementById('qty04').value);
    value = isNaN(value) ? 0 : value;
    value<1? value=1:'';
    value--;
    document.getElementById('qty04').value = value;
}

function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
}

function confirmationMsg() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    /*var mobileNumber = document.forms.number.value;
    /*var nameF = document.form.firstname.value ;
    var nameL = document.form.lastname.value ;
    var email = document.form.email.value ;*/
    /*var mobileNumber = /^\d{10}$/;
    /*if (nameF == null || nameF == "") {
        alert("First name can't be blank!");
        return false;
    }
    else if (nameL == null || nameL == ""){
        alert("Last name can't be blank!");
        return false;
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){
        return (true);
    }*/   
    /*if (mobileNumber == null || mobileNumber == "") {
        alert("Mobile number can't be blank!")
        return false ;
    }*/
    
    var product01 = "Basket ball" ;
    var price01 = 3500 ;
    var amount01 = document.getElementById("qty01").value;
    var totalAmount01 = price01 * amount01;
    var product02 = "Hoops" ;
    var price02 = 50000 ;
    var amount02 = document.getElementById("qty02").value;
    var totalAmount02 = price02 * amount02 ;
    var product03 = "Shorts" ;
    var price03 = 1200 ;
    var amount03 = document.getElementById("qty03").value;
    var totalAmount03 = price03 * amount03 ;
    var product04 = "Shoues" ;
    var price04 = 2000 ;
    var amount04 = document.getElementById("qty04").value;
    var totalAmount04 = price04 * amount04 ; 
    var totalAmonut = totalAmount01 + totalAmount02 + totalAmount03 + totalAmount04 ; 
    var response=confirm("Dear " + fname + "," + " " + " you oredered " + amount01 + " " + product01 + " at cost of LKR " + price01 + " each and " + amount02 + " " + product02 + " at a cost of LKR " + price02 + " each and " 
    + amount03 + " " + product03 + "at a cost of LKR " + price03 + " each and " + amount04 + " " + product04 + " at a cost of LKR " + price04 + " each. Your total bill is LKR " + totalAmonut + ". Thank You!");
}