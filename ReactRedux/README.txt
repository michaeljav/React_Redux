10. axios to do request
npm i axios


9.Middleware: forma que tiene para extenderse
 funcionas con funcionanes asincronas.
--Redux Thunk  : gestiona peticions a api 
npm i redux-thunk


8.Hooks

7.conectar los componentes para opder usar el store en  los componentes: ejemplo cantidadPokemon

//Para conectar los componentes
import {connect} from 'react-redux';


funcion currificada



6.PARA DEPURAR REDUX EN DESARROLLO 
EXTENSION DE REDUX EN CHROME.
-REDUX DEVTOOLS

DEBE DE FUNCIONAR CON OTRA  LIBRARIA  EN EL PROJECTO.
https://github.com/zalmoxisus/redux-devtools-extension
1.3: USE REDUX-DEVTOOLS-EXTENSION PACKAGE FROM NPM
npm install --save redux-devtools-extension

Y PARA HACERLO FUNCIONA EN EL STORE.JS
agregar un middleware in el store.
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducers, composeWithDevTools());



5. npm i jquery
4. install redux and redux-react para conectar redux con react
 npm i redux react-redux
3. install bootstrap
npm i bootstrap

2.change to new folder and run  : npm start

1.Creando proyecto de react
npx create-react-app practica-redux-react