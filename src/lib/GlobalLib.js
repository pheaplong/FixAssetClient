import {useGetList, useMutation,useNotify,useQueryWithStore,useRefresh} from 'react-admin'
import moment from 'moment'
export const useCustomMutation = ({ type, resource, payload }) => {
	const notify = useNotify();
	const refresh = useRefresh();
	return useMutation({ type, resource, payload }, {
		onSuccess: () => {
			refresh();
			notify('transaction successfully', 'success');
		},
		onFailure: (error) => { notify(`${error.message}`, 'warning'); },
	});
};

export const formartDate=(date)=>( moment(date).format('YYYYMMDD'))

export const useGetDataLookUp=(resource)=>{
	return useQueryWithStore({
		type:'getDataLookUpList',
		resource:resource,
        payload : {
            pagination: { },
            sort      : { },
        }
	})
}

export const useCustomGetList=(resource)=>{
	const result= useGetList(resource)
	return {
		...result,
		datas:result.ids.map(i=>result.data[i])
	}
}
