import React from 'react'
import { StyleSheet, View } from 'react-native'
import ViewVerdeRetangular from '../../atoms/view/ViewVerdeRetangular'
import BtnRefresh from '../../atoms/buttons/base/BtnRefresh'
import BtnVoltar from '../../atoms/buttons/voltar/BtnVoltar'
import TituloBranco from '../../atoms/text/titulo/TituloBranco'

export default function AppBar(props) {

    return (
      <View style={styles.container}>
          <ViewVerdeRetangular>
            <View style={styles.position}>
              <BtnVoltar funcaoVoltar={props.funcaoVoltar} />
              <TituloBranco>LastPoint</TituloBranco>
              <BtnRefresh funcaoAtualizar={props.funcaoAtualizar}/>
            </View>
          </ViewVerdeRetangular>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      width: 'auto',
      height: 'auto',
      alignItems: 'center'
    },
    position: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})