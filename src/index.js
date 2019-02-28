import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import  Avatar  from './Avatar';


function Message({text}){
    return(
        <div className="message">
       {text}
        </div>
    );
}

function NameWithHandle({author}){
    const {name, handle } = author;
    return(
    <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
    </span>
    );
}

const Time = ({time}) =>{
    const timestamp = moment(time).fromNow();
    return (<span className = "time">{timestamp}</span>);
};


const ReplyButton =() =>(
    <i className="fa fa-reply reply-button"/>
 );
 
 function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className="retweet-count">
            {count}
            </span>
        );
    } else {
        return null;
    }
 }
 
 const ReTweetButton =({count}) =>(
     <span className = "retweet-button">
     <i className="fa fa-retweet retweet-button"/>
     {getRetweetCount(count)}
     </span>
 );
 
 const LikeButton =({count}) =>(
     <span className="like-button">
    <i className="fa fa-heart retweet-button"/>
    {count> 0 && <span className ="like-count">
        {count};
    </span>}
     </span>
 );
 const MoreOptionButton =() =>(
    <i className="fa fa-ellipsis-h more-options-button"/>
 );


//  var testTweet = {
//      message: "Something is going on in this world.",
//      gravatar: "xyz",
//      author: {
//         handle: "person",
//         name: ""
//      },
//      likes:2,
//      retweets: 6,
//      timestamp: "2018-02-27 12:24:37"
//  };

const testTweet = [
    {   
        id: 1,
        message: "Something is going on in this world.",
        gravatar: "xyz",
        author: {
           handle: "person",
           name: ""
        },
        likes:2,
        retweets: 6,
        timestamp: "2018-02-27 12:24:37"
    },
    {   
        id: 2,
        message: "Something is going on in this world.",
        gravatar: "xyz",
        author: {
           handle: "person",
           name: ""
        },
        likes:2,
        retweets: 6,
        timestamp: "2018-02-27 12:24:37"
    },
    {   
        id: 3,
        message: "Something is going on in this world.",
        gravatar: "xyz",
        author: {
           handle: "person",
           name: ""
        },
        likes:2,
        retweets: 6,
        timestamp: "2018-02-27 12:24:37"
    },
];

// function Tweet({tweet}){
//     return (
//         <div className="tweet">
//             <Avatar hash={tweet.gravatar}/>
//             <div className="content">
//             <NameWithHandle author={tweet.author}/>
//             <Time time = {tweet.timestamp}/>
//             <Message text = {tweet.message}/>
//             <div className= "buttons">
//                 <ReplyButton/>
//                 <ReTweetButton count={tweet.retweets}/>
//                 <LikeButton count ={tweet.likes}/>
//                 <MoreOptionButton/>
//             </div>
//             </div>
//         </div>
//     )
// }

// function Tweet ({tweets}){
//     return(
//         <div className="tweet">
//             {tweets.map( (tweet) =>
//              <div className= "content">
//                 <Avatar hash={tweet.gravatar}/>
//                 <NameWithHandle author={tweet.author}/>
//                 <Time time = {tweet.timestamp}/>
//                 <Message text = {tweet.message}/>
//                 <div className= "buttons">
//                 <ReplyButton/>
//                 <ReTweetButton count={tweet.retweets}/>
//                 <LikeButton count ={tweet.likes}/>
//                 <MoreOptionButton/>
//                 </div>
//             </div>
//             )}
//         </div>
//     );
// }

function Tweet({tweets}) {
    return (
      <div className="container">
        {tweets.map(( tweet )=> 
        <div className="tweet">
          <Avatar hash={tweet.gravatar}/>
            <NameWithHandle author={tweet.author} />
            <Time time={tweet.timestamp} />
            <Message text={tweet.message} />
            <div className="buttons">
              <ReplyButton />
              <ReTweetButton count={tweet.retweets} />
              <LikeButton count={tweet.likes} />
              <MoreOptionButton />
            </div>
          </div>
        )}
      </div>
    );
  }
ReactDOM.render(<Tweet tweets={testTweet} />, document.getElementById('root'));
