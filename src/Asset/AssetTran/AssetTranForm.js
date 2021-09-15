import React from 'react'
import {Edit,
	 TextInput,
	 DateInput,
	 SimpleForm,
	 useRedirect,
	 SelectInput,
	 ReferenceInput
	} from 'react-admin'
import DataLookUpInput from '../../Component/DataLookUpInput';
import {LOOKUP_BRANCH,LOOKUP_ASSET_TRN_TYPE, LOOKUP_ASSET_TYPE} from '../../CONSTANT'
import {useGetDataLookUp} from '../../lib/GlobalLib'
const AssetTranForm = (props) => {
	return (
    <SimpleForm {...props}  style={{width:500}}>
      <ReferenceInput source="assId" reference="Asset"><SelectInput optionText="assId" /></ReferenceInput>
			<DataLookUpInput source="trnType" lookUpId="A03" optionText="codeNameEng"  optionValue="lookupId"/>
			<DataLookUpInput source="brId" lookUpId="A04" optionText="codeNameEng"  optionValue="lookupId"/>
      <TextInput source="baseDate" />
      <TextInput source="trnStatus" />
    </SimpleForm>
  );
}

export default AssetTranForm
