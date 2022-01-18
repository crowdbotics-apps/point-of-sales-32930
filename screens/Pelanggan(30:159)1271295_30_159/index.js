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
      <View style={styles.View_30_160} />
      <View style={styles.View_30_161}>
        <Text style={styles.Text_30_161}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_162}>
        <Text style={styles.Text_30_162}>Nama kontak Suplier</Text>
      </View>
      <View style={styles.View_30_163}>
        <Text style={styles.Text_30_163}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_164}>
        <Text style={styles.Text_30_164}> Email suplier</Text>
      </View>
      <View style={styles.View_30_165}>
        <Text style={styles.Text_30_165}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_166} />
      <View style={styles.View_30_167} />
      <View style={styles.View_30_168} />
      <View style={styles.View_30_169} />
      <View style={styles.View_30_170} />
      <View style={styles.View_30_171} />
      <View style={styles.View_30_172}>
        <Text style={styles.Text_30_172}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_173}>
        <Text style={styles.Text_30_173}>Nama Kontak Suplier</Text>
      </View>
      <View style={styles.View_30_174}>
        <Text style={styles.Text_30_174}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_175}>
        <Text style={styles.Text_30_175}>Email suplier</Text>
      </View>
      <View style={styles.View_30_176}>
        <Text style={styles.Text_30_176}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_177}>
        <Text style={styles.Text_30_177}>Tambah suplier</Text>
      </View>
      <View style={styles.View_30_178} />
      <View style={styles.View_30_179} />
      <View style={styles.View_30_180} />
      <View style={styles.View_30_181}>
        <Text style={styles.Text_30_181}>Tambah Pelanggan</Text>
      </View>
      <View style={styles.View_30_182}>
        <Text style={styles.Text_30_182}>Kembali</Text>
      </View>
      <View style={styles.View_30_183} />
      <View style={styles.View_30_184} />
      <View style={styles.View_30_185}>
        <Text style={styles.Text_30_185}>Nama Kontak Email Alamat </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_160: {
    width: wp("100%"),
    height: hp("113%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("475%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_161: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_162: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_162: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_163: {
    width: wp("51%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_163: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_164: {
    width: wp("51%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_164: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_165: {
    width: wp("51%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_165: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_166: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_167: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_168: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_169: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_170: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_171: {
    width: wp("85%"),
    height: hp("35%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_172: {
    width: wp("40%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_172: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_173: {
    width: wp("55%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_173: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_174: {
    width: wp("55%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_174: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_175: {
    width: wp("55%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_175: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_176: {
    width: wp("55%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("484%"),
    justifyContent: "flex-start"
  },
  Text_30_176: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_177: {
    width: wp("38%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("508%"),
    justifyContent: "flex-start"
  },
  Text_30_177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_178: {
    width: wp("100%"),
    height: hp("112%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_179: {
    width: wp("47%"),
    height: hp("6%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_180: {
    width: wp("42%"),
    height: hp("6%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_181: {
    width: wp("47%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    justifyContent: "flex-start"
  },
  Text_30_181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_182: {
    width: wp("20%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_30_182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_183: {
    width: wp("100%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 170, 157, 1)"
  },
  View_30_184: {
    width: wp("85%"),
    height: hp("17%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_185: {
    width: wp("40%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_30_185: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
