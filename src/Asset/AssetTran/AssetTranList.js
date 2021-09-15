import React from 'react'
import {
  Datagrid,
  TextField,
  List,
	TopToolbar,
	ExportButton,
	CreateButton,
	ReferenceField,ChipField
} from "react-admin";
import * as con from '../../CONSTANT'
import classnames from 'classnames'
import ColoredChipField from '../../Component/ColoredChipField'
import AssetTranEdit from './AssetTranEdit'
import {Route} from 'react-router-dom'
import { Box } from '@material-ui/core'
import AssetTranCreate from './AssetTranCreate'
import {ApproveButton,RejectButton} from './AssetTranButton'

export const AssetTranGrid = <Datagrid >
	<TextField source="trnId" />
	<TextField source="assId" />
	<ReferenceField source="trnType" reference="DataLookUps/A03" label="TrnType">
		<TextField source="codeNameEng" />
	</ReferenceField>
	{/* <ReferenceField source="prevBrId" reference="prevBrs"><TextField source="id" /></ReferenceField>
        <ReferenceField source="brId" reference="brs"><TextField source="id" /></ReferenceField>
        <ReferenceField source="prevOwnerId" reference="prevOwners"><TextField source="id" /></ReferenceField>
        <ReferenceField source="ownerId" reference="owners"><TextField source="id" /></ReferenceField> */}
	<ReferenceField source="prevBrId" reference="DataLookUps/A04" label="PrevBranch">
		<TextField source="codeNameEng" />
	</ReferenceField>
	<ReferenceField source="brId" reference="DataLookUps/A04" label="Branch">
		<TextField source="codeNameEng" />
	</ReferenceField>
	<TextField source="baseDate" />
	<ReferenceField source="trnStatus" reference="DataLookUps/A02" label="Status">
		<ColoredChipField
			source="codeNameEng"
			size="small"
			style={{ margin: 0 }}
			condition={(value) => {
				return classnames({
					"darken-1": 1,
					red: value === con.ASS_TRN_STATUS_CANCEL ||
						value === con.ASS_TRN_STATUS_REJECT,
					green: value === con.ASS_TRN_STATUS_APPROVED,
					blue: value === con.ASS_TRN_STATUS_REQUEST,
				});
			} } />
	</ReferenceField>
	<ApproveButton/>
	<RejectButton/>
</Datagrid>;

const AssetTranList = (props) => (
  <Box>
    {" "}
    <List {...props} actions={<AssetTranActions />}>
      {AssetTranGrid}
    </List>
    <Route
      path="/AssetTransaction/create"
      render={({ match }) => (
        <AssetTranCreate {...props} open={!!match} url="/AssetTransaction" />
      )}
    />
    <Route
      path="/AssetTransaction/:id"
      render={({ match }) =>
        !!match && match.params.id.toLowerCase() !== "create" ? (
          <AssetTranEdit
            {...props}
            open={!!match}
            id={match.params.id}
            url="/AssetTransaction"
          />
        ) : null
      }
    />
  </Box>
);

export const AssetTranActions = () => {
    return (
        <TopToolbar>
            {/* <FilterButton /> */}
            <ExportButton />
            <CreateButton
                resource="AssetTransaction"
                variant="contained"
				// resource='invoice'
            />
        </TopToolbar>
    );
};
export default AssetTranList