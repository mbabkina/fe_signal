let N = prompt('Please enter integer, which marks the start point of caluclations');

let M = prompt('Please enter integer, which marks the end point of caluclations');

const skipEven = confirm('Do you want to skip even numbers?');

N = parseInt(N, 10);
M = parseInt(M, 10);

let result = null;

for (let i = N; !(isNaN(N)) && !(isNaN(N)) && i <= M; i++) {
    if (skipEven) {
        for (let j = i;
            (j % 2) !== 0; j++) {
            result += j;
        }
    } else {
        result += i;
    }
}

alert(result ? result : 'Please check your inputs');