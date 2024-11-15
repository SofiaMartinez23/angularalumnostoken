import { Injectable } from "@angular/core";
import { Login } from "../models/login";
import { environment } from "../../environments/environment.development";
import axios from "axios";
import { Alumno } from "../models/alumno";

@Injectable()
export class ServiceAlumnos {
    public token: string;

    constructor() {
        this.token = "";
    }

    loginAlumnos(user: Login): Promise<any>{
        let json = JSON.stringify(user);
        let request = "api/auth/login";
        let url = environment.urlApiAlumnos + request;
        return axios.post(url, json, {
            headers: {
                "Content-type": "application/json" 
            } 
        })
    }

    getTablaAlumnos(): Promise<any>{
        let request = "api/alumnos/alumnostoken";
        let url = environment.urlApiAlumnos + request;
        console.log(this.token)
        return axios.get(url, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
        
    }

    postAlumnosNuevos(alumno: Alumno): Promise<any>{
        let request = "api/Alumnos/InsertAlumnoToken";
        let url = environment.urlApiAlumnos + request;
        return axios.post(url, alumno, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
    }


    findAlumno(idAlumno: string): Promise<any>{
        let request = "api/alumnos/findalumnotoken/"+ idAlumno;
        let url = environment.urlApiAlumnos + request;
        return axios.get(url, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
    }

    updateAlumno(alumno: Alumno): Promise<any>{
        let request = "api/alumnos/updatealumnotoken" ;
        let url = environment.urlApiAlumnos + request;
        return axios.put(url, alumno, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + this.token
            }
        })
    }

}
