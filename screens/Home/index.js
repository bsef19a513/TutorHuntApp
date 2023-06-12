import React from 'react';
import { View, ScrollView } from 'react-native';
import Card from '../Card';

const dataFromApi = [
  {
    id: 1,
    name: 'Asim',
    age: 22,
    experience: '2 Years',
    qualification: 'BS Mathematics',
    phoneNumber: '1234567890', // Add phoneNumber property
  },
  {
    id: 2,
    name: 'Hassan',
    age: 22,
    experience: '2 Years',
    qualification: 'BS Physics',
    phoneNumber: '9876543210', // Add phoneNumber property
  },
  {
    id: 3,
    name: 'Iqra',
    age: 22,
    experience: '2 Years',
    qualification: 'BS Chemistry',
    phoneNumber: '5555555555', // Add phoneNumber property
  },
  {
    id: 4,
    name: 'Mahnoor',
    age: 22,
    experience: '2 Years',
    qualification: 'BS Mechanical',
    phoneNumber: '1111111111', // Add phoneNumber property
  },
  {
    id: 5,
    name: 'Asim',
    age: 22,
    experience: '2 Years',
    qualification: 'BSSE Engineering',
    phoneNumber: '9999999999', // Add phoneNumber property
  },
];

const Home = ({ navigation }) => {
  const renderCards = () => {
    return dataFromApi.map((item) => (
      <Card
        name={item.name}
        age={item.age}
        phoneNumber={item.phoneNumber} // Pass phoneNumber as prop
        exp={item.experience}
        qual={item.qualification}
        key={item.id}
        navigation={navigation} // Pass the navigation object as a prop
      />
    ));
  };

  return (
    <View>
      <ScrollView>{renderCards()}</ScrollView>
    </View>
  );
};

export default Home;
