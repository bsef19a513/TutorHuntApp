import React from 'react'
import { View, ScrollView } from 'react-native'
import Card from '../Card';

const dataFromApi = [
    {
        id: 1,
        name: "Asim",
        age: 22,
        experience: "2 Years",
        qualification: "BS Mathematics"
    },
    {
        id: 2,
        name: "Hassan",
        age: 22,
        experience: "2 Years",
        qualification: "BS Physicsian"
    },
    {
        id: 3,
        name: "Iqra",
        age: 22,
        experience: "2 Years",
        qualification: "BS Chemistry"
    },
    {
        id: 4,
        name: "Mahnoor",
        age: 22,
        experience: "2 Years",
        qualification: "BS Mechanical"
    },
    {
        id: 5,
        name: "Asim",
        age: 22,
        experience: "2 Years",
        qualification: "BSSE Engineering"
    }
]

const Home = () => {

    const fun = (data) => {
        return data.map((item) => {
            return <Card name={item.name} age={item.age} exp={item.experience} qual={item.qualification} key={item.id} />
        })
    }

    return (
        <View>
            <ScrollView>
                {fun(dataFromApi)}
            </ScrollView>
        </View>

    );

}

export default Home;