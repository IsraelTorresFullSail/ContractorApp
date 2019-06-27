import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  private taskCollection: AngularFirestoreCollection<any>;
  tasks: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.taskCollection = afs.collection<any>('tasks');
    this.tasks = this.taskCollection.snapshotChanges().pipe(map(
      actions => actions.map( a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    ));
   }

  getTask() {
    return this.tasks;
  }
  updateTask(task: any) {
    return this.taskCollection.doc(task.id).update(task);
  }
  // updateTaskItem(task: any) {
  //   return this.taskCollection.doc(task.id).update({
  //     'taskItems': task
  //   });
  // }
  updateTaskItem(task: any) {
    return this.taskCollection.doc(task.id).update({'taskItems.0': task}); // TODO: Update an specific index value of this array
  }
  deleteTask(id: string) {
    return this.taskCollection.doc(id).delete();
  }
  createTask(task: any) {
    return this.taskCollection.add(task);
  }

}
