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
      <View style={styles.View_30_187} />
      <View style={styles.View_30_188}>
        <Text style={styles.Text_30_188}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_189}>
        <Text style={styles.Text_30_189}>Nama kontak Suplier</Text>
      </View>
      <View style={styles.View_30_190}>
        <Text style={styles.Text_30_190}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_191}>
        <Text style={styles.Text_30_191}> Email suplier</Text>
      </View>
      <View style={styles.View_30_192}>
        <Text style={styles.Text_30_192}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_193} />
      <View style={styles.View_30_194} />
      <View style={styles.View_30_195} />
      <View style={styles.View_30_196} />
      <View style={styles.View_30_197} />
      <View style={styles.View_30_198} />
      <View style={styles.View_30_199}>
        <Text style={styles.Text_30_199}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_200}>
        <Text style={styles.Text_30_200}>Nama Kontak Suplier</Text>
      </View>
      <View style={styles.View_30_201}>
        <Text style={styles.Text_30_201}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_202}>
        <Text style={styles.Text_30_202}>Email suplier</Text>
      </View>
      <View style={styles.View_30_203}>
        <Text style={styles.Text_30_203}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_204}>
        <Text style={styles.Text_30_204}>Tambah suplier</Text>
      </View>
      <View style={styles.View_30_205} />
      <View style={styles.View_30_206} />
      <View style={styles.View_30_207}>
        <Text style={styles.Text_30_207}>Kembali</Text>
      </View>
      <View style={styles.View_30_208} />
      <View style={styles.View_30_209}>
        <Text style={styles.Text_30_209}>Order</Text>
      </View>
      <View style={styles.View_30_210} />
      <View style={styles.View_30_211}>
        <Text style={styles.Text_30_211}>Terakhir : 13 - 11 - 2021</Text>
      </View>
      <View style={styles.View_30_212}>
        <Text style={styles.Text_30_212}>
          Nama Customer Kontak Customer Email Customer
        </Text>
      </View>
      <View style={styles.View_30_213}>
        <Text style={styles.Text_30_213}>1</Text>
      </View>
      <View style={styles.View_30_214}>
        <Text style={styles.Text_30_214}>FA - 45</Text>
      </View>
      <View style={styles.View_30_215}>
        <Text style={styles.Text_30_215}>
          Dimas, JL. Letjend sarbini no 41, rt 01 rw 01, Kota Bekasi, Bekasi
          selatan kelurahan margajaya{" "}
        </Text>
      </View>
      <View style={styles.View_30_216}>
        <Text style={styles.Text_30_216}>Alamat pengiriman</Text>
      </View>
      <View style={styles.View_30_217}>
        <Text style={styles.Text_30_217}>Barang yang dipesan</Text>
      </View>
      <View style={styles.View_30_218}>
        <Text style={styles.Text_30_218}>Transfer </Text>
      </View>
      <View style={styles.View_30_219}>
        <Text style={styles.Text_30_219}>Jumlah barang</Text>
      </View>
      <View style={styles.View_30_220}>
        <Text style={styles.Text_30_220}>Status</Text>
      </View>
      <View style={styles.View_30_221}>
        <Text style={styles.Text_30_221}>Pembayaran </Text>
      </View>
      <View style={styles.View_30_222}>
        <Text style={styles.Text_30_222}>
          Total harga yang harus di bayar : Rp. 360,000
        </Text>
      </View>
      <View style={styles.View_30_223} />
      <View style={styles.View_30_224}>
        <Text style={styles.Text_30_224}>Belum di bayar</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_187: {
    width: wp("100%"),
    height: hp("113%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("475%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_188: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_189: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_190: {
    width: wp("51%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_191: {
    width: wp("51%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_191: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_192: {
    width: wp("51%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_193: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_194: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_195: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_196: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_197: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_198: {
    width: wp("85%"),
    height: hp("35%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_199: {
    width: wp("40%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_199: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_200: {
    width: wp("55%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_200: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_201: {
    width: wp("55%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_201: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_202: {
    width: wp("55%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_202: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_203: {
    width: wp("55%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("484%"),
    justifyContent: "flex-start"
  },
  Text_30_203: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_204: {
    width: wp("38%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("508%"),
    justifyContent: "flex-start"
  },
  Text_30_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_205: {
    width: wp("100%"),
    height: hp("112%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_206: {
    width: wp("42%"),
    height: hp("6%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_207: {
    width: wp("20%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_30_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_208: {
    width: wp("100%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 170, 157, 1)"
  },
  View_30_209: {
    width: wp("29%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_30_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_210: {
    width: wp("85%"),
    height: hp("78%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_211: {
    width: wp("58%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_211: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_212: {
    width: wp("40%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_212: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_213: {
    width: wp("4%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    justifyContent: "flex-start"
  },
  Text_30_213: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_214: {
    width: wp("37%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_214: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_215: {
    width: wp("82%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_215: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_216: {
    width: wp("82%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_216: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_217: {
    width: wp("82%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_217: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_218: {
    width: wp("82%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_218: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_219: {
    width: wp("26%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    justifyContent: "flex-start"
  },
  Text_30_219: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_220: {
    width: wp("82%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_220: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_221: {
    width: wp("82%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_221: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_222: {
    width: wp("58%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_30_222: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_223: {
    width: wp("41%"),
    height: hp("3%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(33, 36, 87, 1)"
  },
  View_30_224: {
    width: wp("38%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_30_224: {
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
