import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAuthor_name, chooseBook_length, chooseBook_title, chooseHc_pb, chooseIsbn} from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[]
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseAuthor_name(data.author_name));
      dispatch(chooseBook_length(data.book_length));
      dispatch(chooseBook_title(data.book_title));
      dispatch(chooseHc_pb(data.hc_pb));
      dispatch(chooseIsbn(data.isbn));

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="author_name">Author Name</label>
          <Input {...register('author_name')} name='author_name' placeholder="Author Name" />
        </div>
        <div>
          <label htmlFor="book_length">Book Length</label>
          <Input {...register('book_length')} name='book_length' placeholder="Book Length" />
        </div>
        <div>
          <label htmlFor="book_title">Book Title</label>
          <Input {...register('book_title')} name='book_title' placeholder="Book Title" />
        </div>
        <div>
          <label htmlFor="hc_pb">Hard cover/Paperback</label>
          <Input {...register('hc_pb')} name='hc_pb' placeholder="Hard cover/Paperback" />
        </div>
        <div>
          <label htmlFor="isbn">ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder="ISBN" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm