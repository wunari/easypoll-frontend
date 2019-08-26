import React from 'react';

import './styles.scss';

const Login = () => (
    <body>
        <div className="content">
            <h1>Wunari</h1>
            <p>Crie da maneira mais simples possível suas enquetes em menos de 1 minuto. Use em seu trabalho, em sua escola, em
            uma palestra ou até mesmo para surpreender seu público.</p>
            <button class="btn btn-block" type="submit">Criar Poll</button>
            <h4>Acessar EasyPoll</h4>
            <br/>
            <form action="">
                <input class="form-control" type="email" name="email" placeholder="Digite seu e-mail" autoComplete="off" required/>
                <input class="form-control" type="password" name="password" placeholder="Digite sua senha" required/>
                <button class="btn btn-block" type="submit">Entrar</button>
            </form>
            <a href="#">Esqueci minha senha</a>
        </div>
    </body>
);

export default Login;