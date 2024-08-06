import {useNavigation} from '@react-navigation/native';
import React, {useState, setTimeout} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import useActionSheet from '../hooks/useActionSheet';

const TagSelectionScreen = ({onClose, onTagAdded}) => {
  const [tags, setTags] = useState(['Health', 'Workout', 'Relationship']);
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const {closeSheet} = useActionSheet();

  // const addTag = () => {
  //   if (text.trim() !== '') {
  //     if (editIndex !== null) {
  //       // If editing an existing tag
  //       const newTags = [...tags];
  //       newTags[editIndex] = text.trim();
  //       setTags(newTags);
  //       setEditIndex(null);
  //     } else {
  //       setTags([...tags, text.trim()]);
  //     }

  //     setText('');
  //     closeSheet();
  //   } else {
  //     Alert.alert('Please enter a valid tag.');
  //   }
  // };

  const addTag = () => {
    if (text.trim() !== '') {
      if (editIndex !== null) {
        // If editing an existing tag
        const newTags = [...tags];
        newTags[editIndex] = text.trim();
        setTags(newTags);
        setEditIndex(null);
      } else {
        setTags([...tags, text.trim()]);
        // alert(text)
      }

      setText('');
      onClose(); // Call onClose to inform the parent to close the sheet
      onTagAdded(text.trim()); // Pass the added tag value to the parent
    } else {
      Alert.alert('Please enter a valid tag.');
    }
  };
  const removeTag = index => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const editTag = index => {
    const tagToEdit = tags[index];
    setText(tagToEdit);
    setEditIndex(index);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a tag"
            value={text}
            maxLength={40}
            onChangeText={setText}
            onSubmitEditing={addTag}
          />
          <TouchableOpacity onPress={addTag} style={styles.addButton}>
            <Text style={styles.buttonText}>
              {editIndex !== null ? 'Update' : 'Add'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <View key={index} style={styles.tagWrapper}>
              <TouchableOpacity
                onPress={() => editTag(index)}
                style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </TouchableOpacity>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => removeTag(index)}
                  style={styles.removeButton}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.removeButtonText}>X</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#F5F5F5',
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginBottom: 10,
  },
  tagWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginRight: 5,
  },
  tag: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
  },
  tagText: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Gilroy_Medium',
  },
  removeButton: {
    marginLeft: 5,
    height: 20,
    width: 20,
    marginTop: 18,
    borderRadius: 10,
    backgroundColor: '#E53935',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    color: 'black',
    fontFamily: 'Gilroy_Medium',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Gilroy_Medium',
  },
});

export default TagSelectionScreen;
