// // import necessary modules and components
// import React, { useState } from 'react';
// import { View, Image, Button } from 'react-native';
// import * as ImagePicker from 'react-native-image-picker'

// const Profile = () => {
//   const [selectedImage, setSelectedImage] = useState<{ uri: string } | null>(null);

//   const pickImage = () => {
//     ImagePicker.showImagePicker(
//       { title: 'Select Image', cancelButtonTitle: 'Cancel', takePhotoButtonTitle: 'Take Photo', chooseFromLibraryButtonTitle: 'Choose from Library' },
//       (response: any) => {
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.error) {
//           console.log('ImagePicker Error: ', response.error);
//         } else {
//           const source = { uri: response.uri };
//           setSelectedImage(source);
//         }
//       }
//     );
//   };

//   return (
//     <View>
//       {selectedImage && <Image source={selectedImage} style={{ width: 200, height: 200 }} />}
//       <Button title="Pick Image" onPress={pickImage} />
//     </View>
//   );
// };

// export default Profile;
import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

const MyTouchableComponent = () => {
  const handlePress = () => {
    // Handle onPress event
    console.log('Touchable component pressed!');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {/* Container View */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Image */}
        <Image
          source={require('./path/to/your/image.png')} // Provide the path to your image
          style={{ width: 50, height: 50, marginRight: 10 }} // Set the desired width and height
        />

        {/* Text or additional components */}
        <Text>Touchable Component</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Profile;
