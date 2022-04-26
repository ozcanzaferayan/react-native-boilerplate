import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useGetPokemonByNameQuery } from '@services/pokemon';

const { width } = Dimensions.get('window');

const Home = () => {
  const statsRef = useRef(null);
  const pokemonList = ['pikachu', 'bulbasaur', 'charmander', 'squirtle'];
  const [pokemonName, setpokemonName] = useState('pikachu');
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName);
  if (error) {
    return <Text>Oh no, there was an error</Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.species.name}</Text>

      <ImageBackground
        resizeMode="cover"
        blurRadius={4}
        style={styles.backgroundImage}
        source={{ uri: data.sprites.front_default }}
        accessibilityLabel={data.species.name}
      >
        <Image
          style={styles.image}
          source={{ uri: data.sprites.other.home.front_default }}
          accessibilityLabel={data.species.name}
        />
      </ImageBackground>
      <FlatList
        ref={statsRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.stats}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <View style={styles.stats}>
            <Text key={item.stat.name}>
              {item.stat.name} - {item.base_stat}
            </Text>
          </View>
        )}
      />

      {pokemonList.map((pokemon) => (
        <TouchableOpacity
          key={pokemon}
          onPress={() => (
            setpokemonName(pokemon),
            statsRef.current?.scrollToIndex({ animated: true, index: 0 })
          )}
        >
          <Text style={styles.title}>{pokemon}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    textTransform: 'capitalize',
  },
  image: {
    width: 200,
    height: 200,
    left: width / 2 - 100,
    top: width / 2 - 100,
  },
  backgroundImage: {
    width: width,
    height: width,
  },
  stats: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
