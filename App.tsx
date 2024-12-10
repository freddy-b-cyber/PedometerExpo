import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Pedometer} from 'expo-sensors';

export default function App() {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const subscription = useRef<Pedometer.Subscription | undefined>();

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    const permissions = await Pedometer.requestPermissionsAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable && permissions.granted) {
      subscription.current = Pedometer.watchStepCount(result => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    subscribe();
    return () => subscription.current && subscription.current.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text>
      <Text>Walk! And watch this go up: {currentStepCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
