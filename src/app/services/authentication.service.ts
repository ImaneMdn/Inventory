import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  constructor(private http:HttpClient) { }
  apiss = 'http://192.168.43.251:8000/api/';
  //http://localhost:8000/api/

  login(matricule:string, password:string): Observable<any> {
   return this.http.post<any>(this.apiss + 'login', {
    matricule: matricule,
    password: password
  }).pipe(
    tap(response => {
      const token = response.token;
      const userObj = { token: token };
      localStorage.setItem('user', JSON.stringify(userObj));
    })
  );
  //   const user:any = localStorage.getItem('user');
  //   const userObj = JSON.parse(user);
   
  //  return this.http.post(this.apiss+'login', {
  //     matricule:matricule,
  //     password:password
  //   });
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
    const userrole: any = localStorage.getItem('user');
    console.log('userrole', userrole); // Add this line to check the value of 'userrole'
  
    if (userrole) {
      const userObj = JSON.parse(userrole);
      console.log('object', userObj);
  
      const token = userObj.token;
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
      return this.http.get(this.apiss + 'role', { headers: headers });
    } else {
      console.log('Token not found in localStorage');
      // Handle the case when token is not found
      // For example, you can redirect the user to the login page or display an error message
      return throwError('Token not found in localStorage');
    }
  }
// getdemande() {
 
//     const userrole:any = localStorage.getItem('token');
//     const userObj = JSON.parse(userrole);
//     console.log('object', userObj);
    
//      const token = userObj.token;
//      const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`,
//     });
//   return this.http.get(this.apiss + 'role', { headers: headers });
//     //return this.http.get(this.apiss+'role');

//   }
 
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
    return this.http.get(this.apiss+'infrastructureCentre');
  }

  localité() {
 
    const localitedata:any = localStorage.getItem('localitedata');
    const userObj = JSON.parse(localitedata);
    return this.http.get(this.apiss+'infrastructureLocalite');
  }

  unite() {
    
 
      const unitedata:any = localStorage.getItem('unitedata');
      const userObj = JSON.parse(unitedata);
      return this.http.get(this.apiss+'infrastructureUnite');
    }

listeinventaire(){
  const userrole: any = localStorage.getItem('user');
  console.log('userrole', userrole); // Add this line to check the value of 'userrole'

  if (userrole) {
    const userObj = JSON.parse(userrole);
    console.log('object', userObj);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get(this.apiss + 'inventoryList', { headers: headers });
  } else {
    console.log('Token not found in localStorage');
    // Handle the case when token is not found
    // For example, you can redirect the user to the login page or display an error message
    return throwError('Token not found in localStorage');
  }
}
  
  
}
