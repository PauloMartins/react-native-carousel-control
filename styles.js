import { StyleSheet } from "react-native";
let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "stretch"
    },
    page: {
        flex: 1
    },
    indicatorContainer: {
    	justifyContent: 'center', 
    	flexDirection: 'row', 
    	padding: 10
    },
    indicator: {
    	borderWidth: 1, 
    	marginLeft: 5, 
    	marginRight: 5
    }
});

export default styles;
