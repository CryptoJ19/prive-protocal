import { makeStyles } from "@material-ui/core/styles";

export const imageTitleDescriptionStyles = makeStyles(() => ({
  textFieldImgTitleDesc: {
    height: 46,
    backgroundColor: "#F7F9FE",
    borderRadius: 8,
    border: "1px solid hsla(212, 25%, 60%, 0.3)",
    marginTop: 8,
    color: "rgb(101, 110, 126)",
    fontSize: 14,
    fontWeight: 400,
    paddingLeft: 20,
    marginBottom: 19,
    outline: "none",
    width: "100%",
    "& ::placeholder": {
      color: "rgba(101, 110, 126, 0.5)",
      fontSize: 14,
      fontWeight: 400,
    },
  },
  textAreaImgTitleDesc: {
    fontFamily: "Agrandir",
    width: "100%",
    height: "calc(219px - 19px)",
    paddingTop: 17,
    color: "rgb(101, 110, 126)",
    fontSize: 14,
    fontWeight: 400,
    paddingLeft: 20,
    textTransform: "none",
    backgroundColor: "#F7F9FE",
    borderRadius: 8,
    border: "1px solid hsla(212, 25%, 60%, 0.3)",
    marginTop: 8,
    outline: "none",
    resize: "vertical",
    "& ::placeholder": {
      color: "rgba(101, 110, 126, 0.5)",
      fontSize: 14,
      fontWeight: 400,
    },
  },
  removeImageButtonSquareImgTitle: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 18,
    cursor: "pointer",
  },
  dragImageHereImgTitleDesc: {
    borderRadius: 7,
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    backgroundColor: "#f6f6f6",
    border: "1px dashed #b6b6b6",
    boxSizing: "border-box",
    padding: "54px 46px",
  },
  textAreaImgTitleDescDark: {
    fontFamily: "Agrandir",
    width: "100%",
    height: "49px",
    padding: "16px",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 400,
    marginTop: 8,
    textTransform: "none",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    border: "1px solid #FFFFFF",
    outline: "none",
    resize: "vertical",
    "& ::placeholder": {
      color: "rgba(101, 110, 126, 0.5)",
      fontSize: 14,
      fontWeight: 400,
    },
  },
  textFieldImgTitleDescDark: {
    fontFamily: "Agrandir",
    width: "100%",
    height: "49px",
    padding: "16px",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 24,
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    border: "1px solid #FFFFFF",
    marginTop: 8,
    outline: "none",
  },
  dragImageHereDark: {
    background: "rgba(255, 255, 255, 0.16)",
    border: "1px solid #FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    flexDirection: "column",
  },
  dragImageHereGreen: {
    background: "#F7F9FE",
    border: "1px dashed #E0E4F3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    flexDirection: "column",
    borderRadius: "17px",
    padding: "16px",
    minHeight: 280,
  },
}));
