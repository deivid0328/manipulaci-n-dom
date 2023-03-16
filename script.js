const num1=document.getElementById('inputOne');
const num2=document.getElementById('inputTwo');
const btn=document.getElementById('btn')
const p=document.getElementById('result')
const resul=num1+num2;
const form=document.getElementById('formulario')

form.addEventListener('submit', calcular)




function calcular(event)
{
    event.preventDefault();
    p.innerHTML="";
    const suma= parseInt(num1.value)+ parseInt(num2.value)
    p.append(suma)
    


}