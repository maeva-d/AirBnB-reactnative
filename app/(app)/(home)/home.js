import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollView, FlatList, View, Image, Text } from "react-native";
import { AuthContext } from "../../../context/AuthContext";

import {
  PostTitle,
  PostDescription,
  PostRatings,
  PostOwnerPicture,
  PostPicture,
} from "../../../assets/components/homescreen/index";

export default Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => String(item._id)}
      renderItem={({ item }) => (
        <View>
          {/* {console.log(item)} */}
          {/* <PostPicture source={item.photos[0].url} /> */}
          <PostTitle text={item.title} />
        </View>
      )} // renderItem contient une déclaration de fonction
    />
  );
};
