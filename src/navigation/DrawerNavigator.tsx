import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../screens/Main/Main';
import CartButton from '../components/TopBar/CartButton';
import {BLUE, FONT_FAMILY} from '../constants';
import {DRAWER_ROUTES} from '../constants/routes';
import CustomDrawerContent from '../components/CustomDrawerContent/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      backBehavior="initialRoute"
      screenOptions={{
        headerStyle: {
          backgroundColor: BLUE,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: FONT_FAMILY,
          fontSize: 20,
        },
      }}
      drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen
        name={DRAWER_ROUTES.MAIN}
        component={Main}
        options={{
          title: 'Ecommerse Store',
          headerRight: () => <CartButton />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
