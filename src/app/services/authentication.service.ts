import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  constructor(private http:HttpClient) { }
  apiss = 'http://localhost:8000/api/';

  login(matricule:string, password:string) {
   return this.http.post(this.apiss+'login', {
      matricule:matricule,
      password:password
    });
  }

  //user info

  user() {
    const user:any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer $(token)`,
    });
    return this.http.get(this.apiss+'user',{headers:headers});
  }


admin() {
 
    const userlist:any = localStorage.getItem('userlist');
    const userObj = JSON.parse(userlist);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.apiss+'getDemandes');
  }
getdemande() {
 
    const userrole:any = localStorage.getItem('userrole');
    const userObj = JSON.parse(userrole);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.apiss+'getDemandes');
  }
 
  //select unite infrastructure 
  uniteselect() {
 
    const uniteselect:any = localStorage.getItem('uniteselect');
    const userObj = JSON.parse(uniteselect);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.apiss+'getUnite');
  }

  
  logout(){
    const user:any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer $(token)`,
    });

     return this.http.post(this.apiss+'logout', {headers:headers})

  }


  //register 
  register(name:string, email:string, matricule:number, password:string, role:string,structure_type:string, structure_id:string) {
      
      const data={
        name:name,
        email:email,
        matricule:matricule,
        password:password,
        role:role,
        structure_type:structure_type,
        structure_id:structure_id,

      }
      return this.http.post(this.apiss+'register', data);
  }


  //accepter refuser la demande de compte:

  modifyStatus(id: number) {
    return this.http.put(this.apiss+`acceptDemandeCompte/${id}`, {} );
  }
  modifyStatus2(id: number) {
    return this.http.put(this.apiss+`refuseDemandeCompte/${id}`, {} );
  }

  centre() {
 
    const centredata:any = localStorage.getItem('centredata');
    const userObj = JSON.parse(centredata);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.apiss+'infrastructureCentre');
  }

  localité() {
 
    const localitedata:any = localStorage.getItem('localitedata');
    const userObj = JSON.parse(localitedata);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.apiss+'infrastructureLocalite');
  }

  unite() {
    
 
      const unitedata:any = localStorage.getItem('unitedata');
      const userObj = JSON.parse(unitedata);
  
      // const token = userObj.token;
      // const headers = new HttpHeaders({
      //   Authorization: `Bearer $(token)`,
      // });,{headers:headers}
      return this.http.get(this.apiss+'infrastructureUnite');
    }
  
  
}
