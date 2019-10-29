import React from 'react';
import ReactDOM from 'react-dom'
import TodoApp from "../../components/todoList/TodoApp";
import { shallow } from 'enzyme'

describe('Test TodoApp fonctionnement',  () => {

    it('render le composant App sans erreur avec Shallow', () => {
        const wrapper = shallow(<TodoApp/>)
    })

    it('Contient la chaine nouvelle tache avec Shallow', () => {
        const wrapper = shallow(<TodoApp/>)
        expect(wrapper.html()).toContain('Nouvelle tâche')
    })

    it('Possede 2 classes "row" Shallow', () => {
        const wrapper = shallow(<TodoApp/>)
        expect(wrapper.find('.row').length).toEqual(2)
    })

})