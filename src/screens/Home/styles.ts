import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const MarginContainer = styled.View`
  margin: 20px;
`;

export const TopSection = styled.View`
  padding-top: 10px;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  padding: 10px 0 10px 0;  
  font-size: 24px;
  font-weight: 500;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: #EAEAEA;
  border-radius: 10px;
  margin-top: 10px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  font-size: 20px;
  color: #A4A4A4;
`;

export const CoinItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const CoinIcon = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 20px;
`;

export const CoinInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const CoinSymbol = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CoinName = styled.Text`
  font-size: 14px;
  color: #888;
`;

export const CoinPriceContainer = styled.View`
  align-items: flex-end;
`;

export const CoinPrice = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

export const PriceChangePositive = styled.View`
  flex-direction: row;
  align-items: center;
  color: green;
`;

export const PriceChangeNegative = styled.View`
  flex-direction: row;
  align-items: center;
  color: red;
`;

export const PriceChangePercentage = styled.Text<{ isPositive: boolean }>`
  font-size: 16px;
  margin-left: 5px;
  font-weight: 500;
  ${({ isPositive }: any) =>
    isPositive
      ? css`
          color: green;
        `
      : css`
          color: red;
        `}
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #F4F4F4;
  margin: 0 20px 0 20px
`;