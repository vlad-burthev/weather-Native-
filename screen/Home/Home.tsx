import type {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useGetWeatherQuery} from '../../api/weatherAPI';
import {WEATHER_API_URL} from '@env';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const {data, isLoading, isFetching} = useGetWeatherQuery('Kyiv');

  console.log(data);
  console.log(WEATHER_API_URL);
  return (
    <View>
      {data && (isLoading || isFetching) ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text>country: {data?.location.country}</Text>
          <Text>city: {data?.location.name}</Text>
          <Text>region: {data?.location.region}</Text>
          <View>
            <Text>current: {data?.current.condition.text}</Text>
            <View style={styles?.container}>
              <Image
                style={styles.image}
                source={{uri: 'https:' + data?.current.condition.icon}}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
  },
});

export default Home;
