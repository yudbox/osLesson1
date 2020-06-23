import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar'
import Chessboard from './components/Chessboard/Chessboard'
import CatalogContainer from './components/Catalog/CatalogContainer'
import GoodsItemContainer from './components/GoodsItem/GoodsItemContainer'
import PrivatRoomContainer from './components/PrivatRoom/PrivatRoomContainer'


const App = () => {
  return (
    <BrowserRouter>
      <div className="body-container">
        <Sidebar />
        <div className="main-content">
          <Route path="/chessboard" render={() => <Chessboard />} />
          <Route path="/catalog" render={() => <CatalogContainer />} />
          <Route path="/goodsitem/:goodsId" render={() => <GoodsItemContainer />} />
          <Route path="/privatroom" render={() => <PrivatRoomContainer />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
