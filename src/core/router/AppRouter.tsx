import {
  BrowserRouter as Router,  useRoutes 
} from "react-router-dom";

import {IRouter} from '../clases/IRouter';

import publicRoutes from '../../modules/Public/router/AppRouter';

import CoreRoutes from '../router/CoreRouter';

const Routers = () => {

  let a:any = [];
  publicRoutes.forEach(function(element,index) {
    a[index] = new IRouter(true,[],element.element,true,element.path);
  });

  CoreRoutes.forEach(function(element,index) {

    a[a.length + index + 1 ] = new IRouter(true,[],element.element,true,element.path);
  });

  
  return useRoutes(a);
}



const AppRouter = () => {
    return (
      <Router >
          <Routers />
        </Router>
      );
}


export default AppRouter;