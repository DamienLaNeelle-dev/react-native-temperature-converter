import { Text, TextInput, View } from "react-native";
import { s } from "./InputTemperature.style";

export function InputTemperature({ defaltValue, onChangeText, unit }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Tape une temperature"
        keyboardType="numeric"
        returnKeyType="done"
        maxLength={4}
        defaultValue={defaltValue}
        onChangeText={onChangeText}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
