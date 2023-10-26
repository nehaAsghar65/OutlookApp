import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, icons, FONTS } from '../constants';
import { TouchableOpacity } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const AttachmentContainer = ({ files }) => {
    
    const iconMapping = {
        doc: require('../assets/icons/doc.png'),
        pdf: require('../assets/icons/pdf.png'),
        xlsx: require('../assets/icons/xlsx.png'),
        png: require('../assets/icons/png.png'),
    };
    const downloadFile = async (downloadUrl) => {
        try {
            console.log(downloadUrl)

            const response = await RNFetchBlob.config({
                fileCache: true,
            }).fetch('GET', downloadUrl);
            console.log(response)

            // if (response.respInfo.status === 200) {
            //     // Get the file path where the file is saved
            //     const filePath = response.path();
            //     console.log('File downloaded to:', filePath);
            // } else {
            //     console.error('Failed to download the attachment. Status code:', response.respInfo.status);
            // }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        files.map((item, index) => {
            const fileNameParts = item.file_name.split('.');
            const fileExtension = fileNameParts[1].toString();
            const iconSource = iconMapping[fileExtension] || null;
            return (
                <View style={styles.attachmentsContainer}>

                    <Image source={iconSource} style={styles.fileIcon} />
                    <Text style={styles.attachmentText}>{item.file_name}
                    </Text>

                    <TouchableOpacity onPress={() => downloadFile(item.file_path)}>
                        <Image
                            source={icons.verticleDots}
                            style={{ tintColor: COLORS.grey, margin: 10, height: 25, width: 25 }} />
                    </TouchableOpacity>

                </View>)
        })

    );
};

const styles = StyleSheet.create({
    attachmentText: {
        margin: 10,
        color: COLORS.gray
    },
    attachmentsContainer: {
        margin: 20,
        right: 75,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8,
        borderWidth: 0.5,
        borderColor: COLORS.grey,
        width: 'auto',
        borderRadius: 5,
        height: 'auto'

    },
    fileIcon: {
        margin: 10,
        width: 25,
        height: 25
    }
});


export default AttachmentContainer;
