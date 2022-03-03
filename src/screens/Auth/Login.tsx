import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { IFormInput } from "@common/interfaces/pipes.interface";
import RenderInputs from "@components/RenderInputs";
import { useForm, UseFormReturn } from "react-hook-form";
import { Button, useTheme } from "react-native-paper";
import CustomKeyboardAvoidingView from "@components/CustomKeyboardAvoidingView";
import globalSetting from "../../config";
import { useDispatch } from "react-redux";
import { loginStart } from "@redux/actions";
import { useLoader } from "@hooks/useLoader";
import { RouteProp, useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";

const { default_padding_horizontal, default_margin_top, default_margin_bottom } = globalSetting.styles;
const { width } = Dimensions.get("window");

const getInputsForm = (): IFormInput[] => {
  return [
    {
      status: true,
      placeholder: "Email",
      name: "email",
      defaultValue: "pedro@toolbox.com",
      icon: "user",
      rules: { required: { value: true, message: "Required" } },
      keyboardType: "email-address",
      autoCapitalize: "none",
    },
    {
      status: true,
      placeholder: "Password",
      name: "password",
      defaultValue: "Test1235",
      secureTextEntry: true,
      icon: "lock",
      rules: { required: { value: true, message: "Required" } },
      keyboardType: "default",
    },
  ];
};

type ScreenRouteProp = RouteProp<RootStackParamList, "Login">;
type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

const Login: React.FC<Props> = () => {
  const theme = useTheme();
  const styles = useStyle(theme);
  const { formState, control, handleSubmit }: UseFormReturn = useForm();
  const { errors } = formState;
  const inputsForm = React.useMemo(() => getInputsForm(), []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showLoaderComponent, hideLoaderComponent] = useLoader();
  const dispatch = useDispatch();

  const handlerRegister = (values: any) => {
    dispatch(loginStart(values));
  };

  useFocusEffect(() => {
    setTimeout(() => {
      hideLoaderComponent();
    }, 1000);
  });

  return (
    <SafeAreaView style={styles.safeContainerStyle}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("../../assets/images/logo-stycky.png")} resizeMode="contain" style={{ width: width * 0.8 }} />
        </View>
        <CustomKeyboardAvoidingView>
          <RenderInputs inputs={inputsForm} control={control} errors={errors} />
          <Button mode="contained" style={styles.button} onPress={handleSubmit(handlerRegister)}>
            Login
          </Button>
        </CustomKeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const useStyle = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: default_padding_horizontal,
      justifyContent: "center",
      backgroundColor: theme.colors.background,
    },
    button: {
      marginTop: default_margin_top,
    },
    logo: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: default_margin_bottom,
    },
    safeContainerStyle: {
      flex: 1,
    },
  });

export default Login;
