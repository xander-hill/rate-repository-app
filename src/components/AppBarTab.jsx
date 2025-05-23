import { StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    tab: {
        marginRight: 20,
    },
});

const AppBarTab = ({ label, link }) => {
    return (
        <Link to={link} style={styles.tab}>
            <Text color="appBar">{label}</Text>
        </Link>
    );
};

export default AppBarTab;