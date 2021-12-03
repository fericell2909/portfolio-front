import React , {ReactNode}  from "react";
import { RouteObject 
} from "react-router-dom";


export class  IRouter implements RouteObject {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
  
    constructor(caseSensitive: boolean = true,
        children: RouteObject[],
        element: ReactNode = null,
        index: boolean = true,
        path: string = '') {
        this.path = path;
        this.element = element;
    }
  }
