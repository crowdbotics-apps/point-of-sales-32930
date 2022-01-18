import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_30_75} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c376/6ac2/2b9500843b0089539a5c22e71c88fb4b"
        }}
        style={styles.ImageBackground_30_76}
      />
      <View style={styles.View_30_77}>
        <Text style={styles.Text_30_77}>Hi, Admin</Text>
      </View>
      <View style={styles.View_30_78}>
        <Text style={styles.Text_30_78}>
          Selamat datang di Aplikasi Point of Sales, Utama Alumunium.
        </Text>
      </View>
      <View style={styles.View_30_79} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4c/0b65/6f3167228356ec8f61d85af296561c29"
        }}
        style={styles.ImageBackground_30_80}
      />
      <View style={styles.View_30_82}>
        <Text style={styles.Text_30_82}>Item</Text>
      </View>
      <View style={styles.View_30_83} />
      <View style={styles.View_30_84} />
      <View style={styles.View_30_85} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e8b/ccaa/cb65f7aa2bfe34bf4d4dc9618a720f07"
        }}
        style={styles.ImageBackground_30_86}
      />
      <View style={styles.View_30_87}>
        <Text style={styles.Text_30_87}>Pelanggan</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8426/503d/20cdbba95017c78dbb1b10c99c24479b"
        }}
        style={styles.ImageBackground_30_88}
      />
      <View style={styles.View_30_89}>
        <Text style={styles.Text_30_89}>Keluar </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cc2/08d1/d8545e3ede20aaee80849c978c17c718"
        }}
        style={styles.ImageBackground_30_90}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_75: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("113%"),
    minHeight: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  ImageBackground_30_76: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("4%")
  },
  View_30_77: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_30_77: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_78: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_30_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_79: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_30_80: {
    width: wp("33%"),
    height: hp("9%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_30_82: {
    width: wp("20%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    justifyContent: "flex-start"
  },
  Text_30_82: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_83: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_30_84: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_30_85: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("58%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_30_86: {
    width: wp("24%"),
    height: hp("16%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_30_87: {
    width: wp("19%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    justifyContent: "flex-start"
  },
  Text_30_87: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_88: {
    width: wp("24%"),
    height: hp("16%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_30_89: {
    width: wp("14%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    justifyContent: "flex-start"
  },
  Text_30_89: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_90: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("23%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
