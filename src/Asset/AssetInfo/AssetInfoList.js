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
	ReferenceField
} from "react-admin";
import ColoredChipField from "../../Component/ColoredChipField";
import {AssetNavBar} from '../../Component/NavBar'
import * as con from '../../CONSTANT'
import classnames from 'classnames'
// import { ApproveButton } from "./AssetButton";
const AssetInfoList = (props) => (
  <Box rowClick="show">
    <AssetNavBar  />
    <List {...props} >
      <Datagrid draggable={true} rowClick="show">
        <TextField source="id" />
        <TextField source="assOldCode" />
        <DateField source="barcodeNo" />
        <TextField source="nameEng" />
        <TextField source="modelName" />
        <TextField source="descripttion" />
				<ReferenceField source="brId" reference="DataLookUps/A04" label="Branch">
					<TextField source="codeNameEng" />
				</ReferenceField>
        <ReferenceField source="assStatus" reference="DataLookUps/A01" label="Status" >
				<ColoredChipField source="codeNameEng" {...props}
					size="small"
					style={{margin:0}}
					condition={(value)=>{
						return classnames({
							'darken-1':1,
							'red':value===con.ASS_STATUS_CANCEL || value=== con.ASS_STATUS_REJECT || con.ASS_STATUS_DIPOSED,
							'green':value===con.ASS_STATUS_USING || value=== con.ASS_STATUS_APPROVED,
							'blue': value===con.ASS_STATUS_REQUEST ,
							'deep-orange':value===con.ASS_STATUS_AVAILABLE
						})
					}}/>
					</ReferenceField>
        <EditButton />
      </Datagrid>
    </List>
  </Box>
);
export default AssetInfoList;
