
import React, { Component, PropTypes } from 'react';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { Table } from 'react-bootstrap';


class MainPage extends Component {

    render() {
        return (
            <div>
                <Grid fluid={ true }
                      style={ {    marginTop: '50px'} }
                      params={ this.props.params }>
                    <Row params={ this.props.params }>
                        <Col xs={ 3 }
                             md={ 3 }
                             sm={ 3 }
                             lg={ 3 }
                             className="hidden-xs"
                             params={ this.props.params }></Col>
                        <Col xs={ 12 }
                             md={ 12 }
                             sm={ 12 }
                             lg={ 6 }
                             params={ this.props.params }>
                            <Panel header="GitHub Repos"
                                   bsStyle="primary"
                                   params={ this.props.params }>
                                <form params={ this.props.params }>
                                    <Grid fluid={ true } params={ this.props.params }>
                                        <Row params={ this.props.params }>
                                            <Col xs={ 8 }
                                                 md={ 8 }
                                                 sm={ 8 }
                                                 lg={ 8 }
                                                 params={ this.props.params }>
                                                <Input type="text"
                                                       hasFeedback={ true }
                                                       placeholder="Owner name"
                                                       params={ this.props.params }></Input>
                                            </Col>
                                            <Col xs={ 4 }
                                                 md={ 4 }
                                                 sm={ 4 }
                                                 lg={ 4 }
                                                 params={ this.props.params }>
                                                <Button bsStyle="primary" params={ this.props.params }>
                                                    <span params={ this.props.params }>Fetch data</span>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </form>
                                <Table striped={ true }
                                       bordered={ false }
                                       condensed={ false }
                                       hover={ true }
                                       params={ this.props.params }>
                                    <thead params={ this.props.params }>
                                        <tr params={ this.props.params }>
                                            <th params={ this.props.params }>
                                                <span params={ this.props.params }>Repo name</span>
                                            </th>
                                            <th params={ this.props.params }>
                                                <span params={ this.props.params }>Stars</span>
                                            </th>
                                            <th params={ this.props.params }>
                                                <span params={ this.props.params }>Open Issues</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody params={ this.props.params }>
                                        <tr params={ this.props.params }>
                                            <td params={ this.props.params }>
                                                <span params={ this.props.params }>name</span>
                                            </td>
                                            <td params={ this.props.params }>
                                                <span params={ this.props.params }>stargazers_count</span>
                                            </td>
                                            <td params={ this.props.params }>
                                                <span params={ this.props.params }>open_issues_count</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Panel>
                        </Col>
                        <Col xs={ 3 }
                             md={ 3 }
                             sm={ 3 }
                             lg={ 3 }
                             className="hidden-xs"
                             params={ this.props.params }></Col>
                    </Row>
                </Grid>
            </div>
            );
    }
}

export default MainPage;

