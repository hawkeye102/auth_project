
//#handles signup
document.getElementById('submission form').addEventListener('submit',async(e)=>{
    e.preventDefault();
    const email=document.getElementById('signupemail').value
    const password=document.getElementById('signuppassword').value
});

const loginform=document.getElementById('loginform');
if(loginform){
    loginform.addEventListener('submit',async(e)=>{
        e.preventDefault();
        const email=document.getElementById('loginemail').value;
        const password=document.getElementById('loginpassword').value
    })

}

