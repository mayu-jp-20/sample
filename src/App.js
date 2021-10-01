import './App.css';
import { Grid } from '@material-ui/core';
import Left from './component/Left';
import Twitter from './component/Twitter';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputName:"",
      inputContents:"いまどうしてる？",
      agoTime:"",
      tweets:[{id:0,name:"mayu yoshida",inputTime:"02:00:00",favorite:false,content:"【宣言的なView】React は、インタラクティブなユーザインターフェイスの作成にともなう苦痛を取り除きます。アプリケーションの各状態に対応するシンプルな View を設計するだけで、React はデータの変更を検知し、関連するコンポーネントだけを効率的に更新、描画します。"},
              {id:1,name:"mayu yoshida",inputTime:"01:00:00",favorite:false,content:"【コンポーネントベース】自分自身の状態を管理するカプセル化されたコンポーネントをまず作成し、これらを組み合わせることで複雑なユーザインターフェイスを構築します。"},
              {id:2,name:"mayu yoshida",inputTime:"00:00:00",favorite:false,content:"【一度学習すればどこでも使える】React と組み合わせて使用する技術に制限はありません。React を使って新しい機能を追加する際に、既存のソースコードを書き換える必要はありません。"},
            ],
    }
    this.changeInputName=this.changeInputName.bind(this);
    this.changeInputContent=this.changeInputContent.bind(this);
    this.deleteTweet= this.deleteTweet.bind(this);
    this.handleFavorite=this.handleFavorite.bind(this);
  }

  handleClick(){
    const inputName = this.state.inputName;
    const inputContents = this.state.inputContents;
    const inputTime = new Date().toLocaleTimeString();
    const id = this.state.tweets.length;
    const tweet = {id:id,name:inputName,inputTime:inputTime,content:inputContents};
    const tweets = this.state.tweets.slice();
    tweets.unshift(tweet);
    this.setState({tweets:tweets});
  }

  handleFavorite(id){
    const tweets=this.state.tweets.slice();
    for(var i=0; i<tweets.length; i++){
      if(tweets[i].id===id){
        tweets[i].favorite=!tweets[i].favorite;
      }
    }
    this.setState({tweets:tweets});
}

  changeInputName(e){
    this.setState({inputName:e.target.value});
  }

  changeInputContent(e){
    this.setState({inputContents:e.target.value});
  }

  deleteTweet(id){
    const tweets=this.state.tweets.slice();
    for(var i=0; i<tweets.length; i++){
      if(tweets[i].id===id){
        tweets.splice(i,1);
      }
    }
    this.setState({tweets:tweets});
  }

  render(){
    return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Left onClick={()=>this.handleClick()} changeInputName={this.changeInputName} changeInputContent={this.changeInputContent} />
          </Grid>
          <Grid item xs={7}>
            <Twitter tweets={this.state.tweets} deleteTweet={this.deleteTweet} handleFavorite={this.handleFavorite}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
