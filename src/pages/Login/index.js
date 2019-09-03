import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Login = () => (
    <div class="content">
        <div className="content__container">
            <h1>Wunari</h1>
            <p>Crie da maneira mais simples possível suas enquetes em menos de 1 minuto. Use em seu trabalho, em sua escola, em
            uma palestra ou até mesmo para surpreender seu público.</p>
            <Link to="/main"><button class="btn btn-block btn-green" type="submit">Criar Poll</button></Link>
            <h4>Acessar EasyPoll</h4>
            <br/>
            <form action="">
                <input class="form-control" type="email" name="email" placeholder="Digite seu e-mail" autoComplete="off" required/>
                <input class="form-control" type="password" name="password" placeholder="Digite sua senha" required/>
                <button class="btn btn-block btn-green" type="submit">Entrar</button>
            </form>
            <Link to="/main"><button class="forgot__password" href="#">Esqueci minha senha</button></Link>
        </div>
    </div>
);

export default Login;