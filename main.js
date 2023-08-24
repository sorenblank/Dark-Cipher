function darkCipher(inp, code) {
    try {
        let strings = code.split('').filter(i => i.match(/[a-zA-Z]/)).reduce((acc, i) => acc + i.charCodeAt(0), 0);
        let numbers = code.split('').filter(j => !j.match(/[a-zA-Z]/)).reduce((acc, j) => acc + parseInt(j), 0);

        let cipher = "";

        for (let i = 0; i < inp.length; i++) {
            if (inp.charCodeAt(i) % 2 === 0) {
                cipher += inp.charCodeAt(i) + strings - numbers;
            } else {
                cipher += inp.charCodeAt(i) - strings + numbers;
            }

            if (i + 1 < inp.length) {
                cipher += "/";
            }
        }

        return cipher;
    } catch (error) {
        return "/404 INVALID/";
    }
}

function darkDecipher(inp, code) {
    try {
        let strings = code.split('').filter(i => i.match(/[a-zA-Z]/)).reduce((acc, i) => acc + i.charCodeAt(0), 0);
        let numbers = code.split('').filter(j => !j.match(/[a-zA-Z]/)).reduce((acc, j) => acc + parseInt(j), 0);

        let cipher = inp.split("/");


        let dcipher = "";

        for (let i = 0; i < cipher.length; i++) {
            let encrypted = + cipher[i] + numbers;
            encrypted = encrypted - strings;

            if (encrypted % 2 === 0) {
                dcipher += String.fromCharCode(encrypted);
            } else {
                encrypted = cipher[i] - numbers;
                encrypted = encrypted + strings;
                dcipher += String.fromCharCode(encrypted);
            }
        }

        return dcipher;
    } catch (error) {
        return "/404 INVALID/";
    }
}



const input = document.body.querySelector('#input');
const pass = document.body.querySelector('#pass');
const output = document.body.querySelector('#output-text');

const encrypt_button = document.body.querySelector('#encrypt');
const decrypt_button = document.body.querySelector('#decrypt');

encrypt_button.addEventListener('click', () => {
    output.textContent = darkCipher(input.value, pass.value);
});

decrypt_button.addEventListener('click', () => {
    output.textContent = darkDecipher(input.value, pass.value);
})