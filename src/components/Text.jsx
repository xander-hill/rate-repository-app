import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
        marginBottom: theme.marginBottom.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorTextPrimary: {
        color: theme.colors.textPrimary,
    },
    colorAppBar: {
        color: theme.colors.appBar,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    androidFont: {
        fontFamily: theme.fonts.android,
    },
    iosFont: {
        fontFamily: theme.fonts.ios,
    }
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'appBar' && styles.colorAppBar,
        color === 'textPrimary' && styles.colorTextPrimary,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
        Platform.select({
            android: styles.androidFont,
            ios: styles.iosFont,
        }),
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;