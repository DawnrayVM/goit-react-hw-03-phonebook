import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    filterForm: {
        fontFamily: 'Roboto',
        width: 370,
        marginTop: 10,
        padding: '15px 10px',
        border: '1px solid rgba(225, 225, 225, 10)',
        borderRadius: 5,
        boxShadow: '3px 3px 5px 0px rgba(225, 225, 225, 10)',
    },
    filterInput: {
        fontSize: 20,
        width: 360,
    },
});

const ContactsFilter = ({ filterValue, onChange, contacts }) => {
    const classes = useStyles();
    return (
        contacts.length > 0 && (
            <form className={classes.filterForm}>
                <label>
                    <input
                        type="text"
                        value={filterValue}
                        onChange={onChange}
                        className={classes.filterInput}
                    />
                </label>
            </form>
        )
    );
};

export default ContactsFilter;
