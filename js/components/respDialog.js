/**
 * Created by russell on 8/12/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const ShowResponseDialog = ({response_data, actions}) => {
    const handleHideDialog = (e) => {
        e.preventDefault()
        actions.HideResponseDialog()
    }

    response_data = response_data.replace(/\\n/g,"\n\t\t")

    return (
        <div className="resmodal">
            <div className="respdialog">
                <h2> Test Return Data </h2>
                <form className="responseform">
                    <textarea className="responseArea" value={response_data} readOnly={true}/>
                </form>
                <button className="response-dismiss" onClick={handleHideDialog}> Close </button>
            </div>
        </div>
    )
}

ShowResponseDialog.propTypes = {
    response_data: PropTypes.string.isRequired
}

export default ShowResponseDialog
