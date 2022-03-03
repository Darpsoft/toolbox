import React, { memo, useState } from "react";
import { Alert, Dimensions, FlatList, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { IResponseCarousel, Item } from "@redux/reducers/carousel";
import TextApp from "@components/TextApp";
import { useTheme } from "react-native-paper";
import { getUrlImage } from "@utils/utils";
import useSafeAreaCustom from "@hooks/useSafeArea";
import ImageApp from "@components/ImageApp";
import VideoApp from "@components/VideoApp";

const { width, height } = Dimensions.get("window");
const isIOS = Platform.OS === "ios";

const getDimensions = (type: "poster" | "thumb") => {
  const dimensions = {
    poster: { width: width * 0.9, height: width * 1.2 },
    thumb: { width: width * 0.9, height: width * 0.7 },
  };
  return dimensions[type];
};

const CarouselItem: React.FC<Item & { type: "poster" | "thumb" }> = (items) => {
  const [video, setVideo] = useState<string | undefined>();
  const theme = useTheme();
  const styles = useStyles(theme);
  const { insertBottom } = useSafeAreaCustom();

  const dimensions = getDimensions(items.type);

  const showVideo = (videoUrl?: string) => {
    if (video) return setVideo(undefined);
    videoUrl && setVideo(videoUrl);
    !videoUrl && Alert.alert("video not available");
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} onPress={() => showVideo(items.videoUrl)} style={[dimensions, styles.containerMultimedia]}>
          {video && <VideoApp style={styles.imageBackground} source={{ uri: items.videoUrl }} resizeMode="contain" />}
          {/* You can also work with resizeMode="contain" in image, it would be a 
          simple solution but in this case something more complex was implemented. */}
          {!video && <ImageApp style={styles.imageBackground} source={{ uri: items.imageUrl }} resizeMode="cover" />}
        </TouchableOpacity>
      </View>
      <View style={[styles.containerImageTitle, { paddingBottom: isIOS ? insertBottom : 16 }]}>
        <TextApp.Subtitle color={theme.colors.surface}>{items.title}</TextApp.Subtitle>
      </View>
    </View>
  );
};

const CarouselItemWithMemo = memo(CarouselItem);

const HorizontalCarousel: React.FC<IResponseCarousel> = (props) => {
  const { headerHeight } = useSafeAreaCustom();
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <>
      <View style={styles.carouselTitle}>
        <TextApp.Default fontSize="28" fontFamily="medium" color={theme.colors.text}>
          {props.title}
        </TextApp.Default>
      </View>
      <FlatList
        keyExtractor={({ imageUrl }) => getUrlImage(imageUrl)}
        style={{ width, height: height - headerHeight - 64 }}
        data={props.items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const imageUrl = getUrlImage(item.imageUrl);
          const videoUrl = item.videoUrl ? getUrlImage(item.videoUrl) : undefined;
          return <CarouselItemWithMemo {...item} type={props.type} imageUrl={imageUrl} videoUrl={videoUrl} />;
        }}
        snapToInterval={width}
        snapToAlignment={"center"}
        decelerationRate="fast"
      />
    </>
  );
};

export default HorizontalCarousel;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width,
      justifyContent: "center",
      alignItems: "center",
    },
    containerMultimedia: {
      borderRadius: 8,
      overflow: "hidden",
      marginBottom: 16,
    },
    carouselTitle: {
      alignItems: "center",
      justifyContent: "flex-end",
      height: 64,
      width,
    },
    containerImageTitle: {
      backgroundColor: "rgba(0,0,0,.8)",
      paddingVertical: 16,
      alignItems: "center",
      justifyContent: "center",
    },
    imageBackground: {
      flex: 1,
    },
  });
