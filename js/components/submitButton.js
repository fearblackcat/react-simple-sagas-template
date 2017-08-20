/**
 * Created by russell on 8/12/2017.
 */
import PropTypes from 'prop-types'
import React from 'react'

const SubmitBtn = ({url, postdata, actions}) => {
    const handleSendClick = (e) => {
        e.preventDefault()
        actions.requestForAction(url, postdata)
    }

    return (
        <div className='btn btn--login btn--nav' onClick={handleSendClick}>Send</div>
    )
}

SubmitBtn.propTypes = {
    url: PropTypes.string.isRequired,
    postdata: PropTypes.string.isRequired,
}

export default SubmitBtn
