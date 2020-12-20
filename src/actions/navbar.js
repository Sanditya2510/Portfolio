const toggleNavbar = () => {
    return (dispatch, getState) => {
        return dispatch({ type: 'TOGGLE_NAVBAR', payload: !getState().navbar.isNavbarOpen })
    }
}

export default toggleNavbar