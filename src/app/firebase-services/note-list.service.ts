import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc,onSnapshot, CollectionReference, QuerySnapshot, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  item$;
  items;
  // unsubList;
  firestore: Firestore = inject(Firestore);

  constructor() { 
    // this.unsubList = onSnapshot(
    //   this.getNormalNoteRef(),
    //   (list) => {
    //     list.forEach(e => {
    //       console.log(e);
          
    //     })
    //   }
    // );

    this.item$ = collectionData(this.getNormalNoteRef());
    console.log(this.item$);
    this.items = this.item$.subscribe((list)=>{
      list.forEach(e => {
        console.log(e);
      })
    })
    
  }

  getNormalNoteRef() {
    return collection(this.firestore, 'notes');
  }

  getTrashRef(){
    return collection(this.firestore, 'trash');
  }

  
  
   getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
   }
}
