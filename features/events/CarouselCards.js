import { View } from "react-native"
import { Carousel, Pagination } from 'react-native-snap-carousel'
import EventsCarousel, { SLIDER_WIDTH, ITEM_WIDTH } from './EventsCarousel'
import { useSelector } from "react-redux";
import { useRef, useState } from "react";


const CarouselCards = ({ navigation }) => {
    const isCarousel = useRef(null);
    const data = useSelector((state) => state.events.eventsArray);
    const [index, setIndex] = useState(0);

    return (
        <View>
            <Carousel
                layout={Platform.OS === 'ios' ? 'stack' : 'tinder'}
                layoutCardOffset={Platform.OS === 'ios' ? 18 : 9}
                ref={isCarousel}
                data={data}
                renderItem={({ item }) => <EventsCarousel navigation={navigation} item={item}/>}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                onSnapToItem={(index) => {setIndex(index) }}
                useScrollView={true}
                navigation={navigation}
                loop={true}
                autoplay={true}
                autoplayInterval={10000}
                inactiveSlideOpacity={0}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
                containerStyle={{marginBottom: 70}}
            />
        </View>
    )
}


export default CarouselCards;