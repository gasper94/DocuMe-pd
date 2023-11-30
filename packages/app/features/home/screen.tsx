// import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { View, ScrollView } from 'app/design/view'
import { P } from 'app/design/typography'

import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

import { StyleSheet } from 'react-native'

export function HomeScreen() {
  return (
    <View>
      <P className="bg-red-400">
        Here is a basic starter to show you how you can navigate from one screen
        to another. This screen uses the same code on Next.js and React Native.
      </P>

      <P style={styles.test}>
        Here is a basic starter to show you how you can navigate from one screen
        to another. This screen uses the same code on Next.js and React Native.
      </P>
    </View>
  )
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: 'blue',
  },
})
