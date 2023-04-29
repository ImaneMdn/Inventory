import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  constructor(private http:HttpClient) { }
  selectedFilterValue = 'http://localhost:8000/api/';

  login(matricule:string, password:string) {
   return this.http.post(this.selectedFilterValue+'login', {
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
    return this.http.get(this.selectedFilterValue+'user',{headers:headers});
  }


admin() {
 
    const userlist:any = localStorage.getItem('userlist');
    const userObj = JSON.parse(userlist);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.selectedFilterValue+'getDemandes');
  }
getdemande() {
 
    const userrole:any = localStorage.getItem('userrole');
    const userObj = JSON.parse(userrole);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.selectedFilterValue+'getDemandes');
  }
 
  //select user infrastructure 
  uniteselect() {
 
    const uniteselect:any = localStorage.getItem('uniteselect');
    const userObj = JSON.parse(uniteselect);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.selectedFilterValue+'getDemandes');
  }

  
  logout(){
    const user:any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer $(token)`,
    });

     return this.http.post(this.selectedFilterValue+'logout', {headers:headers})

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
      return this.http.post(this.selectedFilterValue+'register', data);
  }


  //accepter refuser la demande de compte:

  modifyStatus(id: number) {
    return this.http.put(this.selectedFilterValue+`/acceptDemandeCompte/${id}`, {} );
  }

  centre() {
 
    const centredata:any = localStorage.getItem('centredata');
    const userObj = JSON.parse(centredata);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.selectedFilterValue+'infrastructureCentre');
  }

  localité() {
 
    const localitedata:any = localStorage.getItem('localitedata');
    const userObj = JSON.parse(localitedata);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get(this.selectedFilterValue+'infrastructureLocalite');
  }

  unite() {
    
 
      const unitedata:any = localStorage.getItem('unitedata');
      const userObj = JSON.parse(unitedata);
  
      // const token = userObj.token;
      // const headers = new HttpHeaders({
      //   Authorization: `Bearer $(token)`,
      // });,{headers:headers}
      return this.http.get(this.selectedFilterValue+'infrastructureUnite');
    }
  
  
}
