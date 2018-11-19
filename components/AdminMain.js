import React, { Component } from "react";
import Textarea from "react-textarea-autosize";

import AdminPostsList from "./AdminPostsList";
import AdminTagsList from "./AdminTagsList";

class AdminMain extends Component {
  state = {
    showBackup: false
  };

  renderBackup() {
    const { showBackup } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ showBackup: !showBackup })}>
          {showBackup ? "Hide" : "Show"} backup
        </button>
        {showBackup ? (
          <Textarea
            value={JSON.stringify(
              this.props.posts.map(post => {
                let modifiedPost = {
                  ...post,
                  tags: post.tags.map(tag => tag.title)
                };

                delete modifiedPost["mapped_related_posts_tags"];

                return modifiedPost;
              })
            )}
          />
        ) : null}
      </div>
    );
  }

  render() {
    const {
      headers,
      onFetchPostsTags,
      onSetPost,
      onSetTag,
      posts,
      postsBySlug,
      tags
    } = this.props;

    return (
      <div>
        {this.renderBackup()}

        <div className="admin__lists">
          <AdminPostsList
            headers={headers}
            onFetchPostsTags={onFetchPostsTags}
            onSetPost={onSetPost}
            posts={posts}
            postsBySlug={postsBySlug}
            tags={tags}
          />
          <AdminTagsList headers={headers} onSetTag={onSetTag} tags={tags} />
        </div>
      </div>
    );
  }
}

export default AdminMain;
