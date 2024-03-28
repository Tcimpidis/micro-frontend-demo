import {fetchFromAuthorizedSource} from 'app1/unsafeFetch';

export const FetchedFromRemote = () => {
    const {name, id, date, data} = fetchFromAuthorizedSource();
    return (
        <div>
            <h1>This is neat I am using my remotes data!</h1>
            <div>
                <label>name: </label>
                <span>{name}</span>
            </div>
            <div>
                <label>id: </label>
                <span>{id}</span>
            </div>
            <div>
                <label>date: </label>
                <span>{date.toDateString()}</span>
            </div>
            <div>
                <label>data: </label>
                <span>{data}</span>
            </div>

            <h3>Actually No! This is a security risk</h3>
        </div>
    )
}