/**
 * Created by russell on 8/13/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const ShowErrorDialog = ({error_data, actions}) => {
    const handleHideDialog = (e) => {
        e.preventDefault()
        actions.HideErrorDialog()
    }

    return (
        <div className="errmodal">
            <div className="errpdialog">
                <h2> Error Message</h2>
                <form>
                    <p>
                        {error_data}
                    </p>
                </form>
                <button className="error-dismiss" onClick={handleHideDialog}> Close </button>
            </div>
        </div>
    )
}

ShowErrorDialog.propTypes = {
    error_data: PropTypes.string.isRequired
}

export default ShowErrorDialog