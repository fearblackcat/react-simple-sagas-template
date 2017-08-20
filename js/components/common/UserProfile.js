/**
 * Created by russell on 8/9/2017.
 */
import React from 'react'

const userprofile = ({userinfo}) => {
    return (
        <div className="container-fluid well span6">
            <div className="row-fluid">
                <div className="span2" >
                    <img src="assets/user.jpeg" className="img-circle" />
                </div>

                <div className="span8">
                    <h6>{userinfo}</h6>
                </div>
            </div>
        </div>
    )
}

export default userprofile