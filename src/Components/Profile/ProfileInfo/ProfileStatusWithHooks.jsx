import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () =>{
        setStatus(props.status)
    }, [props.status]);

    let activateEditMode = () =>{
        setEditMode(true)
    };

    let deactivateEditMode = () =>{
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

        return (
            <div>
                {!editMode &&
                    <div>
                        <span onClick={activateEditMode}>{props.status ?props.status : "hello dogs"}</span>
                    </div>
                }
                { editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                }
            </div>
        );
};


export default ProfileStatusWithHooks;