


export const handleValidate=(email,password)=>{
    const eValid=  /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const pValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(eValid===false) return "Email is not valid";
    if(pValid===false) return "Password is not valid";
    return null;
}

