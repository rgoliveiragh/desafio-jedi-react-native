import React from 'react';
import { FontAwesome5, Feather } from '@expo/vector-icons';

import { BackButton, Container, MarginContainer, Title, TopSection, SearchBar, SearchInput } from "./styles"
import { Coin } from '../../components/Coin';
import { useCoin } from '../../hooks/home/useCoin';

export const Home: React.FC = () => {
  const { searchText, handleSearch, handleRefresh, refreshing, filteredCoins, handleBackButton, loading } = useCoin()

  return (
    <Container>
      <MarginContainer>
        <TopSection>
          <BackButton onPress={handleBackButton}>
            <Feather name="arrow-left" size={28} color="black" />
          </BackButton>
          <Title>Crypto</Title>
        </TopSection>
        <SearchBar>
          <FontAwesome5 name="search" size={18} color="#222" />
          <SearchInput
            placeholder="Search crypto"
            value={searchText}
            onChangeText={handleSearch}
          />
        </SearchBar>
      </MarginContainer>

      <Coin
        loading={loading}
        refreshing={refreshing}
        handleRefresh={handleRefresh} 
        filteredCoins={filteredCoins}
      />
    </Container>
  );
};
