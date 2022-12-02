import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import authReducer from './redux/auth/reducer';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['navigation'],
};

const authPersistConfig = {
    key: 'auth',
    storage: storage,
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
