import React, {useState, useEffect} from 'react'
import Card from '../Card/Card';
import './Dashboard.css'

export default function Dashboard() {
    const [news,setNews] = useState([]);
    const [searchType, setSearchType] = useState()
    const [searchKey,setSearchKey] = useState();
    const [countries,] = useState(['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'])
    const [categories,] = useState(['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology',])
    useEffect(()=>{
        // console.log(`${searchKey}`)
        searchKey != null && searchType === 'category'?
        // console.log(`${searchKey}`)
        fetch(`https://newsapi.org/v2/top-headlines?category=${searchKey}&apikey=ec49db602d1d4cc28ae13bae35103d76&page=1`)
        .then((response) => response.json())
        .then((json) => setNews(json.articles))
        : searchKey != null && searchType === 'country'?
        fetch(`https://newsapi.org/v2/top-headlines?country=${searchKey}&apikey=ec49db602d1d4cc28ae13bae35103d76&page=1`)
        .then((response) => response.json())
        .then((json) => setNews(json.articles))
        :searchKey != null && searchType === 'random'?
        fetch(`https://newsapi.org/v2/everything?q=${searchKey}&apiKey=ec49db602d1d4cc28ae13bae35103d76&language=en&page=1`)
        .then((response) => response.json())
        .then((json) => setNews(json.articles)):
        console.log('Try Searching');
        return}
    );
    const CategorySearchHandler = ()=>{
        // console.log(document.getElementById('search').value);
        setSearchKey(document.getElementById('Categorysearch').value);
        setSearchType('category');
    }
    const CountrySearchHandler = ()=>{
        setSearchKey(document.getElementById('CountrySearch').value)
        setSearchType('country');
    }
    const RandomSearchHandler = ()=>{
        setSearchKey(document.getElementById('RandomSearch').value)
        setSearchType('random');
    }

    return (
        <div className='d-flex flex-column m-auto align-items-center'>
            <div className='d-flex justify-content-around w-100'>
                <div className='d-flex flex-column m-auto align-items-center'>
                    <label for='Categorysearch' style={{marginTop:'80px', fontSize:'xx-large', fontWeight:'bold'}}>Category Wise</label><br/>
                    <select id='Categorysearch' name='Categorysearch' class="btn btn-secondary btn-lg dropdown-toggle">
                        {
                            categories.map((item,i) =>
                            <option value={item}>{item}</option>
                            )
                        }
                    </select>
                    <button class="btn btn-info" onClick={CategorySearchHandler} style={{width:'fit-content', marginTop:'20px'}}>Search</button>
                </div>
                <div className='d-flex flex-column m-auto align-items-center'>
                    <label for='CountrySearch' style={{marginTop:'80px', fontSize:'xx-large', fontWeight:'bold'}}>Country Wise</label><br/>
                    <select id='CountrySearch' name='CountrySearch' class="btn btn-secondary btn-lg dropdown-toggle">
                        {
                            countries.map((item,i) =>
                            <option value={item}>{item}</option>
                            )
                        }
                    </select>
                    <button class="btn btn-info" onClick={CountrySearchHandler} style={{width:'fit-content', marginTop:'20px'}}>Search</button>
                </div>
                <div className='d-flex flex-column m-auto align-items-center'>
                    <label for='RandomSearch' style={{marginTop:'80px', fontSize:'xx-large', fontWeight:'bold'}}>Key to be Searched</label><br/>
                    <input id='RandomSearch' name='RandomSearch'/>
                    <button class="btn btn-info" onClick={RandomSearchHandler} style={{width:'fit-content', marginTop:'20px'}}>Search</button>
                </div>
            </div>
            {/* <label for='search' style={{marginTop:'80px', fontSize:'xx-large', fontWeight:'bold'}}>What news you want today!!!</label><br/>
            <select id='search' name='search' class="btn btn-secondary btn-lg dropdown-toggle">
                {
                    categories.map((item,i) =>
                    <option value={item}>{item}</option>
                    )
                }
            </select>
            <button class="btn btn-info" onClick={SearchHandler} style={{width:'fit-content', marginTop:'20px'}}>Search</button> */}
            {
                searchKey != null?
                <h1 className='search-heading mb-1 mt-5 text-capitalize' style={{fontSize:'xx-large', fontWeight:'bolder'}}>{searchKey} Updates</h1>
                : null
            }
            <div className='card-columns m-5 p-2'>
                { 
                    //   news.map((item)=>console.log(item.author))
                        // console.log(news.status)
                    news != null? news.map((item) =>
                                <Card news={item}/>
                            ) : null
                }
            </div>
        </div>
    )
}
