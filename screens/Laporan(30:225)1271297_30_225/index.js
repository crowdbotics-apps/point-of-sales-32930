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
      <View style={styles.View_30_226} />
      <View style={styles.View_30_227}>
        <Text style={styles.Text_30_227}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_228}>
        <Text style={styles.Text_30_228}>Nama kontak Suplier</Text>
      </View>
      <View style={styles.View_30_229}>
        <Text style={styles.Text_30_229}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_230}>
        <Text style={styles.Text_30_230}> Email suplier</Text>
      </View>
      <View style={styles.View_30_231}>
        <Text style={styles.Text_30_231}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_232} />
      <View style={styles.View_30_233} />
      <View style={styles.View_30_234} />
      <View style={styles.View_30_235} />
      <View style={styles.View_30_236} />
      <View style={styles.View_30_237} />
      <View style={styles.View_30_238}>
        <Text style={styles.Text_30_238}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_239}>
        <Text style={styles.Text_30_239}>Nama Kontak Suplier</Text>
      </View>
      <View style={styles.View_30_240}>
        <Text style={styles.Text_30_240}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_241}>
        <Text style={styles.Text_30_241}>Email suplier</Text>
      </View>
      <View style={styles.View_30_242}>
        <Text style={styles.Text_30_242}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_243}>
        <Text style={styles.Text_30_243}>Tambah suplier</Text>
      </View>
      <View style={styles.View_30_244} />
      <View style={styles.View_30_245} />
      <View style={styles.View_30_246}>
        <Text style={styles.Text_30_246}>Kembali</Text>
      </View>
      <View style={styles.View_30_247} />
      <View style={styles.View_30_248}>
        <Text style={styles.Text_30_248}>Laporan</Text>
      </View>
      <View style={styles.View_30_249} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/291c/f572/27feabf3a94b782513c279be84c6b369"
        }}
        style={styles.ImageBackground_39_26}
      />
      <View style={styles.View_39_27}>
        <Text style={styles.Text_39_27}>BUKTI TF / PEMBAYARAN</Text>
      </View>
      <View style={styles.View_30_250}>
        <Text style={styles.Text_30_250}>FA - 45</Text>
      </View>
      <View style={styles.View_30_251}>
        <Text style={styles.Text_30_251}>Terakhir : 13 - 11 - 2021</Text>
      </View>
      <View style={styles.View_30_252}>
        <Text style={styles.Text_30_252}>
          Nama Customer Kontak Customer Email Customer
        </Text>
      </View>
      <View style={styles.View_30_253}>
        <Text style={styles.Text_30_253}>1</Text>
      </View>
      <View style={styles.View_30_254}>
        <Text style={styles.Text_30_254}>
          Dimas, JL. Letjend sarbini no 41, rt 01 rw 01, Kota Bekasi, Bekasi
          selatan kelurahan margajaya{" "}
        </Text>
      </View>
      <View style={styles.View_30_255}>
        <Text style={styles.Text_30_255}>Alamat pengiriman</Text>
      </View>
      <View style={styles.View_30_256}>
        <Text style={styles.Text_30_256}>Barang yang dipesan</Text>
      </View>
      <View style={styles.View_30_257}>
        <Text style={styles.Text_30_257}>Transfer </Text>
      </View>
      <View style={styles.View_30_258}>
        <Text style={styles.Text_30_258}>Jumlah barang</Text>
      </View>
      <View style={styles.View_30_259}>
        <Text style={styles.Text_30_259}>Status</Text>
      </View>
      <View style={styles.View_30_260}>
        <Text style={styles.Text_30_260}>Pembayaran </Text>
      </View>
      <View style={styles.View_30_261}>
        <Text style={styles.Text_30_261}>
          Total harga yang harus di bayar : Rp. 360,000
        </Text>
      </View>
      <View style={styles.View_30_262} />
      <View style={styles.View_30_263}>
        <Text style={styles.Text_30_263}>Sudah di bayar</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_226: {
    width: wp("100%"),
    height: hp("113%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("475%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_227: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_228: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_228: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_229: {
    width: wp("51%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_229: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_230: {
    width: wp("51%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_231: {
    width: wp("51%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_231: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_232: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_233: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_234: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_235: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_236: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_237: {
    width: wp("85%"),
    height: hp("35%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_238: {
    width: wp("40%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_238: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_239: {
    width: wp("55%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_239: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_240: {
    width: wp("55%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_240: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_241: {
    width: wp("55%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_241: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_242: {
    width: wp("55%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("484%"),
    justifyContent: "flex-start"
  },
  Text_30_242: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_243: {
    width: wp("38%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("508%"),
    justifyContent: "flex-start"
  },
  Text_30_243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_244: {
    width: wp("100%"),
    height: hp("112%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_245: {
    width: wp("42%"),
    height: hp("6%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_246: {
    width: wp("20%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_30_246: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_247: {
    width: wp("100%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 170, 157, 1)"
  },
  View_30_248: {
    width: wp("41%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_30_248: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_249: {
    width: wp("85%"),
    height: hp("78%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  ImageBackground_39_26: {
    width: wp("58%"),
    height: hp("20%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_39_27: {
    width: wp("45%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_39_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_250: {
    width: wp("37%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_250: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_251: {
    width: wp("58%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_251: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_252: {
    width: wp("40%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_252: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_253: {
    width: wp("4%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    justifyContent: "flex-start"
  },
  Text_30_253: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_254: {
    width: wp("82%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_254: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_255: {
    width: wp("82%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_255: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_256: {
    width: wp("82%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_256: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_257: {
    width: wp("82%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_257: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_258: {
    width: wp("26%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    justifyContent: "flex-start"
  },
  Text_30_258: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_259: {
    width: wp("82%"),
    top: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_259: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_260: {
    width: wp("82%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_260: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_261: {
    width: wp("58%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_261: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_262: {
    width: wp("41%"),
    height: hp("3%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(33, 36, 87, 1)"
  },
  View_30_263: {
    width: wp("38%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_30_263: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
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
