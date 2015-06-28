// var React = require('react');
// var PostCollection = require('../collections/PostCollection');

// module.exports = React.creteClass({
// 	getInitialState: function(){
// 		var posts = new PostCollection();
// 		var self = this;

// 		posts.fetch({

// 			query:{
// 				category: 'js',
// 			},
// 			success: function(){
// 				self.forceUpdate();
// 				posts.on('add', function(){
// 					self.forceUpdate();
// 				});
// 			}
// 		});
		

			
// 		// posts.on('add', function(){
// 		// 	self.forceUpdate();
// 		// });

// 		return{
// 			posts: posts
// 		};
// 	},
// 	render: function() {
// 		var postEls = this.state.posts.map(function(postModel){
// 			return(
// 				<div key={postModel.cid}>
// 					<h3> {postModel.get('title')}</h3>
// 					<p>{postModel.get('body')}</p>
// 					<p>{postModel.}
// 				</div>
// 			);
// 		});
// 		return(
// 			<div className="row">
// 			{postEls}
// 			</div>
// 			);
// 	}
// });