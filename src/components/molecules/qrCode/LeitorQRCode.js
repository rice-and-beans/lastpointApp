import { React, useEffect, useState } from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import BarcodeMask from 'react-native-barcode-mask'

const finderWidth = 300
const finderHeight = 300
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const viewMinX = (width - finderWidth) / 2
const viewMinY = (height - finderHeight) / 2

export default function LeitorQRCode(props) {

  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])
    const handleBarCodeScanned = (scanningResult) => {
      if (!scanned) {
        const {type, data, bounds: {origin} = {}} = scanningResult
        const {x, y} = origin
        if (x >= viewMinX && y >= viewMinY && x <= (viewMinX + finderWidth / 2) && y <= (viewMinY + finderHeight / 2)) {
          setScanned(true)
          alert(`Bar code with type ${type} and data ${data} has been scanned!`)
        }
      }
    };

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{flex: 1}}>
        <BarCodeScanner onBarCodeScanned={handleBarCodeScanned}
          type={type}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={[styles.container]}>
        
        <BarcodeMask edgeColor="#41A05E" height={300} width={300} showAnimatedLine/>
          {scanned && <Button title="Scan Again" color="#41A05E" onPress={() => setScanned(false)}/>}
        </BarCodeScanner>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
})