import { StyleSheet, Pressable } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
    tab: {
        marginRight: 20,
    },
});

const AppBarTab = ({ label }) => {
    return (
        <Pressable style={styles.tab}>
            <Text color="appBar">{label}</Text>
        </Pressable>
    );
};

export default AppBarTab;