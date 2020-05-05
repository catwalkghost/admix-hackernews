// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
//
//
// export class ListItem extends Component {
//
//     constructor(props){
//         super(props)
//
//         this.state = {
//             favorite: false
//         }
//     }
//
//     changeColor = () => {
//         if (!this.state.favorite) {
//             this.setState({ favorite: true });
//         } else {
//             this.setState({ favorite: false });
//         }
//     };
//
//     render() {
//         const favoriteItem = this.props.favoriteList.find(
//             (obj) => obj.title === this.props.title
//         );
//
//         let itemClass = null;
//         let commentCount = 0;
//
//         if (this.state.favorite || favoriteItem) {
//             itemClass = 'ItemFavorite';
//         } else {
//             itemClass = 'Item';
//         }
//
//         if (this.props.comments) {
//             commentCount = this.props.comments.length;
//         }
//
//         let commentLink = '0 comment';
//
//         if (this.props.comments) {
//             commentLink = (
//                 <Link
//                     to={{
//                         pathname: '/comments',
//                         search: `?story=${this.props.id}&author=${this.props.author}`
//                     }}
//                     onClick={() => this.props.commentList(this.props.id)}
//                     className={styles.Link}>
//                     {commentCount} comments{' '}
//                 </Link>
//             );
//         }
//
//         const time = this.props.time * 1000;
//         const date = new Date(time);
//         const timeFromNow = moment(date).fromNow();
//
//         return (
//             <div
//                 onClick={() => {
//                     this.changeColor();
//                     this.props.clicked();
//                 }}>
//                 <p>
//                     <a
//                         href={this.props.url}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         {this.props.title}
//                     </a>
//                 </p>
//                 <p>
//                     {this.props.score} | {this.props.author} | {timeFromNow} |{' '}
//                     {commentLink} |{' '}
//                     <a
//                         href={this.props.url}
//                         target="_blank"
//                         rel="noopener noreferrer">
//                         ({this.props.url})
//                     </a>
//                 </p>
//             </div>
//         );
//     }
// }
