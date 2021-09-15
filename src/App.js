import React  from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import {Admin,EditGuesser,ListGuesser,Resource,} from 'react-admin'
import DefaultTheme from './Theme/DefaultTheme'
import { DataProviderStore,DataProvider } from './DataProvider';
import { InvoiceList } from './Asset/Invoice';
import {AssetInfoList,AssetInfoEdit, AssetCreate,AssetShow} from './Asset/AssetInfo'
import  SupplierList from './Asset/Supplier/SupplierList'
import {AssetTranList,AssetTranEdit} from './Asset/AssetTran'
const App=(props)=> {
  return (
    <Admin dataProvider={DataProviderStore} theme={DefaultTheme}>
      <Resource
        name="Asset"
        list={AssetInfoList}
        edit={AssetInfoEdit}
        create={AssetCreate}
				show={AssetShow}
      />
      <Resource
        name="invoice"
        list={InvoiceList}
      />
      <Resource name="Supplier" list={SupplierList}  className="hide"/>
      <Resource name="AssetTransaction" list={AssetTranList} />
      <Resource name="DataLookUps/A01"  />
      <Resource name="DataLookUps/A02"  />
      <Resource name="DataLookUps/A03"  />
      <Resource name="DataLookUps/A04"  />
    </Admin>
  );
}

export default App;
