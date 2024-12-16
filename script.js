document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

function generatePassword() {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('includeUppercase').checked;
  const includeLowercase = document.getElementById('includeLowercase').checked;
  const includeNumbers = document.getElementById('includeNumbers').checked;
  const includeSymbols = document.getElementById('includeSymbols').checked;

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  let allChars = '';
  if (includeUppercase) allChars += uppercaseChars;
  if (includeLowercase) allChars += lowercaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  if (allChars === '') {
    alert('Выберите хотя бы один параметр для генерации пароля.');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById('password').value = password;
}

function copyToClipboard() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  document.execCommand('copy');
  
  // Добавим фишку: анимация кнопки при копировании
  const copyButton = document.getElementById('copyBtn');
  copyButton.classList.add('copied');

  setTimeout(() => {
    copyButton.classList.remove('copied');
  }, 500);

  alert('Пароль скопирован в буфер обмена!');
}
