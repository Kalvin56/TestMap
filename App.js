import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Mapbox from '@rnmapbox/maps';
import {Icon} from '@rneui/themed';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.page}>
          <View style={styles.container}>
            <Mapbox.MapView style={styles.map}>
              <Mapbox.Camera
                zoomLevel={10}
                centerCoordinate={[-1.553621, 47.218371]}
                animationMode={'flyTo'}
                animationDuration={0}
              />
              <Mapbox.PointAnnotation
                id="nantesMarker"
                coordinate={[-1.533621, 47.218371]}>
                <View>
                  <Icon
                    name="map-marker-alt"
                    type="font-awesome-5"
                    color="#FF1E00"
                    size={32}
                  />
                </View>
              </Mapbox.PointAnnotation>
            </Mapbox.MapView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 600,
    width: '100%',
  },
  map: {
    flex: 1,
  },
});

export default App;
