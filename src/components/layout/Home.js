import React, {Component} from 'react'
import { Posts, MapNavigation, Account } from '../containers'


class Home extends Component {
    render() {
        return (
          <div>

            <header id="header" style={{padding:0}}>
              <div className="inner">
                    <MapNavigation/>
              </div>
            </header>

            <div id="main">
              <div className="row">
                <div className="8u 12u$(small)">
                      <Posts/>
                  </div>

                  <div className="4u 12u$(small)">
                      <Account/>
                    </div>

                </div>

            </div>

        </div>
        )
    }
}

export default Home

/*
<div className="container">
    <div className="row">

        <div className="col-md-3">
          <MapNavigation/>
        </div>

        <div className="col-md-6">
          <Posts/>
        </div>

        <div className="col-md-3">
        <Account/>
        </div>

    </div>
</div>*/
