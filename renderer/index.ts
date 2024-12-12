const itemInput = document.getElementById('itemInput') as HTMLTextAreaElement;
const checkPriceButton = document.getElementById('checkPrice') as HTMLButtonElement;
const resultsDiv = document.getElementById('results') as HTMLDivElement;

checkPriceButton.addEventListener('click', async () => {
    const itemData = itemInput.value.trim();
    if (!itemData) {
        resultsDiv.innerHTML = '<p>Please enter item data.</p>';
        return;
    }

    const apiUrl = `https://www.pathofexile.com/trade2/search/poe2/Standard?item=${encodeURIComponent(itemData)}`;
    resultsDiv.innerHTML = '<p>Fetching price data...</p>';

    const data = await window.api.fetchPrices(apiUrl);
    if (data) {
        resultsDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    } else {
        resultsDiv.innerHTML = '<p>Failed to fetch price data. Check console for details.</p>';
    }
});
