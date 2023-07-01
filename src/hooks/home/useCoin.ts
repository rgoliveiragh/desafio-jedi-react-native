import { useEffect, useState } from "react";
import { CoinDTO } from "../../dtos/Coin";
import { fetchCoins } from "../../api/api";
import { Keyboard } from "react-native";

export const useCoin = () => {
  const [searchText, setSearchText] = useState('');
  const [coins, setCoins] = useState<CoinDTO[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleBackButton = () => {
    setSearchText('')
    Keyboard.dismiss()
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const fetchAllCoins = async () => {
    setRefreshing(true)
    const response = await fetchCoins();
    setCoins(response);
    setRefreshing(false)
  };
  
  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchAllCoins();
    setRefreshing(false);
  };
  
  useEffect(() => {
    fetchAllCoins();
  }, []);

  return {
    refreshing,
    searchText,
    handleSearch,
    handleRefresh,
    filteredCoins,
    handleBackButton
  }
}