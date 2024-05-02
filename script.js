function clearDisplay() {
  document.getElementById('display').value = '';
}

function appendChar(char) {
  document.getElementById('display').value += char;
}

function calculate() {
  try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}
