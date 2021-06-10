import React from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import globoTickets from './TicketsDB';

const Tickets = ({navigation}) => {
  const TicketItem = ({item}) => {
    return (
      <View style={styles.tickets}>
        <View>
          <Image source={item.image} style={styles.image} />
        </View>
        <View>
          <Text style={styles.tickettitle}>{item.event}</Text>
          <Text style={styles.ticketshortdescription}>
            {item.shortDescription}
          </Text>
          <Text
            style={styles.ticketdescription}
            numberOfLines={2}
            ellipsizeMode="tail">
            {item.description}
          </Text>
          <Text style={styles.ticketshortdescription}>Price: {item.price}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Purchase', {eventId: item.eventId})
            }
            style={styles.button}>
            <Text style={styles.ticketbutton}>Get Tickets</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={globoTickets}
        renderItem={TicketItem}
        keyExtractor={item => item.eventId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  tickets: {
    flexDirection: 'column',
  },
  image: {
    height: 180,
    width: '100%',
  },
  tickettitle: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ticketshortdescription: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
  },
  ticketdescription: {
    fontFamily: 'Ubuntu-Light',
    fontWeight: '600',
    padding: 15,
  },
  ticketbutton: {
    fontFamily: 'Ubuntu-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 5,
  },
});

export default Tickets;
