function generatePassword() {
    // Get password length
    var passwordLength = document.getElementById("password-length").value;

    // Get included character types
    var includeUppercase = document.getElementById("include-uppercase").checked;
    var includeLowercase = document.getElementById("include-lowercase").checked;
    var includeNumbers = document.getElementById("include-numbers").checked;
    var includeSpecial = document.getElementById("include-special").checked;

    // Define character sets
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    // Build character pool based on included character types
    var characterPool = "";
    if (includeUppercase) {
        characterPool += uppercaseChars;
    }
    if (includeLowercase) {
        characterPool += lowercaseChars;
    }
    if (includeNumbers) {
        characterPool += numberChars;
    }
    if (includeSpecial) {
        characterPool += specialChars;
    }

    // Generate password
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool.charAt(randomIndex);
    }

    // Display generated password
    var passwordTextarea = document.getElementById("generated-password");
    passwordTextarea.value = password;
}
function clearPassword() {
    document.getElementById("generated-password").value = "";
    document.getElementById("include-uppercase").checked = false;
    document.getElementById("include-lowercase").checked = false;
    document.getElementById("include-numbers").checked = false;
    document.getElementById("include-special").checked = false;
}


function copyPassword() {
    // Get password textarea
    var passwordTextarea = document.getElementById("generated-password");

    // Select text in password textarea
    passwordTextarea.select();
    passwordTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy text to clipboard
    document.execCommand("copy");

    // Deselect text
    window.getSelection().removeAllRanges();

    // Show confirmation message
    var copyBtn = document.getElementById("copy-btn");
    copyBtn.innerHTML = "Copied!";
    setTimeout(function () {
        copyBtn.innerHTML = "Copy to Clipboard";
    }, 2000);
}
