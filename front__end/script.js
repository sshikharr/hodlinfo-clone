document.addEventListener('DOMContentLoaded', () => {
    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3000/api/results');
            const data = await response.json();

            const container = document.querySelector('#results-container');

            data.forEach(result => {
                const row = document.createElement('div');
                row.classList.add(
                    'grid', 'grid-cols-2', 'sm:grid-cols-4', 'md:grid-cols-6', 'gap-4', 
                    'bg-bGray', 'border-2', 'border-bGray', 'w-full', 
                    'text-center', 'text-white', 'mt-4', 'py-4', 'rounded-lg', 
                    'text-lg', 'sm:text-xl', 'md:text-2xl', 'font-semibold'
                );

                row.innerHTML = `
                    <div>${result.id}</div>
                    <div>${result.name}</div>
                    <div class="hidden sm:block">${result.last}</div>
                    <div class="hidden sm:block">${result.buy}/${result.sell}</div>
                    <div class="hidden md:block text-webBlue">0%</div>
                    <div class="hidden md:block text-webBlue">₹0</div>
                `;

                container.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData();
});



document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownDividerButton');
    const dropdownMenu = document.getElementById('dropdownDivider');

    dropdownButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('hidden');
    });

    const dropdownButton2 = document.getElementById('dropdownDividerButton2');
    const dropdownMenu2 = document.getElementById('dropdownDivider2');

    dropdownButton2.addEventListener('click', function() {
        dropdownMenu2.classList.toggle('hidden');
    });
});

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('input[type="checkbox"]');
    const body = document.body;

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark');
        toggleSwitch.checked = true;
    } else {
        body.classList.remove('dark');
        toggleSwitch.checked = false;
    }

    toggleSwitch.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('dark');
            localStorage.setItem('dark-mode', 'enabled');
            console.log('Dark mode enabled');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('dark-mode', 'disabled');
            console.log('Dark mode disabled');
        }
    });
});
