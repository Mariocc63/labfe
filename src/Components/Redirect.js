import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class Redirect extends Component {
    handleClick = () => {
        this.props.history.push("/Components/AnimeForm.js");
    }

    render() {
        return (
          <Grid>
            <Row className="text-center">          
              <Col md={12} xs={12}>
                <div className="input-group">
                  <span className="input-group-btn">
                    <button onClick={this.handleClick} type="button"></button>
                  </span>
                </div>
              </Col>
            </Row>
          </Grid>
        );
    }
}

export default withRouter(Redirect);