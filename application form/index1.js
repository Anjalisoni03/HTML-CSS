window.addEventListener('load',()=>{

    const params =(new URL(document.location)).searchParams;

    document.getElementById('first').innerHTML = params.get("fname");           //value stored in variables are sent to ids
    document.getElementById('last').innerHTML = params.get("lname");
    document.getElementById('ageid').innerHTML = params.get("age");
    document.getElementById('mailid').innerHTML = params.get("email");
    document.getElementById('gender').innerHTML = params.get("gender");
    document.getElementById('knownlangid').innerHTML = params.get("knownlang");
    
   })