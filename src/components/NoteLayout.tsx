import { Navigate, Outlet, useOutletContext } from "react-router-dom"
import { Note } from "../App"
import { useParams } from "react-router-dom"

type NoteLayoutProps={
    notes: Note[]
}

function NotesLayout({notes}:NoteLayoutProps){
    const {id} = useParams()
    const note = notes.find(n => n.id ===id)
    if(note==null) return <Navigate to='/' replace/>

    return <Outlet context={note}/>

}

export default NotesLayout

export function useNote() {
    return useOutletContext<Note>()
}