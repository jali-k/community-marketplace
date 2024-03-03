import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View className="items-center mt-[100px]"  >
        <Image  source={require('../../assets/images/login.jpg')} 
        className="w-[300px] h-[300px] object-cover "
        />    
      <Text  className="text-[25px] font-bold mt-10">Community MarketPlace</Text>
      <Text className="p-7 mt-2">The marketplace where you can buy and sell, what you need and what you have!</Text>
    <TouchableOpacity onPress={()=>console.log("Sign In")} className="bg-[#f15454] px-5 py-3 rounded-md mt-4"><Text className="text-white text-md">Get started!</Text></TouchableOpacity>
    </View>
  )
}