import { View, Text, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { COLORS, SIZES, icons } from '../constants';
import Button from '../components/Button';

export default function MainLayout({ children }) {

  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const { visible } = useSelector((state) => state.tab);


  useEffect(() => {
    if (visible) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start()
    }
  }, [visible])

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 330]
  })

  return (
    <View style={{ flex: 1 }}>
      {children}

      {visible && (
        <Animated.View 
          style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: COLORS.transparentBlack }} 
          opacity={modalAnimatedValue}  
        />
      )}

      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: modalY,
          width: "100%",
          padding: SIZES.padding,
          backgroundColor: COLORS.primary
        }}
      >
        <Button text="Widthdraw" icon={icons.withdraw} />
        <Button text="Transfer" icon={icons.send} />
      </Animated.View>

    </View>
  )
}