import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, View, Image, Text, StyleSheet } from "react-native";
import { AuthContext } from "../../../context/AuthContext";

import {
  PostTitle,
  PostRatings,
  OwnerPicture,
  PostPicture,
} from "../../../assets/components/homescreen/index";

import { Price } from "../../../assets/components/Price";

import colors from "../../../assets/styles/colors";

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
      renderItem={(
        { item } // renderItem contient une déclaration de fonction
      ) => (
        <View style={styles.sections}>
          <View>
            <PostPicture image={{ uri: item.photos[0].url }} />
            <Price price={item.price}></Price>
          </View>
          {console.log(JSON.stringify(item, null, 2))}
          {/* bottom info */}
          <View style={styles.bottomInfos}>
            <View>
              <PostTitle text={item.title} />
              <View style={styles.ratings}>
                <PostRatings numOfRatings={item.ratingValue} />
                <Text style={colors.mediumGrey}>{item.reviews} reviews</Text>
              </View>
            </View>
            <View>
              <OwnerPicture owner={{ uri: item.user.account.photo.url }} />
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  sections: {
    marginTop: 30,
    marginHorizontal: 15,
    borderBottomColor: colors.mediumGrey,
    borderBottomWidth: 1,
    // flex: 1,
  },

  bottomInfos: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ratings: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
