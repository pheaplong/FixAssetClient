import React  from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import {Admin,EditGuesser,ListGuesser,Resource,} from 'react-admin'
import DefaultTheme from './Theme/DefaultTheme'
import { DataProviderStore,DataProvider } from './DataProvider';
import { InvoiceList } from './Asset/Invoice';
import {AssetInfoList,AssetInfoEdit, AssetCreate} from './Asset/AssetInfo'
import  SupplierList from './Asset/Supplier/SupplierList'
const App=(props)=> {
  return (
    <Admin dataProvider={DataProviderStore} theme={DefaultTheme}>
      <Resource
        name="Asset"
        list={AssetInfoList}
        edit={AssetInfoEdit}
        create={AssetCreate}
      />
      <Resource
        name="invoice"
        list={InvoiceList}
      />
      <Resource name="Supplier" list={SupplierList}  />
    </Admin>
  );
}

export default App;
