import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

import { CoinItem } from './CoinItem';
import { CoinDTO } from '../dtos/Coin';

import { Divider } from '../screens/Home/styles';
import { Loading } from './Loading';

interface CoinProps {
  loading: boolean;
  refreshing: boolean;
  handleRefresh: () => void;
  filteredCoins: CoinDTO[];
}

export const Coin: React.FC<CoinProps> = ({ refreshing, handleRefresh, filteredCoins, loading }) => {
  const renderCoinItem = ({ item }: { item: CoinDTO }) => {
    return <CoinItem coin={item} />;
  };

  return (
    <>
      {loading ? (
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
