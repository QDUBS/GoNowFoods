import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, View, Text, useWindowDimensions} from 'react-native';
import MapView from 'react-native-maps';
import {useOrderContext} from '../../../context/OrderContext';
import styles from './styles';
import {OrderStatuses} from '../../../constants/order_statuses';

const OrderLiveUpdateScreen = ({id}) => {
  const [order, setOrder] = useState(null);
  const [courier, setCourier] = useState(null);
  const {getOrder} = useOrderContext();
  const {width, height} = useWindowDimensions();

  const mapRef = useRef(null);

  const getCourier = () => {
    // Query the courier table and await a response
    // setCourier(courier);
  };

  const getOrderStatus = status => {
    if (status === OrderStatuses.NEW) {
      return `INCOMING ORDER: ${status}`;
    } else if (status === OrderStatuses.READY_FOR_PICKUP) {
      return `PREPARING ORDER: ${status}`;
    } else if (status === OrderStatuses.ACCEPTED) {
      return `ORDER ACCEPTED: ${status}`;
    } else if (status === OrderStatuses.PICKED_UP) {
      return `ORDER PICKED UP: ${status}`;
    } else if (status === OrderStatuses.COMPLETED) {
      return `ORDER DELIVERY COMPLETE: ${status}`;
    } else if (status === OrderStatuses.CANCELLED) {
      return `ORDER CANCELLED: ${status}`;
    }
  };

  useEffect(() => {
    const fetchOrder = async () => {
      const order = await getOrder(id);
      setOrder(order);
    };
    fetchOrder();
  }, [id]);

  useEffect(() => {
    if (order?.courier_id) {
      getCourier();
    }
  }, [order]);

  useEffect(() => {
    if (courier?.address?.latitude && courier?.address?.longitude) {
      mapRef.current.animateToRegion({
        latitude: courier?.address?.latitude,
        longitude: courier?.address?.longitude,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      });
    }
  }, [courier?.address?.latitude, courier?.address?.longitude]);

  if (!order) {
    return <ActivityIndicator color={'black'} />;
  }

  return (
    <View>
      {order.status && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{getOrderStatus(order.status)}</Text>
        </View>
      )}

      <MapView style={{width: width, height: height}} ref={mapRef}>
        {courier?.address?.latitude && (
          <Marker
            title={`${courier?.first_name} ${courier?.last_name}`}
            description={`${courier?.first_name} ${courier?.last_name}`}
            coordinate={{
              latitude: courier?.address?.latitude,
              longitude: courier?.address?.longitude,
            }}>
            <View
              style={{
                backgroundColor: 'green',
                padding: 5,
                borderRadius: 25,
              }}>
              <FontAwesome5 name="motorcycle" size={25} color="white" />
            </View>
          </Marker>
        )}
      </MapView>
    </View>
  );
};

export default OrderLiveUpdateScreen;
