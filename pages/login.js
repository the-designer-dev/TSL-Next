import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginBox from '../components/loginBox';
import StyledContainer from '../styledComponents/styledContainer';
import {useRouter} from 'next/router';
function Login(props) {
    const router = useRouter();
    const user =useSelector(state => state.user.user)
    useEffect(() => {
        if(Object.keys(user).length >0  && user.role.type === 'customer'){
        router.push('/')}
        else if( Object.keys(user).length >0  && user.role.type === 'vendor'){
            router.push('/vendor/addhotel')
        }
        else if( Object.keys(user).length >0  && user.role.type === 'admin'){
            router.push('/admin')
        }

    },[user])
    return (
        <StyledContainer square={true} sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
         <LoginBox/>
        </StyledContainer>
    );
}

export default Login;