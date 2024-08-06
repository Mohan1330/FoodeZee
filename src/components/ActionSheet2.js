// src/components/ActionSheet.js
import React, {useImperativeHandle, useState} from 'react';
import {View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
// Adjust the path accordingly

const ActionSheetComponent = React.forwardRef((props, ref) => {
  const [data, setData] = useState(null);
  const actionSheetRef = React.useRef();
  const openSheet = () => {
    if (data) {
      setData(() => data);
    }
    actionSheetRef?.current?.setModalVisible(true);
  };

  const closeSheet = () => {
    actionSheetRef?.current?.setModalVisible(false);
  };

  useImperativeHandle(ref, () => ({
    openSheet: openSheet,
    closeSheet: closeSheet,
    alertData: () => alert('hi'),
  }));

  return (
    <View>
      <ActionSheet
        containerStyle={{
          height: 800,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor:'red',
        }}
        ref={actionSheetRef}>
        {props?.children}
      </ActionSheet>
    </View>
  );
});

export default ActionSheetComponent;
