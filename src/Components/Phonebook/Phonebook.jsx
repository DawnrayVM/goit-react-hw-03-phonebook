import { Component } from 'react';
import styles from './Phonebook.module.css';

class Phonebook extends Component {
    state = {
        name: '',
        number: '',
    };

    handleInputChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAddContact(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { number, name } = this.state;
        return (
            <>
                <h2 className={styles.title}>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit} className={styles.container}>
                    <label className={styles.formItem}>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleInputChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>
                    <label className={styles.formItem}>
                        Number:
                        <input
                            type="tel"
                            name="number"
                            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                            required
                            value={number}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button type="Submit" className={styles.phonebookBtn}>
                        Add contact
                    </button>
                </form>
            </>
        );
    }
}

export default Phonebook;
