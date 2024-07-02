import { Picker as RNPickerSelect} from '@react-native-picker/picker'
import React from 'react'
import { PickerView } from './styles'

export default function Picker ({onChange, type}) {
    return(
        <PickerView>
            <RNPickerSelect
            style={{
                width: '100%'
            }}
            selectedValue={type}
            onValueChange={ (value) => onChange(value)}
            >
                <RNPickerSelect.Item label='income' value="income"/>
                <RNPickerSelect.Item label='expense' value="expense"/>
            </RNPickerSelect>

        </PickerView>
    )
}