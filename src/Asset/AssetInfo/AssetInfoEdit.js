import React from 'react'
import {
	Edit,
	TextInput,
	DateInput,
	NumberInput,
	SimpleForm,
	SelectInput,
	ReferenceInput
} from "react-admin";
import { ApproveButton,RejectButton } from './AssetButton';
export const AssetInfoEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ApproveButton />
      <RejectButton />
      <TextInput source="assId" />
      <ReferenceInput source="invoiceId" reference="invoice">
        <SelectInput optionText="invNo" />
      </ReferenceInput>
      <TextInput source="assOldCode" />
      <TextInput source="barcodeNo" />
      <TextInput source="nameEng" />
      <TextInput source="nameKhr" />
      <TextInput source="serialNo" />
      <TextInput source="modelName" />
      <TextInput source="descripttion" />
      <TextInput source="engineNo" />
      <TextInput source="chassiNo" />
      {/* <ReferenceInput source="conditionId" reference="conditions"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="assTypeId" reference="assTypes"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="assCategoryId" reference="assCategories"><SelectInput optionText="id" /></ReferenceInput> */}
      <TextInput source="ccy" />
      <TextInput source="netCost" />
      <TextInput source="tax" />
      <TextInput source="costTotal" />
      <TextInput source="costNbv" />
      <TextInput source="isWarranty" />
      <TextInput source="wrtStDate" />
      <TextInput source="wrtToDate" />
      <TextInput source="request" />
      <TextInput source="deprDuration" />
      {/* <ReferenceInput source="deprMethodId" reference="deprMethods"><SelectInput optionText="id" /></ReferenceInput> */}
      <TextInput source="deprStDate" />
      <TextInput source="deprToDate" />
      <TextInput source="deprPercent" />
      <TextInput source="deprValue" />
      <TextInput source="assCode1" />
      <TextInput source="assCode2" />
      <TextInput source="assCode3" />
      <TextInput source="assCode4" />
      <TextInput source="ipAddress" />
      {/* <ReferenceInput source="brId" reference="brs"><SelectInput optionText="id" /></ReferenceInput>
            <ReferenceInput source="ownerId" reference="owners"><SelectInput optionText="id" /></ReferenceInput> */}
      <TextInput source="assStatus" />
      <TextInput source="insUsr" />
      <TextInput source="insDt" />
      <TextInput source="updtUsr" />
      <TextInput source="updtDt" />
      <TextInput source="id" />
    </SimpleForm>
  </Edit>
);
export default AssetInfoEdit