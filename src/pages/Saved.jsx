import { useSelector,useDispatch} from 'react-redux'
import { removeAction } from '../store/actions/remove-action';



export default function Saved() {
    // const inputRedux = useSelector(state => state.store)
    const savedRedux = useSelector(state => state.saved.store)
    const dispatch = useDispatch()
    return (
        <div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        savedRedux.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <p>{item.source}</p>
                                        <a className='text-primary' onClick={() => window.open(item.web_url, '_blank')}>More...</a>
                                    </td>
                                    <td>{item.headline.main}</td>
                                    <td>
                                        {item.abstract}
                                        <button className='btn btn-danger btn-sm ms-3' onClick={() => dispatch(removeAction(item))}>Remove This Article</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
