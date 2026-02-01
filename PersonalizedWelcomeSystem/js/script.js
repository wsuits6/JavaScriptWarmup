//problem explanation
// =============================
//  A function  that takes two parameter 
// name and isMember
// name is a String
// ismember is a Boolean


//usinf conditionals
//Welcome as VIP if the  are a member TRUE
//Welcome them as normal user by NAME if they are Not member
//If Guest and Member is True welcome them as VIP
//================================

// Call the function is the FOUR different Ways

//(1) Creating the Function

function welcomeUser(name = "Guest", isMember = false) {
    //using the strict Equility Operator creat true conditional for isMember
    if (isMember === true) {
        console.log("Welcome VIP" + name)
    } else {
        // covers the isMember being fals and undefined scenario
        console.log("Welcome " + name)
    } 
}

