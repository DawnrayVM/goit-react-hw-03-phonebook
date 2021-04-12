import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    contactsList: {
        flexDirection: 'column',
        fontFamily: 'Roboto',
        fontSize: 20,
        width: 370,
        marginTop: 10,
        padding: '10px 10px',
        border: '1px solid rgba(225, 225, 225, 10)',
        borderRadius: 5,
        boxShadow: '3px 3px 5px 0px rgba(225, 225, 225, 10)',
    },
    deleteBtn: {
        display: 'block',
        width: 100,
        borderStyle: 'none',
        fontWeight: 500,
        fontSize: 16,
        color: 'white',
        textDecoration: 'none',
        padding: '5px 10px',
        borderRadius: 3,
        background: 'rgb(64,199,129)',
        boxShadow: '0 -3px rgb(53,167,110) inset',
        transition: '0.2s',
        '&:hover': { background: 'rgb(53, 167, 110)' },
        '&:active': {
            background: 'rgb(33,147,90)',
            boxShadow: '0 3px rgb(33,147,90) inset',
        },
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        '&:last-child': { marginBottom: 0 },
    },
    listText: {
        margin: 0,
    },
});

const Contacts = ({ contacts, onDeleteContact }) => {
    const classes = useStyles();
    const contactItem = contacts.map(({ name, id, number }) => (
        <li key={id} className={classes.listItem}>
            <p className={classes.listText}>
                {name}
                {': '}
                {number}
            </p>

            <button
                type="button"
                onClick={() => onDeleteContact(id)}
                className={classes.deleteBtn}
            >
                Delete
            </button>
        </li>
    ));
    return (
        contacts.length > 0 && (
            <ul className={classes.contactsList}>{contactItem}</ul>
        )
    );
};
export default Contacts;
