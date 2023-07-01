import axios from "axios";
import { CoinDTO } from "../dtos/Coin";
import { mockData } from "../constants/mockData";

// Set this flag to true to use the mock data, false to use the real API
const useMock = true;

// Real API endpoint
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets';


// Function to fetch data from the Coingecko API
const fetchCoinsFromAPI = async () => {
  try {
    const response = await axios.get<CoinDTO[]>(API_URL, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 20,
        page: 1,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data from Coingecko API:', error);
    return [];
  }
};

// Function to fetch mock data
const fetchCoinsMock = async () => {
  // Simulate an API call delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return mockData;
};

// Main fetchCoins function
export const fetchCoins = async () => {
  if (useMock) {
    return fetchCoinsMock();
  } else {
    return fetchCoinsFromAPI();
  }
};
