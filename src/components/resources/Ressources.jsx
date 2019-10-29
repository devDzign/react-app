import React, {Component} from 'react';
import {addResources} from "../../store/actions/actions";
import {connect} from "react-redux";
import { getIntegerList, getResourceContainNumberOneList, getResourceNumberPrimaryList, getResourceNumberPrimaryContainNumberOneList } from "./selectors/index"

class Ressources extends Component {

    renderResources = resources => {

        return resources.map(resource => <li key={resource}>{resource}</li>)


    }

    render() {
        return (
            <>
                <h1>Test Selecteurs</h1>
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-outline-dark btn-raised"
                            onClick={() => this.props.addResources()}
                        >
                            Add
                        </button>
                    </div>
                    <div className="col">
                        Entier
                        <ul>
                            {this.renderResources(this.props.integerList)}
                        </ul>
                    </div>
                    <div className="col">
                        Entier priemier contenants le chiffre "1"
                        <ul>
                            {this.renderResources(this.props.resourceContainsOne)}
                        </ul>
                    </div>
                    <div className="col">
                        Entier priemier
                        <ul>
                            { this.renderResources(this.props.primaryNumberList)}
                        </ul>
                    </div>
                    <div className="col">
                        Entier priemier contenants le chiffre "1"
                        <ul>
                            { this.renderResources(this.props.primaryNumberContainOneList)}
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = store => {
    return {
        integerList: getIntegerList(store),
        resourceContainsOne: getResourceContainNumberOneList(store),
        primaryNumberList: getResourceNumberPrimaryList(store),
        primaryNumberContainOneList: getResourceNumberPrimaryContainNumberOneList(store)
    }
}

const mapDispatchToProps = {
    addResources
};


export default connect(mapStateToProps, mapDispatchToProps)(Ressources);