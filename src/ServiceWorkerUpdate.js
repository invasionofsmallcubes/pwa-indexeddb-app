import React from 'react'

function ServiceWorkerUpdate(props) {
    return (<div>
        {props.isUpdateAvailable && (<div>
            A new version of this app is available!
              <button type="button" onClick={props.updateAssets}>Update now</button>
        </div>)}
    </div>);
}

export default ServiceWorkerUpdate