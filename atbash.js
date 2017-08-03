
/*
  CONSTANT       = 'abcdefghijklmnopqrstuvwxyz'
  cipher         = 'oephjizkxdawubnytvfglqsrcm'
  encrypted text = 'knlfgnb, sj koqj o yvnewju'
  original text  = ?

  Decrypt the given encrypted text.
  Any character other than what you have in the constant doesn't have to be replaced.
  Add test/spec to your solution.

  NOTES RE Test/Spec

  I would test relative to the time allowed and the importance of the software/functions being written.
  If the software/functions being written cannot fail (medical) then heavy testing.
  If there is fault tolerance then it can be more cost effective for the customer to simply meet acceptance requirements and user acceptance.
*/



// @@@ I've put some notes/comments throughout the code to illustrate possible weaknesses in my solution(s)
// @@@ Instructions weren't clear if the code/functions might need to encrypt and decrypt both ways



function getDecrypter(constant, cipher) {
  // @@@ Might need to handle 'bad' paramters; nulls, wrong types, empty strings, 9999999 char long strings etc.
  // @@@ Instructions weren't clear about lengths of cipher-constant, what type of characters might exist etc

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



var constant1 =      'abcdefghijklmnopqrstuvwxyz'
var cipher1 =        'zodvqukgwefbyitmrsplhacxnj'
var encryptedText1 = 'dzs'
var originalText1  = 'car'

var constant2 =       'abcdefghijklmnopqrstuvwxyz'
var cipher2 =         'xipmuzfkbrlwotjancqgveshdy'
var encryptedText2 =  'skd qj qucbjvq?'
var originalText2 =   'why so serious?'

var constant3 =       'abcdefghijklmnopqrstuvwxyz'
var cipher3 =         'oephjizkxdawubnytvfglqsrcm'
var encryptedText3 =  'knlfgnb, sj koqj o yvnewju'
var originalText3  =  '?'     // houston, we have a problem



var decrypter1 = getDecrypter(constant1, cipher1)
var decryptedText1 = decrypt(encryptedText1, decrypter1)
console.log("Test1 -> original text: " + originalText1 + " decrypted text: " + decryptedText1)
console.log("Test passed?: " + (decryptedText1 == originalText1))



var decrypter2 = getDecrypter(constant2, cipher2)
var decryptedText2 = decrypt(encryptedText2, decrypter2)
console.log("Test1 -> original text: " + originalText2 + " decrypted text: " + decryptedText2)
console.log("Test passed?: " + (decryptedText2 == originalText2))



var decrypter3 = getDecrypter(constant3, cipher3)
var decryptedText3 = decrypt(encryptedText3, decrypter3)
console.log("Answer to \"The Challenge\": ", decryptedText3)
