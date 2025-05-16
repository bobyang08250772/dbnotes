import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, onSnapshot, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  // unsubList;
  // unsubSingle;
  items$;

  firestore: Firestore = inject(Firestore);

  constructor() { 
    console.log(111);

    // itemCollection = collection(this.getNormalNoteRef());
    // item$ = collectionData<Note>(itemCollection);
    
    // this.unsubList = onSnapshot(this.getNormalNoteRef)
    this.items$ = collectionData(this.getNormalNoteRef());
    console.log(this.items$);

  }

  getTrashRef(){
    return collection(this.firestore, 'trash');
  }

  getNormalNoteRef() {
    return collection(this.firestore, 'notes');
  }
  
   getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
   }
}
