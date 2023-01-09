const crypto=require('crypto');


 function getEncryptedToken(text) {
    const algorithm = 'aes-256-ecb';
    const salt = 'XlJVZKvQkig=';
    const digest = 'sha256';
    const secretKey = 'eBKqG49j+QYtHvDEqrAb9g=';
    const key = crypto.pbkdf2Sync(secretKey, salt, 65536, 32, digest);
    const iv = Buffer.alloc(0, 0);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let hash = cipher.update(text, 'utf8', 'base64');
    hash += cipher.final('base64');
    return hash;
  }

 async function decrypt(encryptedString) {
    const algorithm = 'aes-256-ecb';
    const salt = 'XlJVZKvQkig=';
    const digest = 'sha256';
    const secretKey = 'eBKqG49j+QYtHvDEqrAb9g=';
    const key = crypto.pbkdf2Sync(secretKey, salt, 65536, 32, digest);
    const iv = Buffer.alloc(0, 0);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decryptedText = decipher.update(encryptedString, 'base64', 'utf8');
    decryptedText += decipher.final('utf8');
    return decryptedText;
  }

  module.exports={
    getEncryptedToken,
    decrypt
  }