import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc, onSnapshot, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.interface';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  trashNotes: Note[] = [];
  normalNotes: Note[] = [];

  unsubList;
  // unsubSingle;
  // items$;

  firestore: Firestore = inject(Firestore);

  constructor() { 
    this.unsubList = onSnapshot(
      this.getNormalNoteRef(),
      (snapshot: QuerySnapshot<DocumentData>) => {
        this.normalNotes = snapshot.docs.map(doc => ({
          title: doc.id,
        })) as Note[];

        console.log(this.normalNotes);
      }
    );

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
