import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Response } from '@angular/http';

@Injectable()
export class DatabaseService {

  constructor(private afdb: AngularFireDatabase) { }
  createMessage(){
    //this.afdb.list('/messages').push();
  }
}
