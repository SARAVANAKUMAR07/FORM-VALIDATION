//javascript
     const form = document.querySelector('#form');
 const username=document.querySelector('#username');
 const email=document.querySelector('#email');
 const password=document.querySelector('#password');
 form.addEventListener('submit', (e)=>{
  e.preventDefault();
  validInputs();
 })
 function validInputs(){
const usernameVal=username.value.trim();
const emailVal=email.value.trim();
const passwordVal=password.value.trim();
if (usernameVal===''){
  setError(username,'its requried')
}
else{
  setSuccess(username)
}
if ( emailVal===''){
  setError(email,'its requried')
}
else if(!validate(emailVal)){
  setError(email,'please enter valid email')
}else{
  setSuccess(email)
}
if(passwordVal===''){
  setError(password,'its requried')
} else if( passwordVal.length<8){
  setError(password,'atlest 8 character')
}else{
  setSuccess(password)
}

 }
 function setError(element,message){
  const inputGroup=element.parentElement;
  const errorElement=inputGroup.querySelector('.error');
  errorElement.innerText=message;
  inputGroup.classList.add('error')
  inputGroup.classList.remove('success')

 }
function setSuccess(element){
  const inputGroup=element.parentElement;
  const errorElement=inputGroup.querySelector('.error')
  errorElement.innerText= '';
   
  inputGroup.classList.remove('error')
  inputGroup.classList.add('success')
}
const validate = email => {
  const expression =
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])/i

  return expression.test(String(email).toLowerCase())
}


 
