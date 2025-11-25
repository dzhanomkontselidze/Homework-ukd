const stringToEncrypt = `Please can I pass the exam:*(`;
const key = 67;

function caesarCode(text, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789()[]{}<>!@#$%^&*';
    let result = ''; 
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const index = alphabet.indexOf(char);

        if (index === -1) {
            result += char;
            continue;
        }

        const newIndex = (index + shift) % alphabet.length;
        result += alphabet[newIndex];
    }

    return result;
}

const ciphered = caesarCode(stringToEncrypt, key);
console.log(`Оригінал: ${stringToEncrypt}`);
console.log(`Зашифровано: ${ciphered}`);
