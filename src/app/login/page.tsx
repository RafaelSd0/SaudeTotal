import { Suspense } from 'react';
import LoginForm from './LoginForm';

function LoginPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <LoginForm/>
        </Suspense>
    );
}

export default LoginPage;