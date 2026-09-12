let password="12345";
let userPassword = "12345";
if(password===userPassword){
    console.log("Пароль верный");
} else {
    console.log("Пароль неверный");
}

const apiKey = process.env.GEMINI_API_KEY ;
console.log(apiKey ? "Ключ найден" : "Ключ не найден");

//node -e "console.log(process.env.GEMINI_API_KEY ? 'Ключ найден' : 'Ключ не найден')"
// [Environment]::SetEnvironmentVariable(
//   "GEMINI_API_KEY",
//   "ваш_настоящий_ключ",
//   "User"
// )
