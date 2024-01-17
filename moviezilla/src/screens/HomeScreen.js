import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';
import TrendingMovies from '../components/TrendingMovie';
export default function HomeScreen() {

  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <Image
        source={require("../../assets/images/homescreen1.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />
      <ScrollView className="mt-16">
        <StatusBar style="light" />

        {/* Welcome Title */}

        <View className="flex-row justify-between items-center mx-4 mg-4">
          <View className="border-2 border-white rounded-full overflow-hidden">
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{
                width: 45,
                height: 45,
              }}
              resizeMode="cover"
            />
          </View>
          {/* Notifications and Search Icons */}
          <View className="flex-row space-x-4">
            <BellIcon size={30} strokeWidth={2} color="white" />

            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
          {/* Movie Card */}
        </View>
        <TrendingMovies />
      </ScrollView>
    </View>
  );
}