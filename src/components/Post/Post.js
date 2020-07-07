import React from "react";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import PhotoImagePost from "./PhotoImagePost";
import IconPost from "./IconPost";
import CommentImageWrapper from './CommentImageWrapper';
import AddComment from './AddComment';

const PostWrapper = styled.div`
  height: 679px;
  width: 100%;
  max-width: 614px;
  height: 1063px;

  @media screen and (min-width: 640px) {
    border: 1px solid grey;
    border-radius: 3px;
    margin-top: 15px;
    width: 600px;
    height: 318.66;
  }
  @media screen and (min-width: 1000px) {
    width: 614px;
    height: 1063px;
  }
`;

const Post = () => {
  return (
    <PostWrapper>
      <PostHeader />
      <PhotoImagePost />
      <IconPost />
      <CommentImageWrapper />
      <AddComment />
    </PostWrapper>
  );
};

export default Post;

//  align-items: stretch;
//   border: 0 solid #000;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: column;
//   flex-shrink: 0;
//   margin: 0;
//   padding: 0;

// @media screen and (max-width: 601px) {
//     width: 200px;
//   }
