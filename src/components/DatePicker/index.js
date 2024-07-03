import { View,Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

import {Container, Header} from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DatePicker({onClose, onChange, date}) {
    const [dateNow, setDateNow] = useState(new Date(date))
    return (
        <Container>
            {Platform.OS === 'ios' && (
                <Header>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </Header>
            )}
            <DateTimePicker
            value={dateNow}
            mode='date'
            display='default'
            onChange={ (event, date) => {
                const currentDate = date || dateNow;
                setDateNow(currentDate);
                onChange(currentDate);
            }}
            style={{backgroundColor: 'white'}}
            />
        </Container>
    );
}