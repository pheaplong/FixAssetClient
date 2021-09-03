import { Box } from '@material-ui/core';
import React from 'react'
import {
	List,
	Datagrid,
	TextField
} from 'react-admin'
import NavBar, { AssetNavBar } from '../../Component/NavBar'
const SupplierList = (props) => (
  <Box>
    <AssetNavBar />
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="supName" />
        <TextField source="contactPerson" />
        <TextField source="contact1" />
        <TextField source="contact2" />
        <TextField source="email1" />
        <TextField source="email2" />
        <TextField source="localtion" />
      </Datagrid>
    </List>
  </Box>
);

export default SupplierList