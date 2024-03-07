const qroutput=document.getElementById("qdoutput")
const firstName= document.getElementById("first_name")
const lastName=document.getElementById("last_name")
const email=document.getElementById("email")
const password=document.getElementById("password")
const signupBtn=document.getElementById("signupBtn")

console.log('qroutput',qroutput);

signupBtn.addEventListener("click",e=>{

    console.log("firstname",firstName.value)
    const formData={
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        password:password.value
    }

    const formDataString = JSON.stringify(formData);

    const api=`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(formDataString)}`

    const img=document.createElement('img');
    img.src=api;
    qroutput.innerHTML='';
    qroutput.appendChild(img)

    console.log("data logged",formData)

})

