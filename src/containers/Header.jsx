import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setAuthentication} from "../store/actions/actions";
import { Link } from 'react-router-dom'


class Header extends Component {

    handleLogged = () => {
        this.props.setAuthentication(!this.props.isAuth)
    }

    renderAuthLabel = () => {
        const authLabelConnexion = <Link className="nav-link" to="/login" onClick={this.handleLogged}>Connexion</Link>;
        const authLabelDeconnexion = <Link className="nav-link" to="/logout" onClick={this.handleLogged}>Déconnexion</Link>;

        return !this.props.isAuth ? authLabelConnexion : authLabelDeconnexion;
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor03"
                    aria-controls="navbarColor03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ressources">
                                Ressources
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {this.renderAuthLabel()}
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = store => {
    return {
        isAuth: store.rootAuthReducer.isAuth
    }
}

const mapDispatchToProps = {
    setAuthentication
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
