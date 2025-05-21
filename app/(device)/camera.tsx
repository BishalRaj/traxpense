import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { Flashlight, SwitchCamera, Zap, ZapOff } from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CameraScreen() {
  const ref = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");
  const [uri, setUri] = useState<string | null>(null);
  const [tourch, setTourch] = useState(false);

  const takePicture = async () => {
    const photo = await ref.current?.takePictureAsync();
    setUri(photo?.uri);
  };

  const resetPhoto = () => {
    setUri(null);
  };

  const toggleTourch = () => {
    setTourch((x) => !x);
  };

  const toggleCamera = () => {
    setFacing((x) => (x === "front" ? "back" : "front"));
  };

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View className="flex-1 items-center justify-center gap-y-5">
        <Text>We need your permission to show the camera</Text>
        <Pressable
          onPress={requestPermission}
          className="bg-blue-200 rounded px-4 py-2"
        >
          <Text>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  const renderCamera = (
    <View className="flex-1 justify-center bg-background">
      <CameraView
        facing={facing}
        style={styles.camera}
        ref={ref}
        mute={true}
        animateShutter={true}
        responsiveOrientationWhenOrientationLocked
        enableTorch={tourch}
      >
        <View style={styles.overlay}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
      </CameraView>

      <View className="flex-row items-center justify-around gap-y-3 py-3 bg-background">
        <Pressable
          onPress={toggleTourch}
          className="min-h-14 w-1/4 items-center justify-center"
        >
          {tourch ? (
            <ZapOff style={{ color: "white" }} />
          ) : (
            <Zap style={{ color: "white" }} />
          )}
        </Pressable>
        <View className="h-15 w-15 rounded-full border-white border p-1 bg-background items-center justify-center">
          <TouchableOpacity onPress={takePicture}>
            <View className="h-14 w-14 rounded-full bg-white"></View>
          </TouchableOpacity>
        </View>

        <Pressable
          onPress={toggleCamera}
          className="min-h-14 w-1/4 items-center justify-center"
        >
          <SwitchCamera style={{ color: "white" }} />
        </Pressable>
      </View>
    </View>
  );

  const renderImage = (
    <View className="flex-1 bg-background">
      <View className="flex-1 bg-blue-300">
        <Image
          source={{ uri: uri ?? undefined }}
          resizeMode="contain"
          className="h-full w-full"
        />
      </View>
      <View className="flex-row items-center justify-around gap-y-3 py-3 bg-background">
        <Pressable onPress={resetPhoto}>
          <Text className="text-white font-semibold text-lg">Retake</Text>
        </Pressable>
        <Pressable>
          <Text className="text-white font-semibold text-lg">Use Photo</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaProvider className="flex-1">
      <SafeAreaView className="flex-1">
        {uri ? renderImage : renderCamera}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const BORDER_WIDTH = 1.5;
const BORDER_LENGTH = 30;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  corner: {
    position: "absolute",
    width: BORDER_LENGTH,
    height: BORDER_LENGTH,
    borderColor: "white",
  },
  topLeft: {
    top: 30,
    left: 20,
    borderTopWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH,
  },
  topRight: {
    top: 30,
    right: 20,
    borderTopWidth: BORDER_WIDTH,
    borderRightWidth: BORDER_WIDTH,
  },
  bottomLeft: {
    bottom: 30,
    left: 20,
    borderBottomWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH,
  },
  bottomRight: {
    bottom: 30,
    right: 20,
    borderBottomWidth: BORDER_WIDTH,
    borderRightWidth: BORDER_WIDTH,
  },
});
