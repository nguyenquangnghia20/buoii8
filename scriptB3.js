// Tạo số ngẫu nhiên từ 1 đến 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
  const input = document.getElementById("userInput").value;
  const result = document.getElementById("result");

  const userGuess = parseInt(input);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    result.textContent = "Vui lòng nhập một số hợp lệ từ 1 đến 10.";
    return;
  }

  if (userGuess === randomNumber) {
    result.textContent = `Chúc mừng! Bạn đã đoán đúng số ${randomNumber}.`;
  } else {
    result.textContent = `Sai rồi! Hãy thử lại.`;
  }
}
