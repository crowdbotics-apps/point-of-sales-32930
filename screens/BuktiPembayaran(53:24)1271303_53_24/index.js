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
      <View style={styles.View_53_25} />
      <View style={styles.View_53_26} />
      <View style={styles.View_53_27}>
        <Text style={styles.Text_53_27}>Nama Suplier</Text>
      </View>
      <View style={styles.View_53_28}>
        <Text style={styles.Text_53_28}>Nama kontak Suplier</Text>
      </View>
      <View style={styles.View_53_29}>
        <Text style={styles.Text_53_29}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_53_30}>
        <Text style={styles.Text_53_30}> Email suplier</Text>
      </View>
      <View style={styles.View_53_31}>
        <Text style={styles.Text_53_31}>Alamat suplier</Text>
      </View>
      <View style={styles.View_53_32} />
      <View style={styles.View_53_33} />
      <View style={styles.View_53_34} />
      <View style={styles.View_53_35} />
      <View style={styles.View_53_36} />
      <View style={styles.View_53_37} />
      <View style={styles.View_53_38}>
        <Text style={styles.Text_53_38}>Nama Suplier</Text>
      </View>
      <View style={styles.View_53_39}>
        <Text style={styles.Text_53_39}>Nama Kontak Suplier</Text>
      </View>
      <View style={styles.View_53_40}>
        <Text style={styles.Text_53_40}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_53_41}>
        <Text style={styles.Text_53_41}>Email suplier</Text>
      </View>
      <View style={styles.View_53_42}>
        <Text style={styles.Text_53_42}>Alamat suplier</Text>
      </View>
      <View style={styles.View_53_43}>
        <Text style={styles.Text_53_43}>Tambah suplier</Text>
      </View>
      <View style={styles.View_53_44} />
      <View style={styles.View_53_45}>
        <Text style={styles.Text_53_45}>Kembali</Text>
      </View>
      <View style={styles.View_53_46} />
      <View style={styles.View_53_47}>
        <Text style={styles.Text_53_47}>Pembayaran</Text>
      </View>
      <View style={styles.View_53_48}>
        <Text style={styles.Text_53_48}>1</Text>
      </View>
      <View style={styles.View_30_542} />
      <View style={styles.View_30_669}>
        <Text style={styles.Text_30_669}>
          Lalu jika sudah berhasil, foto atau screen shoot bukti transfer
          tersebut untuk di masukan bukti transfer yang ada di menu pesanan
        </Text>
      </View>
      <View style={styles.View_30_670}>
        <Text style={styles.Text_30_670}>
          Transfer ke nomor rekening di bawah ini :
        </Text>
      </View>
      <View style={styles.View_30_671}>
        <Text style={styles.Text_30_671}>Rp 360.000</Text>
      </View>
      <View style={styles.View_30_672}>
        <Text style={styles.Text_30_672}>
          total harga yang harus di bayar :
        </Text>
      </View>
      <View style={styles.View_30_673}>
        <Text style={styles.Text_30_673}> 13 - 11 - 2021</Text>
      </View>
      <View style={styles.View_30_674}>
        <Text style={styles.Text_30_674}>Waktu terakhir anda transfer :</Text>
      </View>
      <View style={styles.View_30_675}>
        <Text style={styles.Text_30_675}>
          Pastikan nomor rekening yang anda transfer benar dan atas nama
          Muhammad Qinan Dzulfiqar
        </Text>
      </View>
      <View style={styles.View_30_676}>
        <Text style={styles.Text_30_676}>014 13901146650500</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f733/0105/3cc0528d34c46d88109e9453c539f67a"
        }}
        style={styles.ImageBackground_30_677}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_53_25: {
    width: wp("100%"),
    height: hp("112%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_53_26: {
    width: wp("100%"),
    height: hp("113%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("475%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_53_27: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_53_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_28: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_53_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_29: {
    width: wp("51%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_53_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_30: {
    width: wp("51%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_53_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_31: {
    width: wp("51%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_53_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_32: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_53_33: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_53_34: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_53_35: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_53_36: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_53_37: {
    width: wp("85%"),
    height: hp("35%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_53_38: {
    width: wp("40%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_53_38: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_39: {
    width: wp("55%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_53_39: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_40: {
    width: wp("55%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_53_40: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_41: {
    width: wp("55%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_53_41: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_42: {
    width: wp("55%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("484%"),
    justifyContent: "flex-start"
  },
  Text_53_42: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_43: {
    width: wp("38%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("508%"),
    justifyContent: "flex-start"
  },
  Text_53_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_44: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_53_45: {
    width: wp("20%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    justifyContent: "flex-start"
  },
  Text_53_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_46: {
    width: wp("101%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    backgroundColor: "rgba(146, 170, 157, 1)"
  },
  View_53_47: {
    width: wp("59%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_53_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_48: {
    width: wp("4%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    justifyContent: "flex-start"
  },
  Text_53_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_542: {
    width: wp("100%"),
    height: hp("9%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_669: {
    width: wp("61%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_30_669: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_670: {
    width: wp("74%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_30_670: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_671: {
    width: wp("25%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_30_671: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_672: {
    width: wp("61%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_30_672: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_673: {
    width: wp("30%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_30_673: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_674: {
    width: wp("61%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_30_674: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_675: {
    width: wp("61%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_30_675: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_676: {
    width: wp("61%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "flex-start"
  },
  Text_30_676: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_677: {
    width: wp("68%"),
    height: hp("10%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
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
