function add(){
    a=parseInt(document.getElementById('num1').value);
    b=parseInt(document.getElementById('num2').value);
    c=a+b;
    document.getElementById('add').innerHTML="The sum value is:"+c;
}

function sub(){
    a=parseInt(document.getElementById('num1').value);
    b=parseInt(document.getElementById('num2').value); 
    c=a-b;
    document.getElementById('sub').innerHTML="The diff value is:"+c;
}