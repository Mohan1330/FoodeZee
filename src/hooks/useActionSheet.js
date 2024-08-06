import React, {useRef, useState} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {Text} from 'react-native-paper';

const useActionSheet = () => {
  const actionSheetRef = useRef();
  const [actionSheetDate, setActionSheetDate] = useState(null);
  // const [actionSheetTag, setActionSheetTag] = useState(null);

  const openSheet = () => {
    actionSheetRef?.current?.setModalVisible(true);
  };

  const closeSheet = () => {
    actionSheetRef?.current?.setModalVisible(false);
  };
  const handleDateSelected = date => {
    setActionSheetDate(date);
    closeSheet();
  };

  const handleTagAdded = () => {
    closeSheet();
    // Additional logic related to tag addition can be added here
  };
  return {
    ref: actionSheetRef,
    openSheet: openSheet,
    closeSheet: closeSheet,
    handleDateSelected: handleDateSelected,
    actionSheetDate: actionSheetDate,
    handleTagAdded:handleTagAdded
  };
};

export default useActionSheet;
