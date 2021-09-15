
import React from 'react'
import {useCustomMutation} from '../../lib/GlobalLib'
import {Button} from '@material-ui/core'
const ApproveButton = ({record}) => {
	const[onApprove,{data, total, error, loading, loaded}]=useCustomMutation({
		type:'approveAssetTrn',
		resource:'AssetTransaction',
		payload:{id:record.id},
	})
	return (
		<Button onClick={onApprove} disabled={loading} variant="contained" color="primary">Approve</Button>
	)
}
const RejectButton = ({record}) => {
	const[onReject,{data, total, error, loading, loaded}]=useCustomMutation({
		type:'rejectAssetTrn',
		resource:'AssetTransaction',
		payload:{id:record.id},
	})
	return (
    <Button
      onClick={onReject}
      disabled={loading}
      variant="contained"
      color="secondary"
      size="small"
    >
      Reject
    </Button>
  );
}
export {
	ApproveButton,
	RejectButton
}