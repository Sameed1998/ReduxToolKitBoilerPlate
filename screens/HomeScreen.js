import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { decrement, increment, incrementByNumber } from '../reducers/CounterReducer'
import { useSelector, useDispatch } from 'react-redux'
import { editname } from '../reducers/NameReducer';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const value = useSelector(state => state.counter.value);
    const myName = useSelector(state => state.name.name);
    const [state, setState] = useState(true)
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, gap: 10 }}>
            <TouchableOpacity onPress={() => {
                dispatch(editname("Sameed"))
                setState(!state)
            }}><Text>{myName}</Text></TouchableOpacity>
            <Text>Counter Value</Text>
            <Text>{value}</Text>
            <Button onPress={() => dispatch(increment())} title='Increment' />
            <Button onPress={() => dispatch(decrement())} title='decrement' />
            <Button onPress={() => dispatch(incrementByNumber(3))} title='Increment by value' />
        </View>
    )
}
