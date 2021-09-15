import React from 'react'
import {ChipField,useRecordContext} from 'react-admin'		
const ColoredChipField = props => {
	const record=useRecordContext(props)
	console.log(record)
  return (
    <ChipField
      {...props} 
			record={record}
			className={props.condition(record.id)}
			style={{color:"white"}}
    />
  );
};
export default ColoredChipField