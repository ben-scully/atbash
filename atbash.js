
/*
The challenge

CONSTANT       = 'abcdefghijklmnopqrstuvwxyz'
cipher         = 'oephjizkxdawubnytvfglqsrcm'
encrypted text = 'knlfgnb, sj koqj o yvnewju'
original text  = ?

Decrypt the given encrypted text.
Any character other than what you have in the constant doesn't have to be replaced.
Add test/spec to your solution.
*/



var constant = 'abcdefghijklmnopqrstuvwxyz'
var cipher =   'oephjizkxdawubnytvfglqsrcm'
var encryptedText = 'knlfgnb, sj koqj o yvnewju'
var originalText  = '';


function getDecrypter(constant, cipher) {
  var decrypter = {}

  for(var i = 0; i < constant.length; i++) {
    var constantChar = constant[i]
    var cipherChar = cipher.charAt(i)
    decrypter[cipherChar] = constantChar
  }

  return decrypter
}



function decrypt(encryptedText, decrypter) {
  var decryptedText = ""

  for (var i = 0; i < encryptedText.length; i++) {
    var encryptChar = encryptedText[i]

    if (decrypter[encryptChar])
      decryptedText += decrypter[encryptChar]
    else
      decryptedText += encryptChar
  }

  return decryptedText
}



var decrypter = getDecrypter(constant, cipher)

console.log(decrypt(encryptedText, decrypter))
