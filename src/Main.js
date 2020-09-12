import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import FileUpload from './components/FileUpload'
import CanvasContainer from './components/CanvasContainer'
class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>

                    <Route exact path='/'>
                        {<FileUpload />
                        }
                    </Route>
                    <Route exact path='/results'>
                        {<CanvasContainer />
                        }
                    </Route>

                </Switch>
            </Router>
        )
    }
}
export default Main


