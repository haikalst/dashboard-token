const chart = document.querySelector('#chart').getContext('2d');

// Create new chart object
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [{
                label: 'BTC',
                data: [17262, 18383, 27473, 35648, 38974, 45293, 46536, 50873, 54092, 59873, 60862, 62983],
                borderColor: 'red',
                borderWidth: 2,
            },
            {
                label: 'ETH',
                data: [2465, 8640, 10937, 25634, 47263, 56234, 59873, 60834, 76273, 78923, 80912, 82747],
                borderColor: 'blue',
                borderWidth: 2,
            },
            {
                label: 'XRP',
                data: [6738, 9837, 10936, 11367, 8735, 9832, 9899, 10973, 12846, 13098, 11093, 8734],
                borderColor: 'purple',
                borderWidth: 2,
            }
        ],
    },
    options: {
        responsive: true
    }
});

// Show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
});

// Change theme
const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
});