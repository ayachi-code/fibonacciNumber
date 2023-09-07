let sequence = [];
sequence.push(0,1);
let i = 0;
let j = 1;
let sum = 1;
let counter = 1;

function fibSequence(number) {
    while (counter <= number) {
        sum = i + j;
        sequence.push(sum);
        counter = counter + 1;
        i = j;
        j = sum;
    };
};

document.getElementById("calculate").addEventListener("click", () => {
    document.getElementById("result").innerText = "";
    let fibString = "";
    let fibN = document.getElementById("inputValue").value;
    fibSequence(fibN);
    for (let i = 0; i < sequence.length; i++) {
        if (i == sequence.length-1) {
            fibString = fibString + sequence[i];
        } else {
            fibString = fibString + sequence[i] + ", ";
        }
    }
    document.getElementById("result").innerText = fibString;
});