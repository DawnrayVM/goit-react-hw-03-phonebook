import { Component } from 'react';
import { v4 } from 'uuid';
import Phonebook from './Components/Phonebook';
import Contacts from './Components/Contacts';
import ContactsFilter from './Components/ContactsFilter';

class App extends Component {
    state = {
        contacts: [],
        filter: '',
    };
    componentDidMount() {
        if (JSON.parse(localStorage.getItem('contacts'))) {
            this.setState({
                contacts: JSON.parse(localStorage.getItem('contacts')),
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem(
                'contacts',
                JSON.stringify(this.state.contacts),
            );
        }
    }
    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    handleAddContact = data => {
        const newContact = {
            id: v4(),
            name: data.name,
            number: data.number,
        };
        this.setState(prevState => {
            return {
                contacts: Object.values(
                    prevState.contacts
                        .map(({ name }) => name)
                        .includes(newContact.name)
                        ? (alert('Contact with such name already exists'),
                          [...prevState.contacts])
                        : [...prevState.contacts, newContact],
                ),
            };
        });
    };

    handleFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    render() {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();
        const visibleContacts = contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );

        return (
            <main>
                <Phonebook
                    title="Phonebook"
                    onAddContact={this.handleAddContact}
                />
                <ContactsFilter
                    contacts={contacts}
                    filterValue={filter}
                    onChange={this.handleFilter}
                />
                <Contacts
                    contacts={visibleContacts}
                    onDeleteContact={this.deleteContact}
                />
            </main>
        );
    }
}

export default App;
