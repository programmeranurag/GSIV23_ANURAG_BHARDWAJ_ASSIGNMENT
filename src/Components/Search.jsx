import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import './Search.css';

const Search = (title) => {
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const arr = [];
    let splitStr = suggestions.toString();

    // Convert the object title to an array
    var array = Object.keys(title)
    .map(function(key) {
        return title[key];
    });
    const onChangeHandler = (text) => {
        if (text.length>=0) {
            array.filter(titles => {
                const regex = new RegExp(text,'gi')
                titles.forEach(i => {
                    if (i.match(regex))
                    {
                        arr.push(i)
                        setSuggestions(arr);
                    }
                })
            })
            
            setText(text);
            
        }
        if (text.length==0)
        {
            setSuggestions('');
        }
        
    }

    const onSuggestHandler = (text) =>
    {
        setText(text);
        setSuggestions([]); 
    }

    return (
        <div className="main">
            <div className="search">
                <form className="search_form">
                    <SearchIcon className="searchBar_icon" />
                    <input
                    type="text"
                    placeholder="Search"
                    className="formInput"
                    onChange={(e) => onChangeHandler(e.target.value) }
                    value={text}
                    />
                </form>
            </div>
            <div className="home_icon">
                <HomeIcon  />
            </div>
            
                
                    <div className="search_suggestions" onClick={()=>onSuggestHandler(splitStr)} >
                        {splitStr = splitStr.split(",")}
                        
                        
                    </div>
                
        </div>
        
    )
}

export default Search
