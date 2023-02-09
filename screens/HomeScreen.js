import { View, Text, Image, TextInput, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  // We want to use a personalized Header so we can do this
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  // When the UI loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  // When the component loads
  useEffect(() => {
    
  }, []);

  return (
    <SafeAreaView className="bg-white pt-10">
        {/* HEADER */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image 
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
              <Text className='font-bold text-gray-400 text-xs'>
                Deliver Now!
              </Text>
              <Text className="font-bold text-xl">
                Current Location
                <ChevronDownIcon size={20} color="#00CCBB" />
              </Text>
          </View>

          <UserIcon size={35} color="#00CCBB"/>
        </View>

        {/* SEARCH */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row  space-x-2 bg-gray-200 p-3 flex-1" >
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
          </View>

          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

        {/* BODY */}
        <ScrollView className="bg-gray-100">

          {/* Categories */}
          <Categories />

          {/* Featured Rows */}
          <FeaturedRow
            id="123" 
            title="Featured"
            description="Paid placements from our partners"
          />
          <FeaturedRow
            id="1234" 
            title="Tasty Discounts"
            description="Everyone's been enjoying these juicy discounts!"
          />
          <FeaturedRow
            id="12345" 
            title="Offers near you!"
            description="Why not support your local restaurant tonight!"
          />

        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;