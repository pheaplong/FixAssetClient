import { Box } from '@material-ui/core';
import React from 'react'
import {
  List,
  Datagrid,
  DateField,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
  TopToolbar,
  FilterButton,
  ExportButton,
  useAction,
  CreateButton,
  CreateActions,
} from "react-admin";
import { Route } from 'react-router-dom';
import { AssetNavBar } from '../../Component/NavBar';
import InvoiceCreate from './InvoiceCreate';
import InvoiceEdit from './InvoiceEdit';

const InvoiceList = (props) => (
  <Box>
    <AssetNavBar />
    <List {...props} actions={<InvoiceActions />}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="invNo" />
        <TextField source="orderDate" />
        <TextField source="receivedDate" />
        <NumberField source="netTotal" />
        <NumberField source="tax" />
        <NumberField source="total" />
        <EditButton />
        <DeleteButton basePath="invoice" undoable={false} />
      </Datagrid>
    </List>
    <Route
      path="/invoice/create"
      render={({ match }) => <InvoiceCreate {...props} open={!!match} />}
    />
    <Route
      path="/invoice/:id"
      render={({ match }) =>
        !!match && match.params.id.toLowerCase() !== "create" ? (
          <InvoiceEdit {...props} open={!!match} id={match.params.id} />
        ) : null
      }
    />
  </Box>
);

const InvoiceActions = () => {
    return (
        <TopToolbar>
            {/* <FilterButton /> */}
            <ExportButton />
            <CreateButton
                resource="invoice"
                variant="contained"
				// resource='invoice'
            />
        </TopToolbar>
    );
};
export default InvoiceList
