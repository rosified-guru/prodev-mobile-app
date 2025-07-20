import { StyleSheet, Dimensions } from "react-native";

// Constants for reusable values
const COLORS = {
  white: "#fff",
};

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
  titleContainer: {
    marginTop: SPACING.large,
  },
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: 800,
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: 300,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },
    navGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
  },
  largeText: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 5,
  },
  smallText: {
    fontSize: 14,
    color: "#7E7B7B",
    marginBottom: 20,
  },
  formGroup: {
    marginTop: 20,
    gap: 15,
  },
  placeholderText: {
    fontSize: 14,
    color: "#7B7B7B",
    marginBottom: 5,
  },
  inputField: {
    height: 50,
    borderWidth: 2,
    borderColor: "#E9E9E9",
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  passwordGroup: {
    borderWidth: 2,
    borderColor: "#E9E9E9",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#34967C",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "300",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginBottom: 25,
    marginTop: 29,
  },
  divider: {
    borderWidth: 1,
    flex: 1,
    borderColor: "#e6e6e6",
  },
  dividerText: {
    fontSize: 17,
    fontWeight: "500",
    fontVariant: ["small-caps"],
    color: "#C2C2C2",
  },
  socialMediaButtonGroup: {
    rowGap: 15,
    marginTop: 15,
  },
  socialMediaButton: {
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
  },
  socialMediaButtonText: {
    fontSize: 16,
    fontWeight: "400",
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  subText: {
    fontSize: 16,
    color: "#7E7B7B",
  },
  subTextJoin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFA800",
    marginLeft: 5,
  },

});

export { styles };