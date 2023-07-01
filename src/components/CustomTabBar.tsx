  import React from 'react';
  import { TouchableOpacity, View } from 'react-native';
  import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
  import { FontAwesome5 } from '@expo/vector-icons';
  import styled from 'styled-components/native';

  interface CustomTabBarProps extends BottomTabBarProps {
    icons: { [key: string]: string };
  }

  const CustomTabBar: React.FC<CustomTabBarProps> = ({
    state,
    navigation,
    icons,
  }) => {
    return (
      <Overlay>
        <TabBarContainer>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            
            const iconName = icons[route.name];

            return (
              <TabBarButton key={route.key} onPress={onPress}>
                <IconContainer>
                  <FontAwesome5
                    name={iconName || 'question'}
                    size={24}
                    color={isFocused ? 'black' : 'gray'}
                  />
                </IconContainer>
                {isFocused && <SelectedIndicator />}
              </TabBarButton>
            );
          })}
        </TabBarContainer>
      </Overlay>
    );
  };

  const Overlay = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
  `;

  const TabBarContainer = styled.View`
    flex-direction: row;
    background-color: #fff;
    border-radius: 24px;
    border: 1px solid #D2D2D2;
    overflow: hidden;
    margin: 14px 14px 20px 14px;
    padding: 10px 10px 20px 20px;
  `;

  const TabBarButton = styled(TouchableOpacity)`
    flex: 1;
    align-items: flex-start;
    padding: 14px;
  `;

  const IconContainer = styled.View``;

  const SelectedIndicator = styled.View`
    position: absolute;
    bottom: -4px;
    left: 22px;
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 5px;
  `;

  export default CustomTabBar;
