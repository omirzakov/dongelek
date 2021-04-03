import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    logo: {
        paddingRight: 10
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "16px",
        marginRight: "20px"
    }
  }));