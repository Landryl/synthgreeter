var selectedSession = lightdm.sessions[0];
var selectedSessionIndex = 0;

/* Listeners required by Lightdm */
function authentication_complete() {
    writeDebugMessage("authentication_complete");
    if (lightdm.is_authenticated) {
        writeDebugMessage("User is authenticated. Session: " + selectedSession.name);
        lightdm.login(lightdm.authentication_user, selectedSession.key);
    } else {
        shake();
    }
}

function show_error(message) {
    writeDebugMessage("error: " + message);
}

function show_prompt(message) {
    writeDebugMessage("prompt: " + message);
    lightdm.provide_secret(document.getElementById("password").value);
}

/* Simple logging function */
function writeDebugMessage(message) {
    console.log(message);
}

/* Starts the sign in process */
function submitPassword() {
    writeDebugMessage("submitPassword");
    lightdm.cancel_timed_login();
    lightdm.start_authentication(lightdm.users[0].name);
}

/* Animation function */
function shake() {
    document.getElementById("form").setAttribute( "class", "shake");
    setTimeout( function() {
        document.getElementById("form").setAttribute( "class", "" );
    }, 1000);
}

function init() {
    /* Adding listener to submit password when enter is pressed */
    document.getElementById("password").onkeypress = function(e) {
        e = e || window.event;
        if(e.keyCode == 13 || e.keyCode == 10) {
            e.preventDefault();
            submitPassword();
        }
    }
}