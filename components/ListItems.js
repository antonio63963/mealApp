import { View, Text, StyleSheet } from "react-native";
import OcticonsIcons from "react-native-vector-icons/Octicons";

function ListItem({ isUl, title, list, bgColor, textColor }) {
  return (
    <>
      <View style={[styles.rootContainer, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, textColor && {color: textColor}]}>{title}:</Text>
        {list.map((item, idx) => 
          !isUl ? (
            <Text
              key={`${idx}_item`}
              style={[styles.detailText, textColor && { color: textColor }]}
            >
              {idx + 1}. {item}
            </Text>
          ) : (
            <View key={`${idx}_ingred`} style={styles.ul}>
              <OcticonsIcons
                name="dot-fill"
                color={textColor ? textColor : "grey"}
                seze={20}
              />
              <Text
                style={[styles.detailText, textColor && { color: textColor }]}
              >
                {item}
              </Text>
            </View>
          )
        )}
      </View>
    </>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: "100%",
  },
  title: {
    color: "#eee",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  ul: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailText: {
    marginLeft: 10,
    color: "#eee",
    opacity: 0.7,
    fontSize: 22,
    marginVertical: 8,
  },
});
