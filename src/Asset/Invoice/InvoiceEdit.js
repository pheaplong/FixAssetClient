import { Dialog ,} from '@material-ui/core';
import React from 'react'
import {Edit, TextInput, DateInput, NumberInput, SimpleForm, TextField, NumberField, useRedirect} from 'react-admin'

const InvoiceEdit=props=> {
	const redirect = useRedirect();
  return (
    <Dialog
      open={true}
      onClose={() => {
        redirect("/invoice");
      }}
    >
      <Edit {...props}>
        <SimpleForm>
          <TextInput fullWidth source="id" style={{ width: 500 }} />
          <TextInput fullWidth source="invNo" />
          <TextInput fullWidth source="orderDate" />
          <TextInput fullWidth source="receivedDate" />
          <NumberInput fullWidth source="netTotal" />
          <NumberInput fullWidth source="tax" />
          <NumberInput fullWidth source="total" />
        </SimpleForm>
      </Edit>
    </Dialog>
  );
}

export default InvoiceEdit

