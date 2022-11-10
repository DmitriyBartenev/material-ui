

const Search = (props) => {
    
    const { onChange, value } = props;

    return(
        <input type='search' onChange={onChange} value={value}/>
    )
}

export default Search;