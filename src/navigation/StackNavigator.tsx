import React, {useEffect, useMemo, useReducer} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from '../navigation/DrawerNavigator';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import Profile from '../screens/Profile/Profile';
import WishList from '../screens/WishList/WishList';
import Cart from '../screens/Cart';
import Orders from '../screens/Orders/Orders';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Logout from '../screens/Logout';
import ProductImages from '../screens/ProductImages';
import LoginToContinue from '../screens/Modals/LoginToContinue';
import SelectColor from '../screens/Modals/SelectColor';
import ProductAddedToCart from '../screens/Modals/ProductAddedToCart';
import CartButton from '../components/TopBar/CartButton';
import WishListButton from '../components/TopBar/WishListButton';
import {MODAL_ROUTES, STACK_ROUTES} from '../constants/routes';
import AuthReducer, {authState} from '../store/AuthReducer';
import {BLUE, FONT_FAMILY, USER_TOKEN} from '../constants';
import AuthContext from '../store/AuthContext';
import AuthActions from '../store/AuthActions';
import {LOG_IN, LOG_OUT, RESTORE_TOKEN} from '../store/constants';
import CartLogin from '../screens/CartLogin/CartLogin';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const [state, dispatch] = useReducer(AuthReducer, authState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token;

      try {
        token = await AsyncStorage.getItem(USER_TOKEN);
      } catch (error) {
        console.error(error);
      }

      dispatch({type: RESTORE_TOKEN, payload: {token}});
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      state,
      actions: {
        logIn: async (email: string, password: string) => {
          const userToken = await AuthActions.logIn(email, password);
          await AsyncStorage.setItem(USER_TOKEN, JSON.stringify(userToken));

          dispatch({type: LOG_IN, payload: {userToken}});
        },

        logOut: async () => {
          await AsyncStorage.removeItem(USER_TOKEN);

          dispatch({type: LOG_OUT});
        },

        signUp: async (
          email: string,
          password: string,
          passwordConfirmation: string,
        ) => {
          await AuthActions.signUp(email, password, passwordConfirmation);
          const userToken = await AuthActions.logIn(email, password);
          await AsyncStorage.setItem(USER_TOKEN, JSON.stringify(userToken));

          dispatch({type: LOG_IN, payload: {userToken}});
        },
      },
    }),
    [state],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator
        initialRouteName={STACK_ROUTES.MAIN}
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
        }}>
        <Stack.Group>
          <Stack.Screen
            name={STACK_ROUTES.MAIN}
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={STACK_ROUTES.PRODUCT}
            component={ProductDetails}
            options={{
              title: '',
              headerRight: () => (
                <>
                  <WishListButton />
                  <CartButton />
                </>
              ),
            }}
          />
          <Stack.Screen
            name={STACK_ROUTES.PRODUCT_IMAGES}
            component={ProductImages}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name={STACK_ROUTES.PROFILE}
            component={Profile}
            options={{
              title: 'My Profile',
              headerRight: () => <CartButton />,
            }}
          />
          <Stack.Screen
            name={STACK_ROUTES.WISH_LIST}
            component={WishList}
            options={{
              title: 'My Wish List',
              headerRight: () => <CartButton />,
            }}
          />
          {!state.userToken ? (
            <Stack.Screen
              name={STACK_ROUTES.CART}
              component={CartLogin}
              options={{
                title: 'My Cart',
              }}
            />
          ) : (
            <Stack.Screen
              name={STACK_ROUTES.CART}
              component={Cart}
              options={{
                title: 'My Cart',
              }}
            />
          )}
          <Stack.Screen
            name={STACK_ROUTES.ORDERS}
            component={Orders}
            options={{
              title: 'My Orders',
              headerRight: () => <CartButton />,
            }}
          />
          {!state.userToken ? (
            <>
              <Stack.Screen
                name={STACK_ROUTES.SIGN_UP}
                component={SignUp}
                options={{
                  title: '',
                }}
              />
              <Stack.Screen
                name={STACK_ROUTES.LOGIN}
                component={Login}
                options={{
                  title: '',
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name={STACK_ROUTES.LOGOUT}
                component={Logout}
                options={{
                  title: '',
                }}
              />
            </>
          )}
        </Stack.Group>

        <Stack.Group screenOptions={{presentation: 'modal'}}>
          {!state.userToken ? (
            <Stack.Screen
              name={MODAL_ROUTES.LOGIN}
              component={LoginToContinue}
              options={{title: 'Login To Continue'}}
            />
          ) : (
            <>
              <Stack.Screen
                name={MODAL_ROUTES.SELECT_COLOR}
                component={SelectColor}
                options={{title: 'Select Color'}}
              />
              <Stack.Screen
                name={MODAL_ROUTES.PRODUCT_ADDED_TO_CART}
                component={ProductAddedToCart}
                options={{title: 'Product Added To Cart'}}
              />
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default StackNavigator;
