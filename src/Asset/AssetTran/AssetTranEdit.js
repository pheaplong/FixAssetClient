import React from 'react'
import {Edit, useRedirect,SimpleForm,TextInput } from 'react-admin'
import { Dialog } from '@material-ui/core'
import AssetTranForm from './AssetTranForm'
const AssetTranEdit = (props) => {
	const redirect=useRedirect()
	return (
    <Dialog
      open={props.open}
      onClose={() => {
        redirect(props.url);
      }} >
		<Edit {...props}>
		<AssetTranForm />
    </Edit>
	</Dialog>
	)
}

export default AssetTranEdit
