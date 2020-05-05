// import React from 'react';
//
// import * as f from 'fpx'
//
// import * as lit from './list-item';
//
// export class List extends React.Component {
//     render({props: {items}}) {
//         return (
//             <div>
//                 {f.map(items,item => {
//                     return (
//                         <lit.ListItem
//                             key={item.id}
//                             id={item.id}
//                             title={item.title}
//                             score={item.score}
//                             url={item.url}
//                             author={item.by}
//                             time={item.time}
//                             comments={item.kids}
//                             clicked={() => this.props.favorites(item.id)}
//                             favoriteList={this.props.favoriteList}
//                             commentList={() => this.props.commentList(item.kids)} />
//                     );
//                 })}
//             </div>
//         );
//     }
// }