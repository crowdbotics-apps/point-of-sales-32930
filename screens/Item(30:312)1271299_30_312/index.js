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
      <View style={styles.View_30_313} />
      <View style={styles.View_30_314} />
      <View style={styles.View_30_315}>
        <Text style={styles.Text_30_315}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_316}>
        <Text style={styles.Text_30_316}>Nama kontak Suplier</Text>
      </View>
      <View style={styles.View_30_317}>
        <Text style={styles.Text_30_317}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_318}>
        <Text style={styles.Text_30_318}> Email suplier</Text>
      </View>
      <View style={styles.View_30_319}>
        <Text style={styles.Text_30_319}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_320} />
      <View style={styles.View_30_321} />
      <View style={styles.View_30_322} />
      <View style={styles.View_30_323} />
      <View style={styles.View_30_324} />
      <View style={styles.View_30_325} />
      <View style={styles.View_30_326}>
        <Text style={styles.Text_30_326}>Nama Suplier</Text>
      </View>
      <View style={styles.View_30_327}>
        <Text style={styles.Text_30_327}>Nama Kontak Suplier</Text>
      </View>
      <View style={styles.View_30_328}>
        <Text style={styles.Text_30_328}>Nomor kontak suplier</Text>
      </View>
      <View style={styles.View_30_329}>
        <Text style={styles.Text_30_329}>Email suplier</Text>
      </View>
      <View style={styles.View_30_330}>
        <Text style={styles.Text_30_330}>Alamat suplier</Text>
      </View>
      <View style={styles.View_30_331}>
        <Text style={styles.Text_30_331}>Tambah suplier</Text>
      </View>
      <View style={styles.View_30_332} />
      <View style={styles.View_30_333}>
        <Text style={styles.Text_30_333}>
          Warna : Anodize Panjang : 6 Meter Harga : Rp. 360.000
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77e4/1f90/ac9e4cddef7d82383378e4dd0cfe03cf"
        }}
        style={styles.ImageBackground_30_334}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7484/4b17/d86eb8c07af0f5b78de1b330b6c231af"
        }}
        style={styles.ImageBackground_30_335}
      />
      <View style={styles.View_30_336}>
        <Text style={styles.Text_30_336}>FA - 45</Text>
      </View>
      <View style={styles.View_30_337} />
      <View style={styles.View_30_338} />
      <View style={styles.View_30_339} />
      <View style={styles.View_30_340} />
      <View style={styles.View_30_341} />
      <View style={styles.View_30_342}>
        <Text style={styles.Text_30_342}>
          Warna : Anodize Panjang : 6 Meter Harga : Rp. 370.000
        </Text>
      </View>
      <View style={styles.View_30_343}>
        <Text style={styles.Text_30_343}>
          Warna : Anodize Panjang : 6 Meter Harga : Rp. 250.000
        </Text>
      </View>
      <View style={styles.View_30_344}>
        <Text style={styles.Text_30_344}>
          Warna : Anodize Panjang : 6 Meter Harga : Rp. 480.000
        </Text>
      </View>
      <View style={styles.View_30_345}>
        <Text style={styles.Text_30_345}>
          Warna : Anodize Panjang : 6 Meter Harga : Rp. 490.000
        </Text>
      </View>
      <View style={styles.View_30_346}>
        <Text style={styles.Text_30_346}>
          Warna : Anodize Panjang : 6 Meter Harga : Rp. 360.000
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/585b/5c2b/4232a80ee1647e340db02585cb8314a1"
        }}
        style={styles.ImageBackground_30_347}
      />
      <View style={styles.View_30_348}>
        <Text style={styles.Text_30_348}>FA - 128</Text>
      </View>
      <View style={styles.View_30_349}>
        <Text style={styles.Text_30_349}>FB - 47</Text>
      </View>
      <View style={styles.View_30_350}>
        <Text style={styles.Text_30_350}>FHD - 127</Text>
      </View>
      <View style={styles.View_30_351}>
        <Text style={styles.Text_30_351}>FHD - 129</Text>
      </View>
      <View style={styles.View_30_352}>
        <Text style={styles.Text_30_352}>FT - 45</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70f0/63c3/99228c311c1724cb0a7c60c92eb8b908"
        }}
        style={styles.ImageBackground_30_353}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd2/b3e6/72838b2a37bec7f2521c356a45e752ec"
        }}
        style={styles.ImageBackground_30_354}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0432/74d6/6e64baae7eb9048dd5c6bc68ed64fd96"
        }}
        style={styles.ImageBackground_30_355}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a999/64cb/bf8cb5dd0af5542d094d0c5eac7a91ff"
        }}
        style={styles.ImageBackground_30_356}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90bd/18d1/876bfc1b516451b7ba1c00bede291ed8"
        }}
        style={styles.ImageBackground_30_357}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e38/dc5e/02e64a2caa51f01b51ceeb66f2b83321"
        }}
        style={styles.ImageBackground_30_358}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cff0/4488/916520b2ad65b447ebad57ab59c69fdb"
        }}
        style={styles.ImageBackground_30_359}
      />
      <View style={styles.View_30_360} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9493/af83/fb43bf1568697bc79a211b2e79aad874"
        }}
        style={styles.ImageBackground_30_361}
      />
      <View style={styles.View_30_363} />
      <View style={styles.View_30_364} />
      <View style={styles.View_30_365} />
      <View style={styles.View_30_366}>
        <Text style={styles.Text_30_366}>Kembali</Text>
      </View>
      <View style={styles.View_30_367}>
        <Text style={styles.Text_30_367}>Tambah Item</Text>
      </View>
      <View style={styles.View_30_368} />
      <View style={styles.View_30_369}>
        <Text style={styles.Text_30_369}>Item</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccf5/6863/d02bc5d29ec1f0993116b2cfba97bb84"
        }}
        style={styles.ImageBackground_57_24}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("112%") },
  View_30_313: {
    width: wp("100%"),
    height: hp("114%"),
    top: hp("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_314: {
    width: wp("100%"),
    height: hp("113%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("475%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_315: {
    width: wp("35%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_316: {
    width: wp("51%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_316: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_317: {
    width: wp("51%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_318: {
    width: wp("51%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    justifyContent: "flex-start"
  },
  Text_30_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_319: {
    width: wp("51%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_320: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_321: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_322: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_323: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_324: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_325: {
    width: wp("85%"),
    height: hp("35%"),
    top: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_326: {
    width: wp("40%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_326: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_327: {
    width: wp("55%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_327: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_328: {
    width: wp("55%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("482%"),
    justifyContent: "flex-start"
  },
  Text_30_328: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_329: {
    width: wp("55%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("481%"),
    justifyContent: "flex-start"
  },
  Text_30_329: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_330: {
    width: wp("55%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("484%"),
    justifyContent: "flex-start"
  },
  Text_30_330: {
    color: "rgba(102, 102, 102, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_331: {
    width: wp("38%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("508%"),
    justifyContent: "flex-start"
  },
  Text_30_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_332: {
    width: wp("91%"),
    height: hp("10%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_333: {
    width: wp("28%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    justifyContent: "flex-start"
  },
  Text_30_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_334: {
    width: wp("19%"),
    height: hp("9%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_30_335: {
    width: wp("19%"),
    height: hp("9%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_30_336: {
    width: wp("11%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    justifyContent: "flex-start"
  },
  Text_30_336: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_337: {
    width: wp("91%"),
    height: hp("10%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_338: {
    width: wp("91%"),
    height: hp("10%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_339: {
    width: wp("91%"),
    height: hp("10%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_340: {
    width: wp("91%"),
    height: hp("10%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_341: {
    width: wp("91%"),
    height: hp("10%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_342: {
    width: wp("28%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_342: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_343: {
    width: wp("28%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_343: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_344: {
    width: wp("28%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_344: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_345: {
    width: wp("28%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_346: {
    width: wp("28%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_347: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_30_348: {
    width: wp("13%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_348: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_349: {
    width: wp("11%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_349: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_350: {
    width: wp("16%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_350: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_351: {
    width: wp("16%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_351: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_352: {
    width: wp("11%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_30_352: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_30_353: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_30_354: {
    width: wp("22%"),
    height: hp("8%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_30_355: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_30_356: {
    width: wp("21%"),
    height: hp("8%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_30_357: {
    width: wp("17%"),
    height: hp("8%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_30_358: {
    width: wp("23%"),
    height: hp("8%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_30_359: {
    width: wp("22%"),
    height: hp("8%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_30_360: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_30_361: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_30_363: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_364: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_365: {
    width: wp("45%"),
    height: hp("7%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_366: {
    width: wp("20%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    justifyContent: "flex-start"
  },
  Text_30_366: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_367: {
    width: wp("29%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    justifyContent: "flex-start"
  },
  Text_30_367: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_30_368: {
    width: wp("100%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 170, 157, 1)"
  },
  View_30_369: {
    width: wp("21%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_30_369: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_57_24: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
