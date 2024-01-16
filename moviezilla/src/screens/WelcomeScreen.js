import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View className="bg-[#f64e32] flex-1 justify-end items-center space-y-10 realtive">
      <Image
        source={require("../../assets/images/welcome.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />

      <View className="flex items-center justify-center py-28 max-w-[80%]">
        <View className="bg-blue-600 p-4 rounded-3xl">
          <Text className="text-white text-4xl font-extrabold tracking-widest my-4">
            MZ
          </Text>
        </View>
        <Text className="text-white text-4xl font-bold tracking-widest my-4"> 
        MovieZilla
        </Text>
        <Text className="text-white tracking-widest mb-2 text-lg text-center font-medium">
            Discover a World Beyond Screens with MovieZilla's Cinematic Odyssey.
        </Text>

        <View className="my-4 mb-36">
            <TouchableOpacity
            className="px-12 py-3 rounded-lg bg-blue-600"
            onPress={()=> navigation.navigate("HomeTab")}
            >
                <Text className="text-white text-lg font-medium">
                    Explore
                </Text>

            </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}