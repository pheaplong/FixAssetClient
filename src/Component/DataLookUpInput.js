import React from 'react'
import {SelectInput} from 'react-admin'
import {useGetDataLookUp} from '../lib/GlobalLib'

const DataLookUpInput = (props) => {
	const {data}=useGetDataLookUp(props.lookUpId)
	console.log(data);
	return (
		<SelectInput {...props} choices={data} />
	)
}

export default DataLookUpInput
