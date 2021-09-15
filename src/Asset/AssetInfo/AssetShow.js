import {
  Datagrid,
  TabbedShowLayout,
  Show,
  TextField,
  Tab,
  NumberField,
  DateField,
  ReferenceManyField,
  CreateButton,TopToolbar,
	useShowController
} from "react-admin";
import React from "react";
import { Nav } from "react-dom";
import { data } from "jquery";
import { useCustomGetList } from "../../lib/GlobalLib";
import {AssetTranList} from '../AssetTran'
import ColoredChipField from "../../Component/ColoredChipField";
import * as con from '../../CONSTANT'
import classnames from 'classnames'
import {NavLink,Route} from 'react-router-dom'
import AssetTranCreate from "../AssetTran/AssetTranCreate";
import { Box } from "@material-ui/core";
import {AssetTranGrid} from '../AssetTran/AssetTranList'

const AssetShow = (props) => {
	const {record}=useShowController(props)
  return (
    <Show {...props} actions={<AssetShowAction url={`/Asset/${record.id}/show/AssetTransaction/Create`}/>}>
      <Box><TabbedShowLayout>
        <Tab label="summary">
          <TextField source="id" />
          <TextField source="assOldCode" />
          <DateField source="barcodeNo" />
          <TextField source="nameEng" />
          <TextField source="modelName" />
          <TextField source="descripttion" />
        </Tab>
        <Tab label="Invoice" path="Invoice">
          <TextField source="id" />
          <TextField source="invNo" />
          <TextField source="orderDate" />
          <TextField source="receivedDate" />
          <NumberField source="netTotal" />
          <NumberField source="tax" />
          <NumberField source="total" />
        </Tab>
        <Tab label="Transaction" path="AssetTransaction">
          <ReferenceManyField reference="AssetTransaction" target="assId" addLabel={false}  >
					{AssetTranGrid}
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    <Route
      path={`/Asset/:id/show/AssetTransaction/Create`}
      render={({ match }) => (
        <AssetTranCreate {...props} open={!!match} url={`/Asset/${record.id}/show/AssetTransaction` }/>
      )}
    />
			</Box>
    </Show>
  );
};
const AssetShowAction=props=>(
        <TopToolbar>
					<NavLink to={props.url}>Transaction</NavLink>
        </TopToolbar>

)
export default AssetShow;
