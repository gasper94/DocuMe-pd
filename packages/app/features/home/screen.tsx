'use client'

// Design
import { Text } from 'app/design/typography'
import { View, ScrollView } from 'app/design/view'

// React Native
import { Platform, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeArea } from 'app/provider/safe-area'

// Third Party
import { SafeAreaView } from 'moti'
import { MotiLink } from 'solito/moti'

// Hooks
import { useState, useReducer } from 'react'
import { useRouter } from 'solito/router'

// Components
import { NavigationScreen } from '../components/NavigationBar/NavigationBar'
import Calendar from './Calendar'

// // Assets
import ChevronUpDown from '../../../assets/Icons/chevron-up-down/chevron-up-down'
import Plus from '../../../assets/Icons/plus/plus'

export const Card = ({ title, category, description, image }) => {
  return (
    <View style={stylex.cardContainer}>
      <View style={stylex.imageContainer}>
        <Image
          source={{
            uri: `${image}`,
          }}
          style={stylex.image}
        />
      </View>
      <View style={stylex.contentContainer}>
        <Text style={stylex.category}>{category}</Text>
        <Text style={stylex.title}>{title}</Text>
        <Text style={stylex.description}>{description}</Text>
        <TouchableOpacity style={stylex.button}>
          <Text style={stylex.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const stylex = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    margin: 16,
  },
  imageContainer: {
    width: '40%',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  category: {
    // fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF69B4', // Pink color
  },
  title: {
    // fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  description: {
    // fontFamily: 'sans-serif',
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 105, 180, 0.1)',
    borderRadius: 20,
    padding: 12,
  },
  buttonText: {
    // fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
})

export const newCalendar = () => {
  return (
    <View>
      <Text>Hello there</Text>
    </View>
  )
}

export default newCalendar

const articles = [
  {
    id: 1,
    imageUri: 'https://source.unsplash.com/featured/?exercise',
    category: 'health',
    title: 'The Importance of Regular Exercise for a Healthy Lifestyle',
    description:
      'Regular exercise plays a crucial role in maintaining a healthy lifestyle. Learn about the benefits of staying active and how it can positively impact your overall well-being.',
    learnMoreLink: 'https://example.com/article1',
  },
  {
    id: 2,
    imageUri: 'https://source.unsplash.com/featured/?nutrition',
    category: 'health',
    title: 'Understanding the Basics of a Balanced Diet',
    description:
      'A balanced diet is essential for maintaining good health. Explore the fundamental components of a balanced diet and how it contributes to your overall nutrition.',
    learnMoreLink: 'https://example.com/article2',
  },
  {
    id: 3,
    imageUri: 'https://source.unsplash.com/featured/?sleep',
    category: 'health',
    title: 'Tips for Better Sleep and Improved Health',
    description:
      'Quality sleep is vital for overall health and well-being. Discover practical tips for achieving better sleep and its positive effects on your physical and mental health.',
    learnMoreLink: 'https://example.com/article3',
  },
  {
    id: 4,
    imageUri: 'https://source.unsplash.com/featured/?stress',
    category: 'health',
    title: 'The Impact of Stress on Your Health and How to Manage It',
    description:
      'Stress can have detrimental effects on your health. Learn about the impact of stress and discover effective strategies for managing and reducing stress levels.',
    learnMoreLink: 'https://example.com/article4',
  },
  {
    id: 5,
    imageUri: 'https://source.unsplash.com/featured/?meditation',
    category: 'health',
    title: 'Benefits of Mindfulness Meditation for Mental Health',
    description:
      'Mindfulness meditation has numerous benefits for mental health. Explore how incorporating mindfulness practices into your routine can enhance your overall well-being.',
    learnMoreLink: 'https://example.com/article5',
  },
  {
    id: 6,
    imageUri: 'https://source.unsplash.com/featured/?immune',
    category: 'health',
    title: 'Healthy Habits for Boosting Immune System Function',
    description:
      "Maintaining a strong immune system is essential for overall health. Discover healthy habits and practices that can help boost your immune system's function.",
    learnMoreLink: 'https://example.com/article6',
  },
  {
    id: 7,
    imageUri: 'https://source.unsplash.com/featured/?hydration',
    category: 'health',
    title: "Importance of Hydration for Your Body's Well-being",
    description:
      'Proper hydration is crucial for maintaining optimal health. Learn about the importance of staying hydrated and how it positively impacts various bodily functions.',
    learnMoreLink: 'https://example.com/article7',
  },
  {
    id: 8,
    imageUri: 'https://source.unsplash.com/featured/?nutrition',
    category: 'health',
    title: 'The Connection Between Nutrition and Mental Health',
    description:
      'Nutrition plays a vital role in mental health. Explore the link between dietary choices and mental well-being, and discover how a balanced diet can positively impact your mood.',
    learnMoreLink: 'https://example.com/article8',
  },
  {
    id: 9,
    imageUri: 'https://source.unsplash.com/featured/?sleep',
    category: 'health',
    title: 'How to Establish and Maintain a Healthy Sleep Routine',
    description:
      'A consistent sleep routine is essential for good health. Learn practical tips for establishing and maintaining a healthy sleep routine that promotes restful and rejuvenating sleep.',
    learnMoreLink: 'https://example.com/article9',
  },
  {
    id: 10,
    imageUri: 'https://source.unsplash.com/featured/?outdoor',
    category: 'health',
    title:
      'The Benefits of Outdoor Activities for Physical and Mental Well-being',
    description:
      'Engaging in outdoor activities has numerous benefits for both physical and mental well-being. Explore the positive impact of spending time in nature on overall health.',
    learnMoreLink: 'https://example.com/article10',
  },
]

export function HomeScreen() {
  const [mobileCalendar, setMobileCalendar] = useState(350)
  const [miniCalendar, setMiniCalendar] = useState(true)

  let isChildScrolling = false

  const handleChildScroll = () => {
    isChildScrolling = true
  }

  const handleChildTouchStart = () => {
    isChildScrolling = false
  }

  const handleParentScroll = () => {
    if (!isChildScrolling) {
      // Parent scroll behavior
    }
  }

  const router = useRouter()

  const [visible, toggle] = useReducer((s) => !s, true)
  const [isHovered, setIsHovered] = useState(false)

  const [isPressed, setIsPressed] = useState(false)

  const handlePressIn = () => {
    setIsPressed(true)
  }

  const handlePressOut = () => {
    setIsPressed(false)
  }

  const buttonStyle = {
    backgroundColor: isPressed ? 'blue' : 'red',
    padding: 10,
    borderRadius: 5,
    cursor: 'pointer',
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleSingOut = () => {
    alert('signout')
  }

  const [isExpanded, setIsExpanded] = useState(true)

  const toggleCalendar = () => {
    setIsExpanded(!isExpanded)
  }

  const changeCalendarView = () => {
    setMiniCalendar(!miniCalendar)
    if (mobileCalendar === 34) {
      setMobileCalendar(350)
    } else if (mobileCalendar === 350) {
      setMobileCalendar(34)
    }
  }

  return (
    // <View className="flex-1 items-center justify-center p-3">
    //   <View className="flex w-full">
    //     <NavigationScreen />
    //   </View>

    //   {/* <View>
    //   <AudioRecorder />
    //   <DistanceCalculator />
    // </View> */}
    //   <ScrollView style={{ paddingTop: 20 }}>
    //     <View className="flex flex-col items-center justify-center">
    //       <Calendar />
    //     </View>
    //     {/* <Text>{`Key: ${key}`}</Text> */}
    //   </ScrollView>

    //   <Text>{activity.length}</Text>

    //   {/* <View
    //     style={[styles.container, isHovered && styles.containerHovered]}
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //   >
    //     <TouchableHighlight
    //       onPressIn={handlePressIn}
    //       onPressOut={handlePressOut}
    //       style={[styles.button, isHovered && styles.buttonHovered]}
    //       underlayColor="red"
    //     >
    //       <Text style={styles.buttonText}>Hover Me2</Text>
    //     </TouchableHighlight>
    //   </View> */}

    //   {/* This bellow is a touchable button */}
    //   {/* <TouchableWithoutFeedback
    //       onPress={() => console.log('Button clicked!')}
    //       onPressIn={handlePressIn}
    //       onPressOut={handlePressOut}
    //     >
    //     <View style={buttonStyle}>
    //       <Text>Button</Text>
    //     </View>
    //   </TouchableWithoutFeedback> */}

    //   <Row className="space-x-8">
    // <MotiLink
    //   href="/user/xxx"
    //   animate={({ hovered, pressed }) => {
    //     'worklet'

    //     return {
    //       scale: pressed ? 0.95 : hovered ? 1.1 : 1,
    //       rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
    //     }
    //   }}
    //   transition={{
    //     type: 'timing',
    //     duration: 150,
    //   }}
    //   style={undefined}
    //   onLayout={undefined}
    // >
    //   <Text selectable={false} className="text-base font-bold">
    //     User
    //   </Text>
    // </MotiLink>
    //     {/*
    //     <MotiLink
    //       href="/activity/xxx"
    //       animate={({ hovered, pressed }) => {
    //         'worklet'

    //         return {
    //           scale: pressed ? 0.95 : hovered ? 1.1 : 1,
    //           rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
    //         }
    //       }}
    //       transition={{
    //         type: 'timing',
    //         duration: 150,
    //       }}
    //       style={undefined}
    //       onLayout={undefined}
    //     >
    //       <Text selectable={false} className="text-base font-bold">
    //         Add Activity
    //       </Text>
    //     </MotiLink> */}

    //     <MotiLink
    //       href="/login"
    //       animate={({ hovered, pressed }) => {
    //         'worklet'

    //         return {
    //           scale: pressed ? 0.95 : hovered ? 1.1 : 1,
    //           rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
    //         }
    //       }}
    //       transition={{
    //         type: 'timing',
    //         duration: 150,
    //       }}
    //       style={undefined}
    //       onLayout={undefined}
    //     >
    //       <Text selectable={false} className="text-base font-bold">
    //         Go to Login
    //       </Text>
    //     </MotiLink>

    //     {/* <MotiLink
    //       href="/saved-activities"
    //       animate={({ hovered, pressed }) => {
    //         'worklet'

    //         return {
    //           scale: pressed ? 0.95 : hovered ? 1.1 : 1,
    //           rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
    //         }
    //       }}
    //       transition={{
    //         type: 'timing',
    //         duration: 150,
    //       }}
    //       style={undefined}
    //       onLayout={undefined}
    //     >
    //       <Text selectable={false} className="text-base font-bold">
    //         Saved Activities
    //       </Text>
    //     </MotiLink> */}
    //   </Row>
    // </View>

    // // Second View
    // <View className="flex-1 items-center justify-center p-3">
    //   <View className="flex w-full">
    //     <NavigationScreen />
    //   </View>

    //   <Text>Hello there</Text>
    // <MotiLink
    //   href="/login"
    //   animate={({ hovered, pressed }) => {
    //     'worklet'

    //     return {
    //       scale: pressed ? 0.95 : hovered ? 1.1 : 1,
    //       rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
    //     }
    //   }}
    //   transition={{
    //     type: 'timing',
    //     duration: 150,
    //   }}
    //   style={undefined}
    //   onLayout={undefined}
    // >
    //   <Text selectable={false} className="text-base font-bold">
    //     Go to Login
    //   </Text>
    // </MotiLink>
    // </View>

    // <View className="h-screen w-full">
    //   <View style={styles.navigation}>
    //     <NavigationScreen />
    //   </View>

    // <View
    //   className="bg-blue-100 min-[320px]:mt-4 min-[640px]:mt-1"
    //   style={styles.mainx}
    // >
    //   <Text>Hello</Text>
    // </View>
    // </View>
    <SafeAreaView className="relative" style={styles.container}>
      <View className="absolute bottom-4 right-4 z-50 ">
        <MotiLink
          href="/activity/xxx"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
          style={undefined}
          onLayout={undefined}
        >
          <View className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
            <Plus width={42} height={42} fill="white" color={'white'} />
          </View>
        </MotiLink>
      </View>
      <View style={styles.navigation} className="border-b-2">
        {/* <Text>Header</Text> */}
        <NavigationScreen />
      </View>
      <View
        style={styles.mainx}
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row"
      >
        <View
          // className=" min-[320px]:bg-green-500 min-[540px]:bg-red-500 min-[1540px]:bg-purple-500"
          style={{ ...styles.left, maxHeight: mobileCalendar }}
          className=" lg:max-h-full xl:max-h-full"
          // border-b-2
        >
          <View
            className="align-center mt-4 h-full min-[1540px]:items-center"
            // dimensions
            // className="align-center mt-4 h-full min-[320px]:bg-green-200 min-[540px]:bg-orange-200 min-[720px]:bg-blue-600 min-[1540px]:bg-purple-300"
          >
            {/* This is the calendar side */}
            {miniCalendar ? (
              <View className="h-4 w-full">
                <View className="ml-4 mr-4 flex h-full items-end justify-center">
                  <TouchableOpacity onPress={() => changeCalendarView()}>
                    <View className="mb-2 flex flex-row items-center justify-center">
                      <Text className="text-white">Calendar</Text>
                      <ChevronUpDown
                        width={24}
                        height={24}
                        fill="white"
                        color={'white'}
                      />
                      {/* <Text>Up/Down</Text> */}
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={styles.leftContainer}
                  className="align-center mt-4 h-full min-[1540px]:items-end"
                  // dimenstions
                  // className="align-center mt-4 h-full min-[320px]:bg-green-200 min-[540px]:bg-orange-200 min-[720px]:bg-blue-600 min-[1540px]:items-center"
                >
                  <View style={styles.calendar}>
                    <Calendar />
                  </View>
                </View>
              </View>
            ) : (
              <View className="h-4 w-full">
                <View className="ml-4 mr-4 flex h-full items-end justify-center">
                  <TouchableOpacity onPress={() => changeCalendarView()}>
                    <View className="mb-2 flex flex-row items-center justify-center">
                      <Text className="text-white">Calendar</Text>
                      <ChevronUpDown
                        width={24}
                        height={24}
                        fill="white"
                        color={'white'}
                      />
                      {/* <Text>Up/Down</Text> */}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* This might be the feed */}
        <ScrollView
          style={styles.center}
          showsVerticalScrollIndicator={false}
          className="border-l-2 border-r-2"
        >
          {articles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              category={article.category}
              description={article.description}
              image={article.imageUri}
            />
          ))}
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </ScrollView>

        {/* This is the right side - Might be menus in the future */}
        <View
          style={styles.right}
          className=" hidden min-[375px]:hidden sm:hidden md:hidden lg:block"
        >
          <View style={styles.rightContainer}>
            <View style={styles.communities} className="p-4">
              <Text className="text-white">Communities coming soon.</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  communities: {
    backgroundColor: 'rgb(26, 30, 38)',
    width: 350,
    height: 350,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 8,
  },
  mobileOptions: {
    ...Platform.select({
      ios: {
        display: 'none',
      },
    }),
  },
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgb(33, 37, 46)',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  navigation: {
    width: '100%',
    height: 'auto',
    borderColor: 'rgb(49, 51, 53)',
    // backgroundColor: 'red',

    ...Platform.select({
      ios: {
        height: 'auto',
      },
    }),
  },
  mainx: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '95%',
    // backgroundColor: 'purple',

    overflow: 'hidden',
    ...Platform.select({
      ios: {
        flexDirection: 'column',
      },
    }),
  },
  center: {
    overflow: 'scroll',
    flex: 1,
    height: '100%',
    borderColor: 'rgb(49, 51, 53)',
    // backgroundColor: 'pink',

    ...Platform.select({
      ios: {
        height: '100%',
      },
    }),
  },
  left: {
    flex: 1,
    // backgroundColor: 'yellow',
    overflow: 'hidden',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // mart

    width: '100%',
    // height: '100%',

    // ...Platform.select({
    //   ios: {
    //     maxHeight: 34,
    //   },
    // }),
  },
  right: {
    flex: 1,
    // backgroundColor: 'blue',

    overflow: 'hidden',

    ...Platform.select({
      ios: {
        display: 'none',
      },
    }),
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
    // backgroundColor: 'purple',
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    // backgroundColor: 'purple',
  },
  calendar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 400,
    // backgroundColor: 'red',
  },
})
