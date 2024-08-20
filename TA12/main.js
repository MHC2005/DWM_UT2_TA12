function generatePassword(length) {
  if (length < 8) length = 8;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

console.log(generatePassword(8)); 
console.log(generatePassword(8));
console.log(generatePassword(12)); 
