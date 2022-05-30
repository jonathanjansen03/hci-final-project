let validate =() =>{
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let email = document.getElementById('email')
    let birth = document.getElementById('birth')
    let nationality = document.getElementById('nationality')
    let agreement = document.getElementById('agreement')
    let errorMessage = []
    validateUsername(username, errorMessage)
    validatePassword(password, errorMessage)
    validateEmail(email, errorMessage)
    validateBirth(birth, errorMessage)
    validateAgree(agreement, errorMessage)

    if(errorMessage.length === 0){
        alert('Registration Success!')
    }else{
        alert(errorMessage.join('\n'))
    }


}

let validateUsername = (username, errorMessage)=>{
    if(username.value === ''){
        errorMessage.push('Fill the username section')
    }else if(username.value.length <8){
        errorMessage.push('Username length min is 8')
    }
}

let validatePassword = (password, errorMessage)=>{
    if(password.value === ''){
        errorMessage.push('Fill the password section!')
    }else if(password.value.length<8){
        errorMessage.push('Password length min si 8')
    }else if(!passChech(password)){
        errorMessage.push("Password must at least contain 1 uppercasi, 1 lowercase, and 1 number")
    }
}

let passChech = (password) =>{
    let numbers = '1234567890'
    let capital ='QWERTYUIOPASDFFGHJKLZXCVBNM'
    let lower = 'qwertyuiopasdfghjklzxcvbnm'
    let numberv, capitalv, lowerv = false
    for(let i = 0; i<password.value.length; i++){
        if(numbers.includes(password.value[i])){
            numberv = true
        }if(capital.includes(password.value[i])){
            capitalv = true
        }if(lower.includes(password.value[i])){
            lowerv = true
        }
    }
    if(numberv && capitalv && lowerv){
        return true
    }else{
        return false
    }
}

let validateEmail = (email, errorMessage) =>{
    if(email.value === ''){
        errorMessage.push('Email required')
    }else if(email.value.startsWith('.')||email.value.startsWith('@')){
        errorMessage.push("Email cannot contain '.' or '@'")
    }else if(!email.value.endsWith('.com') && !email.value.endsWith('.co.id') && !email.value.endsWith('.ac.id')){
        errorMessage.push("Use '.co.id' or '.com' or '.ac.id' email domain")
    }
}

let validateBirth = (birth, errorMessage) =>{
    if(birth.value === ''){
        errorMessage.push("Birth date required")
    }
}

let validateAgree = (agreement, errorMessage) =>{
    if(!agreement.checked){
        errorMessage.push("Agree to continue")
    }
}