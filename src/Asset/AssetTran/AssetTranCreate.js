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
	useGetList,
} from "react-admin";
import {formartDate} from '../../lib/GlobalLib'
import AssetTranForm from './AssetTranForm'

const AssetTranCreate = (props) => {
	const redirect=useRedirect();
	return (
    <Dialog
      open={props.open}
      onClose={() => {
        redirect(props.url);
      }}
    >
      <Create {...props}>
        <AssetTranForm/>
      </Create>
    </Dialog>
  );
}

export default AssetTranCreate
