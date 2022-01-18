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
      <View style={styles.View_30_105} />
      <View style={styles.View_30_106} />
      <View style={styles.View_30_107} />
      <View style={styles.View_30_108} />
      <View style={styles.View_30_109} />
      <View style={styles.View_30_110} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("113%"),
    minHeight: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_106: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_30_107: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_30_108: {
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
  View_30_109: {
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
  View_30_110: {
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
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
