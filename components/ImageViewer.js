import { StyleSheet, Image } from "react-native";

export const ImageViewer = ({ source, selectedImage }) => {
    return (
        <Image
            style={styles.image}
            source={selectedImage? {uri: selectedImage} :source}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});