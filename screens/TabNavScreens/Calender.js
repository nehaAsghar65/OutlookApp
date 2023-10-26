import React, { useEffect, useRef, useState } from 'react';
import {StyleSheet, Linking, Image } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { useCameraDevices, Camera } from 'react-native-vision-camera';

const Calender = () => {
    const [showCamera, setShowCamera] = useState(true);
    const device = useCameraDevices('back');
    const camera = useRef(null);

    useEffect(() => {
        async function getPermission() {
            const permission = await Camera.requestCameraPermission();
            console.log("---", permission);
            if (permission === 'denied') {
                await Linking.openSettings();
            } else {
                setShowCamera(true);
            }
        }
        getPermission();
    }, []);
   const takePicture=async()=>{
    const photo = await camera.current.takePhoto()
   }
    
    return (
        <Camera
                // ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={showCamera}
                photo={true}
            />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    iconStyle: {
        marginLeft: SIZES.radius,
        tintColor: COLORS.grey,
        width: 23,
        height: 23,
    },
});

export default Calender;
