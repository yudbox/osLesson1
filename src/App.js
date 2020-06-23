import React from 'react';
import './App.css';
import { Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Chessboard from './components/Chessboard/Chessboard'
import CatalogContainer from './components/Catalog/CatalogContainer'
import GoodsItemContainer from './components/GoodsItem/GoodsItemContainer'
import PrivatRoomContainer from './components/PrivatRoom/PrivatRoomContainer'
import { Provider } from 'react-redux';
import { compose } from 'redux'


const App = () => {
  return (
    <div className="body-container">
      <Sidebar />
      <div className="main-content">
        <Route path="/chessboard" render={() => <Chessboard />} />
        <Route path="/catalog" render={() => <CatalogContainer />} />
        <Route path="/goodsitem/:goodsId" render={() => <GoodsItemContainer />} />
        <Route path="/privatroom" render={() => <PrivatRoomContainer />} />
      </div>
    </div>
  )
}




const AppContainer = (props) => {
  return <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={props.store}>
      <App />
    </Provider>
  </HashRouter>
}

export default AppContainer;
