
import React from 'react'
import {useCustomMutation} from '../../lib/GlobalLib'
const ApproveButton = ({record}) => {
	const[onApprove,{data, total, error, loading, loaded}]=useCustomMutation({
		type:'approveAsset',
		resource:'Asset',
		payload:{id:record.id,assStatus:'Approve'},
	})
	return (
		<button onClick={onApprove} disabled={loading}>Approve</button>
	)
}
const RejectButton = ({record}) => {
	const[onReject,{data, total, error, loading, loaded}]=useCustomMutation({
		type:'rejectAsset',
		resource:'Asset',
		payload:{id:record.id,assStatus:'Approve'},
	})
	return (
		<button onClick={onReject} disabled={loading}>Reject</button>
	)
}
export {
	ApproveButton,
	RejectButton
}