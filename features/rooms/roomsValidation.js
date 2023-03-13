export const validateRoomForm = (values) => {
    const errors = {};
    const { firstName, lastName, email, occupants} = values;

    const regNum = /^\d+$/;
    const regAlpha = /^[A-Za-z]+$/

    if (!firstName) {
        errors.firstName = 'Required';
    } else if (!regAlpha) {
        errors.firstName = 'Only letters accepted'
    }

    if (!occupants) {
        errors.occupants = 'Required';
    } else if (!regNum) {
        errors.occupants = 'Only Numbers Accepted'
    }


    if (!lastName) {
        errors.lastName = 'Required';
    }

    if (!email) {
        errors.email = 'Required'
    } else if (!email.includes('@')) {
        errors.email = 'Please enter valid email'
    }

    return errors;
}

