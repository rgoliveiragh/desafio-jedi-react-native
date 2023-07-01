import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

import { CoinItem } from './CoinItem';
import { CoinDTO } from '../dtos/Coin';

import { Divider } from '../screens/Home/styles';
import { Loading } from './Loading';

interface CoinProps {
  refreshing: boolean;
  handleRefresh: () => void;
  filteredCoins: CoinDTO[];
}

export const Coin: React.FC<CoinProps> = ({ refreshing, handleRefresh, filteredCoins }) => {
  const renderCoinItem = ({ item }: { item: CoinDTO }) => {
    return <CoinItem coin={item} />;
  };

  return (
    <>
      {refreshing ? (
        <Loading />
      ) : (
        <FlatList
          data={filteredCoins}
          renderItem={renderCoinItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={handleRefresh} 
            />
          }
        />
      )}
    </>
  );
};
