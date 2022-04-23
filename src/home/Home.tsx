import React from 'react';
import { Image, Text, View } from 'react-native';

import { useGetPokemonByNameQuery } from '@services/pokemon';

const Home = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  if (error) {
    return <Text>Oh no, there was an error</Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{data.species.name}</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{ uri: data.sprites.front_shiny }}
        accessibilityLabel={data.species.name}
      />
    </View>
  );
};

export default Home;
