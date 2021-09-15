import DataProvider from './DataProvider'
import {
  fetchUtils,
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  UPDATE_MANY,
  DELETE,
  GET_MANY,
  GET_MANY_REFERENCE,
} from 'react-admin';
const dataProviders=[
	// {dataProvider:simpleRestProvider('http://localhost:5000/api/asset'),resources:'invoice'}
	{dataProvider:DataProvider({priKey:'invId',route:'asset/invoices'}),resources:'invoice'},
	{dataProvider:DataProvider({priKey:'assId',route:'asset/assetinfos'}),resources:'Asset'},
	{dataProvider:DataProvider({priKey:'supId',route:'asset/suppliers'}),resources:'Supplier'},
	{dataProvider:DataProvider({priKey:'trnId',route:'asset/assetTransactions'}),resources:'AssetTransaction'},
]
export default  function dataProvider(type, resource, params)  {
  const dataProviderMapping = dataProviders.find(dp => dp.resources.includes(resource));
 const mappingType = {
    [GET_LIST]: 'getList',
    [GET_ONE]: 'getOne',
    [GET_MANY]: 'getMany',
    [GET_MANY_REFERENCE]: 'getManyReference',
    [CREATE]: 'create',
    [UPDATE]: 'update',
    [UPDATE_MANY]: 'updateMany',
    [DELETE]: 'delete',
  };
  if(!dataProviderMapping)
  	return DataProvider({priKey:'lookupId',route:resource})[mappingType[type]||type](resource, params);
  return dataProviderMapping.dataProvider[mappingType[type]||type](resource, params);
};
// export default DataProvider({priKey:'invId',route:'asset'})
