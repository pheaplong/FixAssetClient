
import { Box, CardContent } from '@material-ui/core';
import React from 'react'
import {
	Create,
	TextInput,
	DateInput,
	NumberInput,
	SimpleForm,
	SelectInput,
	ReferenceInput
} from "react-admin";
import CustomAccordion from '../../Component/Accordion';
import { useCustomGetList, useGetDataLookUp } from '../../lib/GlobalLib';
export const AssetInfoCreate = (props) => {
	const conditionId=useGetDataLookUp('assetCondition')
	const categoryId=useGetDataLookUp('assetCategory')
	const typeId=useGetDataLookUp('assetType')
	const deprId=useGetDataLookUp('assetDepr')
	const invoices=useCustomGetList('invoice')
	const layout=(props)=>(
		<CardContent style={{
			display:'grid',
			gridTemplateColumns:'40% 40%'
		}}>
		{ props.children }
		</CardContent>
	)
	return (
    <Create {...props}>
      <SimpleForm component={layout}>
        <SelectInput
          source="invId"
          choices={invoices.datas}
          optionText="invNo"
          optionValue="invId"
        />
        <TextInput source="barcodeNo" />
        <TextInput source="nameEng" />
        <TextInput source="nameKhr" />
        <TextInput source="serialNo" />
        <TextInput source="modelName" />
        <TextInput source="descripttion" />
        <TextInput source="engineNo" />
        <TextInput source="chassiNo" />
        <SelectInput
          source="conditionId"
          choices={conditionId.data}
          optionText="codeNameEng"
          optionValue="lookupId"
        />
        <SelectInput
          source="assTypeId"
          choices={typeId.data}
          optionText="codeNameEng"
          optionValue="lookupId"
        />
        <SelectInput
          source="assCategoryId"
          choices={categoryId.data}
          optionText="codeNameEng"
          optionValue="lookupId"
        />
        <CustomAccordion summary="Price">
          <TextInput source="ccy" />
          <TextInput source="netCost" />
          <TextInput source="tax" />
          <TextInput source="costTotal" />
          <TextInput source="costNbv" />
        </CustomAccordion>
        <CustomAccordion summary="Warranty">
          <TextInput source="isWarranty" />
          <TextInput source="wrtStDate" />
          <TextInput source="wrtToDate" />
        </CustomAccordion>
        <CustomAccordion summary="Depriciation">
          <TextInput source="deprDuration" />
          <SelectInput
            source="deprMethodId"
            choices={deprId.data}
            optionText="codeNameEng"
            optionValue="lookupId"
          />
          <TextInput source="deprStDate" />
          <TextInput source="deprToDate" />
          <TextInput source="deprPercent" />
          <TextInput source="deprValue" />
        </CustomAccordion>
        <TextInput source="request" />
      </SimpleForm>
    </Create>
  );
};
export default AssetInfoCreate