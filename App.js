import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import hotBackground from "./assets/hot.png";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { useState } from "react";
import { DEFAULT_TEMPERATURE, DEFAULT_UNITS } from "./constant";
import { getOppositUnit } from "./services/temperature-service";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNITS);

  return (
    <ImageBackground source={hotBackground} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay
          value={inputValue}
          unit={getOppositUnit(currentUnit)}
        />
        <InputTemperature
          onChangeText={setInputValue}
          defaltValue={DEFAULT_TEMPERATURE}
        />
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
