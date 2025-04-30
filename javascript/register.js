document.getElementById("register").onclick = function() {
    let email = document.getElementById("email").value; 
    let password = document.getElementById("password").value; 
    // let username = document.getElementById("username").value; // Removed this line as it was not used
    let fullname = document.getElementById("username").value; // Added this line to get the fullname
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Fullname:", fullname);

    firebase.auth().createUserWithEmailAndPassword(email, password).then((usercredential) => {
        var userid = usercredential.user.uid;
        firebase.firestore().collection("users").doc(userid).set({
            useremail: email,
            userfullname: fullname, // Now fullname is defined
        }).then(() => {
            window.location.href = "index.html";
        });
    }).catch((Error) => {
        alert("This email is already registered, please login instead");
    });
};