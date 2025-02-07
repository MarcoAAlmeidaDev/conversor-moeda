async function getApiKey() {
    try {
        const response = await fetch('http://localhost:3000/api/key');
        const data = await response.json();
        return data.apiKey;
    } catch (error) {
        console.error('Erro ao obter a API Key:', error);
    }
}

async function fetchCurrencies() {
    try {
        const apiKey = await getApiKey();
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);
        populateCurrencyDropdowns(currencies);
    } catch (error) {
        console.error('Erro ao obter dados da API:', error);
    }
}

function populateCurrencyDropdowns(currencies) {
    const fromDropdown = document.getElementById('fromCurrency');
    const toDropdown = document.getElementById('toCurrency');
    currencies.forEach(currency => {
        fromDropdown.innerHTML += `<option value="${currency}">${currency}</option>`;
        toDropdown.innerHTML += `<option value="${currency}">${currency}</option>`;
    });
}

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (amount === '' || amount <= 0) {
        alert('Digite um valor válido!');
        return;
    }
    
    try {
        const apiKey = await getApiKey();
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        console.error('Erro ao converter moeda:', error);
        document.getElementById('result').innerText = 'Erro ao converter';
    }
}

// Definição das moedas com país e símbolo
const currencies = [
    { id: 'USD', text: 'USD - Dólar (EUA)' },
    { id: 'EUR', text: 'EUR - Euro (União Europeia)' },
    { id: 'BRL', text: 'BRL - Real (Brasil)' },
    { id: 'GBP', text: 'GBP - Libra Esterlina (Reino Unido)' },
    { id: 'JPY', text: 'JPY - Iene (Japão)' },
    { id: 'CAD', text: 'CAD - Dólar Canadense (Canadá)' },
    // Adicione mais moedas conforme necessário
];

// Inicializar Select2
$(document).ready(function() {
    // Preencher as opções de moedas
    currencies.forEach(currency => {
        $('#fromCurrency').append(new Option(currency.text, currency.id));
        $('#toCurrency').append(new Option(currency.text, currency.id));
    });

    // Ativar a busca nas seleções de moedas
    $('.select2').select2();
});


fetchCurrencies();
