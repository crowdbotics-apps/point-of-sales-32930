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
      <View style={styles.View_30_265} />
      <View style={styles.View_30_266}>
        <Text style={styles.Text_30_266}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_267}>
        <Text style={styles.Text_30_267}>Nama kontak Suplier</Text>
      </View>
      <View style={styles.View_30_268}>
        <Text style={styles.Text_30_268}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_269}>
        <Text style={styles.Text_30_269}> Email suplier</Text>
      </View>
      <View style={styles.View_30_270}>
        <Text style={styles.Text_30_270}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_271} />
      <View style={styles.View_30_272} />
      <View style={styles.View_30_273} />
      <View style={styles.View_30_274} />
      <View style={styles.View_30_275} />
      <View style={styles.View_30_276} />
      <View style={styles.View_30_277}>
        <Text style={styles.Text_30_277}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_278}>
        <Text style={styles.Text_30_278}>Nama Kontak Suplier</Text>
      </View>
      <View style={styles.View_30_279}>
        <Text style={styles.Text_30_279}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_280}>
        <Text style={styles.Text_30_280}>Email suplier</Text>
      </View>
      <View style={styles.View_30_281}>
        <Text style={styles.Text_30_281}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_282}>
        <Text style={styles.Text_30_282}>Tambah suplier</Text>
      </View>
      <View style={styles.View_30_283} />
      <View style={styles.View_30_284} />
      <View style={styles.View_30_285}>
        <Text style={styles.Text_30_285}>Kembali</Text>
      </View>
      <View style={styles.View_30_286} />
      <View style={styles.View_30_287}>
        <Text style={styles.Text_30_287}>Data User</Text>
      </View>
      <View style={styles.View_30_288} />
      <View style={styles.View_30_289}>
        <Text style={styles.Text_30_289}>Action</Text>
      </View>
      <View style={styles.View_30_290}>
        <Text style={styles.Text_30_290}>Password</Text>
      </View>
      <View style={styles.View_30_291}>
        <Text style={styles.Text_30_291}>Username</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/136e/82f7/c4f77837d5d33975131c7d0948eb9eba"
        }}
        style={styles.ImageBackground_30_292}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/136e/82f7/c4f77837d5d33975131c7d0948eb9eba"
        }}
        style={styles.ImageBackground_30_293}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_294}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_295}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_296}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_297}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_298}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_299}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_300}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_301}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_302}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_303}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_304}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_305}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_306}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_307}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_308}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_309}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_310}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcd/beee/1fe3481be5f9574405ad2472b7358d40"
        }}
        style={styles.ImageBackground_30_311}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_265: {
    width: wp("100%"),
    height: hp("113%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("475%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_266: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_267: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_267: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_268: {
    width: wp("51%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_268: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_269: {
    width: wp("51%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_270: {
    width: wp("51%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_271: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_272: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_273: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_274: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_275: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_276: {
    width: wp("85%"),
    height: hp("35%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_277: {
    width: wp("40%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_277: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_278: {
    width: wp("55%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_278: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_279: {
    width: wp("55%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_279: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_280: {
    width: wp("55%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_280: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_281: {
    width: wp("55%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("484%"),
    justifyContent: "flex-start"
  },
  Text_30_281: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_282: {
    width: wp("38%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("508%"),
    justifyContent: "flex-start"
  },
  Text_30_282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_283: {
    width: wp("100%"),
    height: hp("112%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_284: {
    width: wp("42%"),
    height: hp("6%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_285: {
    width: wp("20%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_30_285: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_286: {
    width: wp("100%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 170, 157, 1)"
  },
  View_30_287: {
    width: wp("50%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    justifyContent: "flex-start"
  },
  Text_30_287: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_288: {
    width: wp("85%"),
    height: hp("78%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_289: {
    width: wp("19%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_30_289: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_290: {
    width: wp("19%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    justifyContent: "flex-start"
  },
  Text_30_290: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_291: {
    width: wp("19%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_30_291: {
    color: "rgba(23, 25, 63, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_292: {
    width: wp("0%"),
    height: hp("78%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_30_293: {
    width: wp("0%"),
    height: hp("78%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%")
  },
  ImageBackground_30_294: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_295: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_296: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_297: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_298: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_299: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_300: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_301: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_302: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_303: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_304: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_305: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_306: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_307: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_308: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_309: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_310: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_30_311: {
    width: wp("85%"),
    height: hp("0%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
