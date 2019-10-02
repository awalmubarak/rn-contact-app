
import {NavigationActions} from 'react-navigation'

let navigator;

const setNavigator = (ref)=>{
    navigator = ref;
}

const navigate = (screen, params)=>{
    navigator.dispach(
        NavigationActions.navigate(
            screen,params
        )
    )
}

export default {setNavigator, navigate}