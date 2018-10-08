function insert(num) {
  document.form.textfield.value = document.form.textfield.value+num;
}

function equal(){
  const sum = document.form.textfield.value;
  
  if (sum){
    document.form.textfield.value = eval(sum);
  }
}

function clr(){
  document.form.textfield.value = "";
}

function bkSpc(){
  const sum = document.form.textfield.value;
  document.form.textfield.value = sum.substring(0,sum.length-1);
}