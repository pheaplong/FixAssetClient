import { Box } from "@material-ui/core";
import React from "react";
import {
  List,
  Datagrid,
  DateField,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from "react-admin";
import {AssetNavBar} from '../../Component/NavBar'
// import { ApproveButton } from "./AssetButton";
const AssetInfoList = (props) => (
  <Box>
    <AssetNavBar  />
    <List {...props}>
      <Datagrid draggable={true}>
        <TextField source="id" />
        <TextField source="assOldCode" />
        <DateField source="barcodeNo" />
        <TextField source="nameEng" />
        <TextField source="modelName" />
        <TextField source="descripttion" />
        <TextField source="assStatus" />
        <EditButton />
      </Datagrid>
    </List>
  </Box>
);
export default AssetInfoList;
