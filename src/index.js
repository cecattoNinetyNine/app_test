import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/*Recebe como primeiro argumenot o JSX que deve ser renderizado. O segundo argumento especifica
onde a aplicação deve ser exibida. Ver em public/index.html*/
/*<App /> é um exemplo de React Component*/
ReactDOM.render(
	<React.StrictMode>

  	</React.StrictMode>,
	document.getElementById('root')
);

/*Com isso a página não precisa mais recarregar a cada mudança no código.
Uma boa solução para debugging*/
if(module.hot)
{
	module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
