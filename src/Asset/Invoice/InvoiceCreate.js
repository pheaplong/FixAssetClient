import { Dialog } from '@material-ui/core';
import React from 'react'
import {
  Create,
  TextInput,
  DateInput,
  NumberInput,
  SimpleForm,
  TextField,
  NumberField,
  useRedirect,
	SelectInput,
	useGetList
} from "react-admin";
import {formartDate} from '../../lib/GlobalLib'

const InvoiceCreate=props=> {
	const redirect = useRedirect();
 	const transformData = (data) => ({
    ...data,
    orderDate: formartDate(data.orderDate),
    receivedDate: formartDate(data.receivedDate),
  });
	const suppliers=useGetList('Supplier')
  return (
    <Dialog
      open={props.open}
      onClose={() => {
        redirect("/invoice");
      }}
    >
      <Create {...props} transform={(data) => transformData(data)}>
        <SimpleForm>
          <TextInput fullWidth source="invNo" style={{ width: 500 }} />
          <SelectInput
						fullWidth
            source="supId"
            choices={suppliers.ids.map((s) => suppliers.data[s])}
            optionText="supName"
            optionValue="supId"
          />
          <DateInput fullWidth source="orderDate" />
          <DateInput fullWidth source="receivedDate" />
          <NumberInput fullWidth source="netTotal" />
          <NumberInput fullWidth source="tax" />
        </SimpleForm>
      </Create>
    </Dialog>
  );
}

export default InvoiceCreate

