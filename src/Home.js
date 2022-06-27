



const Home = ({name, change}) => {
    return (

        <div className='container'>
            <div className='home'>
                <input type="text" onChange={change} />
                <h1>  {name}</h1>
            </div>
        </div>
    )
}

export default Home