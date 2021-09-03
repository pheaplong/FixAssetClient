// In theme.js
import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createTheme";
import createTypography from "@material-ui/core/styles/createTypography";
import merge from "lodash/merge";
const theme = createMuiTheme(
  merge({}, defaultTheme, {
    typography: {
		fontSize:12,
      // ... Put other title styles below
    },
  })
);
	export default theme;
