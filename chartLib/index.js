

let months = document.querySelector('.months');
let count = document.querySelector('.count');
console.log(count.children);
let monthArray = [];
let countArrray = [];

for (let i = 0; i < count.children.length; i++) {
    countArrray.push(count.children[i].innerText);
    monthArray.push(months.children[i].innerText);
}

const ctx = document.getElementById('myChart');
ctx.height - '500px';
ctx.width = '500px';
const data_all = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [12, 19, 3, 5, 2, 3, 4, 6, 5, 9, 1, 12]
}
new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: monthArray,
        datasets: [{
            label: '# of Votes',
            // data: [12, 19, 3, 5, 2, 3],
            data:countArrray,
            borderWidth: 1,

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

