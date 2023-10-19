import {MaterialCommunityIcons} from  "react-native-vector-icons";
import styles from "./styles";
    export default  buttons =([
    {label: "(", color: "#00d315", value:'('},
    {label: ")", color: "#00d315", value:')'},
    {label: "%", color: "#00d315", value:'%',tipo: "operador"},
    {label: <MaterialCommunityIcons name="division"
        style={styles.icon}/>, color: "#00d315", value:'/',tipo: "operador"},
    {label: "7", color: "#fff", value:'7'},
    {label: "8", color: "#fff", value:'8'},
    {label: "9", color: "#fff", value:'9'},
    {label: "x", color: "#00d315", value:'*',tipo: "operador"},
    {label: "4", color: "#fff", value:'4'},
    {label: "5", color: "#fff", value:'5'},
    {label: "6", color: "#fff", value:'6'},
    {label: "-", color: "#00d315", value:'-', tipo: "operador"},
    {label: "1", color: "#fff", value:'1' },
    {label: "2", color: "#fff", value:'2'},
    {label: "3", color: "#fff", value:'3'},
    {label: "+", color: "#00d315", value:'+',tipo: "operador"},
    { label: "x^", color: "#00d315", value:'^'},
    {label: "0", color: "#fff", value:'0'},
    {label: ",", color: "#fff", value:'.' ,tipo: "point"},
    {label: "=", color: "#00d315", value:'=',tipo: "operador"},
    ]);

