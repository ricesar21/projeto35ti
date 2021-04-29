import React from 'react';
import classes from './home.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'

const Home = () => {
    return (
        <>
            <body className={classes.body}>

                <div className={classes.principalPage}>

                    <nav className={classes.homeNavBar} style={{ paddingInline: 25 }}  >
                        <img className={classes.imgLogo} src={Logo} width="100" height="100" />
                        <Link to="/login"><button type="button" class className={classes.loginButton}>Entrar</button></Link>
                    </nav>

                    <div className={classes.initialSection}>
                        <h4 class="mt-5">Tá afim de assistir um filme de ação? ou quem sabe um filme clássico? até mesmo uma comédia?</h4>
                        <h5>Crie sua conta no Senac Retrô e assista filmes de graça!</h5>
                        <Link to="/register"><button type="button" className={classes.registerButton}>Criar conta</button></Link>
                    </div>

                </div>

                <hr class="container-fluid divisor p-2 bg-secundary mt-0 mb-0" />

                <div class="container-fluid mt-0" className={classes.secondSection}>
                    <h4>Aproveite filmes em seu navegador!</h4>
                    <h5>Filmes de todos os tipos em alta qualidade e atualizados!</h5>
                </div>

                <hr class="container-fluid divisor p-2 bg-secundary mt-0 mb-0" />

                <div class="container-fluid" className={classes.thirdSection}>
                    <h4>Assista em qualquer lugar e a qualquer hora</h4>
                    <h5>Temos nosso próprio aplicativo para celular para você assistir em qualquer lugar</h5>
                </div>

                <hr class="container-fluid divisor p-2 bg-secundary mt-0 mb-0" />

                <div class="container-fluid" className={classes.fourSection}>
                    <h4>Aplicativo Mobile</h4>
                    <h5>Baixe nosso aplicativo Mobile para obter vantagens!</h5>
                </div>

                <hr class="container-fluid divisor p-2 bg-secundary mt-0 mb-0" />

                <div class="container-fluid row" className={classes.informationSection}>
                    <div class="row text-center text-white">
                        <div class="col-sm-4">
                            <p>Tire suas dúvidas</p>
                            <p>Entre em contato</p>
                            <p>Redes Sociais</p>
                        </div>
                        <div class="col-sm-4">
                            <p>Termos de uso</p>
                            <p>Perguntas frequentes</p>
                            <p>Formas de assistir</p>
                        </div>
                        <div class="col-sm-4">
                            <p>Conta</p>
                            <p>Privacidade</p>
                            <p>Aplicativos</p>
                        </div>
                    </div>
                </div>

            </body>
        </>
    );
}

export default Home;