import React from 'react';
import { CoinDTO } from '../dtos/Coin';
import { CoinIcon, CoinInfo, CoinItemContainer, CoinName, CoinPrice, CoinPriceContainer, CoinSymbol, PriceChangeNegative, PriceChangePercentage, PriceChangePositive } from '../screens/Home/styles';
import { Feather } from '@expo/vector-icons';

interface CoinItemProps {
  coin: CoinDTO;
}

export const CoinItem: React.FC<CoinItemProps> = ({ coin }) => {
  const formattedPrice = coin.current_price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 5,
  });

  return (
    <>
      <CoinItemContainer>
        <CoinIcon source={{ uri: coin.image }} />
        <CoinInfo>
          <CoinSymbol>{coin.symbol.toUpperCase()}</CoinSymbol>
          <CoinName>{coin.name}</CoinName>
        </CoinInfo>
        <CoinPriceContainer>
          <CoinPrice>${formattedPrice}</CoinPrice>
          {coin.price_change_percentage_24h >= 0 ? (
            <PriceChangePositive>
              <Feather name="arrow-up-right" size={12} color="green" />
              <PriceChangePercentage isPositive={true}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </PriceChangePercentage>
            </PriceChangePositive>
          ) : (
            <PriceChangeNegative>
              <Feather name="arrow-down-left" size={12} color="red" />
              <PriceChangePercentage isPositive={false}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </PriceChangePercentage>
            </PriceChangeNegative>
          )}
        </CoinPriceContainer>
      </CoinItemContainer>
    </>
  );
};
