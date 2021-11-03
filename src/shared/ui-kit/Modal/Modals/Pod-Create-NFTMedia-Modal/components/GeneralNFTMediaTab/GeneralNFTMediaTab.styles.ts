import { makeStyles } from "@material-ui/core/styles";

export const generalNFTMediaTabStyles = makeStyles(() => ({
  generalNftMediaTab: {},
  flexRowInputs: {
    display: "flex",
  },
  tooltipHeaderInfo: {
    verticalAlign: "top",
    marginLeft: 2,
    width: 14,
    height: 14,
    transform: "translateY(-5px)",
  },
  infoHeaderCreatePod: {
    fontSize: 18,
    fontWeight: 400,
    color: "black",
  },
  textFieldCreatePod: {
    background: "#f7f9fe",
    border: "1px solid #e0e4f3",
    boxSizing: "border-box",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
    height: 46,
    marginTop: 8,
    width: "100%",
    outline: "none",
  },
  hashtagsRow: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    marginRight: 20,
  },
  formControlHashInputWide: {
    "& div.MuiOutlinedInput-root": {
      height: 40,
      marginTop: "0 !important",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
  },
  hashtagInput: {
    background: "#f7f9fe",
    border: "1px solid #e0e4f3",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 46,
    width: "100%",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  hashtagInputImg: {
    height: 10,
    width: 10,
    cursor: "pointer",
    marginRight: 10,
  },
  hashtagInputTag: {
    border: 0,
    padding: 0,
    margin: 0,
    background: "transparent",
    borderRadius: 0,
    height: "auto",
  },
  hashtagPillFilled: {
    color: "white",
    backgroundColor: "black",
    borderColor: "black",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14.5,
    textAlign: "center",
    padding: "6px 12px",
    borderRadius: 36,
    marginRight: 6,
    cursor: "pointer",
  },
  hashtagPill: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14.5,
    textAlign: "center",
    color: "#949bab",
    padding: "6px 12px",
    borderRadius: 36,
    border: "1px solid #949bab",
    marginRight: 6,
    cursor: "pointer",
  },
  optionButtonsMedia: {
    backgroundColor: "rgb(227, 233, 239)",
    borderRadius: 20,
    marginTop: 8,
    padding: 2,
    background: "#949bab",
    height: 32,
    width: 52,
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    "& div": {
      backgroundColor: "white",
      boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06)",
      width: 27,
      height: 27,
      borderRadius: "50%",
    },
  },
  optionButtonsMediaActive: {
    background: "linear-gradient(97.4deg, #23d0c6 73.68%, #00cc8f 85.96%)",
    justifyContent: "flex-end",
    borderRadius: 20,
    marginTop: 8,
    padding: 2,
    height: 32,
    width: 52,
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    "& div": {
      backgroundColor: "white",
      boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06)",
      width: 27,
      height: 27,
      borderRadius: "50%",
    },
  },
}));