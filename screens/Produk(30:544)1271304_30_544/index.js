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
      <View style={styles.View_30_545} />
      <View style={styles.View_30_546} />
      <View style={styles.View_30_547}>
        <Text style={styles.Text_30_547}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_548}>
        <Text style={styles.Text_30_548}>Nama kontak Suplier</Text>
      </View>
      <View style={styles.View_30_549}>
        <Text style={styles.Text_30_549}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_550}>
        <Text style={styles.Text_30_550}> Email suplier</Text>
      </View>
      <View style={styles.View_30_551}>
        <Text style={styles.Text_30_551}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_552} />
      <View style={styles.View_30_553} />
      <View style={styles.View_30_554} />
      <View style={styles.View_30_555} />
      <View style={styles.View_30_556} />
      <View style={styles.View_30_557} />
      <View style={styles.View_30_558}>
        <Text style={styles.Text_30_558}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_559}>
        <Text style={styles.Text_30_559}>Nama Kontak Suplier</Text>
      </View>
      <View style={styles.View_30_560}>
        <Text style={styles.Text_30_560}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_561}>
        <Text style={styles.Text_30_561}>Email suplier</Text>
      </View>
      <View style={styles.View_30_562}>
        <Text style={styles.Text_30_562}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_563}>
        <Text style={styles.Text_30_563}>Tambah suplier</Text>
      </View>
      <View style={styles.View_30_564} />
      <View style={styles.View_30_565} />
      <View style={styles.View_30_566} />
      <View style={styles.View_30_567}>
        <Text style={styles.Text_30_567}>Kembali</Text>
      </View>
      <View style={styles.View_30_568} />
      <View style={styles.View_30_569}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52d1/ccf6/5029c0b8450660789464675b74ce8884"
          }}
          style={styles.ImageBackground_I30_569_30_64}
        />
      </View>
      <View style={styles.View_30_570}>
        <Text style={styles.Text_30_570}>Nama produk</Text>
      </View>
      <View style={styles.View_30_571} />
      <View style={styles.View_30_572} />
      <View style={styles.View_30_573} />
      <View style={styles.View_30_574} />
      <View style={styles.View_30_575} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7394/dd78/38d29520cd41e3dae97e00a6cd0b5502"
        }}
        style={styles.ImageBackground_30_576}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e42/18ad/dc5ee57c36609b280dc4c006b303d79b"
        }}
        style={styles.ImageBackground_30_577}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc3c/44a6/17dbc7f78744e98da9b8e12d6444489d"
        }}
        style={styles.ImageBackground_30_578}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b4a/1662/07cf0f61d19074e06952e3d65495cf1b"
        }}
        style={styles.ImageBackground_30_579}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df45/570e/fb4223948e148c49b6f9057b253015b3"
        }}
        style={styles.ImageBackground_30_580}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/149e/087c/c7adad0ac692ed7e2e20be30a5b02b91"
        }}
        style={styles.ImageBackground_30_581}
      />
      <View style={styles.View_30_582}>
        <View style={styles.View_30_583}>
          <Text style={styles.Text_30_583}>Kategori</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3153/213c/70540e4c533f3de973fcbd050c447dbb"
          }}
          style={styles.ImageBackground_30_584}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7562/bd86/26f25d531594bec6f3c55da54fbc2e62"
        }}
        style={styles.ImageBackground_30_585}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23ee/b067/22e6d18286a0a668dd345a3196ae1c2f"
        }}
        style={styles.ImageBackground_30_586}
      />
      <View style={styles.View_30_587} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_545: {
    width: wp("100%"),
    height: hp("114%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_546: {
    width: wp("100%"),
    height: hp("113%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("475%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_547: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_547: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_548: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_549: {
    width: wp("51%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_549: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_550: {
    width: wp("51%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_550: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_551: {
    width: wp("51%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_551: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_552: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_553: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_554: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_555: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_556: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_557: {
    width: wp("85%"),
    height: hp("35%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_558: {
    width: wp("40%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_558: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_559: {
    width: wp("55%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_559: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_560: {
    width: wp("55%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_560: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_561: {
    width: wp("55%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_561: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_562: {
    width: wp("55%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("484%"),
    justifyContent: "flex-start"
  },
  Text_30_562: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_563: {
    width: wp("38%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("508%"),
    justifyContent: "flex-start"
  },
  Text_30_563: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_564: {
    width: wp("34%"),
    height: hp("21%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_565: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_566: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_567: {
    width: wp("20%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    justifyContent: "flex-start"
  },
  Text_30_567: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_568: {
    width: wp("91%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_569: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I30_569_30_64: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_30_570: {
    width: wp("52%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_30_570: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_571: {
    width: wp("34%"),
    height: hp("21%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_572: {
    width: wp("34%"),
    height: hp("20%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_573: {
    width: wp("34%"),
    height: hp("20%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_574: {
    width: wp("34%"),
    height: hp("20%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_575: {
    width: wp("34%"),
    height: hp("20%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  ImageBackground_30_576: {
    width: wp("30%"),
    height: hp("18%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_30_577: {
    width: wp("30%"),
    height: hp("17%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_30_578: {
    width: wp("29%"),
    height: hp("18%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_30_579: {
    width: wp("30%"),
    height: hp("18%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_30_580: {
    width: wp("29%"),
    height: hp("18%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_30_581: {
    width: wp("30%"),
    height: hp("17%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  View_30_582: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("11%")
  },
  View_30_583: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_30_583: {
    color: "rgba(169, 165, 165, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_584: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_30_585: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("58%")
  },
  ImageBackground_30_586: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("59%")
  },
  View_30_587: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("47%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
