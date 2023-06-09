import * as React from "react";
import {ChangeEvent, useState} from "react";

type Story = {
    objectID: number;
    url: string;
    title: string;
    author: string;
    num_comments: number;
    points: number;
};

type Stories = Story[]

const App = () => {
    console.log('App renders')
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];

    const [searchTerm, setSearchTerm] = useState('React');
    console.log('searchTerm =', searchTerm)

    const searchedStories = stories.filter(story =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('handle search in App', event.target.value)
        setSearchTerm(event.target.value);
    };

    return <div>
        <h1>My Hacker Stories</h1>

        <Search search={searchTerm} onSearch={handleSearch}/>

        <hr/>

        <List list={searchedStories}/>

        <hr/>

    </div>;
};

type SearchProps = {
    search: string
    onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({onSearch, search}: SearchProps) => {
    console.log('Search renders')
    return <div>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" value={search} onChange={onSearch}/>
    </div>;
};

type ListProps = {
    list: Stories;
};

const List = ({list}: ListProps) => {
    console.log('List renders')
    return <ul>
        {list.map((item) => <Item key={item.objectID} item={item}/>)}
    </ul>;
};

type ItemProps = {
    item: Story
};

const Item = ({item}: ItemProps) => {
    console.log('Item renders')
    return (

        <li>
            <span>
                <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </li>
    );
};

export default App;