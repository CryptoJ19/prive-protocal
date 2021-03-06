import { makeStyles } from "@material-ui/core/styles";

export const mediaNFTMediaTabStyles = makeStyles(() => ({
  mediaTab: {},
  mediasOverview: {
    display: "flex",
    marginBottom: 30,
  },
  overviewMediaCardContainer: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    marginRight: 14,
    "& h6": {
      margin: 0,
      marginBottom: 12,
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: 14,
      color: "#181818",
    },
  },
  overviewMediaCard: {
    width: 130,
    height: 140,
    background: "#949bab",
    borderRadius: 6,
    marginTop: 8,
    position: "relative",
  },
  overviewMediaCardImage: {
    width: "100%",
    height: "70%",
    objectFit: "cover",
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  mediaNFTTitle: {
    maxWidth: 85,
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "white",
    whiteSpace: "nowrap",
  },
  mediaNFTSymbol: {
    maxWidth: 110,
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 10,
    color: "white",
    whiteSpace: "nowrap",
  },
  overviewMediaCardEmpty: {
    background: "#f7f9fe",
    border: "4px #ffffff",
    borderRadius: 10,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "center",
    color: "#99a1b3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  dummyCards: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    marginLeft: -10,
  },
  flexRowInputs: {
    display: "flex",
  },
  infoHeaderCreatePod: {
    fontSize: 18,
    fontWeight: 400,
    color: "black",
  },
  tooltipHeaderInfo: {
    verticalAlign: "top",
    marginLeft: 2,
    width: 14,
    height: 14,
    transform: "translateY(-5px)",
  },
  mediaSelector: {
    display: "flex",
    alignItems: "center",
    height: 50,
    backgroundColor: "rgb(227, 233, 239)",
    borderRadius: 10,
    color: "rgb(8, 24, 49)",
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: 400,
    border: "none",
    width: "100%",
    marginBottom: 20,
    marginTop: 8,
  },
  mediaTypeIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
    marginBottom: 5,
  },
  selectCreatePod: {
    fontStyle: "normal",
    backgroundColor: "transparent",
    fontWeight: 800,
    fontSize: 18,
    color: "#181818",
    border: "none",
  },
  mediaTabMarginTop: {
    display: "flex",
    marginTop: 15,
  },
  textAreaCreatePod: {
    fontFamily: "Agrandir",
    width: "100%",
    height: 140,
    paddingTop: 17,
    backgroundColor: "#f6f6f6",
    borderRadius: 10,
    border: "1px solid #b6b6b6",
    marginTop: 8,
    color: "rgb(101, 110, 126)",
    fontSize: 14,
    fontWeight: 400,
    paddingLeft: 20,
    textTransform: "none",
    outline: "none",
    "&::placeholder": {
      color: "rgba(101, 110, 126, 0.5)",
      fontSize: 14,
      fontWeight: 400,
      textTransform: "none",
    },
  },
  buttons: {
    marginTop: 50,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  rightBtnSection: {
    display: "flex",
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
}));
