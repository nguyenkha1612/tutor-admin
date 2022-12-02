import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createSagaMiddleware from 'redux-saga';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';

import IndexReducer from './index-reducer';
import IndexSagas from './index-sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(IndexReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(IndexSagas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </PersistGate>
    </Provider>,
);
