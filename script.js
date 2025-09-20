document.getElementById('getFact').addEventListener('click', async function() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        document.getElementById('fact').innerHTML = `<p>${data.fact}</p>`;
    } catch (error) {
        document.getElementById('fact').innerHTML = '<p>Failed to fetch cat fact. Try again later.</p>';
    }
});
