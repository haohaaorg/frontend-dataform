import React from 'react'
import loadable from '@loadable/component';
import Loading from '../components/Loading';


export const LoadableComponent = (component?: any) => {
           
       return loadable(() => component, {
             fallback: <Loading style={{ background: 'none', height: 'calc(100vh - 173px)' }} />
       })
}