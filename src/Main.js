import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import FileUpload from './components/FileUpload'
import CanvasContainer from './components/CanvasContainer'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: ''
        }
    }
    onChange = (md) => {
        this.setState({ markdown: md })
    }
    render() {
        const { markdown } = this.state;
        return (
            <Router>
                <Switch>

                    <Route exact path='/'>
                        {<FileUpload markdown={markdown} onChange={this.onChange} />
                        }
                    </Route>
                    <Route exact path='/results'>
                        {<CanvasContainer markdown={markdown} />
                        }
                    </Route>

                </Switch>
            </Router>
        )
    }
}
export default Main


