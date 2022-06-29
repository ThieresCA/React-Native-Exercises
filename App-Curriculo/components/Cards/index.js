import React from "react";
import { View, Text } from "react-native";

import style from "./style";

const Card = ({title, children}) => {
  return (
    <View style={style.wrapper_card}>
      <View style={style.card}>
        <View style={style.card_header}>
          <Text style={style.exp_header}>{title}</Text>
          <View style={style.card_content}>
            {children}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
