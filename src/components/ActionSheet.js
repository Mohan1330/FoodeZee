// // src/components/ActionSheet.js
// import React, {useEffect, useRef} from 'react';
// import {View, Text, TextInput, TouchableOpacity} from 'react-native';
// import {connect} from 'react-redux';
// import ActionSheet from 'react-native-actions-sheet';
// import {
//   openFirstActionSheet,
//   closeFirstActionSheet,
//   openSecondActionSheet,
//   closeSecondActionSheet,
//   addData,
// } from '../redux/action'; // Adjust the path accordingly

// const ActionSheetComponent = ({
//   firstActionSheetOpen,
//   secondActionSheetOpen,
//   secondActionSheetData,
//   openFirstActionSheet,
//   closeFirstActionSheet,
//   openSecondActionSheet,
//   closeSecondActionSheet,
//   addData,
// }) => {
//   const mainActionSheetRef = useRef(null);
//   const innerActionSheetRef = useRef(null);
//   const textInputRef = useRef(null);

//   const handleAddData = () => {
//     addData(inputData);
//     closeSecondActionSheet();
//     setInputData(''); // Reset input data
//     console.log(inputData);
//     innerActionSheetRef.current?.setModalVisible(false);
//     mainActionSheetRef.current?.setModalVisible(true);
//   };

//   const handleOpenInnerActionSheet = () => {
//     openSecondActionSheet();
//     mainActionSheetRef.current?.setModalVisible(true);
//     innerActionSheetRef.current?.setModalVisible(true);
//   };

//   const showMainActionSheet = () => {
//     openFirstActionSheet();
//     innerActionSheetRef.current?.setModalVisible(true);
//   };

//   useEffect(() => {
//     innerActionSheetRef.current?.setModalVisible(true);
//   }, [1000]);

//   const [inputData, setInputData] = React.useState('');

//   return (
//     <View>
//       <TouchableOpacity onPress={showMainActionSheet}>
//         <Text>Open Main Action Sheet</Text>
//       </TouchableOpacity>

//       <ActionSheet
//         containerStyle={{
//           height: 800,
//           borderTopLeftRadius: 30,
//           borderTopRightRadius: 30,
//           //   backgroundColor: COLORS[selectedBackground],
//         }}
//         ref={mainActionSheetRef}>
//         <TouchableOpacity onPress={handleOpenInnerActionSheet}>
//           <Text>Open Inner Action Sheet</Text>
//         </TouchableOpacity>

//         {secondActionSheetData && (
//           <View>
//             <Text>Second Action Sheet Data: {secondActionSheetData}</Text>
//           </View>
//         )}
//       </ActionSheet>

//       <ActionSheet
//         containerStyle={{
//           height: 800,
//           borderTopLeftRadius: 30,
//           borderTopRightRadius: 30,
//           //   backgroundColor: COLORS[selectedBackground],
//         }}
//         ref={innerActionSheetRef}>
//         <TextInput
//           ref={textInputRef}
//           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//           onChangeText={text => setInputData(text)}
//           value={inputData}
//         />

//         <TouchableOpacity onPress={handleAddData}>
//           <Text>Add Data</Text>
//         </TouchableOpacity>
//       </ActionSheet>
//     </View>
//   );
// };

// const mapStateToProps = state => ({
//   firstActionSheetOpen: state.firstActionSheetOpen,
//   secondActionSheetOpen: state.secondActionSheetOpen,
//   secondActionSheetData: state.secondActionSheetData,
// });

// const mapDispatchToProps = {
//   openFirstActionSheet,
//   closeFirstActionSheet,
//   openSecondActionSheet,
//   closeSecondActionSheet,
//   addData,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ActionSheetComponent);
