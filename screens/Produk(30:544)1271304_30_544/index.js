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
  View_2: { height: ("112%") },
  View_30_545: {
    width: ("100%"),
    height: ("114%"),
    top: ("-1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("0%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_546: {
    width: ("100%"),
    height: ("113%"),
    top: ("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("475%"),
    backgroundColor: "rgba(24, 52, 64, 1)"
  },
  View_30_547: {
    width: ("35%"),
    top: ("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("479%"),
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
    width: ("51%"),
    top: ("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("479%"),
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
    width: ("51%"),
    top: ("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("479%"),
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
    width: ("51%"),
    top: ("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("479%"),
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
    width: ("51%"),
    top: ("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("481%"),
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
    width: ("85%"),
    height: ("6%"),
    top: ("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_553: {
    width: ("85%"),
    height: ("6%"),
    top: ("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_554: {
    width: ("85%"),
    height: ("6%"),
    top: ("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_555: {
    width: ("85%"),
    height: ("6%"),
    top: ("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("479%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_556: {
    width: ("85%"),
    height: ("6%"),
    top: ("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("481%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_557: {
    width: ("85%"),
    height: ("35%"),
    top: ("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("481%"),
    backgroundColor: "rgba(209, 220, 190, 1)"
  },
  View_30_558: {
    width: ("40%"),
    top: ("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("481%"),
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
    width: ("55%"),
    top: ("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("482%"),
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
    width: ("55%"),
    top: ("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("482%"),
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
    width: ("55%"),
    top: ("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("481%"),
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
    width: ("55%"),
    top: ("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("484%"),
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
    width: ("38%"),
    top: ("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("508%"),
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
    width: ("34%"),
    height: ("21%"),
    top: ("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_565: {
    width: ("2%"),
    height: ("1%"),
    top: ("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("35%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_566: {
    width: ("42%"),
    height: ("7%"),
    top: ("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("5%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_30_567: {
    width: ("20%"),
    top: ("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("17%"),
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
    width: ("91%"),
    height: ("6%"),
    top: ("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("5%"),
    backgroundColor: "rgba(252, 255, 246, 1)"
  },
  View_30_569: {
    width: ("8%"),
    height: ("3%"),
    top: ("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I30_569_30_64: {
    flexGrow: 1,
    width: ("6%"),
    height: ("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("1%"),
    top: ("0%")
  },
  View_30_570: {
    width: ("52%"),
    top: ("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("18%"),
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
    width: ("34%"),
    height: ("21%"),
    top: ("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_572: {
    width: ("34%"),
    height: ("20%"),
    top: ("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_573: {
    width: ("34%"),
    height: ("20%"),
    top: ("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_574: {
    width: ("34%"),
    height: ("20%"),
    top: ("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("6%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  View_30_575: {
    width: ("34%"),
    height: ("20%"),
    top: ("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("59%"),
    backgroundColor: "rgba(209, 220, 189, 1)"
  },
  ImageBackground_30_576: {
    width: ("30%"),
    height: ("18%"),
    top: ("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("9%")
  },
  ImageBackground_30_577: {
    width: ("30%"),
    height: ("17%"),
    top: ("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("9%")
  },
  ImageBackground_30_578: {
    width: ("29%"),
    height: ("18%"),
    top: ("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("62%")
  },
  ImageBackground_30_579: {
    width: ("30%"),
    height: ("18%"),
    top: ("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("9%")
  },
  ImageBackground_30_580: {
    width: ("29%"),
    height: ("18%"),
    top: ("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("62%")
  },
  ImageBackground_30_581: {
    width: ("30%"),
    height: ("17%"),
    top: ("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("62%")
  },
  View_30_582: {
    width: ("27%"),
    minWidth: ("27%"),
    height: ("6%"),
    minHeight: ("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("68%"),
    top: ("11%")
  },
  View_30_583: {
    width: ("20%"),
    top: ("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("0%"),
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
    width: ("7%"),
    height: ("0%"),
    top: ("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("20%")
  },
  ImageBackground_30_585: {
    width: ("12%"),
    minWidth: ("12%"),
    height: ("7%"),
    minHeight: ("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("9%"),
    top: ("58%")
  },
  ImageBackground_30_586: {
    width: ("13%"),
    minWidth: ("13%"),
    height: ("7%"),
    minHeight: ("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("6%"),
    top: ("59%")
  },
  View_30_587: {
    width: ("2%"),
    minWidth: ("2%"),
    height: ("1%"),
    minHeight: ("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: ("36%"),
    top: ("47%"),
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
